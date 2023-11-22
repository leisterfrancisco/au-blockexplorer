import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import routes from "./routes";

const App = () => {
  const renderRoutes = ({ children, component, ...props }, index) => {
    if (Array.isArray(children) && children.length > 0) {
      return children.map(renderRoute);
    }

    if (component) {
      return renderRoute({ ...props, component }, index);
    }

    return <></>;
  };

  const renderRoute = (
    { name, header, icon, path, component: Component, ...props },
    index
  ) => (
    <Route
      key={`path-${name}-${index}`}
      path={path}
      {...props}
      state={{ a: true }}
      element={<Component {...props} />}
    />
  );

  return (
    <BrowserRouter>
      <Suspense /* fallback={<Loader />}*/>
        <Routes>
          {routes
            .filter((route) => !route?.path?.includes("http"))
            .map(renderRoutes)}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
