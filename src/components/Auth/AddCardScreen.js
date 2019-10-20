import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { PensionInput, PensionButton } from '../Shared';
import { validateCardDetails } from '../../helpers/inputValidations';
import { globalStyles, colors } from '../../styles/globalStyles';

const expDateRegex = /(0[1-9]|10|11|12)\/(20[\d]{2})(?:[\d]{0,})/g;

class AddCardScreen extends Component {
  state = {
    cardNumber: '',
    expDate: '',
    cvv: '',
    isLoading: false,
    errors: {}
  };

  addCard = () => {
    const { cardNumber, expDate, cvv } = this.state;
    const { errors, isValid } = validateCardDetails({ cardNumber, expDate, cvv });

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

  navigateScreen = (screenName) => this.props.navigation.navigate(screenName);

  formatText = (text) => {
    if (text.includes('/')) return text.replace(expDateRegex, '$1/$2');
    return text.replace(/(0[1-9]|10|11|12)(\d)/, '$1/$2');
  };

  render() {
    const {
      cardNumber, expDate, cvv, isLoading, errors
    } = this.state;
    const isValidExpDate = expDateRegex.test(expDate);

    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerContainer}
          >
            <Ionicons name="ios-arrow-back" size={30} color={colors.grey} />
            <Text style={[globalStyles.headerText, { marginTop: 0, fontSize: 24 }]}>Add Card</Text>
            <View />
          </TouchableOpacity>
          <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
            <Image
              source={require('../../assets/card.png')}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <View style={styles.formContainer}>
              <PensionInput
                label="My Card Number"
                fieldName="cardNumber"
                onChangeHandler={this.handleInputChange}
                baseColor="#979797"
                tintColor="#0AD487"
                error={errors.cardNumber}
                errorColor="#D63E04"
                keyboardType="number-pad"
                renderRightAccessory={() => cardNumber.length === 16 ?
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                    color={"#0AD487"}
                  /> : null
                }
              />
              <View style={styles.cardDetailsContainer}>
                <PensionInput
                  label="Exp. Date (MM/YYYY)"
                  fieldName="expDate"
                  onChangeHandler={this.handleInputChange}
                  baseColor="#979797"
                  tintColor="#0AD487"
                  error={errors.expDate}
                  errorColor="#D63E04"
                  containerStyle={{ width: '48%' }}
                  keyboardType="number-pad"
                  formatText={this.formatText}
                  renderRightAccessory={() => isValidExpDate ?
                    <Ionicons
                      name="ios-checkmark-circle"
                      size={20}
                      color={"#0AD487"}
                    /> : null
                  }
                />
                <PensionInput
                  label="CVV"
                  fieldName="cvv"
                  onChangeHandler={this.handleInputChange}
                  baseColor="#979797"
                  tintColor="#0AD487"
                  error={errors.cvv}
                  errorColor="#D63E04"
                  containerStyle={{ width: '48%' }}
                  keyboardType="number-pad"
                  renderRightAccessory={() => cvv.length === 3  ?
                    <Ionicons
                      name="ios-checkmark-circle"
                      size={20}
                      color={"#0AD487"}
                    /> : null
                  }
                />
              </View>
            </View>
            <PensionButton
              containerStyle={{ marginTop: 30 }}
              btnText="ADD CARD"
              handlePress={this.addCard}
              isLoading={isLoading}
            />
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainContainer: {
    justifyContent: 'space-between',
  },
  createAccountContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardDetailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%'
  }
});

export default AddCardScreen;
