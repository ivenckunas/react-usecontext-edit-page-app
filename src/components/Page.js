import React, { useContext } from 'react'
import MainContext from '../MainContext/MainContext'

function Page() {

  const { logo, logoSize, bgImage, header, sidebar, sidebarLinks, newPosts, postsLayout } = useContext(MainContext)

  return (
    <div className='main-wrapper'>
      <div className="toolbar">
        <img src={`${logo}`} alt="logo" style={{ height: logoSize + 'px' }} />
        <div className="toolbar-links">
          <a href="/">Link1</a>
          <a href="/">Link2</a>
          <a href="/">Link3</a>
        </div>
      </div>
      <div className="main-page">
        {sidebar ? <div className="sidebar-left">
          <ul>
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
            {sidebarLinks}
          </ul>
        </div> : ''}
        <div className="page-right">
          {header ? <div className="header" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1>TEXT IN A MIDDLE</h1>
          </div> : ''}
          <div className="posts" style={{ flexDirection: postsLayout }}>
            <div className="post">
              <img src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt="" />
              <h2>Title</h2>
            </div>
            <div className="post">
              <img src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt="" />
              <h2>Title</h2>
            </div>
            {newPosts}
          </div>

          <div className="footer">
            <h3>Footer</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page