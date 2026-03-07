import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/presentation/routes/router";
import RootProviders from "@/presentation/providers/RootProviders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootProviders>
    <RouterProvider router={router} />
  </RootProviders>,
);
