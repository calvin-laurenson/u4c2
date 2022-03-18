import React from "react";
import { useParams } from "react-router-native";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import Conversions from "../components/Conversions";
import useSymbol from "../hooks/useSymbol";

export default function SymbolPage() {
  const { symbol } = useParams();
  if (!symbol) return <Text>No symbol in url</Text>;
  

  const { data, isLoading, error } = useSymbol(symbol);

  if (isLoading) return <Text>Loading</Text>;
  if (!data) return <Text>Error: {error}</Text>;
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View style={styles.header}>
        <Text style={styles.symbolText}>
          {symbol}
        </Text>
        </View>
        <View>

      <Conversions data={data}  />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ header: {flex: 1, height: 50, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column"}, symbolText: {fontSize: 20}});