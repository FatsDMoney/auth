import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';


class App extends Component {
    onComponentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBkmMOzyXDG__2LFpNMCIkmSYJFo9ObDGs',
            authDomain: 'auth-d8049.firebaseapp.com',
            databaseURL: 'https://auth-d8049.firebaseio.com',
            projectId: 'auth-d8049',
            storageBucket: 'auth-d8049.appspot.com',
            messagingSenderId: '452133512221'
        });
    }

    render() {
        return (
            <View>
            <Header headerText="Authentication" />
                <Text>An App</Text>
            </View>
        );
    }
}

export default App;
