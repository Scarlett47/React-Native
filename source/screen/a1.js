import { View, Text, Button } from "react-native";
import React from "react";

export default function aone({ navigation }) {
  return (
    <View>
      <Text>Ene bol a1</Text>
      <Button
        onPress={() => {
          navigation.navigate("atwo");
        }}
        title="Go"
      />
    </View>
  );
}
