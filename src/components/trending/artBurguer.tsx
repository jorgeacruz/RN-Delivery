import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ArtBurguer } from './food/artesanal';


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

export interface ArtesanalProps{
    id:string;
    name:string;
    price:number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restaurantId:string;
}
export default function ArtesanalBurguer() {
 
    const [foods, setFoods] = useState<ArtesanalProps[]>([])
    
    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.1.111:3000/artesanal")
            const data = await response.json()
            setFoods(data);
        }
        getFoods();
    },[])
    return (
    <FlatList
        data={foods}
        renderItem={ ({item}) => <ArtBurguer food={item}/>}
        horizontal={true}
        contentContainerStyle={{ gap: 2, paddingLeft:8, paddingRight:8}}
        showsHorizontalScrollIndicator={false}
    />
  );
}