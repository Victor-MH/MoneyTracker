import { useState } from 'react'
import './App.css'
import Layout from './containers/Layout/Layout'
import Login from './containers/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Login/>
    <Layout></Layout>
  )
}

export default App
