import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHead from "./PageHead";
import Footer from "./Footer";
import Header from "./Header";

function ListProduct() {

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userName") === null) {
      navigate("/");
    }
  });

  return (
    <div class="page-md">
      {/* BEGIN HEADER */}
      <Header />
      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <PageHead />
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="FormProduct.html">Ürün Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Ürün Listesi</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Ürün Listesi
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"></a>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    <table className="table table-bordered table-striped table-condensed flip-content">
                      <thead className="flip-content">
                        <tr>
                          <th width="20%">Ürünün Adı</th>
                          <th>Ürün ID</th>
                          <th>Kategori</th>
                          <th>Stok Durumu</th>
                          <th>Fiyat</th>
                          <th>Para Birimi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>iPhone 15 Pro</td>
                          <td>101</td>
                          <td>Telefon</td>
                          <td className="numeric">25</td>
                          <td className="numeric">52999</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Samsung Galaxy S24</td>
                          <td>102</td>
                          <td>Telefon</td>
                          <td className="numeric">0</td>
                          <td className="numeric">999</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Canon EOS R6</td>
                          <td>103</td>
                          <td>Foto &amp; Kamera</td>
                          <td className="numeric">12</td>
                          <td className="numeric">2299</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Sony Alpha A7 IV</td>
                          <td>104</td>
                          <td>Foto &amp; Kamera</td>
                          <td className="numeric">8</td>
                          <td className="numeric">64500</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>LG OLED C1 55"</td>
                          <td>105</td>
                          <td>TV &amp; Görüntü &amp; Ses</td>
                          <td className="numeric">0</td>
                          <td className="numeric">1599</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Samsung QLED 75"</td>
                          <td>106</td>
                          <td>TV &amp; Görüntü &amp; Ses</td>
                          <td className="numeric">14</td>
                          <td className="numeric">2499</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Dyson V15 Detect</td>
                          <td>107</td>
                          <td>Beyaz Eşya</td>
                          <td className="numeric">30</td>
                          <td className="numeric">26999</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Philips Airfryer XXL</td>
                          <td>108</td>
                          <td>Beyaz Eşya</td>
                          <td className="numeric">0</td>
                          <td className="numeric">499</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>MacBook Pro M3</td>
                          <td>109</td>
                          <td>Bilgisayar &amp; Tablet</td>
                          <td className="numeric">5</td>
                          <td className="numeric">3299</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Dell XPS 15</td>
                          <td>110</td>
                          <td>Bilgisayar &amp; Tablet</td>
                          <td className="numeric">10</td>
                          <td className="numeric">64999</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>iPad Air (5. Nesil)</td>
                          <td>111</td>
                          <td>Bilgisayar &amp; Tablet</td>
                          <td className="numeric">0</td>
                          <td className="numeric">799</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Lenovo Legion 7</td>
                          <td>112</td>
                          <td>Bilgisayar &amp; Tablet</td>
                          <td className="numeric">7</td>
                          <td className="numeric">2199</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Bose Soundbar 900</td>
                          <td>113</td>
                          <td>TV &amp; Görüntü &amp; Ses</td>
                          <td className="numeric">0</td>
                          <td className="numeric">1199</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Sony WH-1000XM5</td>
                          <td>114</td>
                          <td>TV &amp; Görüntü &amp; Ses</td>
                          <td className="numeric">21</td>
                          <td className="numeric">14999</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>GoPro Hero 11</td>
                          <td>115</td>
                          <td>Foto &amp; Kamera</td>
                          <td className="numeric">4</td>
                          <td className="numeric">599</td>
                          <td>EUR</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </div>
  );
}
export default ListProduct;
