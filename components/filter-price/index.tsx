"use client";

import AutoGrowInput from "../auto-grow-input";
import { Slider } from "@mui/material";
import { useState } from "react";
import "./style.scss";

const minDistance = 10;

export default function FilterPrice({ maxPrice }: { maxPrice: any }) {
  const [value, setValue] = useState<number[]>([0, maxPrice]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className="filter-price">
      <h2>محدوده قیمت</h2>
      <div className="input-group">
        <label>
          از
          <AutoGrowInput
            type="number"
            name="min"
            value={value[0]}
            onChange={({ target }: any) => setValue([+target.value, value[1]])}
          />
        </label>
        <label>
          تا
          <AutoGrowInput
            type="number"
            name="max"
            value={value[1]}
            onChange={({ target }: any) => setValue([value[0], +target.value])}
          />
        </label>
      </div>
      <Slider
        value={value}
        className="slider"
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={maxPrice}
        disableSwap
      />
    </div>
  );
}
