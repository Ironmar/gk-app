import React from "react";
import NewsProvider from "./context/newsContext";
import AppRoutes from "./routes/AppRoutes";
const GkApp: React.FC = () => {
  return (
    <NewsProvider>
      <AppRoutes />
    </NewsProvider>
  );
};
export default GkApp;
