export interface ICountry {
  name: IName
  borders?: string[]
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: ICurrencies
  idd: IIdd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Object[]
  translations: ITranslations
  latlng: number[]
  landlocked: boolean
  area: number
  demonyms: IDemonyms
  flag: string
  maps: IMaps
  population: number
  gini: IGini
  fifa: string
  car: ICar
  timezones: string[]
  continents: string[]
  flags: IFlags
  coatOfArms: ICoatOfArms
  startOfWeek: string
  capitalInfo: ICapitalInfo
  postalCode: IPostalCode
};

export interface IName {
  common: string
  official: string
  nativeName: Object[]
};

export interface ICurrencies {
  name: string;
};

export interface IIsk {
  name: string
  symbol: string
};

export interface IIdd {
  root: string
  suffixes: string[]
};

export interface ILanguages {
  isl: string
};

export interface ITranslations {
  ara: ITranslationProps
  bre: ITranslationProps
  ces: ITranslationProps
  cym: ITranslationProps
  deu: ITranslationProps
  est: ITranslationProps
  fin: ITranslationProps
  fra: ITranslationProps
  hrv: ITranslationProps
  hun: ITranslationProps
  ita: ITranslationProps
  jpn: ITranslationProps
  kor: ITranslationProps
  nld: ITranslationProps
  per: ITranslationProps
  pol: ITranslationProps
  por: ITranslationProps
  rus: ITranslationProps
  slk: ITranslationProps
  spa: ITranslationProps
  swe: ITranslationProps
  tur: ITranslationProps
  urd: ITranslationProps
  zho: ITranslationProps
};

export interface ITranslationProps {
  official: string
  common: string
};

export interface IDemonyms {
  eng: IDemonymsProps
  fra: IDemonymsProps
};

export interface IDemonymsProps {
  f: string
  m: string
};

export interface IMaps {
  googleMaps: string
  openStreetMaps: string
};

export interface IGini {
  "2017": number
};

export interface ICar {
  signs: string[]
  side: string
};

export interface IFlags {
  png: string
  svg: string
};

export interface ICoatOfArms {
  png: string
  svg: string
};

export interface ICapitalInfo {
  latlng: number[]
};

export interface IPostalCode {
  format: string
  regex: string
};
