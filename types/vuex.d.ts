import { Store } from 'vuex'
import type { State } from '../src/store/index';

declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}