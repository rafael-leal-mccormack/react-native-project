import React, { Component } from 'react';
import { Image, AppRegistry } from 'react-native';

export default class Anime extends Component {
    render() {
        let pic = {
            uri: this.props.url
        }
        return (
            <Image 
            style = {{flex: 1, flexDirection: "row", justifyContent: 'space-between'}}
            source={pic} style={{width: 300, height: 180}}></Image>
        )
    }
}