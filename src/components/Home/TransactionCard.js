import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../styles/globalStyles';

const colorNames = {
  CONTRIBUTION: 'contribution',
  ['CASH OUT']: 'cashout'
}

const TransactionCard = ({ title, date, transactionType, amount, lastItem }) => {
  const colorName = colorNames[transactionType];

  return (
    <View
      style={[styles.itemContainer, lastItem ? { marginBottom: 0 } : {}]}
    >
      <MaterialCommunityIcons name="chart-line-variant" size={15} color={colors[`${colorName}Thick`]} />
      <View style={{ width: '60%'}}>
        <Text style={styles.topText}>
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: '#b1b2bb' }}>{date}</Text>
      </View>
      <View style={{ width: '30%', alignItems: 'flex-end' }}>
        <Text style={styles.topText}>NGN{amount}</Text>
        <View style={{ paddingVertical: 4, paddingHorizontal: 15, borderRadius: 15, backgroundColor: colors[`${colorName}Light`]}}>
          <Text style={{ fontSize: 8, color: colors[`${colorName}Thick`] }}>{transactionType}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#f6f6f9'
  },
  topText: {
    fontSize: 14,
    color: '#333548',
    marginBottom: 10 
  }
});

export default TransactionCard;
