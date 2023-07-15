/* eslint-disable react/display-name */
"use client";

import { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import React from "react";

interface HeadingModeProps {
  mode1: string;
  mode2: string;
  mode3: string;
  subtitle?: string;
  center?: boolean;
  currentTab?: number;
  setTab: Dispatch<SetStateAction<number>>;
}

const HeadingMode: React.FC<HeadingModeProps> = React.memo(({ mode1, mode2, mode3, subtitle, center, currentTab, setTab }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="flex flex-row justify-between gap-4 text-2xl font-bold">
        <Button label={mode1} small outline onClick={() => setTab(1)} tab={1} currentTab={currentTab} />
        <Button label={mode2} small outline onClick={() => setTab(2)} tab={2} currentTab={currentTab} />
        <Button label={mode3} small outline onClick={() => setTab(3)} tab={3} currentTab={currentTab} />
      </div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
});


export default HeadingMode;