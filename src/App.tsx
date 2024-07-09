import MainLayout from "./app/ui/MainLayout.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

function App() {

  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
