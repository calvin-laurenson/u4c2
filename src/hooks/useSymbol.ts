import { useQuery } from "react-query";

export default function useSymbol(symbol: string) {
  const query = useQuery<SymbolData, Error>(["symbol", symbol], async () => {
    return (
      await (
        await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${symbol}.min.json`
        )
      ).json()
    )[symbol!] as SymbolData;
  });

  return {
    ...query,
    data:
      query.data != undefined ? convertConversionsData(query.data) : undefined,
  };
}
function convertConversionsData(data: SymbolData) {
  const dataArray: SymbolDataArray = [];
  for (const k in data) {
    if (Object.prototype.hasOwnProperty.call(data, k)) {
      const e = data[k];
      dataArray.push({ amount: e, symbol: k });
    }
  }
  return dataArray;
}

export type SymbolData = {
  [key: string]: number;
};

export type SymbolDataItem = { symbol: string; amount: number };
export type SymbolDataArray = SymbolDataItem[];
