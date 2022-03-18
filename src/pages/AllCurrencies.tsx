import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import Currencies from "../components/Currencies";
import useCurrencies from "../hooks/useCurrencies";

export default function AllCurrencies() {

  const { data, isLoading, error, currencyArray } = useCurrencies()
  

  if (isLoading) return <Text>Loading</Text>;
  if (!data || !currencyArray) return <Text>Error</Text>;
    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Currencies data={currencyArray} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: {flex: 1} });
