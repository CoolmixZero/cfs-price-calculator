"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("517eaeb7-0669-498b-b4dd-ba0250c51555");
  }, []);

  return null;
};