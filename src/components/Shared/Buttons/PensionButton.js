import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PensionButton = ({
  containerStyle, textStyle, btnText, handlePress, isLoading = false
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={handlePress}
      disabled={isLoading}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.textStyle, textStyle]}>{btnText}</Text>
        {isLoading && <ActivityIndicator style={{ marginLeft: 10 }} size="small" color="#fff" />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#BABABA'
  },
  textStyle: {
    color: '#fff'
  }
});

export default PensionButton;
