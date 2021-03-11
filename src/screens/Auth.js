import React, {Component} from 'react'
import {
    ImageBackground,
    Text,
    StyleSheet
} from 'react-native'
 
import backgroundImg from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component{
    render() {
        return (
            <ImageBackground 
                source={backgroundImg}
                style={styles.background}
            >
                <Text style={styles.title}>Tasks</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    }
})