import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserManagment from './components/UserManagment'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/admin' element={<UserManagment />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
