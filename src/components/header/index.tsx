import { View, Pressable, Text  } from 'react-native';
import { Ionicons, Feather} from '@expo/vector-icons';

export  function Header() {
 return (
   <View className='w-full flex flex-row items-center justify-between'>
    <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Ionicons name="menu" color="#121212" size={20}/>
    </Pressable>

    <View className='flex flex-col items-center justify-center'>
      <Text>Localização</Text>

      <View className='flex flex-row items-center justify-center gap-2'>
        <Feather name='map-pin' size={14} color="#000"/>
        <Text>Rio de Janeiro</Text>
      </View>
    </View>

    <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Feather name="bell" color="#121212" size={20}/>
    </Pressable>
   </View>
  );
}