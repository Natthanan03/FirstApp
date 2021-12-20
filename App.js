import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( <
        View style = { styles.container } >
        <Text style = {styles.textbold}>Natthanan Ngamping</Text>
        <Text> NATTHANAN </Text>  
        <StatusBar style = "auto" / >
        </View>
    );
}

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