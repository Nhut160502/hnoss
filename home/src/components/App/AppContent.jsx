import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'src/router'

const AppContent = () => {
  return (
    <div className="app-content">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  )
}

export default AppContent
