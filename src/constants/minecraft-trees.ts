export const tree = [
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
] as const;

export const spruce = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
] as const;

export const jungle = [
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
] as const;

export const acacia = [
  [0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 2, 1, 1],
  [0, 2, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
] as const;

export const darkOak = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 2, 2, 2, 0],
  [0, 2, 2, 2, 0],
  [0, 0, 2, 0, 0],
] as const;

export const cherryBlossom = [
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 2, 0, 0],
] as const;

export enum TreeType {
  OAK = "OAK",
  SPRUCE = "SPRUCE",
  BIRCH = "BIRCH",
  JUNGLE = "JUNGLE",
  ACACIA = "ACACIA",
  DARK_OAK = "DARK_OAK",
  CHERRY_BLOSSOM = "CHERRY_BLOSSOM",
}
