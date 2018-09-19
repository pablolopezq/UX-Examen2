import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import All from "../container/All";
import Done from "../container/Done";

export default (Drawer = createDrawerNavigator({
  All: {
    screen: All
  },
  Done: {
    screen: Done
  }
}));
