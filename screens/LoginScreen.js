import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image} from "react-native-elements";
import { StatusBar } from 'expo-status-bar'; //https://docs.expo.dev/versions/latest/sdk/status-bar/

var logo = require ('../assets/logo.png');

{/**/}
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = ()=>{

  }
  
  return (
    <View style={styles.loginContainer}>

      {/*StatusBar is the bar with the power, wifi, etc icons on top*/}
      <StatusBar style="light" />
      <Image source={logo}
      style={{width:145, height:145}} />
      
      <View style={styles.inputStyle}>
        <Input style={styles.textStyle}  //Input field for the email. 
        placeholder='Email' type="email" 
        value={email} onChangeText={(text) => setEmail(text)} />

        <Input style={styles.textStyle} //Input field for the password. 
        placeholder='Password' type="password" 
        secureTextEntry //Makes that the password shows in hidden black dots
        value={password} onChangeText={(password) => setPassword(password)}/>
      </View>

      {/*Buttons for the Login & Register functions*/}
      
      <Button containerStyle={styles.button} title="Login" onPress={signIn}/>
      <Button containerStyle={styles.button} title="Register" type="outline" 
      onPress={()=>navigation.navigate('Register')}/> 
      {/* "navigation is from the props from "const LoginScreen = ({navigation})" */}  
      {/*https://reactnavigation.org/docs/navigating/*/}  

    </View>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
  loginContainer:{
    flex: 1, 
    backgroundColor: '#1C2833',
    alignItems: 'center',
    justifyContent:'center',
    padding:10,
  },
  inputStyle:{
    width:300,
  },
  textStyle:{
    color:'white',
  },
  button:{
    width:222,
    marginTop:11,
  }
 
})