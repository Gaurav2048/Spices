import React, { Component } from 'react';
import { Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DemoDrawer from "./Drawer/DemoDrawer";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./BottomNav/Home";
import Favourite from "./BottomNav/Favourite";
import Cart from "./BottomNav/Cart";
import Search from "./BottomNav/Search";
import Profile from "./BottomNav/Profile";
 
const bottomNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home, 
        navigationOptions:{
            tabBarIcon: ({tintColor}) =>(
                <Icon  name="ios-home" size={24}  type="Ionicons" color={tintColor}/>
            )
        }
    }, 
    Search: {
        screen: Search, 
        navigationOptions:{
            tabBarIcon: ({tintColor}) =>(
                <Icon  name="ios-search" size={24}  type="Ionicons" color={tintColor} />
            )
        }
    }, 
    Favourite:{
        screen: Favourite, 
        navigationOptions:{
            tabBarIcon: ({tintColor}) =>(
                <Icon  name="ios-heart" size={24}  type="Ionicons" color={tintColor} />
            )
        }
    }, 
    Cart: {
        screen: Cart, 
        navigationOptions:{
            tabBarIcon: ({tintColor}) =>(
                <Icon  name="ios-cart" size={24}  type="Ionicons" color={tintColor} />
            )
        }
    }, 
    Profile: {
        screen: Profile, 
        navigationOptions:{
            tabBarIcon: ({tintColor}) =>(
                <Icon  name="ios-person" size={24}  type="MaterialIcons" color={tintColor} />
            )
        }
    }
}, {
    shifting: false, 
    labeled: true, 
    activeColor:'#EE5735', 
    inactiveColor:'#dddddd', 
    barStyle:{
        backgroundColor: 'white', 
        paddingBottom: 5
    }


})



const appdrawer = createDrawerNavigator({
    bottomSector: {
        screen: bottomNavigator
    }, 
    DemoDrawer:{
        screen: DemoDrawer
    }

})

export default createAppContainer(appdrawer); 