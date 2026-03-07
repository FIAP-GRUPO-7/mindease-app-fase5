import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "@/presentation/theme/ThemeContext";
import {
  IoHomeOutline,
  IoHome,
  IoSettingsOutline,
  IoSettings,
} from "react-icons/io5";

export default function TabsLayout() {
  const { theme, isColorBlind } = useTheme();

  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: theme.background }}
    >
      <aside
        style={{
          width: 240,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.card,
          borderRight: `1px solid ${theme.border}`,
        }}
      >
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              color: theme.textPrimary,
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 4,
            }}
          >
            MindEase
          </h1>

          <p
            style={{
              color: theme.textSecondary,
              fontSize: 13,
            }}
          >
            Navegação principal
          </p>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 12,
              textDecoration: "none",
              color: theme.textPrimary,
              backgroundColor:
                isActive && isColorBlind ? theme.active : "transparent",
              border: `1px solid ${isActive
                  ? isColorBlind
                    ? theme.active
                    : theme.border
                  : "transparent"
                }`,
            })}
          >
            {({ isActive }) => (
              <>
                {isActive ? <IoHome size={18} /> : <IoHomeOutline size={18} />}
                <span style={{ fontSize: 14 }}>Início</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/settings"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 12,
              textDecoration: "none",
              color: theme.textPrimary,
              backgroundColor:
                isActive && isColorBlind ? theme.active : "transparent",
              border: `1px solid ${isActive
                  ? isColorBlind
                    ? theme.active
                    : theme.border
                  : "transparent"
                }`,
            })}
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <IoSettings size={18} />
                ) : (
                  <IoSettingsOutline size={18} />
                )}
                <span style={{ fontSize: 14 }}>Configurações</span>
              </>
            )}
          </NavLink>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: 20 }}>
          <div
            style={{
              padding: 14,
              borderRadius: 12,
              border: `1px solid ${theme.border}`,
              backgroundColor: theme.surface,
            }}
          >
            <p
              style={{
                color: theme.textPrimary,
                fontSize: 13,
                marginBottom: 6,
                fontWeight: 500,
              }}
            >
              Experiência guiada
            </p>

            <p
              style={{
                color: theme.textSecondary,
                fontSize: 12,
                lineHeight: 1.5,
              }}
            >
              Navegação calma e previsível para reduzir carga cognitiva.
            </p>
          </div>
        </div>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "40px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}