import * as React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

export interface AppProps {
}

export default class AppComponent extends React.Component<AppProps, any> {
  render() {
    return (


      <View>
         <Text>
           App Component


         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    blue:{
        color: '#0000FF',
    }
});
