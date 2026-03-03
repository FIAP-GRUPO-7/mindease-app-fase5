import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface BreathingOrbProps {
  inhaleDuration: number;
  exhaleDuration: number;
  pauseDuration?: number;
  size?: number;
}

export function BreathingOrb({
  inhaleDuration,
  exhaleDuration,
  pauseDuration = 0,
  size = 220,
}: BreathingOrbProps) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.3, {
          duration: inhaleDuration,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1.3, { duration: pauseDuration }),
        withTiming(1, {
          duration: exhaleDuration,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, { duration: pauseDuration }),
      ),
      -1,
      false,
    );
  }, [inhaleDuration, exhaleDuration, pauseDuration]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={[styles.wrapper, { width: size, height: size }]}>
      <View style={styles.outerCircle} />

      <Animated.View style={[styles.innerCircle, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#BDBDBD",
  },
  innerCircle: {
    width: "70%",
    height: "70%",
    borderRadius: 999,
    backgroundColor: "#D9D9D9",
  },
});
