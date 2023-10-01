"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1a26d2c6-e197-4f17-b5ef-ebbd2574d12e");
  }, []);

  return null;
};