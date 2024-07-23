import { View,Pressable, Image, Text } from 'react-native';
import { RestaurantsProps } from '..';

export default function RestaurantItem({ item }: {item:RestaurantsProps}) {
 return (
   <Pressable className='flex flex-row'>
    <Image
        source={{ uri: item.image}}
        className='w-20 h-20 rounded-full'
    />
    <View>
        <Text>{item.name}</Text>
    </View>
   </Pressable>
  );
}