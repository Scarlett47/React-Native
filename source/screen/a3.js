import { View, Text, Button } from "react-native";
import React from "react";

export default function athree({ navigation }) {
  return (
    <View>
      <Text>Ene bol a3</Text>
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
        title="Go"
      />
    </View>
  );
}
