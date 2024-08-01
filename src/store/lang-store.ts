import { create } from "zustand";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Translations = typeof es & typeof en;

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

interface LanguageStore {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
  t: (key: NestedKeyOf<Translations>) => string;
}

const getNestedValue = (obj: any, path: string): string => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj) as string;
};

const useStore = create<LanguageStore>((set, get) => ({
  lang: "es",
  setLang: (lang) => set({ lang }),
  t: (key) => {
    const { lang } = get();
    const translations: Record<"es" | "en", Translations> = { es, en };
    return getNestedValue(translations[lang], key) || key;
  },
}));

export default useStore;
