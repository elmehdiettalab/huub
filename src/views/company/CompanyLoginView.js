import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
const CompanyLoginView = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const isShown = <Entypo name="eye" size={18} color="#97ADB6" />;
  const isHidden = <Entypo name="eye-with-line" size={18} color="#97ADB6" />;
  const [icon, setIcon] = useState(isShown);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    console.log(errorMsg);
  }, [errorMsg]);

  const showPassword = () => {
    setFlag(!flag);
    flag ? setIcon(isShown) : setIcon(isHidden);
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((loggedInUser) => {
        {
          console.log(loggedInUser);
          props.navigation.navigate("Home");
        }
      })
      .catch((eror) => {
        console.warn("Login fail!! ");
      });
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

      <View style={styles.loginContainer}>
        <Text style={styles.emailTxt}>WORK EMAIL</Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.emailTxt}>PASSWORD</Text>
        <View style={styles.pwdView}>
          <TextInput
            secureTextEntry={flag}
            style={styles.emailInput}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => showPassword()}
          >
            {icon}
          </TouchableOpacity>
        </View>
        <View style={styles.forgotView}>
          <TouchableOpacity onPress={() => navigation.navigate("CompanyRecoverMail")}>
            <Text style={styles.forgotTxt}>RECOVER PASSWORD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnLoginView}>
          <TouchableOpacity style={styles.buttonLoginBg} onPress={handleLogin}>
            <Text style={styles.buttonTxtLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// ************ StyleSheet ******************$
// ******************************************$
// ******************************************$
// ******************************************$

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
  loginContainer: {
    padding: 40,
  },
  emailTxt: {
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
  emailInput: {
    width: "100%",
    backgroundColor: "#DADADA",
    height: 44,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 0.4,
    borderColor: "#ccc",
    padding: 10,
    fontFamily: "Poppins_400Regular",
  },
  pwdView: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    padding: 13,
  },
  forgotView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  forgotTxt: {
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
  },
  btnLoginView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CompanyLoginView;
