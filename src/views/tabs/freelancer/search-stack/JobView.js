import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Entypo } from "@expo/vector-icons";

const JobView = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const { id, price, jobTitle, image } = props.route.params;
  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.chevronLeft}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>.huub</Text>
      </View>

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
          <Text style={styles.socName}>{jobTitle}</Text>

          <View style={styles.SecContainer}>
            <Text style={styles.title}>Description</Text>
            <View style={styles.skills}>
              <View style={styles.skill}>
                <Text>React</Text>
              </View>
              <View style={styles.skill}>
                <Text>MongoDB</Text>
              </View>
            </View>
            <Text style={styles.desc}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
          <View style={styles.buttonApplyView}>
          <TouchableOpacity style={styles.btnApplyContainer} onPress={() => props.navigation.navigate('AppliedFreelancer')}>
            <Text style={styles.txtApply}>Apply</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  domView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
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
  container: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 90
  },
  image: {
    width: 171,
    height: 171,
  },
  imageContainer: {
    width: 171,
    height: 171,
    marginBottom: 20,
  },
  socName: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "#423F55",
  },
  SecContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 40,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 50,
    color: "#423F55",
    marginBottom: 15,
  },
  skill: {
    width: 97,
    height: 26,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginRight: 10,
  },
  skills: {
    flexDirection: "row",
    marginBottom: 30,
  },
  desc: {
    fontFamily: "Poppins_400Regular",
    color: "#546E7A",
  },
  btnApplyContainer: {
    height: 62,
    width: 141,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    backgroundColor: '#D5DDE0'
  },
  buttonApplyView: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 30
  }, 
  txtApply: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#423F55",
  }
});
export default JobView;
