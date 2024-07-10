import { View, Pressable, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

export  function Banner() {
 return (
   <View className='w-full h-36 rounded-xl mt-5 mb-4 md:h-60'>
        <PagerView style={{flex:1}} initialPage={0} pageMargin={14} rota>
          <Pressable className='w-full h-36 rounded-2xl' key="1"
           onPress={() => alert('banner 1')} >
              <Image source={require('../../assets/banner1.png')} className='w-full h-36 rounded-2xl' />
          </Pressable>
          <Pressable className='w-full h-36 rounded-2xl' key="2"
           onPress={() => alert('clicou')} >
              <Image source={require('../../assets/banner2.png')} className='w-full h-36 rounded-2xl' />
          </Pressable>
        </PagerView>
   </View>
  );
}