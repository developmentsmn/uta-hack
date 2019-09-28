import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component {

    signInWithGoogleAsync = async () => 
    {
        try {
          const { type, accessToken, user } = await Google.logInAsync({
            behavior: 'web',
            androidClientId: '788748430234-ld74p25adkog088bbg9069o7ue4bskqd.apps.googleusercontent.com',
            // iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title = "Sign in with Google"
                    onPress = {this.signInWithGoogleAsync}
                />
             </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

// 788748430234-ld74p25adkog088bbg9069o7ue4bskqd.apps.googleusercontent.com