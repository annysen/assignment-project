import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserDetails from "./Components/Cards/UserDetails.jsx";

const Root = () => {
  const [user, setUser] = useState({});

  const userId = (id) => {
    console.log(`User clicked with ID: ${id}`);

    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((userData) => {
        setUser(userData);

        // You can navigate to the user details route programmatically
        // (Assuming 'router' is accessible here)
        router.navigate(`/user-details/${id}`);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App userId={userId} />,
    },
    {
      path: `/user-details/:id`,
      element: <UserDetails user={user} />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
