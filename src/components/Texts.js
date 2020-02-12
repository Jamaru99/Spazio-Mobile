import { Platform, NativeModules } from 'react-native';

//pegando o idioma do aparelho
const deviceLanguage=

    Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.setting.AppleLanguaguages[0] //IOS 13
    : NativeModules.I18nManager.localeIdentifier;
    

    
const English ={
    "menu-tab:home": "Home",
    "menu-tab:appointment": "Appointment",
    "menu-tab:profile": "Profile",
}

const Portuguese ={
    "menu-tab:home": "Início",
    "menu-tab:appointment": "Sessões",
    "menu-tab:profile": "Perfil",
    

    
}

export default deviceLanguage === 'pt_BR' ? Portuguese : English;