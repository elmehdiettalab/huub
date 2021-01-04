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
import { AntDesign } from "@expo/vector-icons";
const AppliedFreelancerView = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.container}>
        <View style={styles.bgIcon}>
          <AntDesign name="star" size={28} color="white" />
        </View>
        <Text style={styles.buttonTxtLogin}>Applied successfully!</Text>
        <Text style={styles.btnDesc}>Your profile is shared with the recruiter.</Text>
        <TouchableOpacity style={styles.btnDone} onPress={() =>props.navigation.navigate('SearchTab')}>
            <Text style={styles.txtDone}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonTxtLogin: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#000",
    marginBottom: 10
  },
  btnDesc : {
    fontFamily: "Poppins_400Regular",
    color: '#546E7A'
  },
  btnDone: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 90,
    backgroundColor: '#D5DDE0', 
    height: 56,
    width: 120,
    borderRadius: 50

  }, 
  txtDone: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#423F55",
  }
});

export default AppliedFreelancerView;
