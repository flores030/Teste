import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/asseterro';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {Login} from './login';
import {Erro} from './erro';
import {Add} from './addamigos';
import {Perfil1} from './perfil';

export default function Erro() {
  return (
    <View style={styles.container}>

    <Text style={styles.comunidade}>


      </Text>
  

<Text style={styles.comunidade1}>
 <Text style={styles.com}>
    Comunidade:

    </Text>

</Text>



    <Text style={styles.paragraph}>
       
      </Text>
 


 <Text style= {styles.perfil}>
                <Image style={styles.logo} source={require('./download.jfif')} />
               </Text>



<Text style ={styles.erro}>

Houve um problema ao carregar este conteúdo da web
</Text>



    <Text style={styles.aba}>


    </Text>

    

    </View>




  );





}

const styles = StyleSheet.create({
  container: {
    flex: 3,
     backgroundColor: '#292c33',
  },
  paragraph: {
    
   
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  comunidade: {
    backgroundColor: '#202126',
    height: 90,
    width: 400,
    fontSize: 20,

  },


  com:{
color: 'white',
fontSize: 38,

  },


  comunidade1:{
marginTop: -60,
marginLeft: 70,
    
  },

perfil: {
marginLeft: 320,
marginTop: -100,
},

logo : {

width: 55,
height: 70,



},

erro: {
color: 'white',
fontSize: 28,
marginTop: 160,
width: 340,
marginLeft: 30,

},

aba: {

    backgroundColor: '#202126',
    height: 90,
    width: 400,
    fontSize: 20,
    marginTop: 380,

},

})
