import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Containers/Header'
import Comparation from './Containers/Comparation'
import Casos from './Containers/Casos'
import Map from './Containers/Map'
import Footer from './Containers/Footer'
import Rodape from './Containers/Rodape'
import Quests from './Containers/Quests'
import Payment from './Containers/Payment'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <Comparation/>
    <Casos/>
    <Quests/>
    <Payment/>
    <Map/>
    <Footer/>
    <Rodape/>
  </React.StrictMode>,
)














