import { Pressable, Image, Text } from 'react-native';
import { FoodProps } from '..';

export function CardHorizontaFood( {food} : {food:FoodProps}) {
 return (
   <Pressable>
        <Text>{food.name}</Text>
   </Pressable>
  );
}