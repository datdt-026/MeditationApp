import {useNavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import RowList from './RowList';

const witdh = Dimensions.get('window').width;

const SleepMusic = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <View backgroundColor={Colors.bgColor2} flex>
      <Image
        source={require('../../assets/header.png')}
        style={{width: witdh}}
      />
      <Text b30 color="white" marginT-16 marginL-24>
        Night Music
      </Text>
      <Text m14 color="white" marginT-16 marginL-24>
        45 Min - Sleep Music
      </Text>
      <Text r18 color="white" marginT-16 marginL-24>
        Ease the mind into a restful night’s sleep with {'\n'}these deep,
        amblent tones.
      </Text>

      <Text b24 color="white" marginT-16 marginL-24>
        Related
      </Text>
      <ScrollView>
        <RowList title={''} />
      </ScrollView>
      <View style={{alignItems: 'center', marginBottom: 16}}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            width: 374,
            height: 63,
            borderRadius: 30,
            alignItems: 'center',
          }}
          // onPress={()=> navigationRef.navigate('')}
        >
          <Text m16 textColor8 center marginT-18>
            PLAY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SleepMusic;

const styles = StyleSheet.create({});
