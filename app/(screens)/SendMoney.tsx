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
          <View style={styles.totalBalanceContainer}>
            <Text style={styles.totalBalance}>Total balance</Text>
            <Image
              source={require("../../assets/icons/eye.svg")}
              resizeMode="contain"
              style={styles.eye}
            />
          </View>
          <Text style={styles.amount}>$10,500.00</Text>
        </View>
        <View style={styles.acctNumberContainer}>
          <Text style={styles.acctNumber}>2109783267</Text>
          <Image
            source={require("../../assets/icons/copy.svg")}
            resizeMode="contain"
            style={styles.copy}
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
  totalBalanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  totalBalance: {
    fontSize: 18,
    color: "gray",
    marginRight: 10,
  },
  eye: {
    width: 25,
    height: 25,
    marginTop: 3,
  },
  amount: {
    fontSize: 26,
    fontWeight: "bold",
  },
  acctNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  acctNumber: { fontWeight: "bold" },
  copy: { width: 25, height: 25, marginTop: 3 },
});
