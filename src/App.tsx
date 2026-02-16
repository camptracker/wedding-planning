import { useState } from 'react'
import './App.css'
import { Bathrooms } from './sections/Bathrooms'
import { Catering } from './sections/Catering'
import { Music } from './sections/Music'
import { Essentials } from './sections/Essentials'
import { Timeline } from './sections/Timeline'

const tabs = ['Bathrooms', 'Catering', 'Music', 'Essentials', 'Timeline'] as const
type Tab = typeof tabs[number]

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Bathrooms')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Jon's Wedding Planning</h1>
          <p className="subtitle">5-Acre Property · Woodland, California · 2026</p>
        </div>
      </header>

      <nav className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'Bathrooms' && '🚻'}
            {tab === 'Catering' && '🍽️'}
            {tab === 'Music' && '🎵'}
            {tab === 'Essentials' && '⛺'}
            {tab === 'Timeline' && '📅'}
            {' '}{tab}
          </button>
        ))}
      </nav>

      <main className="content">
        {activeTab === 'Bathrooms' && <Bathrooms />}
        {activeTab === 'Catering' && <Catering />}
        {activeTab === 'Music' && <Music />}
        {activeTab === 'Essentials' && <Essentials />}
        {activeTab === 'Timeline' && <Timeline />}
      </main>

      <footer className="footer">
        <p>Wedding Planning Resource · Woodland, Yolo County, CA</p>
      </footer>
    </div>
  )
}

export default App
