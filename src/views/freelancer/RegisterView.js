import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
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
const RegisterView = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const isShown = <Entypo name="eye" size={18} color="#97ADB6" />;
  const isHidden = <Entypo name="eye-with-line" size={18} color="#97ADB6" />;
  const [icon, setIcon] = useState(isShown);
  const [flag, setFlag] = useState(null);
  const checked = <View style={styles.radioButtonChecked} />;
  const unchecked = <View style={styles.radioButtonUnChecked} />;
  const [isChecked, setIsChecked] = useState(true);
  const [radioBtn, setRadioBtn] = useState(unchecked);
  //   Inputs variables;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [fname, setFname] = useState("Mehdi");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    console.log(errorMsg);
  }, [errorMsg]);

  const showPassword = () => {
    setFlag(!flag);
    flag ? setIcon(isShown) : setIcon(isHidden);
  };

  const switchRadioBtn = () => {
    console.log(isChecked)
    setIsChecked(!isChecked);
    isChecked ? setRadioBtn(checked) : setRadioBtn(unchecked);
  };

  const handleSignup = () => {
    if (password === confirmPwd) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          userCredentials.user.updateProfile({
            displayName: fname,
            photoURL: '../../assets/user.png'
          });
        })
        .then((userCredentials) => {
          userCredentials.user.updateProfile();
        })
        .catch((err) => setErrorMsg(err));
    }
    console.log(errorMsg)
    navigation.navigate("Login");
  };

  if (!fontsLoaded) return <AppLoading />;
  return (
    <SafeAreaView>
      {/* *************** HEADER ******************* */}
      {/* ****************************************** */}
  

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

      {/* *************** EMAIL ******************* */}

      <View style={styles.loginContainer}>
        <Text style={styles.emailTxt}>EMAIL</Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* *************** PASSWORD ******************* */}

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

        {/* *************** CONFIRM PASSWORD ******************* */}

        <Text style={styles.emailTxt}>REPEAT PASSWORD</Text>
        <View style={styles.pwdView}>
          <TextInput
            secureTextEntry={flag}
            style={styles.emailInput}
            autoCapitalize="none"
            value={confirmPwd}
            onChangeText={setConfirmPwd}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => showPassword()}
          >
            {icon}
          </TouchableOpacity>
        </View>

        {/* *************** TERMS AND AGREEMENTS ******************* */}

        <View style={styles.termsView}>
          <TouchableOpacity onPress={() => switchRadioBtn()}>
            {radioBtn}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.termsTxt}>
              I have read and accepted the Terms of Use
            </Text>
          </TouchableOpacity>
        </View>

        {/* *************** BUTTONS NEXT ******************* */}

        <View style={styles.btnLoginView}>
          <TouchableOpacity
            style={styles.buttonLoginBg}
            onPress={() => navigation.navigate('ProfileInfo', {email, password,confirmPwd} )}
            // onPress={handleSignup}
          >
            <Text style={styles.buttonTxtLogin}>Next</Text>
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
  termsView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 50,
  },
  termsTxt: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    marginLeft: 15,
    color: "#546E7A",
  },
  btnLoginView: {
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonChecked: {
    width: 20,
    height: 20,
    backgroundColor: "#74AA80",
    borderRadius: 100,
  },
  radioButtonUnChecked: {
    width: 20,
    height: 20,
    backgroundColor: "#DADADA",
    borderRadius: 100,
  },
});
export default RegisterView;
