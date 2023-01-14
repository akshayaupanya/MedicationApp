import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import * as firebase from 'firebase';
import { firebaseConfig } from "./config";

export default class App extends Component {
  render() {
    return <BottomTabNavigator />;
  }
}
