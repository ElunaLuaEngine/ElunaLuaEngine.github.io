local function GenerateDoc(event, player, command)
if (command ~= "gendoc") then
    return
end

local source = "E:/Cores/Eluna/trin_wotlk/source/src/LuaEngine"
local lua_scripts = "E:/Cores/Eluna/Scripts"
local output = "doc"

print()
print("Generating Eluna documentation..")

local function EscapeReplacer(str)
    str = str:gsub("([%%])", "%%%1");
    return str
end
local function EscapeReplaced(str)
    str = str:gsub("([%^%$%(%)%%%.%[%]%*%+%-%?])", "%%%1")
    return str
end

local function scandir(path, files)
    local f = io.popen('dir "'..path..'" /b')
    if (not f) then return files end
    
    for name in f:lines() do
        if (name:find("%.")) then
            table.insert(files, path.."/"..name)
        else
            scandir(path.."/"..name, files)
        end
    end
    f:close()
    return files
end

local noerror = true
local function err(statement, ...)
    if (statement) then
        return false
    end
    noerror = false
    print(...)
    return true
end

local function Trim(str)
    if not str then error("no str", 2) end
    return str:match("[%s\n]*(.*)"):reverse():match("[%s\n]*(.*)"):reverse()
end

local function StripComments(str)
    str = str:gsub("///+", '\1'):gsub("//[^\n]*", ''):gsub("\1", '///')
    str = str:gsub("/%*%*/", ''):gsub("/%*%*", '\1')
    while (true) do
        local i, _ = str:find("/%*")
        if (not i) then break end
        local _, j = str:find("%*/", i)
        if (not j) then break end
        str = str:sub(1, i-1)..str:sub(j+1)
    end
    str = str:gsub('\1', "/**")
    return str
end

local function StripHash(str)
    return str:gsub("\n#[^\n]*", ''):gsub("^#[^\n]*", '')
end

local function ParseDocs(str)
    local docs = {}
    local i = 1
    local j = 1
    while (true) do
        _, i = str:find("/%*%*", j)
        if (i == nil) then break end
        j, _ = str:find("%*/", i)
        if (j == nil) then break end
        local dstr = str:sub(i+1, j-1)
        dstr = dstr:gsub("\n%s*%* ?", "\n")
        table.insert(docs, Trim(dstr))
    end
    return docs
end

local function OpenFile(path)
    local f = assert(io.open(path, "r"))
    local str = f:read("*all")
    f:close()
    return str
end

local function GetLines(path)
    local t = {}
    local f = assert(io.open(path, "r"))
    for line in f:lines() do
        table.insert(t, line)
    end
    f:close()
    return t
end

local function WriteFile(filename, str)
    local f = assert(io.open(output..filename, "w"))
    f:write(str)
    f:close()
end

if (source:find("^.*/$") ~= 1) then
    source = source.."/"
end
if (output:find("^.*/$") ~= 1) then
    output = output.."/"
end
lua_scripts:gsub("/?\\?$", '')

local T = {
    Files = {}, -- Files[filename] = filecontents
    Namespaces = {}, -- Namespaces[namespace] = {TypeName = TypeName, MethodTable = MethodTableName, file = filename, methods = {[cfuncname] = {brief = brief, doc = documentation, body = cfuncbody, origdoc = originaldoc, docs = {shared = {doc}, funcs = {params = {params}, returns = {returns}, doc = doc}}}}}
    Types = {}, -- Types[Type] = {name = TypeName, inherits = {MethodTableName}}
    MethodRelation = {}, -- MethodRelation[MethodTableName] = namespace
}

print("Loading files and locating namespaces..")

T.Files.LuaFunctions = OpenFile(source.."LuaFunctions.cpp")
for l in T.Files.LuaFunctions:match("Method includes.*"):gmatch('#include "(.-)"') do
    local filename = l:gsub('"', '')
    T.Files[filename] = StripHash(StripComments(OpenFile(source..l)))
    local namespace = T.Files[filename]:match(".-namespace ([%w_]+)")
    if (namespace) then
        T.Namespaces[namespace] = {file = filename, methods = {}}
    end
