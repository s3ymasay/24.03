import axios from "axios";
import React, { useEffect, useState } from "react";
import PageHead from "./PageHead";
import Footer from "./Footer";
import Header from "./Header";

function ListCargo() {
  const [cargoData, setCargoData] = useState([]); // Kargo verilerini saklamak için state

  useEffect(() => {
    axios
      .get("https://private-f2e779-itoapi.apiary-mock.com/cargo") // Buraya kendi API'ni koy
      .then((response) => {
        setCargoData(response.data); // Gelen veriyi state'e kaydet
      })
      .catch((error) => {
        console.error("API'den veri alınırken hata oluştu:", error);
      });
  }, []);

  return (
    <div>
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
              <li className="active">Kargo Listesi</li>
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
                        Kargo Listesi
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
                          <th width="20%">Sipariş No</th>
                          <th>Kargo Tarihi</th>
                          <th>Teslim Tarihi</th>
                          <th>Kargo Durumu</th>
                          <th>Kargo Firması</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cargoData && cargoData.Cargos ? (
                          cargoData.Cargos.map((cargo, index) => (
                            <tr key={index}>
                              <td>{cargo.CargoNo}</td>
                              <td className="numeric">{cargo.CargoDate}</td>
                              <td className="numeric">{cargo.DeliveryDate}</td>
                              <td>{cargo.CargoStatus}</td>
                              <td>{cargo.CargoCompany}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5">Yükleniyor...</td>
                          </tr>
                        )}
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
export default ListCargo;
