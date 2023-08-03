import { Button } from "app";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeTamaguiProvider } from "./NativeTamaguiProvider";

export default function Native() {
  return (
    <NativeTamaguiProvider>
      <View style={styles.container}>
        <Text style={styles.header}>Native</Text>
        <Button
          onClick={() => {
            console.log("Pressed!");
            alert("Pressed!");
          }}
          text="Boop"
        />
        <StatusBar style="auto" />
      </View>
    </NativeTamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
