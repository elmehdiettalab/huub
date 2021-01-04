import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Entypo } from "@expo/vector-icons";
import Swipeout from "react-native-swipeout";

const CardChat = (props) => {
  const [swiped, setSwiped] = useState(false); 
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  let swipeoutBtns = [
    {
      text: "Delete",
      backgroundColor: "#FF0000"
    },
  ];
  if (!fontsLoaded) return <AppLoading />;
  return (
    <Swipeout
      style={{ marginBottom: 20 }}
      backgroundColor='transparent'
      left={swipeoutBtns}
    >
      <View style={ swiped ? styles.cardContainerSwiped : styles.cardContainer} >
        <View style={styles.col1}>
          {/* <Image style={{height:25, width:25}} source={props.image} /> */}
          <Image style={styles.imageSoc} source={props.image} />
          {/* <Text>{props.image}</Text> */}
        </View>
        <View style={styles.col2}>
          <Text style={styles.txt1}>{props.name}</Text>
          <Text style={styles.txt12}>Rabat, Morocco</Text>
        </View>
        <View style={styles.col3}>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </Swipeout>
  );
};
const styles = StyleSheet.create({
  cardContainerSwiped: {
    backgroundColor: "#FEFEFE",
    // borderRadius: 19 ,
    borderTopEndRadius: 19, 
    borderBottomEndRadius: 19, 
    // marginBottom: 20,
    flexDirection: "row",
    height: 122,
    width: 370,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.14,
    // shadowRadius: 6.27,

    // elevation: 10,
  },
  cardContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 19 ,
    flexDirection: "row",
    height: 122,
    width: 370,
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
    width: 60,
    height: 60,
  },
  txt1: {
    fontFamily: "Poppins_500Medium",
    color: "black",
  },
  txt12: {
    fontFamily: "Poppins_400Regular",
    color: "#ACAAAA",
  },
  txt2: {
    fontFamily: "Poppins_700Bold",
    color: "black",
  },
});
export default CardChat;
