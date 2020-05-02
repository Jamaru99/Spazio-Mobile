import React from 'react';
import {
  Text, 
  View, 
  Image,  
  TouchableOpacity,
  Linking, 
  ScrollView,
  ImageBackground,
  Alert
} from 'react-native';

import Styles from './Home.styles';
import { TouchableFooter } from '@components';
import { dialCall } from '@utils';
import { texts } from '@utils';


const Home = () => {
  return (
    <View style={Styles.container}>
      <ImageBackground source={require('../../img/Background.jpg')} style={Styles.background}>
        <View style={Styles.main}>

          <ScrollView>
            {/* TO DO painel de fotos */}
            {/* <View style={Styles.panel}>
              <Image style={Styles.img_panel}
                source={require('../../img/panel/panel_img1.jpg')}
              ></Image>
            </View> */}
            
            <View style={Styles.container_logo}>
              <Image style={Styles.img_logo}
                source={require('../../img/logo.png')}
              ></Image>
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
                  }>@spazio.ninabernardes</Text>
              </View>

              <View style={Styles.network_content}>
                <TouchableOpacity
                  onPress={dialCall}
                >
                  <View>
                    <Image style={Styles.network_icon}
                    source={require('../../img/icons/icon_whats.png')}
                    ></Image>
                  </View>
                </TouchableOpacity>

                <Text style={Styles.link} 
                onPress={dialCall}
                  >(11) 99647-1809</Text>
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
                    >nina.profissionaldabeleza@gmail.com</Text>
              </View>

            </View>

          </ScrollView>
        </View>
        <TouchableFooter
          onPress={()=> alert('oi')}
        />
      </ImageBackground>
    </View>

  );
};


export default Home;
