/// <reference types="vite/client" />

/**
 * alias of vite-plugin-monkey/dist/client
 */
declare module '$' {
  export * from 'vite-plugin-monkey/dist/client';
  import type { MonkeyWindow } from 'vite-plugin-monkey/dist/client';
  import type JqueryT from 'jquery';
  export const monkeyWindow: MonkeyWindow & {
    layer: any;
    $: typeof JqueryT;
  };
}

declare module 'layer-src' {
  const layer: any;
  export default layer;
}
