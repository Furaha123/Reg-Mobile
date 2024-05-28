import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../constraints";


const Button = ({ onPress, title, isValid, loader }) => {
  return (
    <TouchableOpacity
      onPress={isValid ? onPress : null}
      style={[
        styles.btnStyle,
        { backgroundColor: isValid ? COLORS.primary : COLORS.gray },
      ]}
      disabled={!isValid}
    >
      {loader ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={styles.btnTxt}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    height: 50,
    marginVertical: 20,
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 18,
  },

  btnTxt: {
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: 18,
  },
});
