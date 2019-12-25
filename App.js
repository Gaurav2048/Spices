import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Component/Home/Index";
import Splash from "./Component/Splash/Index";
import { AppLoading } from "expo";
import {  Asset  } from 'expo-asset';
 
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

class App extends Component {

  state = {
    isLoadingCompleted: false
  }
  

  render() {
    if (!this.state.isLoadingCompleted) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } 
      return (
        <DataQ /> 
      ) 
    
  }

  _loadResourcesAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/bread.png'),
      require('./assets/images/heart.png')
    ]);
    await Promise.all([...imageAssets]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingCompleted: true });
  };
  

}


const appNavigator = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Splash: {
    screen: Splash
  }
},
  {
    initialRouteName: "Splash"
  });

  const DataQ = createAppContainer(appNavigator); 

  export default App; 

 
