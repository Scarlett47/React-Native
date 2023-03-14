import { View, Text, Button } from "react-native";
import React from "react";

export default function Detail({ navigation }) {
  return (
    <View>
      <Text>Ene bol detail</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Back"
      />
    </View>
  );
}
