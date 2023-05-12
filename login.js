import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import ('https://fonts.googleapis.com/css2?family=Ysabeau:wght@200&display=swap');

// You can import from local files
import AssetExample from './components/AssetExemple2';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {Login} from './login';
import {Erro} from './erro';
import {Add} from './addamigos';
import {Perfil1} from './perfil';
import {HomeScreem} from './App.js';


export default function Login() {
  return (
<View style={styles.fundo}>
  <View style={styles.logo}>
          <Card>
             <AssetExample />
         </Card>
         </View>
    <View style={styles.container}>
          <Text style={styles.paragraph}>
             Sign in
         </Text>
     
   </View>


    <View style={styles.campostexto}>
        <Text style= {styles.user}>
            Steam account name
        </Text>

         <Text style= {styles.senha}>
            Password
        </Text>

        
    </View>


      <View  style= {styles.botao}>
      <Pressable onPress={()=>navegation.navegate('Perfil1')}>
        <Text>Sign in</Text>
        </Pressable>
      </View>

      
    

</View>
  );

  
}

const styles = StyleSheet.create({


fundo: {
  flex: 3,
  
   backgroundColor:'#231f20',
  
},

  logo: {
    padding: 30,
    
    
   

  },

  button: {
    height: 40,
    width: 150,
     alignItems: 'center',
    backgroundColor: '#3999ed',
    padding: 10,
    borderRadius: 10,
   
  },
  
  botao: {
    marginTop: 30,
     alignItems: 'center',
  },
  campostexto : {
     fontWeight: 'italic',
     
     padding: 5,
     paddingLeft: 30,


  },


   user: {
     color: '#e8e9ee',
     fontSize: 20,
     margin: 5,
     fontWeight: 'bold',
   },

  senha: {

      color: '#e8e9ee',
     fontSize: 20,
     margin: 5,
     marginTop: 60,
     fontWeight: 'bold',
   
  },

  container: {
    paddingTop: 30,
    justifyContent: 'center',
  },
  
  paragraph: {
     color: '#e8e9ee',
    margin: 1,
    fontSize: 45,
    
    textAlign: 'center',
   
  }


});
