import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Search from './Search';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Home';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;



function DetailsScreen({route, navigation}: Props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { location } = route.params;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="#00aaff"
      />
      <Search title={location}/>
     
    
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DetailsScreen;
