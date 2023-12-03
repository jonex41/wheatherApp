import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export type RootStackParamList = {
  Home: undefined;
  Details: {location:string};
};

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function HomeScreen({navigation}: Props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', marginTop: 20}}>
      <FlatList
        data={[
          'Paris',
          'London',
          'Moscow',
          'Lagos',
          'San Francisco',
          'Abuja',
          'Nairobi',
          'Albania',
          'Accra',
        ]}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {"location":item});
            }}>
           
            <Item title={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
      {/*  <Pressable onPress={()=>{
           navigation.navigate('Details')
        }}>
        <Text>Details Screen</Text>
        </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00aaff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});
