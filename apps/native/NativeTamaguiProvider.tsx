import { TamaguiProviderProps } from "app";
import React from "react";
import { TamaguiProvider } from "tamagui"; // note: design system can use @tamagui/core
import config from "./tamagui.config";

export const NativeTamaguiProvider = ({
  children,
  ...rest
}: Omit<TamaguiProviderProps, "config">) => {
  return (
    <TamaguiProvider config={config} {...rest}>
      {children}
    </TamaguiProvider>
  );
};
// ref 1. https://tamagui.dev/docs/core/configuration#add-provider
// ref 2. https://github.com/tamagui/tamagui/blob/6bee246180c117e49a46ff9c2de0b794c9c434f4/starters/next-expo-solito/packages/app/provider/index.tsx
