import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { SymbolDataItem } from "../hooks/useSymbol";

export default function ConversionCell({ item }: { item: SymbolDataItem }) {

  return (
    <Link to={`/symbol/${item.symbol}`}>
      <View style={styles.container}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.symbol}>{item.symbol}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "30px",
    width: "100%",
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 3,
    marginBottom: 3,
    paddingVertical: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  amount: {
    marginLeft: 20,
  },
  symbol: {
    marginRight: 20,
  },
});
