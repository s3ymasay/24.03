import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function FormProduct() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userName") === null) {
      navigate("/");
    }
  }, []);

  const [category, setCategory] = useState([]);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios
      .get("https://private-ecd351-ito11.apiary-mock.com/category")
      .then((response) => setCategory(response.data.CategoryList))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://private-ecd351-ito11.apiary-mock.com/currency")
      .then((response) => setCurrency(response.data.CurrencyList))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  // 🔴 **Form verisini yönetmek için state tanımlandı**
  const [formData, setFormData] = useState({
    strName: "",
    strId: "",
    cmbCtgry: "",
    strStck: "",
    strPrice: "",
    cmbCurrency: "",
  });

  // 🔵 **Form inputları değiştikçe state'i güncelle**
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ **Form verisini API'ye gönderen fonksiyon**
  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    const productData = {
      productName: formData.strName,
      productId: formData.strId,
      categoryId: formData.cmbCtgry,
      stock: formData.strStck,
      price: formData.strPrice,
      currency: formData.cmbCurrency,
    };

    try {
      const response = await axios.post(
        "https://your-api-url.com/products", // API'nin gerçek URL'siyle değiştir
        productData
      );

      console.log("Ürün başarıyla eklendi:", response.data);
      alert("Ürün başarıyla kaydedildi!");

      // Formu temizle
      setFormData({
        strName: "",
        strId: "",
        cmbCtgry: "",
        strStck: "",
        strPrice: "",
        cmbCurrency: "",
      });
    } catch (error) {
      console.error("Ürün eklenirken hata oluştu:", error);
      alert("Ürün kaydedilemedi!");
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
              <li><a href="#">Ürün Yönetimi</a><i className="fa fa-circle" /></li>
              <li className="active">Yeni Ürün Kayıt</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">Ürün Kayıt Formu</span>
                    </div>
                  </div>

                  <div className="portlet-body form">
                    {/* 🟢 **Form güncellendi** */}
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürünün Adı *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strName"
                              className="form-control input-sm"
                              maxLength={50}
                              placeholder="Ürün Adını Giriniz..."
                              value={formData.strName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürün ID *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strId"
                              className="form-control input-sm"
                              maxLength={50}
                              placeholder="Ürün Id'sini Giriniz..."
                              value={formData.strId}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Kategori</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cmbCtgry"
                              value={formData.cmbCtgry}
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {category.map((item) => (
                                <option key={item.CategoryID} value={item.CategoryID}>
                                  {item.CategoryName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Stok Durumu *</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strStck"
                              className="form-control input-sm"
                              placeholder="Stok Durumunu Giriniz..."
                              value={formData.strStck}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Fiyat</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strPrice"
                              className="form-control input-sm"
                              placeholder="Fiyat Bilgisi Giriniz..."
                              value={formData.strPrice}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-3 control-label">Para Birimi</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              name="cmbCurrency"
                              value={formData.cmbCurrency}
                              onChange={handleChange}
                            >
                              <option value="">*Lütfen Seçim Yapınız</option>
                              {currency.map((item) => (
                                <option key={item.CurrencyID} value={item.CurrencyID}>
                                  {item.CurrencyName} ({item.CurrencyCode})
                                </option>
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
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FormProduct;
