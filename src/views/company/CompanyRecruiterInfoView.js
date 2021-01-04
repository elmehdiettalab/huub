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
import * as ImagePicker from "expo-image-picker";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";

const CompanyRecruiterInfoView = ({ route, navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const { email, password , confirmPwd } = route.params;
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null)
  const avatar = require("../../../assets/user.png"); 
  const avatarUri = '../../../assets/user.png'; 
  
  
  // *************** IMAGE PICKER FUNCTION **************
  // ********** CHOOSE A PHOTO FROM GALLERY ************* 
  const pickImage = () => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          //   alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      if (!result.cancelled) {
        setImage(result.uri);
        // console.log(result)
      }
    });
  };

  // **************** SIGN UP FUNCTION ******************
  const handleSignUp= () => {
    if (password === confirmPwd && image !== null) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          userCredentials.user.updateProfile({
            displayName: fname + lname,
            photoURL: image
          });
        })
        .then((userCredentials) => {
          userCredentials.user.updateProfile();
        })
        .catch((err) => setErrorMsg(err));
    }
    console.log(errorMsg)
    navigation.navigate("Login");
  }

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

      {/* ************* IMAGE PICKER ************* */}

      <View style={styles.imageViewerContainer}>
        <View style={styles.avatarContainer}>

          {image ? <Image style={styles.image} source={{uri: image}} />  :  <Image style={styles.image} source={require(avatarUri)} /> }

          <TouchableOpacity style={styles.iconCameraBtn} onPress={pickImage}>
            <Entypo style={styles.icon} name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ************* COMPANY NAME ************* */}

      <View style={styles.loginContainer}>
        <Text style={styles.emailTxt}>COMPANY NAME</Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          value={fname}
          onChangeText={setFname}
        />
        {/* ************* LAST NAME ************* */}

        <Text style={styles.emailTxt}>FIRST AND LAST NAME (RECRUITER) </Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          value={lname}
          onChangeText={setLname}
        />
        {/* ************* TAX IDENTIFICATION NUMBER ************* */}

        <Text style={styles.emailTxt}>TAX IDENTIFICATION NUMBER </Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          value={lname}
          onChangeText={setLname}
        />
        {/* ************* DUMMY TEST ************* */}

        {/* <Text>Email: {JSON.stringify(email)}</Text> */}
        {/* <Text>Pass: {JSON.stringify(password)}</Text> */}

        {/* ************* BUTTON NEXT ************* */}
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.buttonLoginBg}
            // onPress={handleSignUp}
            onPress={()=> navigation.navigate('CompanyEnableNotif')}
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
  imageViewerContainer: {
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
  },
  image: {
    height: 150,
    width:150,
    borderRadius: 20

  },
  iconCameraBtn: {
    position: "absolute",
    bottom: -10,
    right: -10,
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  icon: {
    alignSelf: "center",
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
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
export default CompanyRecruiterInfoView;
