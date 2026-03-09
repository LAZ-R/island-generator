export const PRESETS = [
  // DEFAULT
  {
    id: 'default',
    name: 'Default',
    // island seeds
    seedsCount: 6,
    // seeds
    coreIterations: 64, // plus = plus de chance d'avoir des formes cheloues
    coreProbaMin: 15, 
    coreProbaMax: 40,
    // seeds expension
    centerSpread: 12,
    centerSpreadProbability: 20,
    surroundingsSpread: 6,
    surroundingsSpreadProbability: 20,
    beachSpread: 5,
    beachSpreadProbability: 5,
    water1Spread: 8,
    water1SpreadProbability: 16,
    water2Spread: 16,
    water2SpreadProbability: 12,
  },
  // archipel réaliste
  {
    id: 'realistic',
    name: 'Realistic',
    // island seeds
    seedsCount: 4,
    // seeds
    coreIterations: 12, // plus = plus de chance d'avoir des formes cheloues
    coreProbaMin: 20, 
    coreProbaMax: 50,
    // seeds expension
    centerSpread: 48,
    centerSpreadProbability: 20,
    surroundingsSpread: 16,
    surroundingsSpreadProbability: 20,
    beachSpread: 4,
    beachSpreadProbability: 8,
    water1Spread: 24,
    water1SpreadProbability: 8,
    water2Spread: 16,
    water2SpreadProbability: 12,
  },
  // tropical islands
  /* {
    id: 'tropical',
    name: 'Tropical islands',
    seedsCount: 14,
    centerSpread: 14 * 2,
    centerSpreadProbability: 17,
    surroundingsSpread: 3 * 2,
    surroundingsSpreadProbability: 10,
    beachSpread: 2 * 2,
    beachSpreadProbability: 40,
    water1Spread: 6 * 2,
    water1SpreadProbability: 25,
    water2Spread: 10 * 2,
    water2SpreadProbability: 18,
  }, */
  // volcanic islands
  {
    id: 'volcanic',
    name: 'Volcanic',
    // island seeds
    seedsCount: 3,
    // seeds
    coreIterations: 6, // plus = plus de chance d'avoir des formes cheloues
    coreProbaMin: 20, 
    coreProbaMax: 60,
    // seeds expension
    centerSpread: 40,
    centerSpreadProbability: 25,
    surroundingsSpread: 16,
    surroundingsSpreadProbability: 16,
    beachSpread: 2,
    beachSpreadProbability: 16,
    water1Spread: 6,
    water1SpreadProbability: 12,
    water2Spread: 8,
    water2SpreadProbability: 16,
  },
  // fjord islands
  /* {
    id: 'fjord',
    name: 'Fjords',
    seedsCount: 6,
    centerSpread: 26 * 2,
    centerSpreadProbability: 14,
    surroundingsSpread: 7 * 2,
    surroundingsSpreadProbability: 10,
    beachSpread: 1 * 2,
    beachSpreadProbability: 20,
    water1Spread: 6 * 2,
    water1SpreadProbability: 30,
    water2Spread: 12 * 2,
    water2SpreadProbability: 15,
  }, */
  /* {
    id: 'continent',
    name: 'Continent',
    seedsCount: 3,
    centerSpread: 36 * 2,
    centerSpreadProbability: 22,
    surroundingsSpread: 6 * 2,
    surroundingsSpreadProbability: 12,
    beachSpread: 1 * 2,
    beachSpreadProbability: 16,
    water1Spread: 2 * 2,
    water1SpreadProbability: 6,
    water2Spread: 8 * 2,
    water2SpreadProbability: 12,
  }, */
  {
    id: 'coral-hell',
    name: 'Coral hell',
    // island seeds
    seedsCount: 16,
    // seeds
    coreIterations: 72, // plus = plus de chance d'avoir des formes cheloues
    coreProbaMin: 8, 
    coreProbaMax: 20,
    // seeds expension
    centerSpread: 12,
    centerSpreadProbability: 8,
    surroundingsSpread: 12,
    surroundingsSpreadProbability: 16,
    beachSpread: 32,
    beachSpreadProbability: 60,
    water1Spread: 32,
    water1SpreadProbability: 3,
    water2Spread: 16,
    water2SpreadProbability: 12,
  },
  /* {
    id: 'mangrove',
    name: 'Mangrove delta',
    seedsCount: 24,
    centerSpread: 2 * 2,
    centerSpreadProbability: 2,
    surroundingsSpread: 12 * 2,
    surroundingsSpreadProbability: 12,
    beachSpread: 4 * 2,
    beachSpreadProbability: 10,
    water1Spread: 6 * 2,
    water1SpreadProbability: 6,
    water2Spread: 12 * 2,
    water2SpreadProbability: 14,
  }, */
];