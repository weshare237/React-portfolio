import './index.scss'

import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;fopa&gt;</span>

        <Outlet />

        <span className='tags bottom-tags'>
          &lt;/fopa&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/duclair&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
