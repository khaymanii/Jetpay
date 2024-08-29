import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SendMoney() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>Hello, Anwuri</Text>
        <View>
          <Image
            source={require("../../assets/icons/bell.svg")}
            resizeMode="contain"
            style={styles.notificationContainer}
          />
        </View>
      </View>{" "}
      <View style={styles.acctBalanceContainer}>
        <View>
          <View>
            <Text>Total balance</Text>
            <Image
              source={require("../../assets/icons/eye.svg")}
              resizeMode="contain"
            />
          </View>
          <Text>$10,500.00</Text>
        </View>
        <View>
          <Text>2109783267</Text>
          <Image
            source={require("../../assets/icons/copy.svg")}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  acctBalanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
