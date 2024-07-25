import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontaFood } from './food';



//type of list (db.json)
export interface FoodProps{
    id:string;
    name:string;
    price:number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restaurantId:string;
}

export default function TrendingFoods() {
 
    const [foods, setFoods] = useState<FoodProps[]>([])
    
    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.1.108:3000/foods")
            const data = await response.json()
            setFoods(data);
        }
        getFoods();
    },[])
    return (
    <FlatList
        data={foods}
        renderItem={ ({item}) => <CardHorizontaFood food={item}/>}
        horizontal={true}
        contentContainerStyle={{ gap: 2, paddingLeft:8, paddingRight:8}}
        showsHorizontalScrollIndicator={false}
    />
  );
}