import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slice/navSlice';

export default function RideCompeleted() {

    return (
        <SafeAreaView> 
             <LottieView
                style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
                />
           <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center"}}>
                Your Driver Is on the way
            </Text>

            <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/car.json")}
            autoPlay
            speed={0.5}
          />
        </SafeAreaView>
    );
};