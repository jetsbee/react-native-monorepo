import { Button } from "app/src/button";
import { Providers } from "app/src/providers";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <Providers>
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
    </Providers>
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
