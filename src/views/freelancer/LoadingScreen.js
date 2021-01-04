import React, {useEffect} from 'react';
import {SafeAreaView,View ,Text, ActivityIndicator} from 'react-native';
import * as firebase from "firebase";

function LoadingScreen(props) {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            props.navigation.navigate(user ? "Home" : "Landing")
        })
    }, [])
    return (
        <SafeAreaView>
            <Text>
                Loading... 
                <ActivityIndicator/>
            </Text>
        </SafeAreaView>
    );
}

export default LoadingScreen;