end
T.Files.LuaFunctions = StripComments(T.Files.LuaFunctions)

T.Files.lua_scripts = {}
for k,v in ipairs(scandir(lua_scripts, {})) do
    local _, j = v:find("%.lua")
    local _, h = v:find("%.ext")
    if (h == v:len() or j == v:len()) then
        local t = GetLines(v)
        table.insert(T.Files.lua_scripts, {lines = t, path = v:gsub("^"..lua_scripts, "")})
    end
end

print("Finding method inherits..")

local Type
local TypeName
for l in T.Files.LuaFunctions:match("RegisterFunctions(.*)"):gmatch("ElunaTemplate[^\n]+") do
    local t, r, n = l:match('ElunaTemplate<([%w_]+)>::([%w_]+)%(L, (.-)%);')
    if (r == "Register") then
        Type = t
        TypeName = n:match('"(.*)"')
        T.Types[Type] = {name = TypeName, inherits = {}}
    elseif (r == "SetMethods") then
        err(Type == t, "Type swapped in the middle of setting methods", t, r, n, Type, Typename)
        err(T.Types[Type], "T.Types["..Type.."] doesnt exist", t, r, n, Type, TypeName)
        table.insert(T.Types[Type].inherits, n)
        if (not T.MethodRelation[n]) then
            local namespace = T.Files.LuaFunctions:match(n.."%[%](.*)"):match("&([%w_]+).*")
            if (namespace) then
                err(T.Namespaces[namespace], "Couldnt find T.Namespaces["..namespace.."]")
                -- err(T.Namespaces[namespace].MethodTable and T.Namespaces[namespace].MethodTable ~= n, "T.Namespaces["..namespace.."].MethodTable already set to different", T.Namespaces[namespace].MethodTable, n)
                T.MethodRelation[n] = namespace
                T.Namespaces[namespace].MethodTable = n
                T.Namespaces[namespace].TypeName = TypeName
            else
                print(false, TypeName, "has no methods!", t, r, n)
            end
        end
    else
        err(false, "Unknown command", "RegisterFunctions", t, r, n)
    end
end

print("Finding function and method binds..")

for l in T.Files.LuaFunctions:gmatch("[^\n]+") do
    local name, namespace, cfunc, rest = l:gsub('%s', ''):match('.*"([%w_]+)",&([%w_]+)::([%w_]+)(.*)')
    if (name) then
        if (not err(name == cfunc, "function name doesnt match cfunction name:", name, cfunc, namespace)) then
            if (not err(T.Namespaces[namespace], "Cant find namespace", namespace)) then
                if (not err(not T.Namespaces[namespace].methods[name], "Duplicate function", name, namespace)) then
                    local brief = rest:match("///(.*)")
                    if (brief) then
                        brief = Trim(brief)
                    end
                    T.Namespaces[namespace].methods[cfunc] = {brief = brief, docs = {shared = {}, funcs = {params = {}, returns = {}}, examples = {}}}
                end
            end
        end
    end
end

print("Parsing function definitions and documentation..")

