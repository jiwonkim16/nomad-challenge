import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
@tailwind base;
@tailwind components;
@tailwind utilities;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={DarkTheme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
