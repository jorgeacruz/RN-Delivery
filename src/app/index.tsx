import { View, ScrollView } from "react-native";
import ToastManager, { Toast } from 'toastify-react-native'
//components
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Section } from "../components/section";
import { Restaurants } from "../components/restaurants";
import { RestaurantsVerticalLists }  from "../components/lists";
import ArtesanalBurguer from "../components/trending/artBurguer";

// ajust statusbar
import  Constants  from "expo-constants";
import Search from "../components/search";
import TrendingFoods from "../components/trending";
const statusBarsHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{flex:1}} className="bg-white" showsVerticalScrollIndicator={false}>
      <ToastManager />
      <View className="w-full px-4" style={{marginTop:statusBarsHeight + 8}}>
        <Header/>
        <Banner/>
        <Search/>

        <Section 
          name="Artesanal Burguer" 
          label="Veja Mais" 
          size="text-xl"
          action={() => Toast.success('Veja mais')}
        />

        <TrendingFoods/>
        <Section 
          name="Tradicional Burguer" 
          label="Veja todas" 
          size="text-xl"
          action={() => Toast.success('Veja mais')}
        />
        <ArtesanalBurguer/>
        <Restaurants/>

        <Section 
          name="Restaurantes" 
          label="Veja todas" 
          size="text-xl"
          action={() => Toast.success('Veja mais')}
        />
        <RestaurantsVerticalLists/>
        
      </View>
    </ScrollView>
  );
}
