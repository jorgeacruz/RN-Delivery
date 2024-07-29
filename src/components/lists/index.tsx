import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantItem } from './item';

export interface RestaurantsProps{
  id:string;
  name:string;
  image:string;
  star:number;
}

export function RestaurantsVerticalLists() {
    
  const [restautants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods() {
        const response = await fetch("http://192.168.1.111:3000/restaurants")
        const data = await response.json()
        setRestaurants(data);
    }
    getFoods();
},[])


 return (
   <View>
    {restautants.map( item => (
      <RestaurantItem item={item} key={item.id}/>
    ))}
   </View>
  );
}