import React, { Component } from "react";
import { View, Button,Text, StyleSheet,KeyboardAvoidingView,ImageBackground,Image,TextInput,TouchableOpacity } from "react-native";
import firebase from 'firebase'

const bgImage = require("../assets/m2.jpg")
const icon = require("../assets/micon.png")
const title = require("../assets/tit.png")

export default class EditScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      time:"",
      number:""
    }
  }
  async addData(){
    let data = {
    Name:this.state.name,
    Time:this.state.time,
    Number: this.state.number
    }
    await firebase
    .database()
    .ref("/data/"+ (Math.random().toString(36).slice(2)))
    .set(data)
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
<ImageBackground source={bgImage} style={styles.bgimage}>
  <View style={styles.upperContainer}>
    <Image source={icon} style={styles.iconstyle}/>
    <Image source={title} style={styles.titlestyle}/>
  </View>
  <View style={styles.lowerContainer}>
  <TextInput
 style={styles.textInput}
 onChangeText={text=>this.setState({name:text})}
 placeholder={"Enter Medicine Name"}
 placeholderTextColor={"pink"}
 
 />
  <TextInput
 style={styles.textInput}
 onChangeText={text=>this.setState({time:text})}
 placeholder={"Enter The time to remind"}
 placeholderTextColor={"pink"}
 
 />
  <TextInput
 style={styles.textInput}
 onChangeText={text=>this.setState({number:text})}
 placeholder={"Enter Number of medicines"}
 placeholderTextColor={"pink"}
 
 />
 <View style={styles.button}>
  <Button
  onPress={()=>this.addData()}
  title="submit"
  color="#844515"
  />
 </View>
  </View>

</ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  bgimage:{
flex:1,
resizeMode:"cover",
justifyContent:"center"
  },
  iconstyle:{
    width:150,
    height:150,
    resizeMode:"contain",
    marginTop:300
    
  },
titlestyle:{
  width:150,
  height:150,
  resizeMode:"contain", 
  marginBottom:350,
  marginLeft:600
},
upperContainer:{
  flex:0.2,
  justifyContent:"center",
  alignItem:"center"
},
lowerContainer:{
  alignItems:"center",
  justifyContent:"center",
  marginTop:20
  
},
textInput:{
  width:350,
  height:50,
  borderColor:"#02eeff",
  borderRadius:10,
  borderWidth:3,
  fontSize:20,
  textAlign:"center",
  marginTop:20
},
button:{
  marginTop:20,
  justifyContent:"center",
  alignItems:"center"
}

});
