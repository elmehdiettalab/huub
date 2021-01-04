import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer,getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as firebase from "firebase";
import "firebase/firestore";
import { connect } from "react-redux";

import LandingView from "./src/views/freelancer/LandingView";
import LoginView from "./src/views/freelancer/LoginView";
import RegisterView from "./src/views/freelancer/RegisterView";
import ProfileInfoView from "./src/views/freelancer/ProfileInfoView";
import HomeView from "./src/views/freelancer/HomeView";
// import LoadingScreen from "./src/views/LoadingScreen";
import EnableNotifView from "./src/views/freelancer/EnableNotifView";
import EnableLocationView from "./src/views/freelancer/EnableLocationView";
import CompletedLoginView from "./src/views/freelancer/CompletedLoginView";
import RecoverMailView from "./src/views/freelancer/RecoverMailView";
import ResetPwdView from "./src/views/freelancer/ResetPwdView";
import CompanyLandingView from "./src/views/company/CompanyLandingView";
import CompanyLoginView from "./src/views/company/CompanyLoginView";
import CompanyRegisterView from "./src/views/company/CompanyRegisterView";
import CompanyRecruiterInfoView from "./src/views/company/CompanyRecruiterInfoView";
import CompanyRecoverMailView from "./src/views/company/CompanyRecoverMailView";
import CompanyResetPwdView from "./src/views/company/CompanyResetPwdView";
import CompanyEnableNotifView from "./src/views/company/CompanyEnableNotifView";
import CompanyCompleteView from "./src/views/company/CompanyCompleteView";
import MessageTab from "./src/views/tabs/freelancer/MessageTab";
import SearchTab from "./src/views/tabs/freelancer/SearchTab";
import ProfileTab from "./src/views/tabs/freelancer/ProfileTab";
import { MaterialIcons } from "@expo/vector-icons";
import SearchListView from "./src/views/tabs/freelancer/search-stack/SearchListView";
import JobView from "./src/views/tabs/freelancer/search-stack/JobView";
import ChatListView from "./src/views/tabs/freelancer/message-stack/ChatListView";
import ChatView from "./src/views/tabs/freelancer/message-stack/ChatView";
import AppliedFreelancerView from "./src/views/tabs/freelancer/search-stack/AppliedFreelancerView";
LogBox.ignoreAllLogs()
var firebaseConfig = {
  apiKey: "AIzaSyBmoVDVhmRqSPBLD_hY8sn9GS8IJ7IkOLE",
  authDomain: "huub-91728.firebaseapp.com",
  databaseURL: "https://huub-91728.firebaseio.com",
  projectId: "huub-91728",
  storageBucket: "huub-91728.appspot.com",
  messagingSenderId: "803901310936",
  appId: "1:803901310936:web:67c6f3d9da64d78daf94ad",
};
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchTab"
        component={SearchListView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Job"
        component={JobView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppliedFreelancer"
        component={AppliedFreelancerView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
// const getTabBarVisibility = (route) => {
//   console.log(route.name)
//   if (route.name === "ChatWindow") return true;
//   return false;
// };
const MessageStack = () => {
  return (
    <Stack.Navigator initialRouteName='MessageTab'>
      <Stack.Screen name='MessageTab' component={ChatListView} options={{headerShown: false}} />
      <Stack.Screen name='ChatWindow' component={ChatView} options={{headerShown: false}}/>
    </Stack.Navigator>
  ) ; 

}
const MainApplication = ({ user }) => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(user.isSignedIn);
  }, [user.isSignedIn]);
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'ChatWindow';
  
    if (routeName === 'ChatWindow') {
      return false;
    }
  
    return true;
  }
  return (
    <NavigationContainer>
      {!logged ? (
        // ******************* AUTHENTIFICATION ****************
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={LandingView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterView}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProfileInfo"
            component={ProfileInfoView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnableNotification"
            component={EnableNotifView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnableLocation"
            component={EnableLocationView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompletedProfile"
            component={CompletedLoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecoveryMail"
            component={RecoverMailView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPwdView}
            options={{ headerShown: false }}
          />
          {/* ******************** COMPANY VIEWS *********************** */}

          <Stack.Screen
            name="CompanyLanding"
            component={CompanyLandingView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyLogin"
            component={CompanyLoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyRegister"
            component={CompanyRegisterView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyRecruiter"
            component={CompanyRecruiterInfoView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyRecoverMail"
            component={CompanyRecoverMailView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyResetPwd"
            component={CompanyResetPwdView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyEnableNotif"
            component={CompanyEnableNotifView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyComplete"
            component={CompanyCompleteView}
            options={{ headerShown: false }}
          />
          {/* ******************** COMPANY VIEWS *********************** */}
        </Stack.Navigator>
      ) : (
        // ******************* MAIN APP ************************
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "SearchTab") {
                iconName = "search";
              } else if (route.name === "MessageTab") {
                iconName = "chat";
              } else if (route.name === "ProfileTab") {
                iconName = "account-circle";
              }

              // You can return any component that you like here!
              return <MaterialIcons name={iconName} size={28} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#03c4a1",
            inactiveTintColor: "gray",
            showLabel: false,
          }}
        >
          <Tab.Screen
            name="SearchTab"
            component={SearchStack}
            // options={({ route }) => ({
            //   tabBarVisible: getTabBarVisibility(route),
            // })}
          />
          <Tab.Screen
            name="MessageTab"
            component={MessageStack}
            options={({ route }) => ({
              tabBarVisible: getTabBarVisibility(route)
            })}
          />
          <Tab.Screen name="ProfileTab" component={ProfileTab} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainApplication);
