import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
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
                <LoginForm />
            </View>
        );
    }
}

export default App;
