import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as ImagePicker from "expo-image-picker";
import { Entypo, AntDesign } from "@expo/vector-icons";
// import { Picker } from "@react-native-community/picker";
import DropDownPicker from "react-native-dropdown-picker";
import {connect} from 'react-redux'; 
import {logout,login, addInfo} from '../../../user/userAction'; 
import * as firebase from "firebase";
import "firebase/firestore";

// ***********************************************
// ************* START COMPONENT *****************
// ***********************************************

const ProfileTab = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const [image, setImage] = useState(null);
  const [cover, setCover] = useState(null);
  const [name, setName] = useState("Kristin Wester");
  const [bio, setBio] = useState(
    "Portuguese native looking to grow professionally"
  );
  const [graduate, setGraduate] = useState(
    "Master at University of Wakanda"
  );
  const [experience, setExperience] = useState(
    "Work at APOLO 16 "
  );
  const [lang, setLang] = useState("english");
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [jobs, setJobs] = useState([]); 
  const [job,setJob] = useState(''); 
  let i=0,j=0; 
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const DB = firebase.firestore(); 
  let user;
  useEffect(() => {
    user = firebase.auth().currentUser;
    // console.log(user);
    if (user) {
      setEmail(user.email);
      setName(user.displayName);
      setImage(user.photoURL);
      props.login({email,displayName,photoURL});
    }
    // firebase.auth().signOut();
  }, [user]);

  const signout = () => {
    setEmail('');
    setDisplayName("");
    setPhotoURL("");
    user = null
    props.logout();
    firebase.auth().signOut();
    
  };
  // *************** IMAGE PICKER FUNCTION **************
  // ********** CHOOSE A PHOTO FROM GALLERY *************
  const pickImage = (e) => {
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
      if (!result.cancelled && e === "avatar") {
        setImage(result.uri);
      }

      if (!result.cancelled && e === "cover") {
        setCover(result.uri);
      }
    });
  };

  // **************** ADD SKILL *************************
  // **************** ADD SKILL *************************
  const addSkill = () => {
    setSkills((old) => [...old, skill]);
    setSkill('');
    console.log("Added! ");
  };
  // **************** ADD JOB *************************
  // **************** ADD JOB *************************
  const addJob = () => {
    setJobs(old => [...old, job] ); 
    setJob(''); 
  }
  // **************** LOG STATE *************************
  // **************** LOG STATE  *************************
  const updateInfo = () => {
    // props.addInfo({image,cover,name,bio,graduate,experience,skills,jobs})
    DB.collection('users').doc(email).set({
      email,image,cover,name,bio,graduate,experience,skills,jobs
    })
  }

  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={{ paddingTop: 40 }}>
      {/* ******************* HEADER HUUB ************************ */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleHeader}>.huub</Text>
      </View>

      {/* ******************* START SCROLLVIEW ************************ */}
      <ScrollView>
        {/* ******************* COVER IMAGE ************************ */}
        {/* ******************* COVER IMAGE ************************ */}

        <View style={styles.coverContainer}>
          {/* <Image
            style={styles.coverImage}
            source={require("../../../../assets/cover.jpg")}
          /> */}

          {cover ? (
            <Image style={styles.coverImage} source={{ uri: cover }} />
          ) : (
            <Image
              style={styles.coverImage}
              source={require("../../../../assets/cover1.jpg")}
            />
          )}
          <TouchableOpacity
            style={styles.iconCameraBtn}
            onPress={() => pickImage("cover")}
          >
            <Entypo style={styles.icon} name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* ******************* AVATAR IMAGE ************************ */}
        {/* ******************* AVATAR IMAGE ************************ */}

        <View style={styles.avatarContainer}>
          {image ? (
            <Image style={styles.avatarImage} source={require('../../../../assets/avatar1.jpg')} />
            // <Image style={styles.avatarImage} source={{ uri: image }} />
          ) : (
            <Image
              style={styles.avatarImage}
              source={require("../../../../assets/user.png")}
            />
          )}

          <TouchableOpacity
            style={styles.iconCameraBtn2}
            onPress={() => pickImage("avatar")}
          >
            <Entypo style={styles.icon} name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* ******************* UNDER IMAGES ************************ */}
        <View style={styles.infoContainer}>
          {/* ******************* NAME ************************ */}
          {/* ******************* NAME ************************ */}
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={setName}
            editable={true}
          />
          {/* ******************* BIO ************************ */}
          {/* ******************* BIO ************************ */}
          <TextInput
            style={styles.bioInput}
            value={bio}
            onChangeText={setBio}
            editable={true}
            multiline={true}
          />
          <View>
            {/* ******************* LANGUAGES ************************ */}
            {/* ******************* LANGUAGES ************************ */}
            <Text style={styles.langText}>Languages</Text>
            <DropDownPicker
              items={[
                { label: "English", value: "english" },
                { label: "Arabic", value: "arabic", selected: true },
              ]}
              style={styles.dropDown}
              defaultIndex={0}
              onChangeItem={(item) => setLang(item.value)}
            />
            {/* ******************* GRADUATE************************ */}
            {/* ******************* GRADUATE************************ */}

            <Text style={styles.langText}>Graduate</Text>
            <TextInput
              style={styles.bioInput}
              value={graduate}
              onChangeText={setGraduate}
              editable={true}
              multiline={true}
            />
            {/* ******************* SKILLS ************************ */}
            {/* ******************* SKILLS ************************ */}

            <Text style={styles.langText}>Skills</Text>
            <View style={styles.skillsList}>
              {/* <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkillsEdit}>
                <Text>engineer</Text>
                <TouchableOpacity>
                  <AntDesign name="closecircle" size={12} color="red" />
                </TouchableOpacity>
              </View> */}

              {skills.map((s) => {
                return  <View key={i++ } style={styles.itemSkillsEdit}>
                  <Text>{s}</Text>
                  <TouchableOpacity >
                    <AntDesign name="closecircle" size={12} color="red" />
                  </TouchableOpacity>
                </View>;
              })}

              {/* ADD SKILL */}
              <View style={styles.itemSkillsEditAdd}>
                <TextInput
                  placeholder="add more"
                  value={skill}
                  onChangeText={setSkill}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={addSkill}>
                  <AntDesign name="pluscircle" size={12} color="grey" />
                </TouchableOpacity>
              </View>
            </View>

            {/* ******************* EXPERIENCE ************************ */}
            {/* ******************* EXPERIENCE ************************ */}

            <Text style={styles.langText}>Experience</Text>
            <TextInput
              style={styles.bioInput}
              value={experience}
              onChangeText={setExperience}
              editable={true}
              multiline={true}
            />

            {/* ******************* LOOKING JOBS ************************ */}
            {/* ******************* LOOKING JOBS ************************ */}
            <Text style={styles.langText}>Looking jobs</Text>
            <View style={styles.skillsList}>
              {/* <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkills}>
                <Text>engineer</Text>
              </View>
              <View style={styles.itemSkillsEdit}>
                <Text>engineer</Text>
                <TouchableOpacity>
                  <AntDesign name="closecircle" size={12} color="red" />
                </TouchableOpacity>
              </View> */}

              {jobs.map(jo => {
                return <View key={j++} style={styles.itemSkillsEdit}>
                <Text>{jo}</Text>
                <TouchableOpacity>
                  <AntDesign name="closecircle" size={12} color="red" />
                </TouchableOpacity>
              </View>
              })}


              <View style={styles.itemSkillsEditAdd}  >
                <TextInput placeholder="add more" value={job} onChangeText={setJob} autoCapitalize="none"/>
                <TouchableOpacity onPress={addJob}>
                  <AntDesign name="pluscircle" size={12} color="grey" />
                </TouchableOpacity>
              </View>
            </View>

            {/* ****************** BUTTON EDIT ******************** */}
            {/* ****************** BUTTON EDIT ******************** */}
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.buttonLoginBg} onPress={updateInfo}>
                <Text style={styles.buttonTxtLogin}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLogout} onPress={signout}>
                <Text style={styles.buttonTxtLogout}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
  coverContainer: {
    width: "100%",
    height: 175,
  },
  coverImage: {
    height: 175,
    width: "100%",
  },
  avatarContainer: {
    height: 171,
    width: 171,
    alignSelf: "center",
    top: -90,
  },
  avatarImage: {
    width: 171,
    height: 171,
    borderRadius: 20,
  },
  iconCameraBtn: {
    position: "absolute",
    top: 10,
    right: 10,
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
  iconCameraBtn2: {
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
  nameInput: {
    width: "100%",
    height: 60,
    textAlign: "center",
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    color: "#423F55",
  },
  bioInput: {
    width: "100%",
    height: 54,
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#546E7A",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  infoContainer: {
    top: -90,
    padding: 30,
  },
  langText: {
    fontSize: 30,
    fontFamily: "Poppins_500Medium",
    color: "#333333",
    marginBottom: 10,
  },
  dropDown: {
    height: 44,
    color: "#03c4a1",
    marginBottom: 20,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemSkills: {
    height: 26,
    width: 97,
    borderWidth: 2,
    borderColor: "#03c4a1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  itemSkillsEdit: {
    height: 26,
    width: 97,
    borderWidth: 1,
    borderColor: "#03c4a1",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  itemSkillsEditAdd: {
    height: 26,
    width: 97,
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    padding: 5,
  },
  buttonLoginBg: {
    backgroundColor: "#333333",
    height: 62,
    width: 211,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    // marginBottom: 30,
    marginTop: 70,
  },
  buttonLogout: {
    height: 62,
    width: 211,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
  },
  buttonTxtLogin: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
  },
  buttonTxtLogout: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "black",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
});
const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = (dispatch) => ({
  login: (usr) => dispatch(login(usr)),
  logout: () => dispatch(logout()),
  addInfo: (info) => dispatch(addInfo(info)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTab);
