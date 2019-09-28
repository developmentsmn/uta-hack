import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";

import {FirebaseContext} from '../context';

class LoadingScreen extends Component {

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        this.context.auth().onAuthStateChanged(
            
            user => {
                if(user){
                    this.props.navigation.navigate('DashboardScreen');
                }
                else {
                    this.props.navigation.navigate('LoginScreen');
                }
            }
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size = "large" />  
            </View>
        );
    }
}

LoadingScreen.contextType = FirebaseContext;

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});