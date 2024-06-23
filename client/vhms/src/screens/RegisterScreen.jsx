import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator } from "react-native";

const RegisterScreen = () => {
  const [names, setNames] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [nationalID, setNationalId] = useState(null);
  const [password, setPassword] = useState(null);

  const { signup, isLoading } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#2D96F3" />}
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Enter FullNames"
          value={names}
          style={styles.input}
          onChangeText={(names) => setNames(names)}
        />
        <TextInput
          placeholder="Enter email"
          value={email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="Enter Phone Number"
          value={phoneNumber}
          style={styles.input}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
              placeholder="Enter National ID"
              value={nationalID}
              style={styles.input}
              onChangeText={(nationalID) => setNationalId(nationalID)}
            />

        <TextInput
          placeholder="Enter password"
          value={password}
          style={styles.input}
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          title="Signup"
          onPress={() => {
            signup(names,email,phoneNumber,nationalID,password);
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  link: {
    color: "blue",
  },
});


export default RegisterScreen;
