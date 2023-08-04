# Example of react-native-monorepo
- Based on https://github.com/vercel/turbo/tree/5ff0ab2720708924ea3fcb50798f388a25c02fae/examples/with-react-native-web

## Scripts to run in dev
```sh
# for build
yarn build

# for iOS
yarn workspace native ios

# for android
yarn workspace native android

# for web
yarn workspace web dev
```

## Temporary fix if android script is not working
- Change distributionUrl value as below in "apps/native/android/gradle/wrapper/gradle-wrapper.properties"
```
distributionUrl=https\://services.gradle.org/distributions/gradle-7.6.2-all.zip

# ref. https://github.com/react-native-community/cli/issues/1719#issuecomment-1399202729
```

## Temporary fix zombie processes issue with next.js
- ref 1. https://github.com/vercel/next.js/issues/45508#issuecomment-1646657899
- ref 2. https://github.com/vercel/next.js/issues/45508#issuecomment-1653226340
- ref 3. https://github.com/vercel/next.js/issues/45508#issuecomment-1560568292
```sh
# Kill the zombie processes
yarn workspace web kill-zombies
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `app`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
