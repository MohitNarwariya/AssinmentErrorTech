import React, { useState } from
 
'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions } from
 
'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import Location from "react-native-vector-icons/Entypo"
import Phone from "react-native-vector-icons/FontAwesome"

var { width, height } = Dimensions.get('screen')

const ControlDevice = ({ navigation }) => {
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
  <View>
    <Text style={{fontSize:35,color:"#000",fontWeight:'bold',marginBottom:18,margin:12}}>Contact For Device</Text>
  
    
  </View>

<View style={{display:'flex',justifyContent:'space-between',alignItems:'center',alignContent:'center',flexDirection:'row',borderWidth: 1,borderColor: "#bdc3c7",borderRadius: 10, width: 373,height: 38,backgroundColor:'#bdc3c7',marginLeft:17}} >
  <Text style={{fontSize:20,color:"#000",fontWeight:'500',marginLeft:8}}>Jesse's Juice Bar</Text>
  
  <Icons name={'angle-down'} style={{fontSize:24,marginRight:8}}/>
</View>

<View style={{display:'flex',justifyContent:'space-between',flexDirection:'column',borderWidth: 1,borderColor: "#2980b9",borderRadius: 10, width: 373,height: 208,backgroundColor:'#2980b9',marginLeft:17,marginTop:22}} >
  <Text style={{fontSize:18,color:"#fff",marginLeft:8,padding:12,letterSpacing:1}}>ADDRESS</Text>
  <Text style={{fontSize:17,color:"#fff",marginLeft:8,letterSpacing:1,marginBottom:22}}><Location name={'location-pin'} style={{fontSize:17,marginLeft:6}}/>56 Smoothie Street Bridgewater, NJ</Text>
  <View
  style={{
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
  <Text style={{fontSize:18,color:"#fff",marginLeft:8,padding:12,letterSpacing:1}}><Phone name={'phone'} style={{fontSize:20,marginLeft:6}}/>{" (555) 99 88 88\n     Account: 07 57 047"}</Text>

  
  
</View>

<View style={{paddingHorizontal:22,paddingVertical:32}}>
    <Text style={{fontSize:20}}>Phone</Text>
</View>


<View style={{display:'flex',justifyContent:'space-between',flexDirection:'column',borderWidth: 1,borderColor: "#000",borderRadius: 10, width: 373,height: 150,backgroundColor:'#fff',marginLeft:17,marginTop:22}} >
  <Text style={{fontSize:17,color:"#000",marginLeft:8,padding:12,letterSpacing:1}}>{"   Jesse Brown\n   (555) 44 12 34"}</Text>
  <View
  style={{
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
  <Text style={{fontSize:18,color:"#000",marginLeft:8,padding:12,letterSpacing:1,marginBottom:23}}>{"   John Smith\n   (555) 44 43 21"}</Text>

  
  
</View>


  

      
</ScrollView>

    
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop:'50%',
    marginRight:'65%',
    borderRadius:20,
    
  },
  form: {
    width:'100%',
    height:'100%',
    paddingHorizontal: 20,
    paddingVertical: 37,
  },
  formLabel: {
   
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#000',
  },
  formInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    
    margin:10,
    color:'#000',
  },
  text:{
    fontSize:40,
    color:"#fff",
    fontWeight:'500',
  },
  loginButton: {
    backgroundColor: '#2980b9',
    height: 50,
    width:width*0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ControlDevice;