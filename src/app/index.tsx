import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import  Constants  from "expo-constants";
const statusBarsHeight = Constants.statusBarHeight;
// garante ajuste de statusbar

export default function Index() {
  return (
    <ScrollView style={{flex:1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{marginTop:statusBarsHeight + 8}}>
        <Header/>
      </View>
    </ScrollView>
  );
}
