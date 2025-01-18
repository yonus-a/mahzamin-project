"use client";

import { useEffect } from "react";
const WOW = require("wowjs");

export default function WOWINIT() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return <></>;
}
