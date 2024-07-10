import { Text, View, ScrollView } from "react-native";

//components
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Section } from "../components/section";

// ajust statusbar
import  Constants  from "expo-constants";
import Search from "../components/search";
const statusBarsHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{flex:1}} className="bg-white" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{marginTop:statusBarsHeight + 8}}>
        <Header/>
        <Banner/>
        <Search/>

        <Section 
          name="Comidas em alta" 
          label="Veja Mais" 
          size="text-xl"
          action={() => alert('Clicou')}
        />
        
        </View>
    </ScrollView>
  );
}
