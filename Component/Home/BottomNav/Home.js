import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, ScrollView, StatusBar, Dimensions, Image } from "react-native";
import list_data from "../../../Data/homelist";
import Dishes from "../reuse/Dishes";
import Category from "../reuse/Category";
import Popular from "../reuse/Popular";


export default class Home extends Component {

  constructor() {
    super()

    this.topViewPadding = 50
    if (Platform.OS === 'android') {
      this.topViewPadding = StatusBar.currentHeight + 50
    }


  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ paddingTop: this.topViewPadding }}  >



        </View>


        <ScrollView showsVerticalScrollIndicator={false}  >
          {/* Dishes section */}
          <View style={{ flex: 1, marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }} >
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }} > {list_data.Dishes.title} </Text>
            <Text style={{ color: '#EE5735', fontWeight: '500' }} >View all</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
            {
              list_data.Dishes.data.map((item) => (
                <Dishes data={item} key={item.id} />
              ))
            }

          </ScrollView>
           {/* Dishes section ends */}

           {/* Categories section */}
          <View style={{ flex: 1, marginLeft: 20, marginRight: 20, marginTop: 25, flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' }} >
            <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }} > {list_data.Categories.title} </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
            {
              list_data.Categories.data.map((item) => (
                <Category data={item} key={item.id} />
              ))
            }

          </ScrollView>
            {/* Categories section end */}
          
          {/* Popular section */}
          <View style={{ flex: 1, marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 15,marginTop: 25,  alignItems: 'center', justifyContent: 'space-between' }} >
            <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }} > {list_data.Popular.title} </Text>
            <Text style={{ color: '#EE5735', fontWeight: '500', paddingTop: 10 }} >View all</Text>
          </View>

        
          <View style={{flex: 1, marginHorizontal: 20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}} >
          {
              list_data.Popular.data.map((item) => (
                <Popular data={item} key={item.id} />
              ))
            }
          </View>    

        </ScrollView>




      </SafeAreaView>
    );
  }
}
