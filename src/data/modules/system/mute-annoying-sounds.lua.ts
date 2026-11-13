import { FALLBACK_LUA_CTX } from '../luaUtil';

// 音效文件 ID 由 references/Leatrix_Plus/Leatrix_Plus_Mute.lua 的 muteTable / mountTable 提取
const SOUND_GROUPS: Record<string, number[]> = {
  muteTrains: [
    539219, 539203, 1313588, 1306531, 539516, 539730, 539802, 539881, 540271, 540275, 541769, 542017,
    540535, 540734, 540870, 540947, 1316209, 1304872, 541157, 541239, 636621, 630296, 630298, 542818,
    542896, 543085, 543093, 542526, 542600, 542035, 542206, 541463, 541601, 1902030, 1902543, 1730534,
    1730908, 2531204, 2491898, 1731282, 1731656, 1951457, 1951458, 3107651, 3107182, 1732030, 1732405, 1732785,
    1733163, 3106252, 3106717, 1903049, 1903522,
  ],
  muteGyrocopters: [
    595097, 595103, 555364, 595100, 551390, 551398, 551389, 551384, 551391, 551387, 551396, 551399,
    551386, 551385, 551382, 551392, 551395, 551394, 551393, 551383, 551388, 551397, 551400, 551400,
    569846, 598739, 569851, 598742, 598733, 569850,
  ],
  muteMechSteps: [
    893935, 893937, 893939, 893941, 893943, 893945, 893947, 893949, 550507, 550514, 550501, 550500,
    550511, 550504, 550498, 555127, 555125, 555123, 555132, 555124, 555128, 555129, 555130, 555131,
  ],
  muteChimes: [
    566564, 565853, 566558, 566027, 566254, 566064,
  ],
  muteFizzle: [
    569773, 569775, 569772, 569774, 569776,
  ],
  muteSniffing: [
    564422, 564378, 564383, 564560, 564544, 564536,
  ],
  muteYawns: [
    562388,
  ],
};

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local SOUND_GROUPS = {
${Object.entries(SOUND_GROUPS)
  .map(([key, ids]) => `    ${key} = { ${ids.join(', ')} },`)
  .join('\n')}
}

${L.c('applyNote')}
local function Apply()
    for key, ids in pairs(SOUND_GROUPS) do
        local mute = O[key]
        for _, soundID in ipairs(ids) do
            if mute then MuteSoundFile(soundID) else UnmuteSoundFile(soundID) end
        end
    end
end
Apply()
Core:OnSettingsChanged(Apply)
`;
};
