import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class DetailsScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>Details</Text>
            </View>
        );
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