import React, { useContext, useRef } from 'react'
import MainContext from '../MainContext/MainContext'

function ControlPanel() {

  const { setLogo,
    setLogoSize,
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
    theme,
    setTheme
  } = useContext(MainContext)

  const logoInpRef = useRef()
  const logoSizeInpRef = useRef()
  const bgImageRef = useRef()
  const newLinkNameRef = useRef()
  const newPostImageRef = useRef()
  const newPostTitleRef = useRef()


  return (
    <div className='control-panel'>
      <div className="logo-control">
        <input ref={logoInpRef} type="text" placeholder='change logo image' />
        <button onClick={() => {
          setLogo(logoInpRef.current.value)
        }
        }>Change logo image</button>
        <input ref={logoSizeInpRef} type="number" placeholder='change logo size' />
        <button onClick={() => {
          setLogoSize(logoSizeInpRef.current.value)
        }}>Change logo size</button>
      </div>
      <div className="header-control">
        <input ref={bgImageRef} type="text" placeholder='change header image' />
        <button onClick={() => {
          setBgImage(bgImageRef.current.value)
        }}>Change header image</button>
        <button onClick={() => {
          if (header) {
            setHeader(false)
          } else {
            setHeader(true)
          }
        }}>Turn header on/off</button>
      </div>
      <div className="sidebar-control">
        <button onClick={() => {
          if (sidebar) {
            setSidebar(false)
          } else {
            setSidebar(true)
          }
        }}>Turn sidebar on/off</button>
        <input ref={newLinkNameRef} type="text" placeholder='enter new link name' />
        <button onClick={() => {
          const newLink = <li>{newLinkNameRef.current.value}</li>
          setSidebarLinks([...sidebarLinks, newLink])
        }}>Add link to sidebar</button>
      </div>
      <div className="posts-control">
        <div className="new-post">
          <input ref={newPostImageRef} type="text" placeholder='new post image url' />
          <input ref={newPostTitleRef} type="text" placeholder='new post title' />
          <button onClick={() => {
            const newPost =
              <div className='post'>
                <img src={newPostImageRef.current.value} alt="" />
                <h2>{newPostTitleRef.current.value}</h2>
              </div>

            setNewPosts([...newPosts, newPost])
          }}>Add new post</button>
        </div>
        <div className="posts-layout">
          <button onClick={() => {
            if (postsLayout === 'row') {
              setPostsLayout('column')
            } else {
              setPostsLayout('row')
            }
          }}>Change posts layout</button>
        </div>
      </div>

      <div className="theme-control">
        <button onClick={() => {
          if (theme === 'light') {
            setTheme('dark')
          } else {
            setTheme('light')
          }
        }}>Change page theme dark/light</button>
      </div>
    </div >
  )
}

export default ControlPanel