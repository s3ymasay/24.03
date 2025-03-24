import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function FormOrder() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userName") === null) {
      navigate("/");
    }
  }, []);

  const [currency, setCurrency] = useState([]);
  const [formData, setFormData] = useState({
    strName: "",
    strId: "",
    strPiece: "",
    strPrice: "",
    strTotalPrice: "",
    cmbCurrency: "",
  });

  useEffect(() => {
    axios
      .get("https://private-ecd351-ito11.apiary-mock.com/currency")
      .then((response) => setCurrency(response.data.CurrencyList))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Müşteri kaydı için veriyi hazırla
      const customerData = {
        txtAd: formData.strName,
        txtSoyad: "Belirtilmedi",
        txtTC: "00000000000",
      };

      // Önce müşteri kaydı yap
      await axios.post("https://private-ecd351-ito11.apiary-mock.com/customer", customerData);
      console.log("Müşteri başarıyla kaydedildi.");

      // Sipariş verisini hazırla
      const orderData = { ...formData };

      // Ardından siparişi kaydet
      const orderResponse = await axios.post("https://private-ecd351-ito11.apiary-mock.com/order", orderData);
      console.log("Sipariş başarıyla kaydedildi:", orderResponse.data);
      
      alert("Sipariş ve müşteri başarıyla kaydedildi!");

      // Formu temizle
      setFormData({
        strName: "",
        strId: "",
        strPiece: "",
        strPrice: "",
        strTotalPrice: "",
        cmbCurrency: "",
      });
    } catch (error) {
      console.error("Sipariş veya müşteri kaydedilirken hata oluştu:", error);
      alert("Sipariş veya müşteri kaydedilirken bir hata oluştu.");
    }
  };

  return (
    <div className="page-md">
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
              <li className="active">Yeni Sipariş</li>
            </ul>
            <div className="row">
              <div className="col-md-12 ">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold ">
                        Sipariş Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Siparişi Veren
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strName"
                              value={formData.strName}
                              onChange={handleChange}
                              className="form-control input-sm"
                              placeholder="Müşteri Adını Giriniz..."
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Ürün ID
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strId"
                              value={formData.strId}
                              onChange={handleChange}
                              className="form-control input-sm"
                              placeholder="Ürün ID Giriniz..."
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Adet</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strPiece"
                              value={formData.strPiece}
                              onChange={handleChange}
                              className="form-control input-sm"
                              placeholder="Adet Bilgisi Giriniz..."
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Birim Fiyat
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strPrice"
                              value={formData.strPrice}
                              onChange={handleChange}
                              className="form-control input-sm"
                              placeholder="Birim Fiyatı Giriniz..."
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Toplam Fiyat
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strTotalPrice"
                              value={formData.strTotalPrice}
                              onChange={handleChange}
                              className="form-control input-sm"
                              placeholder="Toplam Fiyatı Giriniz..."
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Para Birimi
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cmbCurrency"
                              value={formData.cmbCurrency}
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {currency.map((item) => (
                                <option
                                  key={item.CurrencyID}
                                  value={item.CurrencyID}
                                >
                                  {item.CurrencyName} ({item.CurrencyCode})
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

export default FormOrder;
