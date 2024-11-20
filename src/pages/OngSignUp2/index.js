import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Colours from '../../../assets/colours';
import { useNavigation } from "@react-navigation/native";

export default function OngSignUp() {
  const navigation = useNavigation();
  const [cep, setCep] = useState(null)
  const [rua, setRua] = useState(null)
  const [numero, setNumero] = useState(null)
  const [complemento, setComplemento] = useState(null)
  const [bairro, setBairro] = useState(null)
  const [cidade, setCidade] = useState(null)
  const [estado, setEstado] = useState(null)

  function Validation() {
    // if(ongName != null && phone != null && email != null && emailTester != null && senha != null && senhaTester != null){

    // } else{
    //   Alert.alert("Preencha os espaços em branco");   
    // }
    
  }

  function signUp() {
    navigation.navigate('OngSignUp2');
  }

  return (
    <View style={styles.container}>
            <Image
            source={require('../../../assets/images/logoGenCad.png')}
            style={styles.image}  
            resizeMode="contain"          
            />

        <View style={styles.formContainer}>

            <Text style={styles.text}>Insira os dados do endereço 
            da sua ONG:</Text>

            <TextInput
            placeholder="CEP"
            onChangeText={setCep}
            value={cep}
            keyboardType="numeric"
            style={styles.input}
            />

            <TextInput
            placeholder="Rua"
            onChangeText={setRua}
            value={rua}
            style={styles.input}
            />

            <TextInput
            placeholder="Número"
            onChangeText={setNumero}
            value={numero}
            keyboardType="numeric"
            style={styles.input}
            />
            
            <TextInput
            placeholder="Complemento"
            onChangeText={setComplemento}
            value={complemento}
            style={styles.input}
            />

            <TextInput
            placeholder="Bairro"
            onChangeText={setBairro}
            value={bairro}
            style={styles.input}
            />

            <TextInput
            placeholder="Cidade"
            onChangeText={setCidade}
            value={cidade}
            style={styles.input}
            />

            <TextInput
            placeholder="Estado"
            onChangeText={setEstado}
            value={estado}
            style={styles.input}
            />

          <Text style={styles.text}>Ao clicar em Cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.</Text>
         
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => Validation()}
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    backgroundColor: Colours.backgroundColour,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    zIndex: 0
  },

  imageContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    width: '50%',
    marginVertical: -100,

  },

  text: {
    color: Colours.offWhite,
    fontWeight: 'bold',
    margin: 20,
    alignSelf: "center"
  },

  input:{
    backgroundColor: Colours.lightBlue,
    margin: 10,
    padding: 5,
    borderRadius: 25,
    paddingLeft: 15
  },

  formContainer:{
    marginHorizontal: 40,
  },

  signUpButton:{
    backgroundColor: Colours.headerColour,
    alignItems: "center",
    paddingHorizontal: 80,
    borderRadius: 40,
    alignSelf: "center",
    paddingVertical: 0
  },
  textButton:{
    color: Colours.offWhite,
    fontWeight: 'bold',
    margin: 5,
    alignSelf: "center"
  }


});
