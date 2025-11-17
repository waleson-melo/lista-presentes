import { BrowserRouter } from "react-router";
import AppRoutes from "@/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/lista-presentes">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
