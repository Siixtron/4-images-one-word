/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Screen/GameScreen.style` | `/Screen/GameScreen.style`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Screen/GameScreen` | `/Screen/GameScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Screen/GameScreen.style` | `/Screen/GameScreen.style`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Screen/GameScreen` | `/Screen/GameScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Screen/GameScreen.style${`?${string}` | `#${string}` | ''}` | `/Screen/GameScreen.style${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Screen/GameScreen${`?${string}` | `#${string}` | ''}` | `/Screen/GameScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Screen/GameScreen.style` | `/Screen/GameScreen.style`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Screen/GameScreen` | `/Screen/GameScreen`; params?: Router.UnknownInputParams; };
    }
  }
}
