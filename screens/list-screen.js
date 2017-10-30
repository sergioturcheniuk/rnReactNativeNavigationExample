import React, {Component} from 'react'
import {Button, View, StyleSheet} from 'react-native'

export default class ListScreen extends Component {

    render() {
        const {navigator} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        onPress={() =>
                            navigator.push(
                                {
                                    screen: 'DetailsScreen',
                                    title: 'Details Screen',
                                    navigatorStyle:
                                    {
                                        tabBarHidden: true
                                    }
                                }
                            )
                        }
                        title="Go to details"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cc0066',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20
    },
    nameText: {
        fontSize: 25
    }
});