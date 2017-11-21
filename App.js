/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
          <Image source={require('./img/logo-amc.png')} />
          <Text style={styles.title}>Central do Representante</Text>
          <View style={{width: 50, height: 50}} />

          <Button
            title="Iventário de estoque"
            color="#1A171B"
            accessibilityLabel="Realizar o inventário da loja que estou por meio de RFID."
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  }
});