import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </Provider>

  </React.StrictMode>,
)
