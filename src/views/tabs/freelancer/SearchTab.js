// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { AppLoading } from "expo";
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import Card from "../../../utils-components/Card";
// import { ScrollView } from "react-native-gesture-handler";

// const SearchTab = (props) => {
//   let [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_700Bold,
//   });
//   const images = [
//     ,
//     require("../../../../assets/adidas.png"),
//     ,
//     require("../../../../assets/instagram.png"),
//     ,
//     require("../../../../assets/rolex.png"),
//     ,
//     require("../../../../assets/snap.png"),
//     ,
//     require("../../../../assets/spotify.png"),
//     ,
//     require("../../../../assets/starbucks.png"),
//   ];
//   // const [img, setImage] = useState(image);
//   const [jobTitle, setJobTitle] = useState("Front End Developer");
//   const [price, setPrice] = useState(30);
//   if (!fontsLoaded) return <AppLoading />;
//   return (
//     <SafeAreaView>
//       <View style={styles.headerContainer}>
//         <Text style={styles.titleHeader}>.huub</Text>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.buttonGroupSearch}>
//           <TouchableOpacity style={styles.btnType2}>
//             <Text style={styles.txtBtn2}>Daily or week</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btnType}>
//             <Text style={styles.txtBtn}>Long term</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           {images.map((e) => {
//             return <TouchableOpacity>
//               <Card image={e} jobTitle={jobTitle} price={price} />
//             </TouchableOpacity>
//           })}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     height: 82,
//     width: "100%",
//     backgroundColor: "#ddd",
//   },
//   titleHeader: {
//     fontSize: 24,
//     fontFamily: "Poppins_700Bold",
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   buttonGroupSearch: {
//     flexDirection: "row",
//     marginBottom: 50,
//   },
//   btnType: {
//     width: 143,
//     height: 47,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//     borderRadius: 25,
//   },
//   txtBtn: {
//     fontFamily: "Poppins_700Bold",
//     fontSize: 18,
//     color: "#3E4958",
//   },
//   btnType2: {
//     backgroundColor: "#03c4a1",
//     width: 143,
//     height: 47,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//     borderRadius: 25,
//   },

//   txtBtn2: {
//     color: "#FFF",
//     fontFamily: "Poppins_700Bold",
//     fontSize: 18,
//   },
// });

// export default SearchTab;
