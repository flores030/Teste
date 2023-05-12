import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
// import { PlayerScreen } from './screens/Player';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Login} from './login';
import {Erro} from './erro';
import {Add} from './addamigos';
import {Perfil1} from './perfil';

const Stack = createNativeStackNavigator();

// ---------------------------------------------------------------------------------

const Tab= createBottomTabNavigator();
const LoginStack = createStackNavigator();






function MyTabs() {
  return (
    <NavigationContainer>
      -
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Hob" component={HomeScreem}/>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Amigos" component={Add} />
      <Stack.Screen name="Meu-Perfil" component={Perfil1}/>
      <Stack.Screen name="Erro" component={Erro}/>
    </Stack.Navigator>

    </NavigationContainer>
  );

}

function LoginStack2 () {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Hob" component={HomeScreem} />
    </LoginStack.Navigator>
  );
}

export default function HomeScreem() {
  return (
  <View styles={style.estilo}> 
  <Pressable onPress={()=>navegation.navegate('Home')}>
    Botao
  </Pressable>
  </View>
    
  );
}

const styles=StyleSheet.create({

  estilo:{

    backgroundcolor:' #4CAF50',
    borderRadius: 5,
    
  

  }
})