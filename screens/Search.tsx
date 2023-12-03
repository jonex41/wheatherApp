import {StyleSheet, View} from 'react-native';
import Header from './Header';
import {Button, Card, TextInput, Text} from 'react-native-paper';
import React, {useState} from 'react';
import useNetworkCallback, {WhetherModel} from './Network';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import MyBottomSheet from './BottomDialog';
type MyType = {
  title: string;
};

const Search = ({title}: MyType) => {
  /*   const fetchCities = (text: string) => {
    console.log('1wwwwwwwww');
   setText(text);
    console.log(text);
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+"London"+"?key=CMKWDT7RJRF7AY5UY6SRUNN3P")
      .then(item => {
        console.log('vvvvvvvvv');
          return item.json();
      })
      .then(cityData => {
        console.log('dddddd');
        console.log(cityData);
        setCities(cityData);
      }).catch(err =>{
        console.log(err);
      });
  }; */

  const [text, setText] = React.useState(title);

  const {isLoading, data, isError, error, isFetched, isFetching, refetch} =
    useNetworkCallback(text);

  return (
    <View style={styles.container}>
      {/*  <Header title="Search" /> */}
      <View style={[styles.container, styles.container2]}>
        <TextInput
          label="City Name"
          mode="outlined"
          theme={{colors: {primary: '#00aaff'}}}
          value={text}
          onChange={text => {
            const value = text.nativeEvent.text;
            //  setText(value)
          }}
        />

        <Button
          icon="content-save"
          mode="contained"
          onPress={() => {
            refetch();
          }}
          style={styles.button}
          theme={{colors: {primary: '#00aaff'}}}>
          Search City
        </Button>
        <Card>
          <Card.Title
            titleVariant="titleLarge"
            title={data?.data.address.toUpperCase()}
          />
          <Card.Content>
            <Text variant="titleLarge">{data?.data.latitude}</Text>
            <Text variant="titleLarge">{data?.data.longitude}</Text>
            <Text variant="bodyMedium">{data?.data.description}</Text>
          </Card.Content>
        </Card>
        {/*  {isFetched && <MyBottomSheet/>} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    padding: 15,
  },
  button: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 50,
    padding: 5,
  },
});
