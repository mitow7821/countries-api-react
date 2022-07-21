interface CountryType {
  name: {
    common: string;
    nativeName: Record<
      string,
      {
        common: string;
      }
    >;
  };
  population: number;
  region: string;
  capital: string;
  subregion: string;
  tld: string[];
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  languages: Record<string, string>;
  borders: string[] | undefined;
  cca3: string;
  flags: {
    png: string;
    svg: string;
  };
}

type CountriesType = CountryType[] | null;

export type { CountryType, CountriesType };
