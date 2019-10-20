import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { PensionInput, PensionButton } from '../Shared';
import { validateSignup, emailRegex } from '../../helpers/inputValidations';
import { globalStyles, colors } from '../../styles/globalStyles';

class CreateAccountScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    bvn: '',
    password: '',
    isLoading: false,
    errors: {}
  };

  createAccount = () => {
    const {
      firstName, lastName, phoneNumber, email, bvn, password } = this.state;
    const { errors, isValid } = validateSignup({ firstName, lastName, phoneNumber, email, bvn, password });

    if (isValid) {
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({ isLoading: false }, () => {
            this.navigateScreen('AddCard');
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
    const {
      firstName, lastName, phoneNumber, email, bvn, password, isLoading, errors
    } = this.state;

    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={30} color={colors.grey} />
          </TouchableOpacity>
          <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
            <Text style={globalStyles.headerText}>Create an Account!</Text>
            <View style={styles.formContainer}>
              <PensionInput
                label="First Name"
                fieldName="firstName"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.firstName}
                errorColor="#D63E04"
                renderRightAccessory={() => firstName ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <PensionInput
                label="Last Name"
                fieldName="lastName"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.lastName}
                errorColor="#D63E04"
                renderRightAccessory={() => lastName ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <PensionInput
                label="Phone Number"
                fieldName="phoneNumber"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.phoneNumber}
                errorColor="#D63E04"
                keyboardType="number-pad"
                renderRightAccessory={() => phoneNumber.length > 8 && phoneNumber.length < 12  ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <PensionInput
                label="Email Address"
                fieldName="email"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.email}
                errorColor="#D63E04"
                keyboardType="email-address"
                renderRightAccessory={() => emailRegex.test(email) ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <PensionInput
                label="BVN"
                fieldName="bvn"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.bvn}
                errorColor="#D63E04"
                keyboardType="number-pad"
                renderRightAccessory={() => bvn.length === 11 ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <PensionInput
                secureTextEntry
                label="Password"
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
                btnText="CREATE ACCOUNT"
                handlePress={this.createAccount}
                isLoading={isLoading}
              />
              <TouchableOpacity
                style={styles.createAccountContainer}
                onPress={() => this.navigateScreen('Login')}
              >
                <Text style={styles.newUserText}>Already have an Account?</Text>
                <Text style={[styles.forgotText, { marginTop: 0 }]}>Login</Text>
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
    paddingBottom: 5
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  newUserText: {
    fontSize: 12,
    color: '#4B5461'
  }
});

export default CreateAccountScreen;
