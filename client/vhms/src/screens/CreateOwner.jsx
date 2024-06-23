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
  
  const CreateOwnerScreen = () => {
    const [names, setNames] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [nationalId, setNationalId] = useState(null);
    const [address, setAddress] = useState(null);
  
    const { createOwner, isLoading } = useContext(AuthContext);
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
            placeholder="Enter Phone Number"
            value={phoneNumber}
            style={styles.input}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
                placeholder="Enter National ID"
                value={nationalId}
                style={styles.input}
                onChangeText={(nationalId) => setNationalId(nationalId)}
              />
  
          <TextInput
            placeholder="address"
            value={address}
            style={styles.input}
            onChangeText={(address) => setAddress(address)}
          />
          <Button
            title="Create owner"
            onPress={() => {
                createOwner(names,address,phoneNumber,nationalId);
            }}
          />
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
  
  
  export default CreateOwnerScreen;
  