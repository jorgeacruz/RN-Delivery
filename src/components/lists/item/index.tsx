import { View,Pressable, Image, Text } from 'react-native';
import { RestaurantsProps } from '..';
import { Ionicons } from '@expo/vector-icons'

export function RestaurantItem({ item }: {item:RestaurantsProps}) {
 return (
   <Pressable className='flex flex-row items-center justify-start gap-2 m-2'>
    <Image
        source={{ uri: item.image}}
        className='w-20 h-20 rounded-full'
    />
    <View>
      <View>
          <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>
            {item.name}
          </Text>
      </View>

      <View className='flex-row items-center gap-2'>
          <Ionicons name='star' size={14} color="#ca8a04" />
          <Text className='text-sm'>{item.star}</Text>
        </View>
    </View>
   </Pressable>
  );
}