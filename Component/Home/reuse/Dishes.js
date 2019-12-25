import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import StarRating from "react-native-star-rating";

const fav_like_hollow = require('../../../assets/images/heart.png');
const { width } = Dimensions.get('window');
class Dishes extends Component {

    componentDidMount() {
        

    }

    render() {
        const { data } = this.props;
        return (
            <View style={{ flex: 1, marginLeft: 20 }}>
                <View style={{ width: (2 / 3) * width }} >
                    <View style={{ height: width / 2.5, width: width * (2 / 3), shadowColor: '#000000', shadowOpacity: 0.4, elevation: 4 }}>
                        <Image source={data.imageUrl} style={{ flex: 1, height: null, width: null, borderRadius: 10 }} />
                    </View>
                    <View style={{ height: 45, alignItems: 'center', width: 45, marginTop: -60, marginLeft: (2 / 3) % width - 80, borderRadius: 25, justifyContent: 'center', backgroundColor: 'white', elevation: 6, }} >
                        <Image source={fav_like_hollow} style={{ height: 15, width: 15 }} />
                    </View>
                </View>
                <Text style={{ marginTop: 25, fontSize: 22, fontWeight: 'bold' }} > {data.dish_name} </Text>
                <View style={{flex: 1,width: '50%'}}>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={data.rating}
                    starSize={20}
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
    }
}

export default Dishes; 