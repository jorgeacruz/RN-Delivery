import { View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantItem } from './item';

interface RestaurantsProps{
  id:string;
  name:string;
  image:string;
}

export function RestaurantsVerticalLists() {
    
  const [restautants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods() {
        const response = await fetch("http://192.168.1.104:3000/restaurants")
        const data = await response.json()
        setRestaurants(data);
    }
    getFoods();
},[])


 return (
   <View>
    <Text>aqui</Text>
   </View>
  );
}