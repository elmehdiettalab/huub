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
const LandingView = ({navigation}) => {
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
        <Text style={styles.bigTxt}>Work in{"\n"}your terms</Text>
        <Text style={styles.smallTxt}>
          Don’t let schedules run your life.{"\n"} Huub connects you with
          immediate hourly{"\n"} or daily jobs, allowing you{"\n"} to work where
          you want, when you want, for however you want.
        </Text>
        <View style={styles.buttonGroupView}>
          <TouchableOpacity style={styles.buttonLoginBg} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.buttonTxtLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonTxtRegister}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.companyBtn} onPress={() => navigation.navigate('CompanyLanding')}>
            <Text style={styles.buttonTxtCompany}>I am a Company</Text>
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
    fontSize: 16
  },
  companyBtn: {
      marginTop: 90,
      
  }
});
export default LandingView;
