import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './common-styles'
import ColumnItems from './column-items'
import CommonLayouts from './common-layouts'

export default function App() {
    return ( <
        View style = { commonStyles.container } >
        <Text style = { commonStyles.textTitle }>React Native</Text>
        <Text> NATTHANAN </Text>  
        <ColumnItems />
        <StatusBar style = "auto" />
        </View>
    );
}

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99FF99',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbold: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
*/