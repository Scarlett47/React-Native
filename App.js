import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {/* <Pressable
          onLongPress={() => {
            alert("Hello Image");
          }}
          onPress={() => {
            alert("Image");
          }}
        >
          <Image
            style={{ width: 1000, height: 1000 }}
            source={require("./assets/bg.png")}
          ></Image>
        </Pressable>
        <Pressable
          onLongPress={() => {
            alert("Hello World");
          }}
          onPress={() => {
            alert("Hello");
          }}
        >
          <Text>Hello My name is Sod-Erdene</Text>
        </Pressable>
        <TextInput style={styles.inputs} placeholder="Write..." />
        <StatusBar style="auto" /> */}
          {/* <View style={styles.container}></View> */}
        </ScrollView>
      </View>
      <View style={styles.container2}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sodoo: {
    fontSize: "50px",
    color: "red",
  },
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scroll: {
    marginHorizontal: 20,
  },
});
