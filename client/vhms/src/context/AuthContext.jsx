import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect } from "react";
import { BASE_URL } from "../config";
import {ToastAndroid} from 'react-native'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [splashLoading, setSplashLoading] = React.useState(false);


  const signup = (names,email,phoneNumber,nationalID,password) => {
    setIsLoading(true);
    return axios
      .post(`${BASE_URL}/auth/signup`, {
        names,
        email,
        phoneNumber,
        nationalID,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        let userInfo = res.data.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Registration error ${err}`);
      });
  }


  const login = (email,password)=>{
    setIsLoading(true);
    return axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        let userInfo = res.data;
        console.log("user info:", userInfo)
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Login error ${err}`);
      });
  }


  const createOwner = (names,address,phoneNumber,nationalId) => {
    setIsLoading(true);
    return axios
      .post(`${BASE_URL}/owner/create`, {
        names,
        address,
        phoneNumber,
        nationalId,
      })
      .then((res) => {
        setIsLoading(false);
        let userInfo = res.data.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Registration error ${err}`);
      });
  }

  const createCar = (ownerId,model,plate,price,year,chasingNumber) => {
    setIsLoading(true);
    return axios
      .post(`${BASE_URL}/car/create`, {
        ownerId,
        model,
        plate,
        price,
        year,
        chasingNumber,
      })
      .then((res) => {
        setIsLoading(false);
        let userInfo = res.data.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Registration error ${err}`);
      });
  }

  const isLoggedIn = async()=>{
    try{
        setSplashLoading(true);
        let userInfo =  await AsyncStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo);
        if(userInfo){
            setUserInfo(userInfo);
            setSplashLoading(false);
            
        }
    }
    catch(e){
        setSplashLoading(false);
        console.log(`Error ${e}`);
    }
  }


  useEffect(()=>{
   isLoggedIn();
  },[]);



  return(
    <AuthContext.Provider value={{signup,login,createOwner,createCar,splashLoading,isLoading,userInfo}}>
        {children}
    </AuthContext.Provider>
  )
};
