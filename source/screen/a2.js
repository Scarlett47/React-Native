import { View, Text, Button } from "react-native";
import React from "react";

export default function atwo({ navigation }) {
  return (
    <View>
      <Text>Ene bol a2</Text>
      <Button
        onPress={() => {
          navigation.navigate("athree");
        }}
        title="Go"
      />
    </View>
  );
}





