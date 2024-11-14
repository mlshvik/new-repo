import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import BookDetails from "../BookPage"; // імпорт компонента для деталей книги

const AppRouter = ({ products }) => {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/catalog", element: <CatalogPage /> },
    {
      path: "/book/:id",
      element: <BookDetails />, // передаємо список книг як пропс
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index} // додав ключ для кожного маршруту
          path={route.path}
          element={route.element}
        />
      ))}

      {/* Catch-all маршрут для 404 або fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
