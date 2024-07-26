import { View, Pressable, Text, Image } from 'react-native';
import { RestaurantsProps } from '..';

import ToastManager, { Toast } from 'toastify-react-native'

export function RestaurantItem({ item }: { item: RestaurantsProps} ) {
 return (
   <Pressable 
        className='flex items-center justify-center p-1 gap-1'
        onPress={() => Toast.error(item.name)}>
        <Image
            source={{ uri: item.image}}
            className='rounded-full w-20 h-20'
        />
        <Text className='text-sm mt-2 w-20 text-center leading-4 text-black' numberOfLines={2}>{item.name}</Text>
   </Pressable>
  );
}