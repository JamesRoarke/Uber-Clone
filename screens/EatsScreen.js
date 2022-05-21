import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import tw from 'tailwind-react-native-classnames';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import BottomsTab from '../components/BottomsTab';
import { Divider } from 'react-native-elements';

const YELP_API_KEY = 
    "h8hPyw2MZPFsFMTngoQWehOJ4R-gi8fcE_0dbG7SCB7GtBERk1r00EP5l5AWs3Y0xPyIhQJjVmtKXR-74LltRYp0ACboeY68YLos6aZrSVS62O4bCnNYprY6AO1pYnYx";

export default function EatsScreen({navigation}){
    const [restaurantData , setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Vancouver");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    

    const apiOptions = {
        headers : {
            Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
        setRestaurantData(
            json.businesses)
        );
    };
  

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);


    return (
        <SafeAreaView style={tw`bg-gray-300 flex-1`}>
            <View style={tw`bg-white p-3`}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar  cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                    restaurantData={restaurantData}  
                    navigation={navigation}
                />
                
               
            </ScrollView>
            <Divider width={1}/>
            <BottomsTab />
        </SafeAreaView>
    );
};