import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';

import { TouchableFooter, ContentLoader } from '@components';
import { dialCall, texts } from '@utils';
import { NEW_APPOINTMENT_STACK } from '@navigation';
import { getInfo } from '@services';
import { setInfoDispatched } from '@state';

import Styles from './Home.styles';

const HomeScreen = (props) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setInfo()
  }, [setInfo])

  const setInfo = async () => {
    setLoading(true)
    const data = await getInfo()
    props.setInfoDispatched(data)
    setLoading(false)
  }

  return (
    <View style={Styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
        <View style={Styles.main}>
          {loading
            ? <ContentLoader />
            : (
              <ScrollView>
                <View style={Styles.container_logo}>
                  <Image style={Styles.img_logo} source={require('../../img/logo.png')} />
                </View>

                <View>
                  <Text style={Styles.title}>
                    {texts["home:tt_opening-hours"]}
                  </Text>
                  <Text style={Styles.text}>
                    {texts["home:hours-week"]}
                  </Text>
                  <Text style={Styles.text}>
                    {texts["home:hours-weekend"]}
                  </Text>
                  <Text style={Styles.text}>
                    {texts["home:hours-change"]}
                  </Text>
                </View>

                <View>
                  <Text style={Styles.title}>
                    {texts["home:tt_address"]}
                  </Text>
                  <Text style={Styles.text}>
                    {texts["home:address"]}
                  </Text>
                </View>

                <View style={Styles.networks_container}>
                  <View style={Styles.network_content}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL('https://www.instagram.com/spazio.ninabernardes/')
                      }
                    >
                      <View>
                        <Image style={Styles.network_icon}
                          source={require('../../img/icons/icon_insta.png')}
                        ></Image>
                      </View>
                    </TouchableOpacity>

                    <Text style={Styles.link} onPress={() =>
                      Linking.openURL('https://www.instagram.com/spazio.ninabernardes/')
                    }>{props.info.instagram}</Text>
                  </View>

                  <View style={Styles.network_content}>
                    <TouchableOpacity
                      onPress={dialCall}
                    >
                      <View>
                        <Image style={Styles.network_icon} source={require('../../img/icons/icon_whats.png')} />
                      </View>
                    </TouchableOpacity>

                    <Text style={Styles.link}
                      onPress={dialCall}
                    >{props.info.phoneNumber}</Text>
                  </View>

                  <View style={Styles.network_content}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL('mailto:nina.profissionaldabeleza@gmail.com')}
                      title='nina.profissionaldabeleza@gmail.com'
                    >
                      <View>
                        <Image style={Styles.network_icon}
                          source={require('../../img/icons/icon_gmail.png')}
                        ></Image>
                      </View>
                    </TouchableOpacity>

                    <Text style={Styles.link}
                      onPress={() =>
                        Linking.openURL('mailto:nina.profissionaldabeleza@gmail.com')}
                      title='nina.profissionaldabeleza@gmail.com'
                    >{props.info.email}</Text>
                  </View>
                </View>
              </ScrollView>
            )
          }
        </View>
        <TouchableFooter
          onPress={() => props.navigation.navigate(NEW_APPOINTMENT_STACK)}
        />
      </ImageBackground>
    </View>
  )
}

const mapStateToProps = (state) => ({
  info: state.info
})

const mapDispatchToProps = {
  setInfoDispatched
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
