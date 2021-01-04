import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Entypo } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import 'expo-location'; 
const EnableLocationView = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const enableLocation = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    console.log(status);
    if (status !== "granted") {
      alert(
        "Hey! You might want to enable notifications for my app, they are good."
      );
    }
  };
  if (!fontsLoaded) return <AppLoading />;
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.chevronLeft}
          onPress={() => {
            navigation.navigate("Landing");
          }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>.huub</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.bgIcon}>
          <Entypo name="location-pin" size={28} color="white" />
        </View>
        <Text style={styles.text1}>Enable location</Text>
        <Text style={styles.text2}>
          For us to be able to show you job {'\n'} opportunities near you and{'\n'}  recommend
          you  for recruiters, you need enable location tracking on {'\n'} your device.
        </Text>

        <View style={styles.btnLoginView}>
          <TouchableOpacity
            style={styles.buttonLoginBg}
            onPress={() => enableLocation()}
          >
            <Text style={styles.buttonTxtLogin}>Enable Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSkip} onPress={() => navigation.navigate('CompletedProfile')}>
            <Text style={styles.buttonTxtSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    height: 82,
    width: "100%",
    backgroundColor: "#ddd",
  },
  titleHeader: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },
  chevronLeft: {
    padding: 20,
    width: "45%",
  },
  btnLoginView: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLoginBg: {
    backgroundColor: "#333333",
    height: 62,
    width: 221,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    marginTop: 70,
  },
  buttonSkip: {
    height: 62,
    width: 221,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    marginBottom: 30,
  },
  buttonTxtLogin: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
  },
  buttonTxtSkip: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "#000",
  },
  container: {
    padding: 30,
    paddingTop: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  bgIcon: {
    height: 63,
    width: 63,
    backgroundColor: "#74AA80",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 30,
  },
  text1: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
  },
  text2: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: "#546E7A",
  },
});
export default EnableLocationView;
