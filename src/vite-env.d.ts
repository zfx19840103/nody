/// <reference types="vite/client" />
declare module "vuex" {
   export * from "vuex/types/index.d.ts";
   export * from "vuex/types/helpers.d.ts";
   export * from "vuex/types/logger.d.ts";
   export * from "vuex/types/vue.d.ts";
}
declare module '*.vue' {
   import type { DefineComponent } from 'vue'
   const component: DefineComponent<{}, {}, any>
   export default component
}
declare module '*.vue' {
   import type { DefineComponent } from 'vue'
   const component: ComponentOptions | ComponentOptions['setup']
   export default component
}