process.env.IGNORE_TS_CONFIG_PATHS = "true";
process.env.TAMAGUI_TARGET = "web";
// ref. https://github.com/tamagui/tamagui/blob/78b0beec20383eb59305363f8c1a9bf7a6ce4b15/apps/site/next.config.js#L3-L4

/** @type {import('next').NextConfig} */
const { withTamagui } = require("@tamagui/next-plugin");
const { join } = require("path");

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.jsx",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
    /* ref. https://github.com/tamagui/tamagui/blob/653afc692deef9ce46505f41dc4ce7403f623a81/starters/next-expo-solito/apps/next/next.config.js#L63-L75 */
    modularizeImports: {
      "@tamagui/lucide-icons": {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      "solito",
      "react-native-web",
      "expo-linking",
      "expo-constants",
      "expo-modules-core",
    ],
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],

    // rest are all optional:

    // disable static extraction, faster to iterate in dev mode (default false)
    disableExtraction: process.env.NODE_ENV === "development",

    // By default, we configure webpack to pass anything inside your root or design system
    // to the Tamagui loader. If you are importing files from an external package, use this:
    shouldExtract: (path, projectRoot) => {
      if (path.includes(join("packages", "app"))) {
        return true;
      }
    },
  });
  // ref 1. https://tamagui.dev/docs/intro/compiler-install#nextjs
  // ref 2. https://tamagui.dev/docs/guides/next-js#nextconfigjs

  return { ...config, ...tamaguiPlugin(config) };
};
