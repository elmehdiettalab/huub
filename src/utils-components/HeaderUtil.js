import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const HeaderUtil = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>.huub</Text>
      </View>
    );
  
};
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 82,
    width: "100%",
    backgroundColor: "#ddd"
  },
  titleHeader: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold'
  },
});
export default HeaderUtil;
