import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function FormCargo() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userName") === null) {
      navigate("/");
    }
  }, []);

  const [cargoStatus, setCargoStatus] = useState([]);
  const [cargoNo, setCargoNo] = useState([]);
  const [cargoCompany, setCargoCompany] = useState([]); // Yeni state tanımlandı
  const [cargoData, setCargoData] = useState({
    CargoNoID: "",
    CargoDate: "",
    DeliveryDate: "",
    CargoStatusID: "",
    CargoCompanyID: "",
  });

  useEffect(() => {
    axios
      .get("https://private-6cf67-mertefekarakose.apiary-mock.com/cargostatus")
      .then((response) => setCargoStatus(response.data.CargoStatusList))
      .catch((error) => console.error("Veri çekme hatası:", error));
  
    axios
      .get("https://private-6cf67-mertefekarakose.apiary-mock.com/cargono")
      .then((response) => setCargoNo(response.data.CargoNoList))
      .catch((error) => console.error("Veri çekme hatası:", error));

    // CargoCompany verilerini çek
    axios
      .get("https://private-6cf67-mertefekarakose.apiary-mock.com/cargocompany")
      .then((response) => setCargoCompany(response.data.CargoCompanyList))
      .catch((error) => console.error("Veri çekme hatası:", error));

  }, []);

  const handleChange = (e) => {
    setCargoData({ ...cargoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://private-6cf67-mertefekarakose.apiary-mock.com/addCargo",
        cargoData
      );

      console.log("Başarılı:", response.data);
      alert("Kargo başarıyla eklendi!");
    } catch (error) {
      console.error("Hata oluştu:", error);
      alert("Kargo eklenirken bir hata oluştu!");
    }
  };

  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="FormOrder.html">Sipariş Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Kargo</li>
            </ul>
            <div className="row">
              <div className="col-md-12 ">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold ">
                        Kargo Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Sipariş No
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="CargoNoID"
                              value={cargoData.CargoNoID}
                              onChange={handleChange}
                            >
                              <option value="">Lütfen Seçin</option>
                              {cargoNo.map((item) => (
                                <option key={item.CargoNoID} value={item.CargoNoID}>
                                  {item.CargoNo}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Kargo Tarihi
                          </label>
                          <div className="col-md-9">
                            <input
                              type="date"
                              className="form-control"
                              name="CargoDate"
                              value={cargoData.CargoDate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Teslim Tarihi
                          </label>
                          <div className="col-md-9">
                            <input
                              type="date"
                              className="form-control"
                              name="DeliveryDate"
                              value={cargoData.DeliveryDate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Durumu
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="CargoStatusID"
                              value={cargoData.CargoStatusID}
                              onChange={handleChange}
                            >
                              <option value="">Lütfen Seçin</option>
                              {cargoStatus.map((item) => (
                                <option key={item.CargoStatusID} value={item.CargoStatusID}>
                                  {item.CargoStatusName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kargo Şirketi
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="CargoCompanyID"
                              value={cargoData.CargoCompanyID}
                              onChange={handleChange}
                            >
                              <option value="">Lütfen Seçin</option>
                              {cargoCompany.map((item) => (
                                <option key={item.CargoCompanyID} value={item.CargoCompanyID}>
                                  {item.CargoCompanyName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-actions right">
                          <button type="submit" className="btn green">
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default FormCargo;
