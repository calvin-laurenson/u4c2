import { useQuery } from "react-query";

export default function useCurrencies() {
  const query = useQuery<CurrencyDataObject, Error>(
    "currencies",
    async () =>
      (await (
        await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
        )
      ).json()) as CurrencyDataObject
  );

  return {...query, currencyArray: query.data != undefined ? convertCurrenciesData(query.data) : undefined};
}

function convertCurrenciesData(data: CurrencyDataObject) {
    const dataArray: CurrencyDataArray = [];
    for (const k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        const e = data[k];
        dataArray.push({ name: e, symbol: k });
      }
    }
    return dataArray;
  }
  

export type CurrencyDataObject = {
  [key: string]: string;
};

export type CurrencyData = {
  symbol: string;
  name: string;
};

export type CurrencyDataArray = CurrencyData[];
