import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Drawer from "./src/components/Drawer";
import DialogInput from "react-native-dialog-input";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", todo: "Insert a task", checked: true }],
      dialog: false,
      cont: 1
    };
  }

  sendInput = inputText => {
    this.setState({ dialog: false });
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

  showDialog = dialog => {
    this.setState({ dialog: dialog });
  };

  toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    this.setState({ todos: newList });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          screenProps={{
            todos: this.state.todos,
            toggleCheck: this.toggleCheck,
            deleteTask: this.deleteTask,
            showDialog: this.showDialog
          }}
        />
        <DialogInput
          isDialogVisible={this.state.dialog}
          title={"Insert Task"}
          hintInput={"Write Task Name"}
          submitInput={inputText => {
            this.sendInput(inputText);
          }}
          closeDialog={() => {
            this.showDialog(false);
          }}
        />
      </View>
    );
  }
}
