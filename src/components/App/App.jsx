import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from '../Header/Header.jsx'
import { HashRouter } from 'react-router-dom'
import { TabBox } from '../TabBox/TabBox.jsx'

import { CallDataProvider } from '../../providers/CallProvider/CallProvider.js'
import { CallDetail } from '../CallDetail/CallDetail.jsx'
import { Calls } from '../Calls/Calls.jsx'
import styles from './index.module.css'

const App = () => {
  return (
    <CallDataProvider>
      <HashRouter>
        <div className={styles.container}>
          <div>
            <Header />
            <TabBox />
          </div>
          <Calls />
          <CallDetail />
        </div>
      </HashRouter>
    </CallDataProvider>
  )
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)

export default App
