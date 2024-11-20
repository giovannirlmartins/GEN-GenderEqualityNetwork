import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Colours from '../../../assets/colours';
import { useNavigation } from "@react-navigation/native";

export default function OngSignUp() {
  const navigation = useNavigation();
  const [ongName, setOngName] = useState(null)
  const [ongCnpj, setOngCnpj] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [emailTester, setEmailTester] = useState(null)
  const [senha, setSenha] = useState(null)
  const [senhaTester, setSenhaTester] = useState(null)


  function Validation() {
    if(ongName != null && phone != null && email != null && emailTester != null && senha != null && senhaTester != null){
      if (email === emailTester) {
        if (senha === senhaTester) {
          if(senha.length>7){
            signUp();
          } else {
            Alert.alert("A senha precisa ter no mínimo 8 caracteres")
          }
          
        } else {
          Alert.alert("Senhas não correspondem");
          setSenha('');
          setSenhaTester('');
        }
      } else {
        Alert.alert("Emails não correspondem");
        setEmail('');
        setEmailTester('');
      }
    } else{
      Alert.alert("Preencha os espaços em branco");   
    }
    
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

            <Text style={styles.text}>Dados Cadastrais ONG:</Text>

            <TextInput
            placeholder="Nome da ONG"
            onChangeText={setOngName}
            value={ongName}
            style={styles.input}
            />

            <TextInput
            placeholder="CNPJ da ONG, se possuir"
            onChangeText={setOngCnpj}
            value={ongCnpj}
            keyboardType="numeric"
            style={styles.input}
            />

            <TextInput
            placeholder="Telefone"
            onChangeText={setPhone}
            value={phone}
            keyboardType="numeric"
            style={styles.input}
            />
            
            <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            style={styles.input}
            />

            <TextInput
            placeholder="Confirme o email"
            onChangeText={setEmailTester}
            value={emailTester}
            style={styles.input}
            />

            <TextInput
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            style={styles.input}
            secureTextEntry={true}
            />

            <TextInput
            placeholder="Confirme a senha"
            onChangeText={setSenhaTester}
            value={senhaTester}
            style={styles.input}
            secureTextEntry={true}
            />

          <Text style={styles.text}>Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.</Text>
         
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => Validation()}
          >
            <Text style={styles.textButton}>Próximo</Text>
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
