import React, { useState } from
 
'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions } from
 
'react-native';
var { width, height } = Dimensions.get('screen')

const Signinscreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [passcode, setPasscode] = useState('');

  const onPressLogin = () => {
    // TODO: Implement login logic
  };

  return (
    <SafeAreaView
 
style={styles.container}>

      
<StatusBar
 
barStyle="light-content" />

      
<ScrollView>

        
<View
 
style={styles.header}>

          
<Image
 
source={require('../../../assets/alice.jpg')} style={styles.banner} />
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>{" Sign in to your\n account"}</Text>
         
          <TextInput style={styles.formInput} placeholder="Enter your mobile number" placeholderTextColor="#fff" value={mobileNumber} onChangeText={setMobileNumber} />
         
          <TextInput style={styles.formInput} placeholder="Enter your account passcode" placeholderTextColor="#fff" value={passcode} onChangeText={setPasscode} secureTextEntry />
          <TouchableOpacity
 
style={styles.loginButton}
 
onPress={onPressLogin}>

            
<Text
 
style={styles.loginButtonText}>Login</Text>

          
</TouchableOpacity>

        
</View>

      
</ScrollView>

    
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353b48',
  },
  header: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: '30%',
    height: '60%',
    resizeMode: 'cover',
    marginTop:'159%',
    marginRight:'65%',
    borderRadius:20,
    
  },
  form: {
    width:width,
    height:height,
    // paddingHorizontal: 20,
    paddingVertical: 307,
  },
  formLabel: {
   
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: 'white',
  },
  formInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    
    margin:10,
    color:'#fff',
  },
  text:{
    fontSize:40,
    color:"#fff",
    fontWeight:'500',
  },
  loginButton: {
    backgroundColor: '#fff',
    height: 50,
    width:width*0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 40,
  },
  loginButtonText: {
    color: '#0097e6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Signinscreen;