for namespace, tbl in pairs(T.Namespaces) do
    for doc, name, body in T.Files[tbl.file]:match("{(.*)"):gmatch("(.-)int%s+([%w_]+)%s*%b()[^{]*(%b{})") do
        if (not err(tbl.methods[name], "function binding not found, but has body", name, namespace)) then
            doc = Trim(doc)
            tbl.methods[name].origdoc = doc
            tbl.methods[name].body = body
            tbl.methods[name].doc = Trim(doc:gsub("///", ''):gsub("/%*%*", ''):gsub("%*/", ''))
            -- tbl.methods[name].docs = {shared = {}, funcs = {}}
            for k,v in ipairs(ParseDocs(doc)) do
                local shared = false -- should be true
                local params = {}
                local returns = {}
                for cmd, data in v:gmatch("(@%w+)([^@]*)") do
                    if (cmd == "@empty") then
                        shared = false
                    elseif (cmd == "@param") then
                        local i, j = data:find(":")
                        local a, b = data
                        if (i) then
                            a = data:sub(1, i-1)
                            b = data:sub(j+1)
                        end
                        table.insert(params, {Trim(a), b and Trim(b)})
                        shared = false
                    elseif (cmd == "@return") then
                        local i, j = data:find(":")
                        local a, b = data
                        if (i) then
                            a = data:sub(1, i-1)
                            b = data:sub(j+1)
                        end
                        table.insert(returns, {Trim(a), b and Trim(b)})
                        shared = false
                    else
                        err(false, "Unknown cmd for documentation for", name, cmd)
                    end
                end
                if (shared) then
                    table.insert(tbl.methods[name].docs.shared, v)
                else
        -- print(#params, #returns, Trim(v:match("^([^@]*).*")))
                    -- table.insert(tbl.methods[name].docs.funcs, {params = params, returns = returns, doc = Trim(v:match("^([^@]*).*"))})
                    tbl.methods[name].docs.funcs = {params = params, returns = returns, doc = Trim(v:match("^([^@]*).*"))}
                end
            end
        end
    end
end

print("Finding examples from lua files..")

do
end

if (not noerror) then
    print("Errors occurred, aborting!\nEluna doc not created\n")
    return false
end

print("Generating doc from data..")

local sortedn = {}
local sortedf = {}
for k,v in pairs(T.Namespaces) do
    table.insert(sortedn, k)
    sortedf[k] = {}
    for k1,v1 in pairs(v.methods) do
        table.insert(sortedf[k], k1)
    end
    table.sort(sortedf[k])
end
table.sort(sortedn)

do

local web_temp = [[
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css" media="screen">
        <script src="jquery.js"></script>
        <script src="fastLiveFilter.js"></script>
        <script src="jquery.hideseek.min.js"></script>
        <script>
            $(function() {
                $('#filterFunctionInput').hideseek({
                    highlight: true
                });
            });
        </script>
        <script>
            $(function() {
                var page = document.URL.match(/page=(\w+)/);
                if (!page) {
                    page = "Home";
                } else {
                    page = page[1].replace(/%20/g,"_");
                }
                $(".active").removeClass("active");
                $("#" + page).addClass("active");
                $("." + page + "_active").addClass("active");
                page = page.replace(/_/g,":");
                document.title = page + " | Eluna Documentation";
            });
        </script>
    </head>
    <body>
        <div id="Search">
            <input id="filterFunctionInput" name="search-highlight" placeholder="Filter function" data-list=".filterFunctionList" autocomplete="off" type="text">
            <ul class="filterTypeList">
_SEARCHLIST_
            </ul>
            <div class="space"></div>
        </div>
        <div id="content">
_CONTENT_
            <div class="space"></div>
        </div>
    </body>
</html>
]]

local MethodParts = {
[[
<h1 id="Description">Description</h1>
<div>
_DESCRIPTION_
</div>
]],
[[
<h1 id="Syntax">Syntax</h1>
<div>
_SYNTAX_
</div>
]],
[[
<h1 id="Arguments">Arguments</h1>
<div>
_ARGUMENTS_
</div>
]],
[[
<h1 id="Returns">Returns</h1>
<div>
_RETURNS_
</div>
]],
[[
<h1 id="Example">Example</h1>
<div>
_EXAMPLES_
</div>
]],
}

local MethodTemp = [[
<div id="_TYPENAME___FUNCNAME_" class="func doc">
    <h1>_TYPENAME_:_FUNCNAME_</h1>
_DESCRIPTION_
_SYNTAX_
_ARGUMENTS_
_RETURNS_
_EXAMPLES_
</div>
]]

local gMethodTemp = [[
<div id="_TYPENAME___FUNCNAME_" class="func doc">
    <h1>_FUNCNAME_</h1>
_DESCRIPTION_
_SYNTAX_
_ARGUMENTS_
_RETURNS_
_EXAMPLES_
</div>
]]

local IndexParts = {
[[
<h1 id="Inherits">Inherits</h1>
<div class="linklist">
_INHERITS_
</div>
]],
[[
<h1 id="InheritedBy">Inherited by</h1>
<div class="linklist">
_INHERITEDBY_
</div>
]],
[[
<h1 id="Methods">Methods</h1>
<div class="linklist">
_METHODS_
</div>
]],
}

local IndexTemp = [[
<div id="_TYPENAME_" class="type doc">
    <h1>_TYPENAME_</h1>
_INHERITS_
_INHERITEDBY_
_METHODS_
    <div class="space"></div>
</div>
]]

local varTemp = [[
<div class="pblock">
<div class="pname">%s</div>
<div class="pdoc">
%s
</div>
</div>
]]

local exampleTemp = [[
<div>
<a href="https://github.com/ElunaLuaEngine/Scripts/blob/master%s#L%i">See source</a>
<pre>
%s
</pre>
</div>
]]

    local funcformat = "%s %s:%s(%s)"
    local gfuncformat = "%s %s(%s)"
    local Files = {}
    for _, namespace in ipairs(sortedn) do
        local TypeName = T.Namespaces[namespace].TypeName or "Global"
        local notglobal = T.Namespaces[namespace].TypeName
        for _, funcname in ipairs(sortedf[namespace]) do
            -- for _, tbl in ipairs(T.Namespaces[namespace].methods[funcname].docs.funcs) do
            -- end
            local tbl = T.Namespaces[namespace].methods[funcname].docs.funcs
            
            local rr = {}
            local returnDoc = ""
            for k,v in ipairs(tbl.returns) do
                table.insert(rr, v[1])
                returnDoc = returnDoc..string.format(varTemp, v[1], v[2] or "")
            end
            local returns = table.concat(rr, ", ")
            if (returns == "") then returns = "nil" end
            
            local pp = {}
            local paramDoc = ""
            for k,v in ipairs(tbl.params) do
                table.insert(pp, v[1])
                paramDoc = paramDoc..string.format(varTemp, v[1], v[2] or "")
            end
            local params = table.concat(pp, ", ")
            
            local syntax
            if (notglobal) then
                syntax = funcformat:format(returns, TypeName, funcname, params)
            else
                syntax = gfuncformat:format(returns, funcname, params)
            end
            local description = tbl.doc ~= "" and tbl.doc or T.Namespaces[namespace].methods[funcname].brief or ""
            
            local examples = {}
            for _,luascr in ipairs(T.Files.lua_scripts) do
                for line, str in ipairs(luascr.lines) do
                    local i,j
                    if (notglobal) then
                        i,j = str:find(":"..funcname.."%(")
                    else
                        i,j = str:find("[^:]"..funcname.."%(")
                        if(not i) then
                            i,j = str:find("^"..funcname.."%(")
                        end
                    end
                    if (i) then
                        local t = {}
                        for i = math.max(line-2, 1), math.min(line+2, #luascr.lines) do
                            table.insert(t, luascr.lines[i])
                        end
                        table.insert(examples, {table.concat(t, "\n"), luascr.path, line})
                    end
                end
            end
            
            local examplestr = ""
            for k,v in ipairs(examples) do
                examplestr = examplestr..string.format(exampleTemp, v[2], v[3], v[1])
                if (k >= 3) then break end
            end
            
            local contents = MethodTemp
            if (notglobal) then
                contents = MethodTemp
            else
                contents = gMethodTemp
            end
            contents = contents:gsub("_DESCRIPTION_", description == "" and description or EscapeReplacer(MethodParts[1]:gsub("_DESCRIPTION_", EscapeReplacer(description))))
            contents = contents:gsub("_SYNTAX_", syntax == "" and syntax or EscapeReplacer(MethodParts[2]:gsub("_SYNTAX_", EscapeReplacer(syntax))))
            contents = contents:gsub("_ARGUMENTS_", paramDoc == "" and paramDoc or EscapeReplacer(MethodParts[3]:gsub("_ARGUMENTS_", EscapeReplacer(paramDoc))))
            contents = contents:gsub("_RETURNS_", returnDoc == "" and returnDoc or EscapeReplacer(MethodParts[4]:gsub("_RETURNS_", EscapeReplacer(returnDoc))))
            contents = contents:gsub("_EXAMPLES_", examplestr == "" and examplestr or EscapeReplacer(MethodParts[5]:gsub("_EXAMPLES_", EscapeReplacer(examplestr))))
            
            contents = contents:gsub("_FUNCNAME_", funcname)
            contents = contents:gsub("_TYPENAME_", TypeName)
            
            table.insert(Files, contents)
        end
    end
    
    local methodformat = '<a href="?page=_TYPENAME___FUNCNAME_">_FUNCNAME_</a>'
    local inheritformat = '<a href="?page=_TYPENAME_">_TYPENAME_</a>'
    
    local searchbar = ""
    for _, namespace in ipairs(sortedn) do
        local TypeName = T.Namespaces[namespace].TypeName or "Global"
        
        searchbar = searchbar..'<li class="type">'
        searchbar = searchbar..inheritformat 
        searchbar = searchbar..'<ul class="filterFunctionList">'
        for _, funcname in ipairs(sortedf[namespace]) do
            searchbar = searchbar..("<li class='function'>"..(methodformat:gsub("_FUNCNAME_", funcname)).."</li>")
        end
        searchbar = searchbar..'</ul></li>'
        searchbar = searchbar:gsub("_TYPENAME_", TypeName)
    end
    
    for _, namespace in ipairs(sortedn) do
        local TypeName = T.Namespaces[namespace].TypeName or "Global"
        
        local inherits = ""
        if (T.Types[TypeName]) then
            for k,v in ipairs(T.Types[TypeName].inherits) do
                local inheritnamespace = T.MethodRelation[v]
                if (inheritnamespace ~= namespace) then
                    local inheritname = T.Namespaces[inheritnamespace].TypeName
                    inherits = inherits..(inheritformat:gsub("_TYPENAME_", inheritname))
                end
            end
        end
        
        local inheritedby = ""
        for o, d in pairs(T.Types) do
            for k,v in ipairs(T.Types[o].inherits) do
                local inheritnamespace = T.MethodRelation[v]
                if (inheritnamespace == namespace and o ~= TypeName) then
                    inheritedby = inheritedby..(inheritformat:gsub("_TYPENAME_", o))
                    break
                end
            end
        end
        
        local methods = ""
        for _, funcname in ipairs(sortedf[namespace]) do
            methods = methods..(methodformat:gsub("_FUNCNAME_", funcname))
        end
        
        local contents = IndexTemp
        
        contents = contents:gsub("_INHERITS_", inherits == "" and inherits or EscapeReplacer(IndexParts[1]:gsub("_INHERITS_", EscapeReplacer(inherits))))
        contents = contents:gsub("_INHERITEDBY_", inheritedby == "" and inheritedby or EscapeReplacer(IndexParts[2]:gsub("_INHERITEDBY_", EscapeReplacer(inheritedby))))
        contents = contents:gsub("_METHODS_", methods == "" and methods or EscapeReplacer(IndexParts[3]:gsub("_METHODS_", EscapeReplacer(methods))))
        
        contents = contents:gsub("_TYPENAME_", TypeName)
        
        table.insert(Files, contents)
    end
    
    local result = web_temp
    result = result:gsub("_SEARCHLIST_", EscapeReplacer(searchbar))
    result = result:gsub("_CONTENT_", EscapeReplacer(table.concat(Files)))
            
    for _, namespace in ipairs(sortedn) do
        local TypeName = T.Namespaces[namespace].TypeName or "Global"
        result = result:gsub("%&"..TypeName, EscapeReplacer('<a href="?page='..TypeName..'">'..TypeName..'</a>'))
    end
    
    WriteFile("documentation.html", result)
end

print("Eluna documentation created!")
print()
return false
end

RegisterPlayerEvent(42, GenerateDoc) -- OnCommand
