import {
  View,
  Text,
  ScrollView,
  Pressable,
  Button,
  StatusBar,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.v0}>
            <View style={styles.v1}>
              <Text style={styles.v0text}>Tovch nom</Text>
              <Ionicons name="chevron-forward" style={styles.v0icon}></Ionicons>
            </View>
            <View style={styles.v2}>
              <Text style={styles.v0text}>cahim nom</Text>
              <Foundation
                name="upload-cloud"
                style={styles.v0icon}
              ></Foundation>
            </View>
            <View style={styles.v3}>
              <Text style={styles.v0text}>Audio nom</Text>
            </View>
            <View style={styles.v4}>
              <Text style={styles.v0text}>Podcast</Text>
            </View>
          </View>

          <View style={styles.nomView0}>
            <Text>KIKI BOLON JIJI</Text>
            <Text>Ene doloo honog best seller</Text>
            <Image
              style={styles.nomimage0}
              source={require("../assets/bg.png")}
            />
          </View>
          <Button
        onPress={() => {
          navigation.navigate("aone");
        }}
        title="Go"
      />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  v0: {
    backgroundColor: "white",
    height: 270,
    borderRadius: 20,
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  v1: {
    height: 100,
    width: 150,
    backgroundColor: "aqua",
    margin: 5,
  },
  v2: {
    height: 100,
    width: 150,
    backgroundColor: "tomato",
    margin: 5,
  },
  v3: {
    height: 100,
    width: 150,
    backgroundColor: "orange",
    margin: 5,
  },
  v4: {
    height: 100,
    width: 150,
    backgroundColor: "violet",
    margin: 5,
  },
  v0text: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    margin: 15,
  },
  v0icon: {
    fontSize: 32,
    color: "white",
    marginLeft: 15,
  },
  nomView0: {
    backgroundColor: "white",
    height: 500,
    margin: 15,
    borderRadius: 20,
    padding: 20,
    overflow: "hidden",
  },
  nomView0text0: {
    color: "grey",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  nomView0text1: {
    color: "black",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },
  nomimage0: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
