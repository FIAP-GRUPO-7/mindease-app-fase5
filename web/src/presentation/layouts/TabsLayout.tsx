import { Outlet, NavLink } from "react-router-dom";
import { useTheme } from "@/presentation/theme/ThemeContext";
import {
  IoHomeOutline,
  IoHome,
  IoSettingsOutline,
  IoSettings,
} from "react-icons/io5";

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-screen">
      {/* MENU LATERAL */}
      <aside
        style={{
          backgroundColor: theme.card,
          borderRight: `1px solid ${theme.border}`,
        }}
        className="w-[220px] flex flex-col p-6 gap-6"
      >
        <h1 className="text-lg font-semibold">MindEase</h1>

        <nav className="flex flex-col gap-2">
          {/* INÍCIO */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? <IoHome size={20} /> : <IoHomeOutline size={20} />}
                <span>Início</span>
              </>
            )}
          </NavLink>

          {/* CONFIGURAÇÕES */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <IoSettings size={20} />
                ) : (
                  <IoSettingsOutline size={20} />
                )}
                <span>Configurações</span>
              </>
            )}
          </NavLink>
        </nav>
      </aside>

      {/* CONTEÚDO DA PÁGINA */}
      <main
        style={{ backgroundColor: theme.background }}
        className="flex-1 p-8"
      >
        <Outlet />
      </main>
    </div>
  );
}
