import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Beranda/Home';
import HomeLanjutan from './screens/Beranda/HomeLanjutan';
import Konfirmasi from './screens/Beranda/Konfirmasi';
import DetailPemesanan from './screens/Beranda/DetailPemesanan';
import PesananSaya from './screens/PesananSaya';
import PesananSayaLanjutan from './screens/Beranda/PesananSayaLanjutan';
import Pembatalan from './screens/Pembatalan';
import PembatalanLanjutan from './screens/Beranda/PembatalanLanjutan';
import Lainnya from './screens/Lainnya';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="HomeLanjutan"
        component={HomeLanjutan}
      />
      <Stack.Screen
        name="Konfirmasi"
        component={Konfirmasi}
      />
      <Stack.Screen
        name="DetailPemesanan"
        component={DetailPemesanan}
      />
      <Stack.Screen
        name="PesananSaya"
        component={PesananSaya}
      />
      <Stack.Screen
        name="PesananSayaLanjutan"
        component={PesananSayaLanjutan}
      />
      <Stack.Screen
        name="Pembatalan"
        component={Pembatalan}
      />
      <Stack.Screen
        name="PembatalanLanjutan"
        component={PembatalanLanjutan}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;