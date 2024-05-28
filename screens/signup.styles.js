import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constraints";

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    height: SIZES.height,
  },
  viewContainer: {
    width: SIZES.width,
    
    // paddingHorizontal: 4,
    marginVertical: 26,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: SIZES.xlarge + 12,
  },
  cover: {
    height: SIZES.height / 2.6,
    width: SIZES.width - 60,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  wrapper: {
    marginBottom: 20,
    marginHorizontal: 18,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.small + 4,
    marginBottom: 5,
    marginEnd: 5,
    // textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  registration: {
    marginTop: 20,
    textAlign: "center",
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});

export default style;
