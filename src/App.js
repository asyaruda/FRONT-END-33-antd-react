import { store } from './store'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './hooks/languageContext'
import { Home } from './features/Home'
import { Waiter } from './features/Waiter'
import { About } from './features/About'
import { NotFound } from './features/NotFound'
import { Provider } from 'react-redux'
import React from 'react'
import styles from './components/Page.module.css'

export function App () {
  const active = ({ isActive }) => isActive ? styles.active : ""

  return (
    <Provider store={store}>
      <BrowserRouter>
        <LanguageProvider>
          <nav style={{ marginBottom: '20px' }}>
            <NavLink to="/" className={active} end>Home</NavLink> {' | '}
            <NavLink to="/waiter" className={active}>Waiter</NavLink> {' | '}
            <NavLink to="/about" className={active}>About</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waiter/*" element={<Waiter />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </Provider>
  )
}