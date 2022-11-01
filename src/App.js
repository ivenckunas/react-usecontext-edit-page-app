import { useEffect, useState } from 'react'
import './App.css';
import ControlPanel from './components/ControlPanel';
import Page from './components/Page';
import MainContext from './MainContext/MainContext'

function App() {

  const [logo, setLogo] = useState('https://www.ndp.ca/sites/all/themes/canadandp.themes/canadandp-home/blocks/block--central-official-logos/images/download-ndp-logo/NDP_White.png')
  const [logoSize, setLogoSize] = useState(80)
  const [bgImage, setBgImage] = useState('https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?cs=srgb&dl=pexels-dana-tentis-370799.jpg&fm=jpg')
  const [header, setHeader] = useState(true)
  const [sidebar, setSidebar] = useState(true)
  const [sidebarLinks, setSidebarLinks] = useState([])
  const [newPosts, setNewPosts] = useState([])
  const [postsLayout, setPostsLayout] = useState('column')
  const [theme, setTheme] = useState('light')

  const states = {
    logo,
    setLogo,
    logoSize,
    setLogoSize,
    bgImage,
    setBgImage,
    header,
    setHeader,
    sidebar,
    setSidebar,
    sidebarLinks,
    setSidebarLinks,
    newPosts,
    setNewPosts,
    postsLayout,
    setPostsLayout,
    theme, setTheme
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className="App">

      <MainContext.Provider value={states}>
        <ControlPanel />
        <Page />
      </MainContext.Provider>
    </div>
  );
}

export default App;
