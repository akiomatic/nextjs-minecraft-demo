"use client";

import React, { useState } from "react";
import TerrainSection from "@/components/TerrainSection";
import { cn } from "@/utils/tailwind";

const Terrain = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleNight = () => {
    setIsNight((prev) => !prev);
  };

  return (
    <div
      className={cn(
        `flex flex-col h-screen w-screen bg-gradient-to-br transition-all duration-500`,
        !isNight
          ? "from-[#90dffe] to-[#38a3d1]"
          : "from-[#202020] to-[#111119]",
      )}
    >
      <TerrainSection isNight={isNight} />
      {/*backdrop-blur-md bg-gray-600/20*/}
      <div
        className={
          "absolute top-0 left-0 w-full h-full flex justify-center items-center"
        }
      >
        <div
          className={cn(
            "self-start mt-16 flex flex-col justify-center items-center w-1/2 p-4 text-center border rounded-3xl backdrop-blur-lg shadow-[20px_20px_40px_-12px_rgba(0,0,0,0.3)]",
            !isNight
              ? "text-black bg-white/30 border-black mix-blend-luminosity"
              : "text-white bg-gray-50/10 border-gray-500",
          )}
        >
          {/*<h1 className={"text-4xl font-bold"}>Hello!</h1>*/}
          {/*<p className={"my-8"}>*/}
          {/*  This is a simple, Minecraft-like, 2D terrain generator as you can*/}
          {/*  see in the background. It uses a 2D array to store the terrain data*/}
          {/*  and the HTML5 canvas to render the terrain.*/}
          {/*</p>*/}
          <div className={"flex justify-center items-center w-full"}>
            <div className={"flex-1 flex flex-col justify-center items-center"}>
              <button
                type={"button"}
                onClick={toggleNight}
                className={cn(
                  "w-40 text-sm px-4 py-1 rounded-2xl",
                  !isNight ? "bg-black text-white" : "bg-white text-black",
                )}
              >
                {!isNight ? "Got to bed" : "Wake up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terrain;
