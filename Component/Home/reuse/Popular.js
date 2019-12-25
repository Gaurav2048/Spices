import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import StarRating from "react-native-star-rating";
const fav_like_hollow = require('../../../assets/images/heart.png');

const { width } = Dimensions.get('window');

class Popular extends Component {
    render() {
        const { data } = this.props;

        return (
            <View style={{ width: width / 2 - 25, paddingBottom: 30, }}>
                <View style={{ width: width / 2 - 25, height: width / 2 }}  >
                    <Image source={data.imageUrl} style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 0 } }} />
                </View>
                <View style={{ height: 45, alignItems: 'center', width: 45, marginTop: -60, marginLeft: width / 2 - 25 - 50, borderRadius: 25, justifyContent: 'center', backgroundColor: 'white', elevation: 6, }} >
                    <Image source={fav_like_hollow} style={{ height: 15, width: 15 }} />
                </View>
                <Text style={{ marginTop: 25, fontSize: 18, fontWeight: 'bold' }} > {data.dish_name} </Text>
                <View style={{ flex: 1, width: '24%' }}>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={data.rating}
                        starSize={15}
                        emptyStarColor={'#EE5735'}
                        fullStarColor={'#EE5735'}
                        halfStarColor={'#EE5735'}
                        starStyle={{
                            padding: 3
                        }}
                    />
                </View>

            </View>
        )
    };
}

export default Popular; 