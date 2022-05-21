import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slice/navSlice';
import firebase from 'firebase'
import 'firebase/firestore';

const data =[
    {
        id:"Uber_x",
        title: "UberX",
        multiplier: 1, 
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id:"Uber_xl",
        title: "Uber XL",
        multiplier: 1.2, 
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id:"Uber_lux",
        title: "Uber LUX",
        multiplier: 1.75, 
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    },

];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    const addOrderToFireBase = () => {
        const db = firebase.firestore();
        db.collection("rides")
          .add({
            travelTimeInformation: travelTimeInformation,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          }).then(() => {
                
                navigation.navigate("RideOrdered");
 
          });  
    };
    
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard") }
                    style={tw`absolute left-5 -mt-6 rounded-full z-50`}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center text-xl -mt-6 `}> Select A Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item: { id, title, multiplier, image }, item}) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-6 ${id === selected?.id && "bg-gray-200"}`}
                    >
                        <Image 
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image}}
                        />
                        <View style={tw`-ml-6`}> 
                            <Text style={tw`text-xl font-semibold`}>{title} </Text>
                            <Text>{travelTimeInformation?.duration?.text} Travel Time </Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-ca', {
                                style: 'currency',
                                currency: 'CAD'
                            }).format(
                                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}

                        </Text>
                    </TouchableOpacity>
                )}
            />
             <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                    onPress={() => addOrderToFireBase()}
                    
                    disabled={!selected}
                    style={tw`bg-black py-3 m-3 pt-1 rounded-full ${!selected && "bg-gray-300 "}`}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        Chose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>   
            
        </SafeAreaView>

    );
};

export default RideOptionCard;

const styles = StyleSheet.create({});

