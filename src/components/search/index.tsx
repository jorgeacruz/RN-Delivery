import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Search() {
 return (
   <View className='w-full h-22 rounded-full border border-gray-600 flex flex-row items-center p-3 bg-transparent gap-2'>
        <Feather name='search' color='#000' size={26} />
        <TextInput className='w-full flex-1 h-full bg-transparent' placeholder='Pesquise sua comida' placeholderTextColor='#000'/>
   </View>
  );
}