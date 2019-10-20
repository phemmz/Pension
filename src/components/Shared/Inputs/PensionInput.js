import React from 'react';
import { TextField } from 'react-native-material-textfield';


const PensionInput = ({
  onChangeHandler, fieldName, ...props
}) =>
  <TextField
    autoCorrect={false}
    underlineColorAndroid="transparent"
    autoCapitalize="none"
    onChangeText={(value) => onChangeHandler(fieldName, value)}
    editable={true}
    lineWidth={1}
    activeLineWidth={1}
    {...props}
  />;

export default PensionInput;
