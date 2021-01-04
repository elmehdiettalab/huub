import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import HeaderUtil from "../../utils-components/HeaderUtil";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const CompanyLandingView = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) return <AppLoading />;
  return (
    <SafeAreaView>
      <HeaderUtil />
      <View style={styles.container}>
        <Text style={styles.bigTxt}>
          Staffing{"\n"}shouldn't be{"\n"}hard work{" "}
        </Text>
        <Text style={styles.smallTxt}>
          Let Huub help fill your next shift from an {"\n"} on-demand pool of
          high-quality, local {"\n"} workers. Pricing is always transparent.
        </Text>
        <View style={styles.buttonGroupView}>
          <TouchableOpacity
            style={styles.buttonLoginBg}
            onPress={() => navigation.navigate("CompanyLogin")}
          >
            <Text style={styles.buttonTxtLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CompanyRegister")}>
            <Text style={styles.buttonTxtRegister}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.companyBtn} onPress={() => navigation.navigate('Landing')}>
            <Text style={styles.buttonTxtCompany}>I am a Job Seeker</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 40,
  },
  bigTxt: {
    fontSize: 50,
    fontFamily: "Poppins_700Bold",
  },
  smallTxt: {
    fontFamily: "Poppins_400Regular",
    lineHeight: 30,
    marginTop: 20,
    color: "#546E7A",
  },

  buttonGroupView: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLoginBg: {
    backgroundColor: "#333333",
    height: 62,
    width: 211,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    marginBottom: 30,
    marginTop: 70,
  },
  buttonTxtLogin: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
  },
  buttonTxtRegister: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "#333",
  },
  buttonTxtCompany: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "#333",
    fontSize: 16,
  },
  companyBtn: {
    marginTop: 90,
  },
});
export default CompanyLandingView;
