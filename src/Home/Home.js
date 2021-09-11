import React from "react";
import "./Home.css";
import Product from "../product/Product";

export default function Home() {
  return (
    <div className="home">
      <img
        src="https://c.pxhere.com/images/2e/aa/07eaadd7dab6874fbe2e61fdb70c-1617208.jpg!d"
        alt=""
        className="heroImg"
      />
      <div className="heroProduct">
        <Product
          id="12563"
          title="the lean startup:our innovation"
          price={14.66}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          id="12562"
          title="the lean startup:our innovation"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          id="12553"
          title="the lean startup:our innovation"
          price={16.46}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
      </div>
      <div className="heroProduct">
        <Product
          id="12563"
          title="the lean startup:our innovation"
          price={14.66}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          id="12562"
          title="the lean startup:our innovation"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          id="12553"
          title="the lean startup:our innovation"
          price={16.46}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          id="12562"
          title="the lean startup:our innovation"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
      </div>
    </div>
  );
}
