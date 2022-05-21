import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/About";
import MenuItems from "../components/MenuItems";
import ViewCart from "../components/ViewCart";


const foods =[
  {
      title: "Lasagna",
      description: "GOOD SOUP",
      price: "$13.30",
      image: "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
      title: "Curry",
      description: "GOOD SOUP",
      price: "$13.30",
      image: "https://www.inspiredtaste.net/wp-content/uploads/2021/03/Chicken-Curry-Recipe-2-1200.jpg",
  },
  {
      title: "Stew",
      description: "GOOD SOUP",
      price: "$13.30",
      image: "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
      title: "Fish",
      description: "GOOD SOUP",
      price: "$13.30",
      image: "https://www.inspiredtaste.net/wp-content/uploads/2021/03/Chicken-Curry-Recipe-2-1200.jpg",
  },
  {
      title: "Steak",
      description: "GOOD SOUP",
      price: "$13.30",
      image: "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
  },
  {
      title: "Pasta",
      description: "GOOD SOUP",
      price: "$13.30",
      image: "https://www.inspiredtaste.net/wp-content/uploads/2021/03/Chicken-Curry-Recipe-2-1200.jpg",
  },
];

export default function RestaurantDetails({ route, navigation }) {
    return (
        <View>
          <About route={route} />
          <Divider width={1.8} style={{ marginVertical: 20 }} />
          <MenuItems restaurantName={route.params.name} foods={foods} />
          <ViewCart navigation={navigation} />
        </View>
      );
    }
