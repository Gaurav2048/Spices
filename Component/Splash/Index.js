import React, { Component } from 'react';
import { View, Text , Button} from "react-native";


export default class Splash extends Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
              <Text> Splsh </Text>
              <Button title="To next"   
                      style={{color: 'white', backgroundColor:'#0ff'}}
                      onPress={()=>this.props.navigation.navigate('Home')}       />
        </View>
    );
  }
}
