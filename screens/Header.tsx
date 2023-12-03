import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

type Props = {
  title: string
  
} 


const Header = (props: Props) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header theme={{ colors: { primary: 'red' } }} style={styles.myAppbar}>
      <Title style={styles.text}>{props.title}</Title>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  theme: {
    color: '#00aaff',
  },
  text: {
    color: 'white',
  },
  myAppbar: {
    flexDirection:'row',
    justifyContent: 'center',
    backgroundColor:'#00aaff'
  }
});
