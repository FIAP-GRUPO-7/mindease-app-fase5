import { useAuth } from "@/application/auth/AuthContext";
import Button from "@/presentation/components/atoms/Button";
import Input from "@/presentation/components/atoms/Input";
import { Title } from "@/presentation/components/atoms/Title";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Login() {
  const { theme } = useTheme();
  const { login } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");

  const handleLogin = async () => {
    await login(name);
    router.push("/(app)/checkin");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Title>Welcome</Title>

      <Input placeholder="Your name" value={name} onChangeText={setName} />

      <Button title="Continue" onPress={handleLogin} disabled={!name.trim()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 20,
  },
});
