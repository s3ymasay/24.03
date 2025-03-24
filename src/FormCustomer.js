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
  }, []);

  const [city, setCity] = useState([]);
  const [customerData, setCustomerData] = useState({
    strName: "",
    strSurname: "",
    strMail: "",
    strGSM: "",
    strAdres: "",
    cmbCity: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("https://private-ecd351-ito11.apiary-mock.com/city")
      .then((response) => setCity(response.data.CityList))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });

    // Hata varsa, düzeltilince kaldır
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!customerData.strName.trim()) newErrors.strName = "Ad zorunludur.";
    if (!customerData.strSurname.trim()) newErrors.strSurname = "Soyad zorunludur.";
    if (!customerData.strMail.trim()) newErrors.strMail = "Mail adresi zorunludur.";
    if (!customerData.strGSM.trim()) newErrors.strGSM = "GSM numarası zorunludur.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://private-ecd351-ito11.apiary-mock.com/addCustomer",
        customerData
      );
      console.log("Başarılı:", response.data);
      alert("Müşteri başarıyla eklendi!");
    } catch (error) {
      console.error("Hata oluştu:", error);
      alert("Müşteri eklenirken bir hata oluştu!");
    }
  };

  return (
    <div className="page-md">
      <Header />
      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li><a href="#">Ana Sayfa</a><i className="fa fa-circle" /></li>
              <li><a href="form_controls.html">Müşteri Yönetimi</a><i className="fa fa-circle" /></li>
              <li className="active">Müşteri Kayıt Formu</li>
            </ul>
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Müşteri Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ad *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strName"
                              className="form-control"
                              placeholder="Adınızı Giriniz..."
                              value={customerData.strName}
                              onChange={handleChange}
                            />
                            {errors.strName && <p className="text-danger">{errors.strName}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Soyad *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strSurname"
                              className="form-control"
                              placeholder="Soyadınızı Giriniz..."
                              value={customerData.strSurname}
                              onChange={handleChange}
                            />
                            {errors.strSurname && <p className="text-danger">{errors.strSurname}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">E-Mail Adresi *</label>
                          <div className="col-md-9">
                            <input
                              type="email"
                              name="strMail"
                              className="form-control"
                              placeholder="adiniz@ymail.com"
                              value={customerData.strMail}
                              onChange={handleChange}
                            />
                            {errors.strMail && <p className="text-danger">{errors.strMail}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">GSM *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strGSM"
                              className="form-control"
                              placeholder="5054443322"
                              value={customerData.strGSM}
                              onChange={handleChange}
                            />
                            {errors.strGSM && <p className="text-danger">{errors.strGSM}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Adres</label>
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              rows={3}
                              name="strAdres"
                              value={customerData.strAdres}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Şehir</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cmbCity"
                              value={customerData.cmbCity}
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {city.map((item) => (
                                <option key={item.CityID} value={item.CityID}>
                                  {item.CityName}
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

export default FormCustomer;
