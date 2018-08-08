import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state= {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBkmMOzyXDG__2LFpNMCIkmSYJFo9ObDGs',
            authDomain: 'auth-d8049.firebaseapp.com',
            databaseURL: 'https://auth-d8049.firebaseio.com',
            projectId: 'auth-d8049',
            storageBucket: 'auth-d8049.appspot.com',
            messagingSenderId: '452133512221'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <View style={styles.buttonStyle}>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <View style={styles.spinnerStyle}><Spinner size='large' /></View>;
        }
    }

    render() {
        return (
            <View>
            <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
        flexDirection: 'row',
        paddingTop: 10
    },
    spinnerStyle: {
        flexDirection: 'row',
        paddingTop: 100
    }
};

export default App;
