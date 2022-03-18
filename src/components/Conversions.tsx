import React from "react";
import { VirtualizedList } from "react-native";
import { SymbolData, SymbolDataArray, SymbolDataItem } from "../hooks/useSymbol";
import ConversionCell from "./ConversionCell";

export default function Conversions({ data }: { data: SymbolDataArray }) {
  return <VirtualizedList 
    data={data}
    initialNumToRender={20}
    renderItem={({item}: {item: SymbolDataItem}) => <ConversionCell item={item} />}
    keyExtractor={(item: SymbolDataItem) => item.symbol}
    getItemCount={() => data.length}
    getItem={(data, index) => data[index]}
  />;
}


