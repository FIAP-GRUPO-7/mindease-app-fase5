import { useAuth } from "@/application/auth/AuthContext";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Title } from "@/presentation/components/atoms/Title";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Dashboard() {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Title>Welcome, {user?.name}</Title>
        <Subtitle>This is your MindEase dashboard.</Subtitle>

        <Button title="Logout" variant="secondary" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  content: {
    gap: 20,
    alignItems: "center",
  },
});
