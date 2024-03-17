"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current device width and height as a tuple.
 * This will only be triggered once on mount and will not update on resize.
 *
 * @returns [width, height]
 */
const useDeviceSize = () => {
  const [width, setWidth] = useState<number | null>(0);
  const [height, setHeight] = useState<number | null>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return [width, height];
};

export default useDeviceSize;
