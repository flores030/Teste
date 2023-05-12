import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {Login} from './login';
import {Erro} from './erro';
import {Add} from './addamigos';
import {Perfil1} from './perfil';

export default function Perfil1() {
  return (
    <View style={styles.container}>

     <Text style={styles.aba}>
           Comunidade :
        </Text>


      <Text style={styles.paragraph}>
        
      </Text>
  

      <Text style={styles.comunidade}>

       <Text style={styles.aba}>
           Comunidade :
        </Text>

      </Text>


      <Text style={styles.perfil}>
        flores
      </Text>

    
    <Text style={styles.conquistafundo}>
        <Text style={styles.conquista}>
  
         Ruby Crown  
          
        </Text>
        
    </Text>





          <View  style= {styles.botao}>
          <Pressable onPress={()=>navegation.navegate('Perfil1')}>
   Adicionar Amigos
  </Pressable>
            </View>
    
    

             <Text style= {styles.coroa}>
                <Image style={styles.logo} source={require('./coroa.png')} />
               </Text>


<Text style= {styles.astolfo}>
  <Image style={styles.alf} source={require('./download.jfif')} />
   </Text>
    
    <Text style= {styles.off}>
    <Text style= {styles.line}>
    Off-line

    </Text>

    
    </Text>


<Text style= {styles.ultima}>

    Ultima vez online há 13h, 19 min
    </Text>


<Text style = {styles.premios}>

</Text>


<Text style = {styles.insig}>

</Text>


<Text style = {styles.grupos}>

</Text>



<Text style = {styles.amigos}>

</Text>





    </View>


          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#48243a',
  },


  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },


   aba: {
    color: '#FFFFFF',
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 80,
  },


  comunidade: {
    height: 80,
    width: 340,
    backgroundColor:'#202126',
    marginTop: -140,
    
    

  },

  perfil: {
    color:'#FFFFFF',
    marginLeft: 30,
    fontSize: 20,


  },

  button: {
    height: 40,
    width: 120,
     alignItems: 'center',
    backgroundColor: '#202126',
    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 80,
    opacity: 0.8,
   
  },

  botao:{

    marginLeft: 170 ,
  },

  editar: {
color:'#FFFFFF',
fontSize: 16,
  },

conquistafundo:{
 backgroundColor:'#20131a',
 width: 170,
 height: 50,
opacity: 0.8,
 marginLeft: 150,

},

conquista: {
padding: 20,
color:'white',
marginLeft: 40,

},

coroa: {
marginLeft: 150,
marginTop: -170,
},

logo : {

width: 50,
height: 50,



},

off: {

backgroundColor: '#202126',
width: 340,
height: 70,
marginTop: 130,
marginLeft: 3,
borderRadius: 5,
},

line: {
color: 'white',
fontSize: 17,

},

ultima: {
marginTop: -40,
color: 'white',


},

premios: {
backgroundColor: '#202126', 
width: 160,
height: 190,
marginTop: 40,


},

insig: {

backgroundColor: '#202126', 
width: 160,
height: 190,
marginTop: -190,
marginLeft: 180,

},
grupos: {

backgroundColor: '#202126', 
width: 160,
height: 190,
marginTop: 10,
marginLeft: 180,



},

amigos: {
backgroundColor: '#202126', 
width: 160,
height: 190,
marginTop: -190,
marginLeft: 0,

},

alf: {
width: 80,
height: 80,
borderRadius: 5,
marginLeft: 10,
marginTop: -50,

},

});
