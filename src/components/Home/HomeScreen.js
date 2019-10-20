import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TransactionCard from './TransactionCard';
import { globalStyles } from '../../styles/globalStyles';

const transactions = [
  {
    id: '1',
    title: `Pension Apr'2018`,
    date: '12 April, 2018',
    transactionType: 'CONTRIBUTION',
    amount: '4,600.74'
  },
  {
    id: '2',
    title: `Cash Out`,
    date: '19 March, 2018',
    transactionType: 'CASH OUT',
    amount: '4,600.74'
  },
  {
    id: '3',
    title: `Pension Mar'2018`,
    date: '12 March, 2018',
    transactionType: 'CONTRIBUTION',
    amount: '4,600.74'
  },
    {
    id: '4',
    title: `Pension Mar'2018`,
    date: '12 March, 2018',
    transactionType: 'CONTRIBUTION',
    amount: '4,600.74'
  },
    {
    id: '5',
    title: `Pension Mar'2018`,
    date: '12 March, 2018',
    transactionType: 'CONTRIBUTION',
    amount: '4,600.74'
  },
    {
    id: '6',
    title: `Pension Mar'2018`,
    date: '12 March, 2018',
    transactionType: 'CONTRIBUTION',
    amount: '4,600.74'
  }
];

const keyExtractor = ({ id }) => id;

class HomeScreen extends Component {
  renderTransaction = ({ item, index }) => {
    const lastItem = index === transactions.length - 1;

    return (
      <TransactionCard
        key={item._id}
        lastItem={lastItem}
        {...item}
      />
    )
  }

  render() {
    return (
      <SafeAreaView style={[globalStyles.safeArea, { backgroundColor: '#eaf5f6'}]}>
        <StatusBar backgroundColor="#eaf5f6" barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>AVAILABLE BALANCE</Text>
            <View style={styles.headerCurrencyContainer}>
              <View style={styles.currencyContainer}>
                <MaterialCommunityIcons name="currency-ngn" size={15} color="#124069" />
              </View>
              <Text style={styles.headerCurrencyText}>547,916.15</Text>
            </View>
            <Text style={[styles.headerText, { color: '#0AD487'}]}>My Total Balance: NGN 10,610,918.25</Text>
            <Image
              source={require('../../assets/hero.png')}
              resizeMode="cover"
              style={styles.heroImage}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={{ marginVertical: 20, fontSize: 12, color: '#242b34', textAlign: 'center' }}>
              RECENT TRANSACTIONS
            </Text>
            <FlatList
              data={transactions}
              contentContainerStyle={styles.flatListContainer}
              renderItem={this.renderTransaction}
              keyExtractor={keyExtractor}
              ListEmptyComponent={
                <View style={styles.emptyListContainer}>
                  <Text style={styles.emptyText}>No Transaction</Text>
                </View>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerContainer: {
    position: 'relative',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf5f6'
  },
  headerText: {
    fontSize: 13,
    fontWeight: '100',
    textAlign: 'center',
    color: '#a9bac7'
  },
  headerCurrencyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  headerCurrencyText: {
    fontSize: 32,
    // fontWeight: '500',
    color: '#124069'
  },
  currencyContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#a1b8c7'
  },
  mainContainer: {
    justifyContent: 'space-between',
  },
  heroImage: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  }
});
export default HomeScreen
