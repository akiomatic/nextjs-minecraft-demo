import { BlockType } from "@/constants/minecraft-blocks";
import {
  acacia,
  cherryBlossom,
  darkOak,
  jungle,
  spruce,
  tree,
  TreeType,
} from "@/constants/minecraft-trees";

export const getRandomTree = () => {
  const t =
    Object.values(TreeType)[
      Math.floor(Math.random() * Object.values(TreeType).length)
    ];

  switch (t) {
    case TreeType.OAK:
      return tree;
    case TreeType.SPRUCE:
      return spruce;
    case TreeType.BIRCH:
      return tree;
    case TreeType.JUNGLE:
      return jungle;
    case TreeType.ACACIA:
      return acacia;
    case TreeType.DARK_OAK:
      return darkOak;
    case TreeType.CHERRY_BLOSSOM:
      return cherryBlossom;
  }
};

export const getColorForBlock = (blockType: BlockType): string => {
  switch (blockType) {
    case BlockType.AIR:
      return "hsl(200, 100%, 100%)";
    case BlockType.DIRT:
      return "hsl(30, 100%, 30%)";
    case BlockType.GRASS:
      return "hsl(120, 100%, 30%)";
    case BlockType.STONE:
      return "hsl(0, 0%, 50%)";
    case BlockType.LEAVES:
      return "hsl(120, 100%, 30%)";
    case BlockType.WOOD:
      return "hsl(30, 100%, 30%)";
    case BlockType.DEEPSLATE:
      return "hsl(0, 0%, 30%)";
    case BlockType.COAL_ORE:
      return "hsl(0, 0%, 10%)";
    case BlockType.IRON_ORE:
      return "hsl(0, 0%, 20%)";
    case BlockType.DIAMOND_ORE:
      return "hsl(200, 100%, 100%)";
  }
};

export const generateOreVein = (
  terrain: BlockType[][],
  ore: BlockType,
  startX: number,
  startY: number,
  veinSize: number,
) => {
  // Randomly determine the shape of the vein by generating offsets for each block in the vein
  const offsets = [];
  for (let i = 0; i < veinSize; i++) {
    const offsetX = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    const offsetY = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    offsets.push([offsetX, offsetY]);
  }

  // Fill in the blocks in the vein with the ore block type
  for (const [offsetX, offsetY] of offsets) {
    const x = startX + offsetX;
    const y = startY + offsetY;

    // Ensure the block is within the bounds of the terrain
    if (x >= 0 && x < terrain[0].length && y >= 0 && y < terrain.length) {
      terrain[y][x] = ore;
    }
  }
};
