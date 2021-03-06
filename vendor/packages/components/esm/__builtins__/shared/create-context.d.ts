import type { DefineComponent } from 'vue';
import type { InjectionKey, Ref } from 'vue';
export declare type CreateContext<T> = {
  Provider: DefineComponent;
  Consumer: DefineComponent;
  injectKey: InjectionKey<Ref<T>>;
};
export declare const createContext: <T>(defaultValue?: T) => CreateContext<T>;
export declare const useContext: <T>(context: CreateContext<T>) => any;
