import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Card({onPress, isTurnedOver, children}) {
  return (
    <Pressable 
      onPress={onPress} 
      style={isTurnedOver ? styles.cardUp : styles.cardDown}
    >
      {isTurnedOver ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.text}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardUp: {
    width: 95,
    height: 95,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#334155",
    borderRadius: 25,
    backgroundColor: "#1e293b",
  },
  cardDown: {
    width: 95,
    height: 95,
    margin: 8,
    borderWidth: 10,
    borderColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#1e293b",
  },
  text: {
    fontSize: 46,
    color: "#334155",
  }
})