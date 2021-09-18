import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Colors, Image, Button} from 'react-native-ui-lib';

const width = Dimensions.get('window').width;
const Onboarding = ({navigation}) => {
  return (
    <View flex backgroundColor={Colors.bgColor2}>
      <View flex center marginT-30>
        <Text b28 marginB-15 textColor4>
          Welcome to Sleep
        </Text>
        <View center>
          <Text r14 textColor3 marginB-8>
            Explore the new king of sleep. It uses sound {'\n'}and vesualization
            to create perfect conditions {'\n'}for refreshing sleep.
          </Text>
        </View>
      </View>
      <View flex center>
        <Image
          assetGroup="WelcomeSleep"
          assetName="Bird"
          style={{alignSelf: 'center', marginTop: 55, position: 'absolute'}}
        />
      </View>

      <View flex center style={{alignItems: 'center'}}>
        <Button
          label="GET STARTED"
          onPress={() => navigation.navigate('SleepMusic')}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  btn: {width: 374, height: 63, borderRadius: 30},
});
