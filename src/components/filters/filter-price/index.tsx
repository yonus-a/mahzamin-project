"use client";

import AutoGrowInput from "../../general/auto-grow-input";
import { Slider } from "@mui/material";
import { useState } from "react";
import "./style.scss";

interface Props {
  maxPrice: number;
}

export default function FilterPrice({ maxPrice }: Props) {
  const [value, setValue] = useState<number[]>([0, maxPrice]);
  const minDistance = 10;

  // from material ui
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
            onChange={({ target }: any) => setValue([+target.value, value[1]])}
            value={value[0]}
            type="number"
            name="min"
          />
        </label>
        <label>
          تا
          <AutoGrowInput
            onChange={({ target }: any) => setValue([value[0], +target.value])}
            value={value[1]}
            type="number"
            name="max"
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
