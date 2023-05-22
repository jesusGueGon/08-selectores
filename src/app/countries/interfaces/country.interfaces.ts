export enum Region {
  Africa   = 'Africa',
  Amercias = 'Americas',
  Asia     = 'Asia',
  Europe   = 'Europe',
  Oceania  = 'Oceania',
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}


export interface Country {
  name:         Name;
  cca3:         string;
  status:       Status;
  unMember:     boolean;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  RSD?: All;
  EUR?: All;
  GBP?: All;
  JEP?: All;
  CZK?: All;
  ISK?: All;
  IMP?: All;
  PLN?: All;
  HUF?: All;
  ALL?: All;
  RUB?: All;
  BYN?: All;
  GGP?: All;
  DKK?: All;
  SEK?: All;
  CHF?: All;
  NOK?: All;
  BAM?: BAM;
  BGN?: All;
  RON?: All;
  GIP?: All;
  UAH?: All;
  MDL?: All;
  MKD?: All;
  FOK?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  srp?: string;
  swe?: string;
  est?: string;
  eng?: string;
  gle?: string;
  lav?: string;
  fra?: string;
  nrf?: string;
  ell?: string;
  cat?: string;
  nld?: string;
  ces?: string;
  slk?: string;
  isl?: string;
  glv?: string;
  deu?: string;
  ltz?: string;
  mlt?: string;
  pol?: string;
  hun?: string;
  sqi?: string;
  de?:  string;
  rus?: string;
  hrv?: string;
  bel?: string;
  nfr?: string;
  dan?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  nor?: string;
  bos?: string;
  tur?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  fin?: string;
  lit?: string;
  bul?: string;
  por?: string;
  ron?: string;
  spa?: string;
  cnr?: string;
  ukr?: string;
  lat?: string;
  mkd?: string;
  slv?: string;
  fao?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
