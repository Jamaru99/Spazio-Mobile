import { Platform, NativeModules } from 'react-native';

const deviceLanguage =

    Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale //iOS <13
    || NativeModules.SettingsManager.setting.AppleLanguaguages[0] //iOS 13+
    : NativeModules.I18nManager.localeIdentifier; //Android
    
const english = {
    "menu-tab:home": "Home",
    "menu-tab:appointment": "Appointments",
    "menu-tab:profile": "Profile",

    "sunday": "sun",
    "monday": "mon",
    "tuesday": "tue",
    "wednesday": "wed",
    "thursday": "thu",
    "friday": "fri",
    "saturday": "sat",

    "email": "Email",
    "password": "Password",
    "confirm_password": "Confirm password",

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

    // reset password
    "reset_password:header": "Reset password",
    "reset_password:send_token_advice": "You will be sent a code to your email so that you can change your password",
    "reset_password:button_send_token": "Send code",
    "reset_password:verify_token_advice": "Enter the code sent to your email:",
    "reset_password:button_verify_token": "Verify",
    "reset_password:change_password_advice": "Enter your new password:",
    "reset_password:change_password_button": "Change password",
    "reset_password:toast_invalid_token": "Invalid code",
    "reset_password:toast_passwords_unmatch": "Passwords don't match",
    "reset_password:toast_password_changed": "Password has been changed!",

    // service
    "service:header": "New appointment",
    "service:title": "Choose the service you want:",
    "service:duration_prefix": "Duration:",

    // employee
    "employee:header": "New appointment",
    "employee:title": "Choose the professional:",

    // schedule
    "schedule:header": "New appointment",
    "schedule:date_title": "Choose date:",
    "schedule:schedule_title": "Choose time:", 
    "schedule:no_schedule": "No available schedule at this date.",

    // summary
    "summary:header": "Confirm appointment",
    "summary:service_label": "Service:",
    "summary:employee_label": "Professional:",
    "summary:datetime_label": "Date and time:",
    "summary:total_label": "Total:",
    "summary:payment_advise": "Payment by cash or card at the establishment",
    "summary:button_confirm": "CONFIRM",
    "summary:button_confirmed": "SCHEDULED!",
    
    "error:unexpected": "Error, try again",
    "error:connection": "Check your internet connection"
}

const portuguese = {
    "menu-tab:home": "Início",
    "menu-tab:appointment": "Sessões",
    "menu-tab:profile": "Perfil",

    "sunday": "dom",
    "monday": "seg",
    "tuesday": "ter",
    "wednesday": "qua",
    "thursday": "qui",
    "friday": "sex",
    "saturday": "sáb",

    "email": "Email",
    "password": "Senha",
    "confirm_password": "Confirmar senha",

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

    // reset password
    "reset_password:header": "Resetar senha",
    "reset_password:send_token_advice": "Enviaremos um código para seu email, para que consiga alterar sua senha",
    "reset_password:button_send_token": "Enviar código",
    "reset_password:verify_token_advice": "Digite o código enviado para seu email:",
    "reset_password:button_verify_token": "Conferir",
    "reset_password:change_password_advice": "Digite sua nova senha:",
    "reset_password:change_password_button": "Alterar senha",
    "reset_password:toast_invalid_token": "Código inválido",
    "reset_password:toast_passwords_unmatch": "Senhas não coincidem",
    "reset_password:toast_password_changed": "Senha alterada!",

    // service
    "service:header": "Agendar sessão",
    "service:title": "Selecione o serviço desejado:",
    "service:duration_prefix": "Duração:",
    "schedule:no_schedule": "Nenhum horário disponível na data selecionada.",

    // employee
    "employee:header": "Agendar sessão",
    "employee:title": "Escolha a(o) profissional:",

    // schedule
    "schedule:header": "Agendar sessão",
    "schedule:date_title": "Escolha a data:",
    "schedule:schedule_title": "Escolha o horário:",

    // summary
    "summary:header": "Confirmar agendamento",
    "summary:service_label": "Serviço:",
    "summary:employee_label": "Profissional:",
    "summary:datetime_label": "Data e horário:",
    "summary:total_label": "Total:",
    "summary:payment_advise": "Pagamento em dinheiro ou cartão no próprio estabelecimento",
    "summary:button_confirm": "CONFIRMAR",
    "summary:button_confirmed": "AGENDADO!",
    
    "error:unexpected": "Erro, tente novamente",
    "error:connection": "Verifique sua conexão à internet"
}

export default deviceLanguage === 'pt_BR' ? portuguese : english;