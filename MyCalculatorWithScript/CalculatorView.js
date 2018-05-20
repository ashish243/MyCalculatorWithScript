import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pressNum, enter, operation, clear} from './modules';
import Button from './Button';
import { color } from 'react-native-material-design-styles';
// Created By Aashish Sharma

const numberStyle = {
  backgroundColor: '#333',
  textAlign: 'right',
  padding: 10,
  fontSize: 40,
};

const styles = StyleSheet.create({
  inboxView: {
    borderBottomWidth: .5,
    borderColor: '#fff',
    backgroundColor: '#333',
    textAlign: 'right',
    padding: 10,
    fontSize: 40,
  },
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
    backgroundColor: '#333',
  },
  bottom: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
});

const App = ({
  calculatorState: { stack, inputState },
  operationAction,
  pressNumWithDispatch,
  enterAction,
  clearAction,

}) => (
  <View style={styles.container}>
    <View style={styles.top}>

      <Text numberOfLines={1} style={styles.inboxView}>
        {stack[1] || 0}
      </Text>
       <Text numberOfLines={1} style={styles.inboxView}>
          {stack[0] || 0}
        </Text>

    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" onPress={clearAction} />
        <Button text="/" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="10" onPress={pressNumWithDispatch} />
        <Button text="8" onPress={pressNumWithDispatch} />
        <Button text="7" onPress={pressNumWithDispatch} />
        <Button text="X" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="6" onPress={pressNumWithDispatch} />
        <Button text="5" onPress={pressNumWithDispatch} />
        <Button text="4" onPress={pressNumWithDispatch} />
        <Button text="-" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="3" onPress={pressNumWithDispatch} />
        <Button text="2" onPress={pressNumWithDispatch} />
        <Button text="1" onPress={pressNumWithDispatch} />
        <Button text="+" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumWithDispatch} />
        <Button text="." onPress={pressNumWithDispatch} />
        <Button text="Enter" onPress={enterAction} special/>
      </View>
    </View>
  </View>
);

export default connect(
  state => ({ calculatorState: state }),
  dispatch =>
    bindActionCreators(
      {
        pressNumWithDispatch: pressNum,
        enterAction: enter,
        operationAction: operation,
        clearAction: clear,
      },
      dispatch,
    ),
)(App);
