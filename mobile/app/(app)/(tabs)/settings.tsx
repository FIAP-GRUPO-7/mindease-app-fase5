import { useAuth } from "@/application/auth/AuthContext";
import { useCognitive } from "@/application/cognitive/CognitiveContext";
import Button from "@/presentation/components/atoms/Button";
import { Subtitle } from "@/presentation/components/atoms/Subtitle";
import { Switch } from "@/presentation/components/atoms/Switch";
import { Title } from "@/presentation/components/atoms/Title";
import { useTheme } from "@/presentation/theme/ThemeContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const { theme, toggleTheme, isDark } = useTheme();
  const { settings, update } = useCognitive();
  const { logout } = useAuth();
  const router = useRouter();
  const tabBarHeight = useBottomTabBarHeight();

  const changeComplexity = async (level: "low" | "medium" | "high") => {
    await update({ ...settings, complexity: level });
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={["top", "left", "right"]}
    >
      <View style={styles.header}>
        <Title>Configurações</Title>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: tabBarHeight + 32 },
        ]}
      >
        <Subtitle>Nível de complexidade</Subtitle>

        <Button
          title="Baixo"
          variant={settings.complexity === "low" ? "primary" : "secondary"}
          onPress={() => changeComplexity("low")}
        />
        <Button
          title="Médio"
          variant={settings.complexity === "medium" ? "primary" : "secondary"}
          onPress={() => changeComplexity("medium")}
        />
        <Button
          title="Alto"
          variant={settings.complexity === "high" ? "primary" : "secondary"}
          onPress={() => changeComplexity("high")}
        />

        <Subtitle style={styles.sectionTitle}>Ajustes adicionais</Subtitle>

        <View style={styles.switchRow}>
          <Subtitle>Modo foco</Subtitle>
          <Switch
            value={settings.focusMode}
            onValueChange={(value) => update({ ...settings, focusMode: value })}
          />
        </View>

        <View style={styles.switchRow}>
          <Subtitle>Reduzir animações</Subtitle>
          <Switch
            value={settings.reducedAnimations}
            onValueChange={(value) =>
              update({ ...settings, reducedAnimations: value })
            }
          />
        </View>

        <Subtitle style={styles.sectionTitle}>Aparência</Subtitle>

        <View style={styles.switchRow}>
          <Subtitle>Modo escuro</Subtitle>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>

        <View style={styles.selectRow}>
          <Subtitle>Progresso</Subtitle>
          <View style={styles.selectContainer}>
            <Button
              title="Bolinhas"
              variant={settings.progressType === "dots" ? "primary" : "secondary"}
              onPress={async () => {
                await update({ ...settings, progressType: "dots" });
              }}
            />
            <Button
              title="Barra"
              variant={settings.progressType === "bar" ? "primary" : "secondary"}
              onPress={async () => {
                await update({ ...settings, progressType: "bar" });
              }}
            />
          </View>
        </View>

        <View style={styles.logoutWrapper}>
          <Button
            title="Sair da conta"
            variant="secondary"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 12,
  },
  sectionTitle: {
    marginTop: 20,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutWrapper: {
    marginTop: 32,
  },
  selectRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
