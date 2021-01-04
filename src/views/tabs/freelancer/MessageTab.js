// import React, { useEffect,useCallback,useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";
// import { AppLoading } from "expo";
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import { GiftedChat } from "react-native-gifted-chat";
// import { Entypo } from "@expo/vector-icons";

// const MessageTab = (props) => {
//   let [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_700Bold,
//   });
//   const [messages, setMessages] = useState([]);
//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: "Hello developer",
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: "React Native",
//           avatar: "https://placeimg.com/140/140/any",
//         },
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);
//   if (!fontsLoaded) return <AppLoading />;
//   return (
//     <>
//     <View>
//     <View style={styles.headerContainer}>
//         <TouchableOpacity
//           style={styles.chevronLeft}
//           onPress={() => {
//             props.navigation.navigate("ProfileTab");
//           }}
//         >
//           <Entypo name="chevron-left" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.titleHeader}>.huub</Text>
//       </View>

//       <View style={styles.containerImageSoc}> 
//         <Image style={styles.imageSoc} source={require('../../../../assets/user.png')} />
//         <Text style={styles.nameSocTxt}>Pestana Hotel Group</Text>
//       </View>

//       <View style={styles.divider}/>
//     </View>
//     <>
//       <GiftedChat
//         messages={messages}
//         onSend={(messages) => onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//     </>
//     </>
    
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     justifyContent: "flex-start",
//     alignItems: "center",
//     flexDirection: "row",
//     height: 82,
//     width: "100%",
//     backgroundColor: "#ddd",
//   },
//   titleHeader: {
//     fontSize: 24,
//     fontFamily: "Poppins_700Bold",
//   },
//   chevronLeft: {
//     padding: 20,
//     width: "45%",
//   },
//   imageSoc: {
//     width: 60,
//     height: 60,
//     borderRadius: 15,
//     marginBottom: 20
//   },
//   containerImageSoc: {
//     justifyContent: "center",
//     alignItems:'center',
//     padding: 20
//   },
//   nameSocTxt: {
//     fontFamily: 'Poppins_500Medium',
//     fontSize: 24
//   },
//   divider : {
//     alignSelf: "center",
//     height : 1,
//     width: '90%', 
//     backgroundColor: '#333',
//     marginBottom: 20
//   }
// });

// export default MessageTab;
