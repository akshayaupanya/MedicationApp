import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageBackground,TouchableOpacity,KeyboardAvoidingView,TextInput } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
