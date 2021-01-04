import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Swipeable } from "react-native-gesture-handler";
import Swipeout from "react-native-swipeout";

import CardChat from "../../../../utils-components/CardChat";
const ChatListView = (props) => {
  const images = [
    {
      id: 2,
      img: require("../../../../../assets/instagram.png"),
      name: "Instagram Holding",
    },

    {
      id: 4,
      img: require("../../../../../assets/snap.png"),
      name: "Snapchat Ltd.",
    },
    {
      id: 5,
      img: require("../../../../../assets/spotify.png"),
      name: "Spotify",
    },
    {
      id: 6,
      img: require("../../../../../assets/starbucks.png"),
      name: "Starbucks",
    },
    {
      id: 1,
      img: require("../../../../../assets/adidas.png"),
      name: "Adidas Inc.",
    },
    {
      id: 3,
      img: require("../../../../../assets/rolex.png"),
      name: "Rolex Investements",
    },
  ];
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  let swipeoutBtns = [
    {
      text: "Button",
    },
  ];
  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>.huub</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          {images.map((e) => {
            return (

                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("ChatWindow", {
                      image: e.img,
                      name: e.name,
                    })
                  }
                >
                  <CardChat image={e.img} name={e.name} />
                </TouchableOpacity>

            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 82,
    width: "100%",
    backgroundColor: "#ddd",
  },
  titleHeader: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 85,
  },
});

export default ChatListView;
