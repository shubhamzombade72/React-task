import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="header">
          <h1>ShopEase</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#top-sale">Top Sale</a></li>
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#hot-sale">Hot Sale</a></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Header
