import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function FormCustomer() {

    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem("userName") === null) {
        navigate("/");
      }
    });


  const [city, setCity] = useState([]);

  useEffect(() => {
    axios.get("https://private-ecd351-ito11.apiary-mock.com/city")
        .then((response) => setCity(response.data.CityList))
        .catch((error) => console.error("Veri çekme hatası:", error));
}, []);

  return (
    <div class="page-md">
    {/* BEGIN HEADER */}
<Header/>
    {/* END HEADER */}
    {/* BEGIN PAGE CONTAINER */}
    <div className="page-container">
      {/* BEGIN PAGE CONTENT */}
      <div className="page-content">
        <div className="container">
          {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
          <div className="modal fade" id="portlet-config" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">Widget settings form goes here</div>
                <div className="modal-footer">
                  <button type="button" className="btn blue">Save changes</button>
                  <button type="button" className="btn default" data-dismiss="modal">
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
            <li><a href="#">Ana Sayfa</a><i className="fa fa-circle" /></li>
            <li>
              <a href="form_controls.html">Müşteri Yönetimi</a>
              <i className="fa fa-circle" />
            </li>
            <li className="active">Müşteri Kayıt Formu</li>
          </ul>
          {/* END PAGE BREADCRUMB */}
          {/* BEGIN PAGE CONTENT INNER */}
          <div className="row">
            <div className="col-md-12">
              {/* BEGIN SAMPLE FORM PORTLET*/}
              <div className="portlet light">
                <div className="portlet-title">
                  <div className="caption">
                    <span className="caption-subject font-green-sharp bold">Müşteri Kayıt Formu</span>
                  </div>
                  <div className="tools">
                    <a href="javascript:;" className="collapse"> </a>
                  </div>
                </div>
                <div className="portlet-body form">
                  <form className="form-horizontal" role="form" method="post" name="form1" id="form1">
                    <div className="form-body">
                      <div className="form-group">
                        <label className="col-md-3 control-label">Ad *</label>
                        <div className="col-md-9">
                          <input type="text" name="strName" id="strName" className="form-control input-sm" maxLength={50} autoComplete="off" placeholder="Adınızı Giriniz..." />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Soyad *</label>
                        <div className="col-md-9">
                          <input type="text" name="strSurname" id="strSurname" className="form-control input-sm" maxLength={50} autoComplete="off" placeholder="Soyadınızı Giriniz..." />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Mail Adresi *</label>
                        <div className="col-md-9">
                          <input type="text" name="strMail" id="strMail" className="form-control input-sm" maxLength={50} autoComplete="off" placeholder="adiniz@ymail.com" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">GSM</label>
                        <div className="col-md-9">
                          <input type="text" name="strGSM" id="strGSM" className="form-control input-sm" maxLength={50} autoComplete="off" placeholder={5054443322} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Adres</label>
                        <div className="col-md-9">
                          <textarea className="form-control" rows={3} id="strAdres" name="strAdres" defaultValue={""} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Şehir</label>
                        <div className="col-md-9">
                          <select className="form-control" id="cmbCity" name="cmbCity">
                          <option value={0}>*Lütfen Seçim Yapınız</option>
                          {city.map((item) => (
                                  <option key={item.CityID} value={item.CityID}>{item.CityName}</option>
                                ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-actions right">
                        <button type="submit" className="btn green">Kaydet</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* END SAMPLE FORM PORTLET*/}
            </div>
          </div>
          {/* END PAGE CONTENT INNER */}
        </div>
      </div>
      {/* END PAGE CONTENT */}
    </div>
    {/* END PAGE CONTAINER */}
    {/* BEGIN PRE-FOOTER */}
<Footer/>
    {/* END FOOTER */}
  </div>
  );
}
export default FormCustomer;


// breadcrumb mobilde çok kötü
// hamburger menu default açık oluyor tıklamaya responsive değil