import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHead from "./PageHead";
import Footer from "./Footer";
import Header from "./Header";

function ListMusteri() {

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
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Sipariş Listesi</li>
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
                        Sipariş Listesi
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
                          <th width="20%">Siparişini Veren</th>
                          <th>Ürün ID</th>
                          <th>Adet</th>
                          <th>Birim Fiyat</th>
                          <th>Toplam Fiyat</th>
                          <th>Para Birimi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John Doe</td>
                          <td>101</td>
                          <td className="numeric">2</td>
                          <td className="numeric">52999</td>
                          <td className="numeric">105998</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Jane Smith</td>
                          <td>102</td>
                          <td className="numeric">1</td>
                          <td className="numeric">999</td>
                          <td className="numeric">999</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Ali Yılmaz</td>
                          <td>103</td>
                          <td className="numeric">3</td>
                          <td className="numeric">2299</td>
                          <td className="numeric">6897</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Mehmet Kaya</td>
                          <td>104</td>
                          <td className="numeric">1</td>
                          <td className="numeric">64500</td>
                          <td className="numeric">64500</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Ayşe Demir</td>
                          <td>105</td>
                          <td className="numeric">5</td>
                          <td className="numeric">1599</td>
                          <td className="numeric">7995</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Burak Çelik</td>
                          <td>106</td>
                          <td className="numeric">2</td>
                          <td className="numeric">2499</td>
                          <td className="numeric">4998</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Zeynep Şahin</td>
                          <td>107</td>
                          <td className="numeric">1</td>
                          <td className="numeric">26999</td>
                          <td className="numeric">26999</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Emre Öztürk</td>
                          <td>108</td>
                          <td className="numeric">3</td>
                          <td className="numeric">499</td>
                          <td className="numeric">1497</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Fatma Koç</td>
                          <td>109</td>
                          <td className="numeric">2</td>
                          <td className="numeric">3299</td>
                          <td className="numeric">6598</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Hasan Arslan</td>
                          <td>110</td>
                          <td className="numeric">4</td>
                          <td className="numeric">64999</td>
                          <td className="numeric">259996</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Elif Kurt</td>
                          <td>111</td>
                          <td className="numeric">1</td>
                          <td className="numeric">799</td>
                          <td className="numeric">799</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Yusuf Erdem</td>
                          <td>112</td>
                          <td className="numeric">2</td>
                          <td className="numeric">2199</td>
                          <td className="numeric">4398</td>
                          <td>EUR</td>
                        </tr>
                        <tr>
                          <td>Selin Güneş</td>
                          <td>113</td>
                          <td className="numeric">3</td>
                          <td className="numeric">1199</td>
                          <td className="numeric">3597</td>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Ahmet Bozkurt</td>
                          <td>114</td>
                          <td className="numeric">2</td>
                          <td className="numeric">14999</td>
                          <td className="numeric">29998</td>
                          <td>TL</td>
                        </tr>
                        <tr>
                          <td>Gizem Acar</td>
                          <td>115</td>
                          <td className="numeric">1</td>
                          <td className="numeric">599</td>
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
export default ListMusteri;
