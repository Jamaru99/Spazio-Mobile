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

    // home
    "home:tt_opening-hours": "Horário de funcionamento",
    "home:hours-week": "Terça à sábado das 9:00 as 18:00",
    "home:hours-weekend": "Domingo das 10:00 as 16:00",
    "home:hours-change": "Sujeito a mudanças nos feriados",
    "home:tt_address": "Endereço",
    "home:address": "Rua Augusta, 101 - Sala 805",
    "home:phone": "Telefone: ",
    // "home:": "",
    // "": "",
    // "": "",
    // "": "",
    // "": "",
    

    
}

export default deviceLanguage === 'pt_BR' ? Portuguese : English;