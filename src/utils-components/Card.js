import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const Card = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.col1}>
        {/* <Image style={{height:25, width:25}} source={props.image} /> */}
        <Image style={styles.imageSoc} source={props.image} />
        {/* <Text>{props.image}</Text> */}
      </View>
      <View style={styles.col2}>
        <Text style={styles.txt1}>{props.jobTitle}</Text>
        <Text style={styles.txt12}>Rabat, Morocco</Text>
      </View>
      <View style={styles.col3}>
        {props.term ? <Text style={styles.txt2}> ${props.price}/hr</Text> : <Text style={styles.txt2}> ${props.price}</Text>}
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 19,
    flexDirection: "row",
    marginBottom: 20,
    height: 84,
    width: 353,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,

    elevation: 10,
  },
  col1: {
    height: "100%",
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  col2: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  col3: {
    height: "100%",
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageSoc: {
    width: 40,
    height: 40,
  },
  txt1:{
    fontFamily: 'Poppins_500Medium',
    color: 'black'
  }, 
  txt12: {
    fontFamily: 'Poppins_400Regular',
    color: '#ACAAAA'
  }, 
  txt2: {
    fontFamily: 'Poppins_700Bold',
    color: 'black'
  }
});
export default Card;
