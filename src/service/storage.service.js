import { AsyncStorage } from "react-native"

export const setUserDataInStorage = async(user) => {
  try{
    await AsyncStorage.setItem('userData', JSON.stringify(user));
    
  } catch (error){
    // console.log('Something went wrong', error);
  }
}

export const getUserDataFromStorage = async() => {
  try{
    let userData = await AsyncStorage.getItem("userData");
    let data = JSON.parse(userData);
    // console.log(data);
    return data

  } catch(error){
    console.log("Something went wrong", error);
  }
}