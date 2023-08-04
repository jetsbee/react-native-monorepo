import React from "react";
import { TamaguiAppProvider } from "./TamaguiAppProvider/TamaguiAppProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TamaguiAppProvider>{children}</TamaguiAppProvider>;
};
