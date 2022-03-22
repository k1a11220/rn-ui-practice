import React from "react";
import { StyleSheet, View } from "react-native";

const Banner: any = () => {
  return (
    <View style={styles.height}>
      <View style={styles.contents}></View>
      {/* <View style={styles.line}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  height: {
    height: 8,
  },

  container: {
    height: 104,
    marginHorizontal: 16,
    backgroundColor: "#929292",
    borderRadius: 8,
    marginVertical: 8,
    marginBottom: 16,
    // marginTop: 8,
  },
});

export default Banner;
