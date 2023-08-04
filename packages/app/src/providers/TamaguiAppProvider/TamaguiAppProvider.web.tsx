"use client";

import "@tamagui/core/reset.css";
import "@tamagui/polyfill-dev";

import { config as configBase } from "@tamagui/config";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { useServerInsertedHTML } from "next/navigation";
import React from "react";
import { StyleSheet } from "react-native";
import { TamaguiProvider, createTamagui } from "tamagui";

import { config as Tamagui } from "../../tamagui.config";

const config = createTamagui({
  ...configBase,
  themeClassNameOnRoot: false,
});

export const TamaguiAppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: Tamagui.getNewCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude:
                process.env.NODE_ENV === "production" ? "design-system" : null,
            }),
          }}
        />
      </>
    );
  });

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any);
      }}
    >
      <TamaguiProvider
        config={config}
        themeClassNameOnRoot
        defaultTheme={theme}
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
// ref 1. https://tamagui.dev/docs/guides/next-js#server-components
// ref 2. https://github.com/tamagui/tamagui/blob/c5ee9816f95c376b99a889660626b24cf72d8c89/starters/next-expo-solito/apps/next/app/TamaguiProvider.tsx
// ref 3. https://github.com/tamagui/tamagui/issues/1402#issue-1794364249
// ref 4. https://solito.dev/app-directory/overview#appstyles-providertsx
