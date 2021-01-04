import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import * as firebase from "firebase";
import { connect } from "react-redux";
import { login , logout} from "../../user/userAction";
function HomeView(props) {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  let user;
  useEffect(() => {
    user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      setEmail(user.email);
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
      props.login(user);
    }
    // firebase.auth().signOut();
  }, [user]);

  const signout = () => {
    console.log("SIGNOUT");
    firebase.auth().signOut();
    setEmail('');
    setDisplayName("");
    setPhotoURL("");
    user = null
    props.logout();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hi {displayName}! {"\n"}
        Email : {email}
      </Text>

      <Image style={{ height: 150, width: 150 }} source={{ uri: photoURL }} />

      <TouchableOpacity style={{ backgroundColor: "DADADA" }} onPress={signout}>
        <Text>Logout</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={{ backgroundColor: "DADADA" }} onPress={() => props.login({email : "OK2", name: "OK2"})}>
        <Text>{props.user.email}</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  login: (usr) => dispatch(login(usr)),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
