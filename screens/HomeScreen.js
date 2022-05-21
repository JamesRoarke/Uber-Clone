import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView} from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slice/navSlice"; 


const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style ={tw`p-5`}>
               <Image  
                    style={{
                        width: 100,
                        height: 40,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
                    }}
               /> 
               <ScrollView keyboardShouldPersistTaps='always' and listViewDisplayed={false}>
                <GooglePlacesAutocomplete 
                    placeholder="Where From?"
                    style ={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18,
                            },
                        }}
                        onPress={(data, details = null) =>{
                            dispatch(
                                setOrigin({
                                    location: details.geometry.location,
                                    description: data.description
                            }))

                            dispatch(setDestination(null))
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={300}
                    />
                    </ScrollView>
                    
            </View>
            <NavOptions/>
            <NavFavourites  />
      </SafeAreaView>
    );
};

export default HomeScreen;
const styles = StyleSheet.create({});