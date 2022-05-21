import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "react-native-elements";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from "react-native-elements";


export default function SearchBar({ cityHandler }){
    
    return (
        <View style={{
            marginTop: 15, 
            flexDirection: "row"
        }}> 
            <GooglePlacesAutocomplete
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                    
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={300}
                placeholder="Search"

                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    },
                }}

                renderLeftButton ={() => (
                    <View> 
                       <Icon name="location-pin"  size={24}/>
                    </View>
                )}
            />
        </View>
    )
}