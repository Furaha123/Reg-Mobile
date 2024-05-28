import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";
import React from "react";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    display: "flex",
    justifyContent: "center",
  },
  dot: {
    height: 10,
    borderRadius: 50,
    backgroundColor: "#493d8a",
    marginHorizontal: 8,
  },
});
