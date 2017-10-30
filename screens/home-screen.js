import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {

    render() {
        return  (
            <View style={styles.container}>
                <Text style={styles.nameText}>React Native Navigation</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cc0066',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 25
    }
});