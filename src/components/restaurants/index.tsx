import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantItem } from './horizontal';

export function Restaurants() {

  const [restautants, setRestaurants] = useState<RestaurantsProps[]>([])

  interface RestaurantsProps{
    id:string;
    name:string;
    image:string;
  }

  useEffect(() => {
    async function getFoods() {
        const response = await fetch("http://192.168.1.120:3000/restaurants")
        const data = await response.json()
        setRestaurants(data);
    }
    getFoods();
},[])



 return (
   <View>
    <FlatList
        data={restautants}
        renderItem={ ({item}) => <RestaurantItem item={item}/>}
        horizontal={true}
        contentContainerStyle={{ gap: 2, paddingLeft:8, paddingRight:8}}
        showsHorizontalScrollIndicator={false}
    />
   </View>
  );
}