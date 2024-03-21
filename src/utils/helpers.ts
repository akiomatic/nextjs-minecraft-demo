import { BlockType } from "@/constants/minecraft-blocks";

export const getColorForBlock = (blockType: BlockType): string => {
  switch (blockType) {
    case BlockType.AIR:
      return "";
    case BlockType.DIRT:
      return "#835d3a";
    case BlockType.GRASS:
      return "#7c9e56";
    case BlockType.STONE:
      return "#999999";
    case BlockType.LEAVES:
      return "#A0722D";
    case BlockType.WOOD:
      return "#7c9e56";
    case BlockType.BEDROCK:
      return "#4a4a4a";
    case BlockType.COAL_ORE:
      return "hsl(0, 0%, 10%)";
    case BlockType.IRON_ORE:
      return "hsl(23,44%,76%)";
    case BlockType.DIAMOND_ORE:
      return "hsl(173,87%,69%)";
  }
};

export const generateOreVein = (
  terrain: BlockType[][],
  ore: BlockType,
  height: number,
  startX: number,
  startY: number,
  veinSize: number,
) => {
  console.log("startX", startX, "startY", startY, "veinSize", veinSize);
  // Randomly determine the shape of the vein by generating offsets for each block in the vein

  const offsets = [[0, 0]];
  for (let i = 0; i < veinSize; i++) {
    const offsetX = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    const offsetY = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    offsets.push([offsetX, offsetY]);
  }

  console.warn("Offsets", offsets);

  // Fill in the blocks in the vein with the ore block type
  for (const [offsetX, offsetY] of offsets) {
    const x = startX + offsetX;
    const y = startY + offsetY;

    console.log(
      "Generating ore vein at",
      x,
      y,
      "with size",
      veinSize,
      "and type",
      ore,
    );

    // Ensure the block is within the bounds of the terrain
    // if (x >= 0 && x < terrain[0].length && y >= 0 && y < terrain.length) {
    if (terrain[y] === undefined || terrain[y][x] === undefined) return;
    if (terrain[y][x] !== BlockType.STONE) return;

    console.warn("Replacing Ore", terrain[y][x]);
    terrain[y][x] = getOre(startY / height);
    // }
  }
};

const getOre = (y: number): BlockType => {
  console.log("Y level", y);
  if (y >= 0.87) return BlockType.DIAMOND_ORE;
  return Math.random() > 0.75 ? BlockType.COAL_ORE : BlockType.IRON_ORE;
};
