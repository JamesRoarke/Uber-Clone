import React from "react";
import { View, Text, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';


export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    
    const description = `${formattedCategories} ${
        price ? " • " + price : ""
      } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    
    return (
        <View>
          <RestaurantImage image={image} />

          <RestaurantName name={name} />

          <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source ={{uri: props.image}}
        style={tw`w-full h-44`}
    />
);

const RestaurantName = (props) => (
    <Text style={
        tw`text-base font-semibold mt-2 mx-4`
    }> 
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text style={
        tw`text-sm mt-2 mx-4`
    }>
        {props.description}
    </Text>
);