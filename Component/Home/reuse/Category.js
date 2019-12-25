import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const bread = require('../../../assets/images/bread.png');
const fav_like_hollow = require('../../../assets/images/heart.png');

class Category extends Component {
    render() {
        const { data } = this.props;
        console.log(data.icon);
        data.margin =   data.id==0 ? 20 : 0  

        return (
            <View style={{flex: 1, flexDirection:'row',backgroundColor:'white',marginLeft: data.margin ,   shadowColor:'#000',paddingRight:15, paddingTop: 5, paddingBottom: 5, shadowOffset:{width: 0, height:0}, borderRadius:6, shadowOpacity:'0.3', marginRight:10, marginTop: 4, marginBottom: 4}}>
                <Image soruce={bread} style={{ width: 50, height: 50, resizeMode: 'center', marginLeft: 10, opacity: 1 }} />
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}> {data.name} </Text> 
                    <Text style={{color:'#cbcbcb', fontWeight:'400'}} > {`${data.item} items`}  </Text>
                </View>
            </View>
        )
    }
}

export default Category; 