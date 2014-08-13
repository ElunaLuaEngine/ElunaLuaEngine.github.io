var searchIndex = {};

//
searchIndex["Aura"] = {
    "items": [
        [0, "", "Aura", "The persistent effect of a [Spell] that remains on a [Unit] after the [Spell] has been cast."],
        //
        [3, "GetAuraId", "", "Returns the ID of the [Spell] that caused this [Aura] to be applied."],
        //
        [3, "GetCaster", "", "Returns the [Unit] that casted the [Spell] that caused this [Aura] to be applied."],
        //
        [3, "GetCasterGUID", "", "Returns the GUID of the [Unit] that casted the [Spell] that caused this [Aura] to be applied."],
        //
        [3, "GetCasterLevel", "", "Returns the level of the [Unit] that casted the [Spell] that caused this [Aura] to be applied."],
        //
        [3, "GetDuration", "", "Returns the amount of time left until the [Aura] expires."],
        //
        [3, "GetMaxDuration", "", "Returns the amount of time this [Aura] lasts when applied."],
        //
        [3, "GetOwner", "", "Returns the [Unit] that the [Aura] has been applied to."],
        //
        [3, "GetStackAmount", "", "Returns the number of times the [Aura] has &#34;stacked&#34;."],
        //
        [3, "Remove", "", "Remove this [Aura] from the [Unit] it is applied to."],
        //
        [3, "SetDuration", "", "Change the amount of time before the [Aura] expires."],
        //
        [3, "SetMaxDuration", "", "Change the maximum amount of time before the [Aura] expires."],
        //
        [3, "SetStackAmount", "", "Change the amount of times the [Aura] has &#34;stacked&#34; on the [Unit]."],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Corpse"] = {
    "items": [
        [0, "", "Corpse", ""],
        //
        [3, "DeleteBonesFromWorld", "", "Deletes the [Corpse] from the world."],
        //
        [3, "GetGhostTime", "", "Returns the ghost time of a [Corpse]."],
        //
        [3, "GetOwnerGUID", "", "Returns the [Corpse] Owner GUID."],
        //
        [3, "GetType", "", "Returns the [CorpseType] of a [Corpse]."],
        //
        [3, "ResetGhostTime", "", "Resets the [Corpse] ghost time."],
        //
        [3, "SaveToDB", "", "Saves the [Corpse] to the database."],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Creature"] = {
    "items": [
        [0, "", "Creature", ""],
        //
        [3, "AttackStart", "", ""],
        //
        [3, "CallAssistance", "", ""],
        //
        [3, "CallForHelp", "", ""],
        //
        [3, "CanAssistTo", "", ""],
        //
        [3, "CanFly", "", ""],
        //
        [3, "CanSwim", "", ""],
        //
        [3, "CanWalk", "", ""],
        //
        [3, "DespawnOrUnsummon", "", ""],
        //
        [3, "FleeToGetAssistance", "", ""],
        //
        [3, "GetAIName", "", ""],
        //
        [3, "GetAITarget", "", ""],
        //
        [3, "GetAITargets", "", ""],
        //
        [3, "GetAITargetsCount", "", ""],
        //
        [3, "GetAggroRange", "", ""],
        //
        [3, "GetAttackDistance", "", ""],
        //
        [3, "GetCorpseDelay", "", ""],
        //
        [3, "GetCreatureSpellCooldownDelay", "", ""],
        //
        [3, "GetDefaultMovementType", "", ""],
        //
        [3, "GetHomePosition", "", ""],
        //
        [3, "GetLootRecipient", "", ""],
        //
        [3, "GetLootRecipientGroup", "", ""],
        //
        [3, "GetNPCFlags", "", ""],
        //
        [3, "GetRespawnDelay", "", ""],
        //
        [3, "GetRespawnRadius", "", ""],
        //
        [3, "GetScriptId", "", ""],
        //
        [3, "GetScriptName", "", ""],
        //
        [3, "GetShieldBlockValue", "", ""],
        //
        [3, "HasCategoryCooldown", "", ""],
        //
        [3, "HasInvolvedQuest", "", ""],
        //
        [3, "HasLootRecipient", "", ""],
        //
        [3, "HasQuest", "", ""],
        //
        [3, "HasSearchedAssistance", "", ""],
        //
        [3, "HasSpell", "", ""],
        //
        [3, "HasSpellCooldown", "", ""],
        //
        [3, "IsCivilian", "", ""],
        //
        [3, "IsCombatAllowed", "", ""],
        //
        [3, "IsElite", "", ""],
        //
        [3, "IsGuard", "", ""],
        //
        [3, "IsInEvadeMode", "", ""],
        //
        [3, "IsRacialLeader", "", ""],
        //
        [3, "IsRegeneratingHealth", "", ""],
        //
        [3, "IsReputationGainDisabled", "", ""],
        //
        [3, "IsTappedBy", "", ""],
        //
        [3, "IsTargetableForAttack", "", ""],
        //
        [3, "IsWorldBoss", "", ""],
        //
        [3, "MoveWaypoint", "", ""],
        //
        [3, "RemoveCorpse", "", ""],
        //
        [3, "Respawn", "", ""],
        //
        [3, "SaveToDB", "", ""],
        //
        [3, "SelectVictim", "", ""],
        //
        [3, "SetAllowedCombat", "", ""],
        //
        [3, "SetDeathState", "", ""],
        //
        [3, "SetDefaultMovementType", "", ""],
        //
        [3, "SetDisableReputationGain", "", ""],
        //
        [3, "SetHover", "", ""],
        //
        [3, "SetInCombatWithZone", "", ""],
        //
        [3, "SetNPCFlags", "", ""],
        //
        [3, "SetNoCallAssistance", "", ""],
        //
        [3, "SetNoSearchAssistance", "", ""],
        //
        [3, "SetRespawnDelay", "", ""],
        //
        [3, "SetRespawnRadius", "", ""],
        //
        [3, "SetWalk", "", ""],
        //
        [3, "UpdateEntry", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["GameObject"] = {
    "items": [
        [0, "", "GameObject", ""],
        //
        [3, "Despawn", "", "Despawns a [GameObject]"],
        //
        [3, "GetDisplayId", "", "Returns display ID of the [GameObject]"],
        //
        [3, "GetGoState", "", "Returns the state of a [GameObject] Below are client side [GOState]s off of 3.3.5a"],
        //
        [3, "GetLootState", "", "Returns the [LootState] of a [GameObject] Below are [LootState]s off of 3.3.5a"],
        //
        [3, "HasQuest", "", "Returns 'true' if the [GameObject] can give the specified [Quest]"],
        //
        [3, "IsActive", "", "Returns 'true' if the [GameObject] is active"],
        //
        [3, "IsSpawned", "", "Returns 'true' if the [GameObject] is spawned"],
        //
        [3, "IsTransport", "", "Returns 'true' if the [GameObject] is a transport"],
        //
        [3, "RegisterEvent", "", "Registers a timed event to the [GameObject]"],
        //
        [3, "RemoveEventById", "", "Removes the timed event from a [GameObject] by the specified event ID"],
        //
        [3, "RemoveEvents", "", "Removes all timed events from a [GameObject]"],
        //
        [3, "RemoveFromWorld", "", "Removes [GameObject] from the world"],
        //
        [3, "Respawn", "", "Respawns a [GameObject]"],
        //
        [3, "SaveToDB", "", "Saves [GameObject] to the database"],
        //
        [3, "SetGoState", "", "Sets the state of a [GameObject]"],
        //
        [3, "SetLootState", "", "Sets the [LootState] of a [GameObject] Below are [LootState]s off of 3.3.5a"],
        //
        [3, "UseDoorOrButton", "", "Changes uses a door or a button type [GameObject]"],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Global"] = {
    "items": [
        [0, "", "Global", ""],
        //
        [3, "AddCorpse", "", ""],
        //
        [3, "AddTaxiPath", "", ""],
        //
        [3, "AddVendorItem", "", ""],
        //
        [3, "AddWeather", "", ""],
        //
        [3, "AuthDBExecute", "", ""],
        //
        [3, "AuthDBQuery", "", ""],
        //
        [3, "Ban", "", ""],
        //
        [3, "CharDBExecute", "", ""],
        //
        [3, "CharDBQuery", "", ""],
        //
        [3, "ConvertCorpseForPlayer", "", ""],
        //
        [3, "CreateLuaEvent", "", ""],
        //
        [3, "CreatePacket", "", ""],
        //
        [3, "FindWeather", "", ""],
        //
        [3, "GetAreaName", "", ""],
        //
        [3, "GetCoreExpansion", "", ""],
        //
        [3, "GetCoreName", "", ""],
        //
        [3, "GetCoreVersion", "", ""],
        //
        [3, "GetGUIDEntry", "", ""],
        //
        [3, "GetGUIDLow", "", ""],
        //
        [3, "GetGUIDType", "", ""],
        //
        [3, "GetGameTime", "", ""],
        //
        [3, "GetGuildByLeaderGUID", "", ""],
        //
        [3, "GetGuildByName", "", ""],
        //
        [3, "GetItemGUID", "", ""],
        //
        [3, "GetItemLink", "", ""],
        //
        [3, "GetLuaEngine", "", ""],
        //
        [3, "GetMapById", "", ""],
        //
        [3, "GetObjectGUID", "", ""],
        //
        [3, "GetPlayerByGUID", "", ""],
        //
        [3, "GetPlayerByName", "", ""],
        //
        [3, "GetPlayerCount", "", ""],
        //
        [3, "GetPlayerGUID", "", ""],
        //
        [3, "GetPlayersInMap", "", ""],
        //
        [3, "GetPlayersInWorld", "", ""],
        //
        [3, "GetQuest", "", ""],
        //
        [3, "GetUnitGUID", "", ""],
        //
        [3, "Kick", "", ""],
        //
        [3, "PerformIngameSpawn", "", ""],
        //
        [3, "RegisterCreatureEvent", "", ""],
        //
        [3, "RegisterCreatureGossipEvent", "", ""],
        //
        [3, "RegisterGameObjectEvent", "", ""],
        //
        [3, "RegisterGameObjectGossipEvent", "", ""],
        //
        [3, "RegisterGroupEvent", "", ""],
        //
        [3, "RegisterGuildEvent", "", ""],
        //
        [3, "RegisterItemEvent", "", ""],
        //
        [3, "RegisterItemGossipEvent", "", ""],
        //
        [3, "RegisterPacketEvent", "", ""],
        //
        [3, "RegisterPlayerEvent", "", ""],
        //
        [3, "RegisterPlayerGossipEvent", "", ""],
        //
        [3, "RegisterServerEvent", "", ""],
        //
        [3, "ReloadEluna", "", ""],
        //
        [3, "RemoveCorpse", "", ""],
        //
        [3, "RemoveEventById", "", ""],
        //
        [3, "RemoveEvents", "", ""],
        //
        [3, "RemoveOldCorpses", "", ""],
        //
        [3, "RemoveWeather", "", ""],
        //
        [3, "SaveAllPlayers", "", ""],
        //
        [3, "SendFineWeatherToPlayer", "", ""],
        //
        [3, "SendMail", "", ""],
        //
        [3, "SendWorldMessage", "", ""],
        //
        [3, "VendorRemoveAllItems", "", ""],
        //
        [3, "VendorRemoveItem", "", ""],
        //
        [3, "WorldDBExecute", "", ""],
        //
        [3, "WorldDBQuery", "", ""],
        //
        [3, "bit_and", "", ""],
        //
        [3, "bit_lshift", "", ""],
        //
        [3, "bit_not", "", ""],
        //
        [3, "bit_or", "", ""],
        //
        [3, "bit_rshift", "", ""],
        //
        [3, "bit_xor", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Group"] = {
    "items": [
        [0, "", "Group", ""],
        //
        [3, "AddInvite", "", "Returns 'true' if the [Group] invite was successful"],
        //
        [3, "ConvertToRaid", "", "Converts this [Group] to a raid [Group]"],
        //
        [3, "Disband", "", "Disbands this [Group]"],
        //
        [3, "GetGUID", "", "Returns the [Group]'s GUID"],
        //
        [3, "GetLeader", "", "Finds and returns a [Group] leader by their GUID if logged in"],
        //
        [3, "GetLeaderGUID", "", "Returns [Group] leader GUID"],
        //
        [3, "GetMemberGUID", "", "Returns a [Group] member's GUID by their name"],
        //
        [3, "GetMemberGroup", "", "Returns the [Player]'s subgroup ID of this [Group]"],
        //
        [3, "GetMembers", "", "Returns a table with the [Player]s in this [Group]"],
        //
        [3, "GetMembersCount", "", "Returns the member count of this [Group]"],
        //
        [3, "HasFreeSlotSubGroup", "", "Returns 'true' if the subgroup has free slots in this [Group]"],
        //
        [3, "IsAssistant", "", "Returns 'true' if the [Player] is an assistant of this [Group]"],
        //
        [3, "IsBGGroup", "", "Returns 'true' if the [Group] is a battleground [Group]"],
        //
        [3, "IsFull", "", "Returns 'true' if the [Group] is full"],
        //
        [3, "IsLeader", "", "Returns 'true' if the player is the [Group] leader"],
        //
        [3, "IsMember", "", "Returns 'true' if the [Player] is a member of this [Group]"],
        //
        [3, "IsRaidGroup", "", "Returns 'true' if the [Group] is a raid [Group]"],
        //
        [3, "RemoveMember", "", "Removes a member from this [Group] and returns 'true' if successful"],
        //
        [3, "SameSubGroup", "", "Returns 'true' if the [Player]s are in the same subgroup in this [Group]"],
        //
        [3, "SendPacket", "", "Sends a specified [WorldPacket] to this [Group]"],
        //
        [3, "SetLeader", "", "Sets the leader of this [Group]"],
        //
        [3, "SetMembersGroup", "", "Sets the member's subGroup"],
        //
        [3, "SetTargetIcon", "", "Sets the target icon of an object for the [Group]"],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Guild"] = {
    "items": [
        [0, "", "Guild", ""],
        //
        [3, "AddMember", "", ""],
        //
        [3, "DeleteMember", "", ""],
        //
        [3, "DepositBankMoney", "", ""],
        //
        [3, "Disband", "", ""],
        //
        [3, "GetId", "", ""],
        //
        [3, "GetInfo", "", ""],
        //
        [3, "GetLeader", "", ""],
        //
        [3, "GetLeaderGUID", "", ""],
        //
        [3, "GetMOTD", "", ""],
        //
        [3, "GetMemberCount", "", ""],
        //
        [3, "GetMembers", "", ""],
        //
        [3, "GetName", "", ""],
        //
        [3, "SendPacket", "", ""],
        //
        [3, "SendPacketToRanked", "", ""],
        //
        [3, "SetBankTabText", "", ""],
        //
        [3, "SetLeader", "", ""],
        //
        [3, "SetMemberRank", "", ""],
        //
        [3, "WithdrawBankMoney", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Item"] = {
    "items": [
        [0, "", "Item", ""],
        //
        [3, "CanBeTraded", "", ""],
        //
        [3, "ClearEnchantment", "", ""],
        //
        [3, "GetAllowableClass", "", ""],
        //
        [3, "GetAllowableRace", "", ""],
        //
        [3, "GetBagSize", "", ""],
        //
        [3, "GetBagSlot", "", ""],
        //
        [3, "GetBuyCount", "", ""],
        //
        [3, "GetBuyPrice", "", ""],
        //
        [3, "GetClass", "", ""],
        //
        [3, "GetCount", "", ""],
        //
        [3, "GetDisplayId", "", ""],
        //
        [3, "GetEnchantmentId", "", ""],
        //
        [3, "GetInventoryType", "", ""],
        //
        [3, "GetItemLevel", "", ""],
        //
        [3, "GetItemLink", "", ""],
        //
        [3, "GetItemSet", "", ""],
        //
        [3, "GetMaxStackCount", "", ""],
        //
        [3, "GetName", "", ""],
        //
        [3, "GetOwner", "", ""],
        //
        [3, "GetOwnerGUID", "", ""],
        //
        [3, "GetQuality", "", ""],
        //
        [3, "GetRandomProperty", "", ""],
        //
        [3, "GetRandomSuffix", "", ""],
        //
        [3, "GetRequiredLevel", "", ""],
        //
        [3, "GetSellPrice", "", ""],
        //
        [3, "GetSlot", "", ""],
        //
        [3, "GetSpellId", "", ""],
        //
        [3, "GetSpellTrigger", "", ""],
        //
        [3, "GetStatsCount", "", ""],
        //
        [3, "GetSubClass", "", ""],
        //
        [3, "HasQuest", "", ""],
        //
        [3, "IsArmorVellum", "", ""],
        //
        [3, "IsBag", "", ""],
        //
        [3, "IsBoundAccountWide", "", ""],
        //
        [3, "IsBoundByEnchant", "", ""],
        //
        [3, "IsBroken", "", ""],
        //
        [3, "IsConjuredConsumable", "", ""],
        //
        [3, "IsCurrencyToken", "", ""],
        //
        [3, "IsEquipped", "", ""],
        //
        [3, "IsInBag", "", ""],
        //
        [3, "IsInTrade", "", ""],
        //
        [3, "IsLocked", "", ""],
        //
        [3, "IsNotBoundToPlayer", "", ""],
        //
        [3, "IsNotEmptyBag", "", ""],
        //
        [3, "IsPotion", "", ""],
        //
        [3, "IsRefundExpired", "", ""],
        //
        [3, "IsSoulBound", "", ""],
        //
        [3, "IsWeaponVellum", "", ""],
        //
        [3, "SaveToDB", "", ""],
        //
        [3, "SetBinding", "", ""],
        //
        [3, "SetCount", "", ""],
        //
        [3, "SetEnchantment", "", ""],
        //
        [3, "SetOwner", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Map"] = {
    "items": [
        [0, "", "Map", ""],
        //
        [3, "GetAreaId", "", "Returns the area ID of the [Map] at the specified X, Y and Z coordinates"],
        //
        [3, "GetDifficulty", "", "Returns the difficulty of the [Map]"],
        //
        [3, "GetHeight", "", "Returns the height of the [Map] at the given X and Y coordinates"],
        //
        [3, "GetInstanceId", "", "Returns the instance ID of the [Map]"],
        //
        [3, "GetMapId", "", "Returns the ID of the [Map]"],
        //
        [3, "GetName", "", "Returns the name of the [Map]"],
        //
        [3, "GetPlayerCount", "", "Returns the player count currently on the [Map] Does not include gamemasters"],
        //
        [3, "GetWorldObject", "", "Returns a [WorldObject] by it's guid from the map if it is spawned"],
        //
        [3, "IsArena", "", "Returns 'true' if the [Map] is an arena, false otherwise"],
        //
        [3, "IsBattleground", "", "Returns 'true' if the [Map] is a battleground, false otherwise"],
        //
        [3, "IsDungeon", "", "Returns 'true' if the [Map] is a dungeon, false otherwise"],
        //
        [3, "IsEmpty", "", "Returns 'true' if the [Map] is empty, false otherwise"],
        //
        [3, "IsHeroic", "", "Returns 'true' if the [Map] is a heroic, false otherwise"],
        //
        [3, "IsRaid", "", "Returns 'true' if the [Map] is a raid, false otherwise"],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Object"] = {
    "items": [
        [0, "", "Object", ""],
        //
        [3, "GetByteValue", "", ""],
        //
        [3, "GetEntry", "", ""],
        //
        [3, "GetFloatValue", "", ""],
        //
        [3, "GetGUID", "", ""],
        //
        [3, "GetGUIDLow", "", ""],
        //
        [3, "GetInt32Value", "", ""],
        //
        [3, "GetScale", "", ""],
        //
        [3, "GetTypeId", "", ""],
        //
        [3, "GetUInt16Value", "", ""],
        //
        [3, "GetUInt32Value", "", ""],
        //
        [3, "GetUInt64Value", "", ""],
        //
        [3, "HasFlag", "", ""],
        //
        [3, "IsInWorld", "", ""],
        //
        [3, "RemoveFlag", "", ""],
        //
        [3, "SetByteValue", "", ""],
        //
        [3, "SetFlag", "", ""],
        //
        [3, "SetFloatValue", "", ""],
        //
        [3, "SetInt16Value", "", ""],
        //
        [3, "SetInt32Value", "", ""],
        //
        [3, "SetScale", "", ""],
        //
        [3, "SetUInt16Value", "", ""],
        //
        [3, "SetUInt32Value", "", ""],
        //
        [3, "SetUInt64Value", "", ""],
        //
        [3, "ToCorpse", "", ""],
        //
        [3, "ToCreature", "", ""],
        //
        [3, "ToGameObject", "", ""],
        //
        [3, "ToPlayer", "", ""],
        //
        [3, "ToUnit", "", ""],
        //
        [3, "UpdateUInt32Value", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Player"] = {
    "items": [
        [0, "", "Player", ""],
        //
        [3, "AddComboPoints", "", ""],
        //
        [3, "AddItem", "", ""],
        //
        [3, "AddLifetimeKills", "", ""],
        //
        [3, "AdvanceAllSkills", "", ""],
        //
        [3, "AdvanceSkill", "", ""],
        //
        [3, "AdvanceSkillsToMax", "", ""],
        //
        [3, "AreaExploredOrEventHappens", "", ""],
        //
        [3, "CanBlock", "", ""],
        //
        [3, "CanEquipItem", "", ""],
        //
        [3, "CanFly", "", ""],
        //
        [3, "CanParry", "", ""],
        //
        [3, "CanShareQuest", "", ""],
        //
        [3, "CanSpeak", "", ""],
        //
        [3, "CanTitanGrip", "", ""],
        //
        [3, "CanUninviteFromGroup", "", ""],
        //
        [3, "CanUseItem", "", ""],
        //
        [3, "ClearComboPoints", "", ""],
        //
        [3, "ClearHonorInfo", "", ""],
        //
        [3, "CompleteQuest", "", ""],
        //
        [3, "CreateCorpse", "", ""],
        //
        [3, "DurabilityLoss", "", ""],
        //
        [3, "DurabilityLossAll", "", ""],
        //
        [3, "DurabilityPointLossForEquipSlot", "", ""],
        //
        [3, "DurabilityPointsLoss", "", ""],
        //
        [3, "DurabilityPointsLossAll", "", ""],
        //
        [3, "DurabilityRepair", "", ""],
        //
        [3, "DurabilityRepairAll", "", ""],
        //
        [3, "EquipItem", "", ""],
        //
        [3, "FailQuest", "", ""],
        //
        [3, "GetAccountId", "", ""],
        //
        [3, "GetAccountName", "", ""],
        //
        [3, "GetActiveSpec", "", ""],
        //
        [3, "GetArenaPoints", "", ""],
        //
        [3, "GetBaseSkillValue", "", ""],
        //
        [3, "GetBattlegroundId", "", ""],
        //
        [3, "GetBattlegroundTypeId", "", ""],
        //
        [3, "GetChampioningFaction", "", ""],
        //
        [3, "GetChatTag", "", ""],
        //
        [3, "GetCoinage", "", ""],
        //
        [3, "GetComboPoints", "", ""],
        //
        [3, "GetComboTarget", "", ""],
        //
        [3, "GetCorpse", "", ""],
        //
        [3, "GetDbLocaleIndex", "", ""],
        //
        [3, "GetDbcLocale", "", ""],
        //
        [3, "GetDifficulty", "", ""],
        //
        [3, "GetDrunkValue", "", ""],
        //
        [3, "GetEquippedItemBySlot", "", ""],
        //
        [3, "GetFreeTalentPoints", "", ""],
        //
        [3, "GetGMRank", "", ""],
        //
        [3, "GetGossipTextId", "", ""],
        //
        [3, "GetGroup", "", ""],
        //
        [3, "GetGroupInvite", "", ""],
        //
        [3, "GetGuild", "", ""],
        //
        [3, "GetGuildId", "", ""],
        //
        [3, "GetGuildName", "", ""],
        //
        [3, "GetGuildRank", "", ""],
        //
        [3, "GetHealthBonusFromStamina", "", ""],
        //
        [3, "GetHonorLastWeekStandingPos", "", ""],
        //
        [3, "GetHonorPoints", "", ""],
        //
        [3, "GetHonorStoredKills", "", ""],
        //
        [3, "GetInGameTime", "", ""],
        //
        [3, "GetItemByEntry", "", ""],
        //
        [3, "GetItemByPos", "", ""],
        //
        [3, "GetItemCount", "", ""],
        //
        [3, "GetLatency", "", ""],
        //
        [3, "GetLevelPlayedTime", "", ""],
        //
        [3, "GetLifetimeKills", "", ""],
        //
        [3, "GetManaBonusFromIntellect", "", ""],
        //
        [3, "GetMaxSkillValue", "", ""],
        //
        [3, "GetNextRandomRaidMember", "", ""],
        //
        [3, "GetOriginalGroup", "", ""],
        //
        [3, "GetOriginalSubGroup", "", ""],
        //
        [3, "GetPhaseMaskForSpawn", "", ""],
        //
        [3, "GetPlayerIP", "", ""],
        //
        [3, "GetPureMaxSkillValue", "", ""],
        //
        [3, "GetPureSkillValue", "", ""],
        //
        [3, "GetQuestLevel", "", ""],
        //
        [3, "GetQuestRewardStatus", "", ""],
        //
        [3, "GetQuestStatus", "", ""],
        //
        [3, "GetRankPoints", "", ""],
        //
        [3, "GetReputation", "", ""],
        //
        [3, "GetReputationRank", "", ""],
        //
        [3, "GetReqKillOrCastCurrentCount", "", ""],
        //
        [3, "GetRestBonus", "", ""],
        //
        [3, "GetRestTime", "", ""],
        //
        [3, "GetRestType", "", ""],
        //
        [3, "GetSelection", "", ""],
        //
        [3, "GetShieldBlockValue", "", ""],
        //
        [3, "GetSkillPermBonusValue", "", ""],
        //
        [3, "GetSkillTempBonusValue", "", ""],
        //
        [3, "GetSkillValue", "", ""],
        //
        [3, "GetSpecsCount", "", ""],
        //
        [3, "GetSpellCooldownDelay", "", ""],
        //
        [3, "GetSpellCooldowns", "", ""],
        //
        [3, "GetSubGroup", "", ""],
        //
        [3, "GetTeam", "", ""],
        //
        [3, "GetTotalPlayedTime", "", ""],
        //
        [3, "GetXPRestBonus", "", ""],
        //
        [3, "GiveLevel", "", ""],
        //
        [3, "GiveXP", "", ""],
        //
        [3, "GossipAddQuests", "", ""],
        //
        [3, "GossipClearMenu", "", ""],
        //
        [3, "GossipComplete", "", ""],
        //
        [3, "GossipMenuAddItem", "", ""],
        //
        [3, "GossipSendMenu", "", ""],
        //
        [3, "GossipSendPOI", "", ""],
        //
        [3, "GroupEventHappens", "", ""],
        //
        [3, "HasAchieved", "", ""],
        //
        [3, "HasAtLoginFlag", "", ""],
        //
        [3, "HasItem", "", ""],
        //
        [3, "HasQuest", "", ""],
        //
        [3, "HasQuestForGO", "", ""],
        //
        [3, "HasQuestForItem", "", ""],
        //
        [3, "HasSkill", "", ""],
        //
        [3, "HasSpell", "", ""],
        //
        [3, "HasSpellCooldown", "", ""],
        //
        [3, "HasTalent", "", ""],
        //
        [3, "HasTitle", "", ""],
        //
        [3, "InArena", "", ""],
        //
        [3, "InBattleground", "", ""],
        //
        [3, "InBattlegroundQueue", "", ""],
        //
        [3, "IncompleteQuest", "", ""],
        //
        [3, "IsAFK", "", ""],
        //
        [3, "IsAcceptingWhispers", "", ""],
        //
        [3, "IsAlliance", "", ""],
        //
        [3, "IsDND", "", ""],
        //
        [3, "IsFalling", "", ""],
        //
        [3, "IsFlying", "", ""],
        //
        [3, "IsGM", "", ""],
        //
        [3, "IsGMChat", "", ""],
        //
        [3, "IsGMVisible", "", ""],
        //
        [3, "IsGroupVisibleFor", "", ""],
        //
        [3, "IsHonorOrXPTarget", "", ""],
        //
        [3, "IsHorde", "", ""],
        //
        [3, "IsInArenaTeam", "", ""],
        //
        [3, "IsInGroup", "", ""],
        //
        [3, "IsInGuild", "", ""],
        //
        [3, "IsInSameGroupWith", "", ""],
        //
        [3, "IsInSameRaidWith", "", ""],
        //
        [3, "IsInWater", "", ""],
        //
        [3, "IsMoving", "", ""],
        //
        [3, "IsRested", "", ""],
        //
        [3, "IsTaxiCheater", "", ""],
        //
        [3, "IsVisibleForPlayer", "", ""],
        //
        [3, "KickPlayer", "", ""],
        //
        [3, "KillPlayer", "", ""],
        //
        [3, "KilledMonsterCredit", "", ""],
        //
        [3, "LearnSpell", "", ""],
        //
        [3, "LeaveBattleground", "", ""],
        //
        [3, "LogoutPlayer", "", ""],
        //
        [3, "ModifyArenaPoints", "", ""],
        //
        [3, "ModifyHonorPoints", "", ""],
        //
        [3, "ModifyMoney", "", ""],
        //
        [3, "Mute", "", ""],
        //
        [3, "PlaySoundToPlayer", "", ""],
        //
        [3, "RemoveFromBattlegroundRaid", "", ""],
        //
        [3, "RemoveFromGroup", "", ""],
        //
        [3, "RemoveItem", "", ""],
        //
        [3, "RemoveLifetimeKills", "", ""],
        //
        [3, "RemoveSpell", "", ""],
        //
        [3, "RemovedInsignia", "", ""],
        //
        [3, "ResetAchievements", "", ""],
        //
        [3, "ResetAllCooldowns", "", ""],
        //
        [3, "ResetHonor", "", ""],
        //
        [3, "ResetPetTalents", "", ""],
        //
        [3, "ResetSpellCooldown", "", ""],
        //
        [3, "ResetTalents", "", ""],
        //
        [3, "ResetTalentsCost", "", ""],
        //
        [3, "ResetTypeCooldowns", "", ""],
        //
        [3, "ResurrectPlayer", "", ""],
        //
        [3, "RewardQuest", "", ""],
        //
        [3, "SaveToDB", "", ""],
        //
        [3, "Say", "", ""],
        //
        [3, "SendAddonMessage", "", ""],
        //
        [3, "SendAreaTriggerMessage", "", ""],
        //
        [3, "SendAuctionMenu", "", ""],
        //
        [3, "SendBroadcastMessage", "", ""],
        //
        [3, "SendClearCooldowns", "", ""],
        //
        [3, "SendGuildInvite", "", ""],
        //
        [3, "SendListInventory", "", ""],
        //
        [3, "SendNotification", "", ""],
        //
        [3, "SendPacket", "", ""],
        //
        [3, "SendQuestTemplate", "", ""],
        //
        [3, "SendShowBank", "", ""],
        //
        [3, "SendShowMailBox", "", ""],
        //
        [3, "SendSpiritResurrect", "", ""],
        //
        [3, "SendTabardVendorActivate", "", ""],
        //
        [3, "SendTaxiMenu", "", ""],
        //
        [3, "SendTrainerList", "", ""],
        //
        [3, "SendVendorWindow", "", ""],
        //
        [3, "SetAcceptWhispers", "", ""],
        //
        [3, "SetArenaPoints", "", ""],
        //
        [3, "SetAtLoginFlag", "", ""],
        //
        [3, "SetBindPoint", "", ""],
        //
        [3, "SetCoinage", "", ""],
        //
        [3, "SetDrunkValue", "", ""],
        //
        [3, "SetFFA", "", ""],
        //
        [3, "SetFactionForRace", "", ""],
        //
        [3, "SetFreeTalentPoints", "", ""],
        //
        [3, "SetGMChat", "", ""],
        //
        [3, "SetGMVisible", "", ""],
        //
        [3, "SetGameMaster", "", ""],
        //
        [3, "SetGender", "", ""],
        //
        [3, "SetGuildRank", "", ""],
        //
        [3, "SetHonorLastWeekStandingPos", "", ""],
        //
        [3, "SetHonorPoints", "", ""],
        //
        [3, "SetHonorStoredKills", "", ""],
        //
        [3, "SetKnownTitle", "", ""],
        //
        [3, "SetLifetimeKills", "", ""],
        //
        [3, "SetPlayerLock", "", ""],
        //
        [3, "SetPvPDeath", "", ""],
        //
        [3, "SetQuestStatus", "", ""],
        //
        [3, "SetRankPoints", "", ""],
        //
        [3, "SetReputation", "", ""],
        //
        [3, "SetRestBonus", "", ""],
        //
        [3, "SetRestTime", "", ""],
        //
        [3, "SetRestType", "", ""],
        //
        [3, "SetSheath", "", ""],
        //
        [3, "SetSkill", "", ""],
        //
        [3, "SetTaxiCheat", "", ""],
        //
        [3, "SpawnBones", "", ""],
        //
        [3, "StartTaxi", "", ""],
        //
        [3, "SummonPlayer", "", ""],
        //
        [3, "TalkedToCreature", "", ""],
        //
        [3, "Teleport", "", ""],
        //
        [3, "TextEmote", "", ""],
        //
        [3, "ToggleAFK", "", ""],
        //
        [3, "ToggleDND", "", ""],
        //
        [3, "UnbindInstance", "", ""],
        //
        [3, "UnsetKnownTitle", "", ""],
        //
        [3, "UpdateHonor", "", ""],
        //
        [3, "Whisper", "", ""],
        //
        [3, "Yell", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Query"] = {
    "items": [
        [0, "", "Query", ""],
        //
        [3, "GetBool", "", ""],
        //
        [3, "GetCString", "", ""],
        //
        [3, "GetColumnCount", "", ""],
        //
        [3, "GetDouble", "", ""],
        //
        [3, "GetFloat", "", ""],
        //
        [3, "GetInt16", "", ""],
        //
        [3, "GetInt32", "", ""],
        //
        [3, "GetInt64", "", ""],
        //
        [3, "GetInt8", "", ""],
        //
        [3, "GetRowCount", "", ""],
        //
        [3, "GetString", "", ""],
        //
        [3, "GetUInt16", "", ""],
        //
        [3, "GetUInt32", "", ""],
        //
        [3, "GetUInt64", "", ""],
        //
        [3, "GetUInt8", "", ""],
        //
        [3, "IsNull", "", ""],
        //
        [3, "NextRow", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Quest"] = {
    "items": [
        [0, "", "Quest", ""],
        //
        [3, "GetFlags", "", "Returns the [Quest]'s flags."],
        //
        [3, "GetId", "", "Returns entry ID of the [Quest]."],
        //
        [3, "GetLevel", "", "Returns the [Quest]'s level."],
        //
        [3, "GetMinLevel", "", "Returns the minimum level required to pick up the [Quest]."],
        //
        [3, "GetNextQuestId", "", "Returns the next [Quest] entry ID."],
        //
        [3, "GetNextQuestInChain", "", "Returns the next [Quest] entry ID in the specific [Quest] chain."],
        //
        [3, "GetPrevQuestId", "", "Returns the previous [Quest] entry ID."],
        //
        [3, "GetType", "", "Returns the [Quest]'s type."],
        //
        [3, "HasFlag", "", "Returns 'true' if the [Quest] has the specified flag, false otherwise. Below flags are based off of 3.3.5a. Subject to change."],
        //
        [3, "IsDaily", "", "Returns 'true' if the [Quest] is a daily quest, false otherwise."],
        //
        [3, "IsRepeatable", "", "Returns 'true' if the [Quest] is repeatable, false otherwise."],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Spell"] = {
    "items": [
        [0, "", "Spell", ""],
        //
        [3, "Cancel", "", "Cancels the [Spell]."],
        //
        [3, "Cast", "", "Casts the [Spell]."],
        //
        [3, "Finish", "", "Finishes the [Spell]."],
        //
        [3, "GetCastTime", "", "Returns the cast time of the [Spell]."],
        //
        [3, "GetCaster", "", "Returns the [Unit] that casted the [Spell]."],
        //
        [3, "GetDuration", "", "Returns the spell duration of the [Spell]."],
        //
        [3, "GetEntry", "", "Returns the entry ID of the [Spell]."],
        //
        [3, "GetPowerCost", "", "Returns the power cost of the [Spell]."],
        //
        [3, "GetTarget", "", "Returns the target [Object] of the [Spell]. Target can be any of the following [Object] types: [Player], [Creature], [GameObject], [Item], [Corpse]"],
        //
        [3, "GetTargetDest", "", "Returns the target destination coordinates of the [Spell]."],
        //
        [3, "IsAutoRepeat", "", "Returns 'true' if the [Spell] is automatically repeating, false otherwise."],
        //
        [3, "SetAutoRepeat", "", "Sets the [Spell] to automatically repeat."],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Unit"] = {
    "items": [
        [0, "", "Unit", ""],
        //
        [3, "AddAura", "", ""],
        //
        [3, "AddThreat", "", "Adds threat to the [Unit] from the victim."],
        //
        [3, "AddUnitState", "", ""],
        //
        [3, "Attack", "", ""],
        //
        [3, "AttackStop", "", ""],
        //
        [3, "CastCustomSpell", "", "Casts the [Spell] at target [Unit] with custom basepoints or casters. See also [Unit:CastSpell]."],
        //
        [3, "CastSpell", "", ""],
        //
        [3, "CastSpellAoF", "", ""],
        //
        [3, "ClearInCombat", "", ""],
        //
        [3, "ClearThreatList", "", ""],
        //
        [3, "ClearUnitState", "", ""],
        //
        [3, "CountPctFromCurHealth", "", ""],
        //
        [3, "CountPctFromMaxHealth", "", ""],
        //
        [3, "DeMorph", "", ""],
        //
        [3, "DealDamage", "", ""],
        //
        [3, "DealHeal", "", ""],
        //
        [3, "Dismount", "", ""],
        //
        [3, "Emote", "", ""],
        //
        [3, "GetAura", "", ""],
        //
        [3, "GetBaseSpellPower", "", ""],
        //
        [3, "GetCharmGUID", "", ""],
        //
        [3, "GetCharmerGUID", "", ""],
        //
        [3, "GetClass", "", ""],
        //
        [3, "GetClassAsString", "", ""],
        //
        [3, "GetCombatTime", "", ""],
        //
        [3, "GetControllerGUID", "", ""],
        //
        [3, "GetControllerGUIDS", "", ""],
        //
        [3, "GetCreatorGUID", "", ""],
        //
        [3, "GetCreatureType", "", ""],
        //
        [3, "GetCritterGUID", "", ""],
        //
        [3, "GetCurrentSpell", "", ""],
        //
        [3, "GetDisplayId", "", ""],
        //
        [3, "GetFaction", "", ""],
        //
        [3, "GetFriendlyUnitsInRange", "", ""],
        //
        [3, "GetGender", "", ""],
        //
        [3, "GetHealth", "", ""],
        //
        [3, "GetHealthPct", "", ""],
        //
        [3, "GetLevel", "", ""],
        //
        [3, "GetMaxHealth", "", ""],
        //
        [3, "GetMaxPower", "", ""],
        //
        [3, "GetMinionGUID", "", ""],
        //
        [3, "GetMountId", "", ""],
        //
        [3, "GetNativeDisplayId", "", ""],
        //
        [3, "GetOwner", "", ""],
        //
        [3, "GetOwnerGUID", "", ""],
        //
        [3, "GetPetGUID", "", ""],
        //
        [3, "GetPower", "", ""],
        //
        [3, "GetPowerPct", "", ""],
        //
        [3, "GetPowerType", "", ""],
        //
        [3, "GetRace", "", ""],
        //
        [3, "GetStandState", "", ""],
        //
        [3, "GetStat", "", ""],
        //
        [3, "GetUnfriendlyUnitsInRange", "", ""],
        //
        [3, "GetVehicle", "", ""],
        //
        [3, "GetVehicleKit", "", ""],
        //
        [3, "GetVictim", "", ""],
        //
        [3, "HasAura", "", ""],
        //
        [3, "HasUnitState", "", ""],
        //
        [3, "HealthAbovePct", "", ""],
        //
        [3, "HealthBelowPct", "", ""],
        //
        [3, "InterruptSpell", "", ""],
        //
        [3, "IsAlive", "", ""],
        //
        [3, "IsArmorer", "", ""],
        //
        [3, "IsAttackingPlayer", "", ""],
        //
        [3, "IsAuctioneer", "", ""],
        //
        [3, "IsBanker", "", ""],
        //
        [3, "IsBattleMaster", "", ""],
        //
        [3, "IsCharmed", "", ""],
        //
        [3, "IsDead", "", ""],
        //
        [3, "IsDying", "", ""],
        //
        [3, "IsFullHealth", "", ""],
        //
        [3, "IsGossip", "", ""],
        //
        [3, "IsGuildMaster", "", ""],
        //
        [3, "IsInAccessiblePlaceFor", "", ""],
        //
        [3, "IsInCombat", "", ""],
        //
        [3, "IsInWater", "", ""],
        //
        [3, "IsInnkeeper", "", ""],
        //
        [3, "IsMounted", "", ""],
        //
        [3, "IsOnVehicle", "", ""],
        //
        [3, "IsPvPFlagged", "", ""],
        //
        [3, "IsQuestGiver", "", ""],
        //
        [3, "IsRooted", "", ""],
        //
        [3, "IsServiceProvider", "", ""],
        //
        [3, "IsSpiritGuide", "", ""],
        //
        [3, "IsSpiritHealer", "", ""],
        //
        [3, "IsSpiritService", "", ""],
        //
        [3, "IsStandState", "", ""],
        //
        [3, "IsStopped", "", ""],
        //
        [3, "IsTabardDesigner", "", ""],
        //
        [3, "IsTaxi", "", ""],
        //
        [3, "IsTrainer", "", ""],
        //
        [3, "IsUnderWater", "", ""],
        //
        [3, "IsVendor", "", ""],
        //
        [3, "IsWithinDistInMap", "", ""],
        //
        [3, "IsWithinLoS", "", ""],
        //
        [3, "Kill", "", ""],
        //
        [3, "Mount", "", ""],
        //
        [3, "MoveChase", "", ""],
        //
        [3, "MoveClear", "", ""],
        //
        [3, "MoveConfused", "", ""],
        //
        [3, "MoveExpire", "", ""],
        //
        [3, "MoveFleeing", "", ""],
        //
        [3, "MoveFollow", "", ""],
        //
        [3, "MoveHome", "", ""],
        //
        [3, "MoveIdle", "", ""],
        //
        [3, "MoveJump", "", ""],
        //
        [3, "MoveRandom", "", ""],
        //
        [3, "MoveStop", "", ""],
        //
        [3, "MoveTo", "", ""],
        //
        [3, "NearTeleport", "", ""],
        //
        [3, "PlayDirectSound", "", ""],
        //
        [3, "PlayDistanceSound", "", ""],
        //
        [3, "RegisterEvent", "", ""],
        //
        [3, "RemoveAllAuras", "", ""],
        //
        [3, "RemoveAura", "", ""],
        //
        [3, "RemoveEventById", "", ""],
        //
        [3, "RemoveEvents", "", ""],
        //
        [3, "SendChatMessageToPlayer", "", ""],
        //
        [3, "SendUnitEmote", "", ""],
        //
        [3, "SendUnitSay", "", ""],
        //
        [3, "SendUnitWhisper", "", ""],
        //
        [3, "SendUnitYell", "", ""],
        //
        [3, "SetCharmerGUID", "", ""],
        //
        [3, "SetCreatorGUID", "", ""],
        //
        [3, "SetCritterGUID", "", ""],
        //
        [3, "SetDisplayId", "", ""],
        //
        [3, "SetFFA", "", ""],
        //
        [3, "SetFacing", "", ""],
        //
        [3, "SetFacingToObject", "", ""],
        //
        [3, "SetFaction", "", ""],
        //
        [3, "SetHealth", "", ""],
        //
        [3, "SetLevel", "", ""],
        //
        [3, "SetMaxHealth", "", ""],
        //
        [3, "SetMaxPower", "", ""],
        //
        [3, "SetMinionGUID", "", ""],
        //
        [3, "SetName", "", ""],
        //
        [3, "SetNativeDisplayId", "", ""],
        //
        [3, "SetOwnerGUID", "", ""],
        //
        [3, "SetPetGUID", "", ""],
        //
        [3, "SetPhaseMask", "", ""],
        //
        [3, "SetPower", "", ""],
        //
        [3, "SetPowerType", "", ""],
        //
        [3, "SetPvP", "", ""],
        //
        [3, "SetSanctuary", "", ""],
        //
        [3, "SetSheath", "", ""],
        //
        [3, "SetSpeed", "", ""],
        //
        [3, "SetStandState", "", ""],
        //
        [3, "SetWaterWalk", "", ""],
        //
        [3, "StopSpellCast", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Vehicle"] = {
    "items": [
        [0, "", "Vehicle", ""],
        //
        [3, "AddPassenger", "", ""],
        //
        [3, "GetEntry", "", ""],
        //
        [3, "GetOwner", "", ""],
        //
        [3, "GetPassenger", "", ""],
        //
        [3, "IsOnBoard", "", ""],
        //
        [3, "RemovePassenger", "", ""],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["Weather"] = {
    "items": [
        [0, "", "Weather", ""],
        //
        [3, "GetZoneId", "", "Returns the zone id of the [Weather]"],
        //
        [3, "Regenerate", "", "Regenerates the [Weather], causing it to change based on the below statistics."],
        //
        [3, "SendWeatherUpdateToPlayer", "", "Sends a [Weather] update to the [Player] supplied."],
        //
        [3, "SetWeather", "", "Sets the [Weather] type based on [WeatherType] and grade supplied."],
        //
        [3, "UpdateWeather", "", "Sends a [Weather] update to the all [Player] in the zone."],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["WorldObject"] = {
    "items": [
        [0, "", "WorldObject", ""],
        //
        [3, "GetAngle", "", "Returns the angle between this [WorldObject] and another [WorldObject] or a point. The angle is the angle between two points and orientation will be ignored."],
        //
        [3, "GetAreaId", "", "Returns the current area ID of the [WorldObject]"],
        //
        [3, "GetCreaturesInRange", "", "Returns a table of [Creature] objects in sight of the [WorldObject] or within the given range and/or with a specific entry ID"],
        //
        [3, "GetDistance", "", "Returns the distance from this [WorldObject] to another [WorldObject], or from this [WorldObject] to a point."],
        //
        [3, "GetGameObjectsInRange", "", "Returns a table of [GameObject] objects in sight of the [WorldObject] or within the given range and/or with a specific entry ID"],
        //
        [3, "GetInstanceId", "", "Returns the current instance ID of the [WorldObject]"],
        //
        [3, "GetLocation", "", "Returns the coordinates and orientation of the [WorldObject]"],
        //
        [3, "GetMap", "", "Returns the current [Map] object of the [WorldObject]"],
        //
        [3, "GetMapId", "", "Returns the current map ID of the [WorldObject]"],
        //
        [3, "GetName", "", "Returns the name of the [WorldObject]"],
        //
        [3, "GetNearObject", "", "Returns nearest [WorldObject] in sight of the [WorldObject]. The distance, type, entry and hostility requirements the [WorldObject] must match can be passed."],
        //
        [3, "GetNearObjects", "", "Returns a table of [WorldObject]s in sight of the [WorldObject]. The distance, type, entry and hostility requirements the [WorldObject] must match can be passed."],
        //
        [3, "GetNearestCreature", "", "Returns the nearest [Creature] object in sight of the [WorldObject] or within the given range and/or with a specific entry ID"],
        //
        [3, "GetNearestGameObject", "", "Returns the nearest [GameObject] object in sight of the [WorldObject] or within the given range and/or with a specific entry ID"],
        //
        [3, "GetNearestPlayer", "", "Returns the nearest [Player] object in sight of the [WorldObject] or within the given range"],
        //
        [3, "GetO", "", "Returns the current orientation of the [WorldObject]"],
        //
        [3, "GetPhaseMask", "", "Returns the current phase of the [WorldObject]"],
        //
        [3, "GetPlayersInRange", "", "Returns a table of [Player] objects in sight of the [WorldObject] or within the given range"],
        //
        [3, "GetRelativePoint", "", "Returns a point relative to the [WorldObject]. With distance set to 1 and angle set to 0, this will return a point 1 yard in front of the [WorldObject]"],
        //
        [3, "GetWorldObject", "", "Returns a [WorldObject] based on it's guid if it is spawned"],
        //
        [3, "GetX", "", "Returns the current X coordinate of the [WorldObject]"],
        //
        [3, "GetY", "", "Returns the current Y coordinate of the [WorldObject]"],
        //
        [3, "GetZ", "", "Returns the current Z coordinate of the [WorldObject]"],
        //
        [3, "GetZoneId", "", "Returns the current zone ID of the [WorldObject]"],
        //
        [3, "SendPacket", "", "Sends a [WorldPacket] to [Player]s in sight of the [WorldObject]."],
        //
        [3, "SpawnCreature", "", "Spawns the creature at specified location."],
        //
        [3, "SummonGameObject", "", "Spawns a [GameObject] at specified location."],
        //
    ],
    "paths": [

    ]
};
//
searchIndex["WorldPacket"] = {
    "items": [
        [0, "", "WorldPacket", ""],
        //
        [3, "GetOpcode", "", "Returns the opcode of the [WorldPacket]."],
        //
        [3, "GetSize", "", "Returns the size of the [WorldPacket]."],
        //
        [3, "ReadByte", "", "Reads and returns an int8 value from the [WorldPacket]."],
        //
        [3, "ReadDouble", "", "Reads and returns a double value from the [WorldPacket]."],
        //
        [3, "ReadFloat", "", "Reads and returns a float value from the [WorldPacket]."],
        //
        [3, "ReadGUID", "", "Reads and returns a uint64 value from the [WorldPacket]."],
        //
        [3, "ReadLong", "", "Reads and returns an int32 value from the [WorldPacket]."],
        //
        [3, "ReadShort", "", "Reads and returns an int16 value from the [WorldPacket]."],
        //
        [3, "ReadString", "", "Reads and returns a string value from the [WorldPacket]."],
        //
        [3, "ReadUByte", "", "Reads and returns a uint8 value from the [WorldPacket]."],
        //
        [3, "ReadULong", "", "Reads and returns a uint32 value from the [WorldPacket]."],
        //
        [3, "ReadUShort", "", "Reads and returns a uint16 value from the [WorldPacket]."],
        //
        [3, "SetOpcode", "", "Sets the opcode of the [WorldPacket] by specifying an opcode."],
        //
        [3, "WriteByte", "", "Writes an int8 value to the [WorldPacket]."],
        //
        [3, "WriteDouble", "", "Writes a double value to the [WorldPacket]."],
        //
        [3, "WriteFloat", "", "Writes a float value to the [WorldPacket]."],
        //
        [3, "WriteGUID", "", "Writes an uint64 value to the [WorldPacket]."],
        //
        [3, "WriteLong", "", "Writes an int32 value to the [WorldPacket]."],
        //
        [3, "WriteShort", "", "Writes an int16 value to the [WorldPacket]."],
        //
        [3, "WriteString", "", "Writes a string to the [WorldPacket]."],
        //
        [3, "WriteUByte", "", "Writes an uint8 value to the [WorldPacket]."],
        //
        [3, "WriteULong", "", "Writes an uint32 value to the [WorldPacket]."],
        //
        [3, "WriteUShort", "", "Writes an uint16 value to the [WorldPacket]."],
        //
    ],
    "paths": [

    ]
};
//

initSearch(searchIndex);