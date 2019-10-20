import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { PensionInput, PensionButton } from '../Shared';
import { validateLogin } from '../../helpers/inputValidations';
import { globalStyles, colors } from '../../styles/globalStyles';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false,
    errors: {}
  };

  login = () => {
    const { username, password } = this.state;
    const { errors, isValid } = validateLogin({ username, password });

    if (isValid) {
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({ isLoading: false }, () => {
            this.navigateScreen('AppStack');
          });
        }, 3000);
      });
    } else {
      this.setState({ errors });
    }
  }

  handleInputChange = (fieldName, value) => {
    this.setState((state) => ({
      [fieldName]: value,
      errors: {
        ...state.errors,
        [fieldName]: ''
      }
    }));
  }

  navigateScreen = (screenName) => this.props.navigation.navigate(screenName)

  render() {
    const { username, password, isLoading, errors } = this.state;

    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={30} color={colors.grey} />
          </TouchableOpacity>
          <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
            <Text style={globalStyles.headerText}>Glad you are back!</Text>
            <View style={styles.formContainer}>
              <PensionInput
                label="My Email/Phone Number/My RSA PIN"
                fieldName="username"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.username}
                errorColor="#D63E04"
                renderRightAccessory={() => username ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <PensionInput
                secureTextEntry
                label="My Password"
                fieldName="password"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.password}
                errorColor="#D63E04"
                renderRightAccessory={() => password.length >= 6 ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <Text style={styles.forgotText}>Forgot your Password?</Text>
            </View>
            <View>
              <PensionButton
                containerStyle={{ marginVertical: 15 }}
                btnText="LOGIN"
                handlePress={this.login}
                isLoading={isLoading}
              />
              <TouchableOpacity
                style={styles.createAccountContainer}
                onPress={() => this.navigateScreen('CreateAccount')}
              >
                <Text style={styles.newUserText}>New user?</Text>
                <Text style={[styles.forgotText, { marginTop: 0 }]}> Create an account</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  mainContainer: {
    justifyContent: 'space-between',
  },
  forgotText: {
    marginTop: 15,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '100',
    color: '#645DC0'
  },
  createAccountContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  newUserText: {
    fontSize: 12,
    color: '#4B5461'
  }
});

export default LoginScreen;
