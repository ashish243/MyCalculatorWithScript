import React from 'react';
import { StyleSheet, View,Button } from 'react-native';
import { typography,color } from 'react-native-material-design-styles';

// Created By Aashish Sharma

const typographyStyle = StyleSheet.create(typography);

const baseContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#fff',
};

const styles = StyleSheet.create({
  containerButtons: {
    flex: 1,
    backgroundColor: 'grey',
    ...baseContainer,
  },
  enterContainer: {
    flex: 2,
    backgroundColor: '#9bc23c',
    ...baseContainer,
  },

});

const ViewConatiner = ({ text, special, onPress }) => (
  <View style={special ? styles.enterContainer : styles.containerButtons}>
  <Button
    onPress={() => onPress(text)}
    title={text}
    color={special ? '#9bc23c' : 'grey'}/>
  </View>
);

export default ViewConatiner;
