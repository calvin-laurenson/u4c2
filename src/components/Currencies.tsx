import React from "react";
import { useQuery } from "react-query";
import { Text, VirtualizedList } from "react-native";
import CurrencyCell from "./CurrencyCell";
import useCurrencies, { CurrencyData, CurrencyDataArray, CurrencyDataObject } from "../hooks/useCurrencies";

export default function Currencies({data} : {data: CurrencyDataArray}) {

  

  

  return (
    <VirtualizedList
      data={data}
      initialNumToRender={26}
      renderItem={({item}: {item: CurrencyData}) => <CurrencyCell item={item} />}
      keyExtractor={(item: CurrencyData) => item.symbol}
      getItemCount={() => data.length}
      getItem={(arr, index) => arr[index]}
    />
  );
}



