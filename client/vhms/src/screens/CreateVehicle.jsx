import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, Picker } from "react-native";

const CreateVehicleScreen = () => {
  const [model, setModel] = useState(null);
  const [price, setPrice] = useState(null);
  const [plate, setPlate] = useState(null);
  const [year, setYear] = useState(null);
  const [chasingNumber, setChasingNumber] = useState(null);
  const [owners, setOwners] = useState([]);
  const [ownerId, setOwnerID] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3300/owner/getAll")
      .then((res) => res.json())
      .then((data) => {
        setOwners(data.data);
      });
  }, [owners]);


  const { createOwner, isLoading } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#2D96F3" />}
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Enter Car Model"
          value={model}
          style={styles.input}
          onChangeText={(model) => setModel(model)}
        />

        <TextInput
          placeholder="Enter Car Price"
          value={price}
          style={styles.input}
          onChangeText={(price) => setPrice(price)}
        />
        <TextInput
          placeholder="Enter Car Plate NUmber"
          value={plate}
          style={styles.input}
          onChangeText={(plate) => setPlate(plate)}
        />

        <TextInput
          placeholder="Enter Manufacturer Year"
          value={year}
          style={styles.input}
          onChangeText={(year) => setYear(year)}
        />

        <TextInput
          placeholder="Enter Chasing Number"
          value={chasingNumber}
          style={styles.input}
          onChangeText={(year) => setChasingNumber(year)}
        />

        <TextInput
          placeholder="Enter Chasing Number"
          value={chasingNumber}
          style={styles.input}
          onChangeText={(year) => setChasingNumber(year)}
        />
        {owners.map((owner, index) => {
          return (
            <Picker key={index} style={{ marginBottom: "2rem", borderRadius:'10 px', height:'30px' }}>
              <Picker.Item label={owner.names} value={owner._id} />
            </Picker>
          );
        })}

        <Button
          title="Create owner"
          onPress={() => {
            createOwner(names, address, phoneNumber, nationalId);
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

export default CreateVehicleScreen;
