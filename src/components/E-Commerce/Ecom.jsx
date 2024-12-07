import React from "react";
import Topsale from "./Topsale";
import Newarrivals from "./Newarrivals";
import com from "./com.json";
import Hotsale from "./Hotsale";

const Ecom = () => {
  return (
    <>
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

      <main>
        <section id="top-sale" className="category-section">
          <Topsale />
          <div className="product-container">
  {com.map((data ) => (
    <div className="product-card">
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.price}</p>
    </div>
  ))}
</div>
      </section>
      <section id="top-sale" className="category-section">
          <Newarrivals />
          <div className="product-container">
  {com.map((data ) => (
    <div className="product-card">
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.price}</p>
    </div>
  ))}
</div>
      </section>

      <section id="top-sale" className="category-section">
          <Hotsale />
          <div className="product-container">
  {com.map((data ) => (
    <div className="product-card">
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.price}</p>
    </div>
  ))}
</div>
      </section>      </main>
    

      <footer className="footer">
        <p>&copy; 2024 ShopEase. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Ecom;
