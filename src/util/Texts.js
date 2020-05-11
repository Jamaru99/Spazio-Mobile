import { Platform, NativeModules } from 'react-native';

const deviceLanguage =

    Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    
    NativeModules.SettingsManager.setting.AppleLanguaguages[0] //IOS 13
    : NativeModules.I18nManager.localeIdentifier;
    
const english = {
    "menu-tab:home": "Home",
    "menu-tab:appointment": "Appointments",
    "menu-tab:profile": "Profile",

    // home
    "home:header": "Spazio Nina Bernardes",
    "home:tt_opening-hours": "Opening hours",
    "home:hours-week": "Tuesday to Saturday from 9:00 AM to 6:00 PM",
    "home:hours-weekend": "Sunday from 10:00 to 16:00",
    "home:hours-change": "Changes may occur on hollidays",
    "home:tt_address": "Address",
    "home:address": "Rua Augusta, 101 - Sala 805",
    "home:phone": "Phone: ",

    // appointment
    "appointment:header": "Scheduled appointments",

    // profile
    "profile:header": "My info",

    // login
    "login:header": "Login",

    "error:connection": "Check your internet connection"
}

const portuguese = {
    "menu-tab:home": "Início",
    "menu-tab:appointment": "Sessões",
    "menu-tab:profile": "Perfil",

    // home
    "home:header": "Spazio Nina Bernardes",
    "home:tt_opening-hours": "Horário de funcionamento",
    "home:hours-week": "Terça à sábado das 9:00 as 18:00",
    "home:hours-weekend": "Domingo das 10:00 as 16:00",
    "home:hours-change": "Sujeito a mudanças nos feriados",
    "home:tt_address": "Endereço",
    "home:address": "Rua Augusta, 101 - Sala 805",
    "home:phone": "Telefone: ",

    // appointment
    "appointment:header": "Sessões marcadas",

    // profile
    "profile:header": "Meus dados",

    // login
    "login:header": "Login",

    "error:connection": "Verifique sua conexão à internet"
}

export default deviceLanguage === 'pt_BR' ? portuguese : english;