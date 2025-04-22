import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
// Các component sau sẽ thêm dần vào:
import '../css/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      {/* Banner sẽ thêm sau */}
      <section className="homepage__banner">
        <div className="homepage__banner-placeholder">Banner quảng cáo chính</div>
      </section>

      <section className="homepage__flash-sale">
        <h2 className="homepage__section-title">Flash Sales</h2>
        <div className="homepage__flash-sale-placeholder">Danh sách sản phẩm sale</div>
      </section>

      <section className="homepage__categories">
        <h2 className="homepage__section-title">Browse By Category</h2>
        <div className="homepage__categories-placeholder">Các icon danh mục</div>
      </section>

      <section className="homepage__best-seller">
        <h2 className="homepage__section-title">Best Selling Products</h2>
        <div className="homepage__best-seller-placeholder">Danh sách sản phẩm bán chạy</div>
      </section>

      <section className="homepage__promo-banner">
        <div className="homepage__promo-placeholder">Promo banner: quảng cáo loa v.v.</div>
      </section>

      <section className="homepage__explore">
        <h2 className="homepage__section-title">Explore Our Products</h2>
        <div className="homepage__explore-placeholder">Danh sách sản phẩm gợi ý</div>
      </section>

      <section className="homepage__new-arrival">
        <h2 className="homepage__section-title">New Arrivals</h2>
        <div className="homepage__new-arrival-placeholder">Sản phẩm mới về</div>
      </section>

      <footer className="homepage__footer">
        <div className="homepage__footer-placeholder">Thông tin footer</div>
      </footer>
    </div>
  );
};

export default Homepage;
