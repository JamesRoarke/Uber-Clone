import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text, Image ,TouchableOpacity} from "react-native";
import tw from 'tailwind-react-native-classnames';

export const localRestaurants = [
    
];

export default function RestaurantItems ({ navigation, ...props }) {
    return (
        <>
        {props.restaurantData.map((restaurant, index) =>(
        <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 2 }}
            onPress={() =>
            navigation.navigate("RestaurantDetails", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
            })
        }
        >   
            <View 
            key ={index}
            style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: "white",
            }}>
                {/** Image*/}
                <RestaurantImage image={restaurant.image_url} />
                {/** Resturant Details*/}
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
        </TouchableOpacity>
        ))}
        </>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{
               uri: props.image !=="" ? props.image : undefined 
            }} 
            style ={tw`w-full h-44`}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top:20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
    
);

const RestaurantInfo = (props) => (
    <View 
        style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems:"center",
            marginTop: 10,
        }}
    >
        <View>
            <Text 
                style={tw`text-lg  font-bold`}>{props.name}</Text>
            <Text 
                style={tw`text-sm text-gray-400`}>30 - 45 mins</Text>
        </View>
        <View style={tw`bg-gray-300 h-7 w-7 items-center rounded-full justify-center`}>
            <Text>{props.rating}</Text>
        </View>
    </View>
    

);
