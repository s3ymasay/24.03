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
    strTotalPrice: "0",
    cmbCurrency: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("https://private-ecd351-ito11.apiary-mock.com/currency")
      .then((response) => setCurrency(response.data.CurrencyList))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    // Birim fiyat ve adet değiştiğinde toplam fiyatı otomatik hesapla
    if (name === "strPiece" || name === "strPrice") {
      const price = parseFloat(updatedFormData.strPrice) || 0;
      const piece = parseInt(updatedFormData.strPiece) || 0;
      updatedFormData.strTotalPrice = (price * piece).toFixed(2);
    }

    setFormData(updatedFormData);
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.strName.trim()) newErrors.strName = "Müşteri adı zorunludur.";
    if (!formData.strId.trim()) newErrors.strId = "Ürün ID zorunludur.";
    if (!formData.strPiece.trim() || formData.strPiece <= 0) newErrors.strPiece = "Adet bilgisi geçerli olmalıdır.";
    if (!formData.strPrice.trim() || formData.strPrice <= 0) newErrors.strPrice = "Birim fiyat geçerli olmalıdır.";
    if (!formData.cmbCurrency.trim()) newErrors.cmbCurrency = "Para birimi seçmelisiniz.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const customerData = {
        txtAd: formData.strName,
        txtSoyad: "Belirtilmedi",
        txtTC: "00000000000",
      };

      await axios.post("https://private-ecd351-ito11.apiary-mock.com/customer", customerData);
      console.log("Müşteri başarıyla kaydedildi.");

      const orderData = { ...formData };

      const orderResponse = await axios.post("https://private-ecd351-ito11.apiary-mock.com/order", orderData);
      console.log("Sipariş başarıyla kaydedildi:", orderResponse.data);

      alert("Sipariş ve müşteri başarıyla kaydedildi!");

      setFormData({
        strName: "",
        strId: "",
        strPiece: "",
        strPrice: "",
        strTotalPrice: "0",
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
              <li><a href="#">Ana Sayfa</a><i className="fa fa-circle" /></li>
              <li><a href="FormOrder.html">Sipariş Yönetimi</a><i className="fa fa-circle" /></li>
              <li className="active">Yeni Sipariş</li>
            </ul>
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Sipariş Kayıt Formu
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Siparişi Veren *</label>
                          <div className="col-md-9">
                            <input type="text" name="strName" className="form-control input-sm"
                              placeholder="Müşteri Adını Giriniz..." value={formData.strName} onChange={handleChange} />
                            {errors.strName && <p className="text-danger">{errors.strName}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürün ID *</label>
                          <div className="col-md-9">
                            <input type="text" name="strId" className="form-control input-sm"
                              placeholder="Ürün ID Giriniz..." value={formData.strId} onChange={handleChange} />
                            {errors.strId && <p className="text-danger">{errors.strId}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Adet *</label>
                          <div className="col-md-9">
                            <input type="number" name="strPiece" className="form-control input-sm"
                              placeholder="Adet Bilgisi Giriniz..." value={formData.strPiece} onChange={handleChange} />
                            {errors.strPiece && <p className="text-danger">{errors.strPiece}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Birim Fiyat *</label>
                          <div className="col-md-9">
                            <input type="number" name="strPrice" className="form-control input-sm"
                              placeholder="Birim Fiyatı Giriniz..." value={formData.strPrice} onChange={handleChange} />
                            {errors.strPrice && <p className="text-danger">{errors.strPrice}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Toplam Fiyat</label>
                          <div className="col-md-9">
                            <input type="text" name="strTotalPrice" className="form-control input-sm"
                              value={formData.strTotalPrice} disabled />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Para Birimi *</label>
                          <div className="col-md-9">
                            <select className="form-control" name="cmbCurrency"
                              value={formData.cmbCurrency} onChange={handleChange}>
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {currency.map((item) => (
                                <option key={item.CurrencyID} value={item.CurrencyID}>
                                  {item.CurrencyName} ({item.CurrencyCode})
                                </option>
                              ))}
                            </select>
                            {errors.cmbCurrency && <p className="text-danger">{errors.cmbCurrency}</p>}
                          </div>
                        </div>

                        <div className="form-actions right">
                          <button type="submit" className="btn green">Kaydet</button>
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
