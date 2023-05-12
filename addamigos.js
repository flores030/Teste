import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {Login} from './login';
import {Erro} from './erro';
import {Add} from './addamigos';
import {Perfil1} from './perfil';

export default function Add() {
  return (
    <View style={styles.fundo}>
    <View style={styles.container}>
        <Text style={styles.aba}>
           Comunidade :
        </Text>

      <Text style={styles.azul}>
          
        

      </Text>
     
     <Text style={styles.azulclaro}>


     </Text>



     <Text style={styles.escuro}>

     </Text>
  
    <Text style={styles.fundo2}>

    </Text>

    </View>
              <Text style={styles.nome}>

                  flores

               </Text>

  
              <Text style= {styles.add}>

                Adicionar Amigo

               </Text>

              <Text style= {styles.codigo}>
                Seu codigo de amigo
              </Text>

               <Text style= {styles.astolfo}>
                <Image style={styles.logo} source={require('./astolfo.jpg')} />
               </Text>

               <Text style={styles.numero}>
                <Text style={styles.numb}>
                976317972

                </Text>

               </Text>

                <View  style= {styles.botao}>
                <Pressable onPress={()=>navegation.navegate('Erro')}>
                  <Text style={styles.cop}> Copy </Text>
                  </Pressable>
            </View>

              <Text style={styles.ou}>
                <Text style={styles.texto}>
                ou envie um convite rapido. Gere um link para compartilhar por email, Sms   ou outro aplicativo de mensagens. Ao aceitar o pedido, voce e seus amgiso estarão automaticament conectados. Cuidado ao compartilhar em locais públicos.
                Obs: cada link so podera ser usado pelos proximos 30 dias.


                </Text>
               </Text>


</View>


  );
}

const styles = StyleSheet.create({


  container: {
    padding: 0,
  },

  azul: {

    backgroundColor: '#1d405f',
    height: 110,
  },

azulclaro: {
backgroundColor: '#015e80',
height: 30,
width: 320,
marginLeft: 30,

},

escuro: {
backgroundColor: '#0e2535',
height: 160,
width: 320,
marginLeft: 30,
},
  fundo : {
     flex: 10,
      backgroundColor:'#292c33',

  },

  fundo2: {

backgroundColor: '#1a4661',
width: 320,
height: 170,
marginLeft: 30,

  },

  aba: {
    color: '#FFFFFF',
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  nome: {
    color: '#ffff',
    fontSize: 30,
    marginTop: -440,
    marginLeft: 100,

 },

add: {
  fontSize: 18,
  marginLeft: 70,
  marginTop: 40,
  color:'#FFFFFF',

},


codigo: {

 color:'#FFFFFF',
 fontSize: 20,
  marginTop: 10,
  marginLeft: 70,

},



numero: {

backgroundColor:'#1b313f',
marginLeft: 30,
marginTop: 70,
height: 50,
width: 320,
textAlign:'center',

},

numb : {
fontSize: 30,
color: '#FFFFFF',


},

logo : {

width: 90,
height: 100,


},

astolfo: {
maxWidth: 0,
marginLeft: 2,
marginTop: -160,
overFlow: 'hidden',



  
},



button: {
    height: 40,
    width: 60,
     
    backgroundColor: '#3999ed',
    padding: 10,
    borderRadius: 10,
    marginLeft: 275,
    marginTop: -45,
   
  },    

  cop: {
    color: '#ffffff',
    fontSize: 14,
  },


ou: {
marginLeft: 40,
width: 320,
marginTop: 70,
},

texto: {
color: '#7c92a1',
fontSize: 15,  
}


})
