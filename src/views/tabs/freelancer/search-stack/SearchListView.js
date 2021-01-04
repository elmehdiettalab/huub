import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
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
import Card from "../../../../utils-components/Card";
import { ScrollView } from "react-native-gesture-handler";

const SearchListView = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const images = [
    {
      id: 1,
      img: require("../../../../../assets/adidas.png"),
      job: "Front End Developer",
      price: 30,
    },
    {
      id: 2,
      img: require("../../../../../assets/instagram.png"),
      job: "UI Designer",
      price: 40,
    },
    {
      id: 3,
      img: require("../../../../../assets/rolex.png"),
      job: "Data Analyst",
      price: 50,
    },
    {
      id: 4,
      img: require("../../../../../assets/snap.png"),
      job: "Full Stack Developer",
      price: 60,
    },
    {
      id: 5,
      img: require("../../../../../assets/spotify.png"),
      job: "Security Admin",
      price: 70,
    },
    {
      id: 6,
      img: require("../../../../../assets/starbucks.png"),
      job: "Ads Expert",
      price: 16,
    },
  ];
  const imagesLongTerm = [
    {
      id: 2,
      img: require("../../../../../assets/instagram.png"),
      job: "UX Designer",
      price: 4000,
    },
    {
      id: 4,
      img: require("../../../../../assets/snap.png"),
      job: "Analytics Manager",
      price: 6000,
    },
    {
      id: 5,
      img: require("../../../../../assets/spotify.png"),
      job: "CEO Manager",
      price: 9000,
    },
    {
      id: 6,
      img: require("../../../../../assets/starbucks.png"),
      job: "Ads Expert",
      price: 1600,
    },
  ];
  const [tab, setTab] = useState(0);
  // const [img, setImage] = useState(image);
  const [jobTitle, setJobTitle] = useState("Front End Developer");
  const [price, setPrice] = useState(30);
  if (!fontsLoaded) return <AppLoading />;
  return (
    // *************** HEADER ************************
    // *************** HEADER ************************
    <View style={{ flex: 1, paddingTop: 40 }}>
      {/* *************** HEADER ************************ */}
      {/* *************** HEADER ************************ */}
      <View style={ styles.headerContainer}>
        <Text style={styles.titleHeader}>.huub</Text>
      </View>
      {/* *************** VIEW ******************** */}
      {/* *************** VIEW ******************** */}
      <View style={styles.container}>
        <View style={styles.buttonGroupSearch}>
          {/* *************** FIRST BUTTON  ************************ */}
          {/* *************** FIRST BUTTON  ************************ */}

          <TouchableOpacity style={!tab ? styles.btnTypeFocused : styles.btnType} onPress={()=>setTab(0)}>
            <Text style={!tab ? styles.txtBtnFocused : styles.txtBtn}>Daily or week</Text>
          </TouchableOpacity>

          {/* *************** SECOND BUTTON  ************************ */}
          {/* *************** SECOND BUTTON  ************************ */}
          <TouchableOpacity style={tab ? styles.btnTypeFocused : styles.btnType} onPress={()=>setTab(1)}>
            <Text style={tab ? styles.txtBtnFocused : styles.txtBtn}>Long term</Text>
          </TouchableOpacity>
        </View>

        {/* *************** SCROLLVIEW ******************** */}
        {/* *************** SCROLLVIEW ******************** */}
        <ScrollView>
          
          {
          
          !tab ? images.map((e) => {
            return (
              <TouchableOpacity
                key={e.id}
                onPress={() =>
                  props.navigation.navigate("Job", {
                    image: e.img,
                    jobTitle: e.job,
                    id: e.id,
                    price: e.price,
                  })
                }
              >
                <Card image={e.img} jobTitle={e.job} price={e.price} term={true} />
              </TouchableOpacity>
            );
          })
           : 
           imagesLongTerm.map((e) => {
            return (
              <TouchableOpacity
                key={e.id}
                onPress={() =>
                  props.navigation.navigate("Job", {
                    image: e.img,
                    jobTitle: e.job,
                    id: e.id,
                    price: e.price,
                  })
                }
              >
                <Card image={e.img} jobTitle={e.job} price={e.price} />
              </TouchableOpacity>
            );
          })

          }
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
    padding: 20,
  },
  buttonGroupSearch: {
    flexDirection: "row",
    marginBottom: 50,
  },
  btnType: {
    width: 143,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 25,
  },
  txtBtn: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#3E4958",
  },
  btnTypeFocused: {
    backgroundColor: "#03c4a1",
    width: 143,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 25,
  },

  txtBtnFocused: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
});

export default SearchListView;
