import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaskList extends Component{
    render(){
        const today = moment().local('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>Tarefa #01</Text>
                    <Text>Tarefa #02</Text>
                    <Text>Tarefa #03</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    background: {
        flexGrow: 3
    },
    taskList: {
        flexGrow: 7
    },
    titleBar: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})