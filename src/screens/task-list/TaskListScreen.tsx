import * as React from "react";
import { Component, ReactNode } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Color } from "../../assets/color";
import { TaskStack } from "../../navigation/routes";

interface TaskListScreenProps {

}

export class TaskListScreen extends Component<TaskListScreenProps> { // TODO add state and props separately

  // @ts-ignore
  private navigation = this.props.navigation;

  private navigateToDetails(): void {
    this.navigation.navigate(TaskStack.TASK_DETAILS);
  }

  render(): ReactNode {
    const { container, text } = styles;

    return (
      <View style={ container }>
        <Text style={ text }>Task List Screen</Text>
        <Button
          title="Navigate to Task Edit Screen"
          onPress={() => this.navigateToDetails()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({ // TODO move to separate file
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.CARBON
  },
  text: {
    fontSize: 15,
    paddingVertical: 5
  }
});