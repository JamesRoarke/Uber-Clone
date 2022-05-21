import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from 'tailwind-react-native-classnames';

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-Up",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Food",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts",
    },
];
 {/**marginTop: 5, 
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20 */} 

export default function Categories() {
    return (
        <View style={
          tw`mt-1 bg-white py-2 pl-4`
        }>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/** Loop Start */}
                {items.map((item, index) => (
                    <View 
                        style={{alignItems: "center", marginRight: 30}}
                        key={index}
                    >
                        <Image 
                                source={item.image}
                                style = {{
                                    width: 50,
                                    height: 40,
                                    resizeMode: "contain"
                                }}
                        />
                        <Text 
                                style={{fontSize: 13, fontWeight: "900" }}>
                                    {item.text}
                            </Text>
                        </View>
                        ))}
                    {/** Loop Ends */}
            </ScrollView>
        </View>
    );
}