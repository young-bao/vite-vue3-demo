import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
export interface State {
  number: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    number: 0,
  },
  modules: {},
});
export default store;
