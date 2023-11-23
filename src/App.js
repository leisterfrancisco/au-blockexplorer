import { Suspense, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import './App.css'
import routes from './routes'
import themeConfiguration from './theme'

const App = () => {
  const renderRoutes = ({ children, component, ...props }, index) => {
    if (Array.isArray(children) && children.length > 0) {
      return children.map(renderRoute)
    }

    if (component) {
      return renderRoute({ ...props, component }, index)
    }

    return <></>
  }

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
  )

  const theme = useMemo(
    () => themeConfiguration(true),
    [
      /* only once */
    ]
  )

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense /* fallback={<Loader />}*/>
          <Routes>
            {routes
              .filter(route => !route?.path?.includes('http'))
              .map(renderRoutes)}
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
