import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import ListItem from "../components/ListItem";

export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAdd = dialog => {
    this.props.screenProps.showDialog(dialog);
  };

  handleOpen = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor="#694fad"
          leftComponent={
            <Icon.Button
              name="bars"
              size={15}
              backgroundColor="transparent"
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={{ text: "ToDo", style: { color: "#fff" } }}
          rightComponent={
            <Icon.Button
              name="plus"
              size={15}
              backgroundColor="transparent"
              onPress={() => this.handleAdd(true)}
            />
          }
        />
        <FlatList
          data={this.props.screenProps.todos.filter(x => x.checked == true)}
          renderItem={({ item }) => (
            <ListItem
              task={item}
              toggleCheck={this.props.screenProps.toggleCheck}
              deleteTask={this.props.screenProps.deleteTask}
            />
          )}
          keyExtractor={(item, index) => item.id}
          style={{ flex: 1, marginTop: 20, width: "100%" }}
        />
      </View>
    );
  }
}
