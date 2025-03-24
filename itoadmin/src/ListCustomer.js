import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHead from "./PageHead";
import Footer from "./Footer";
import Header from "./Header";

function ListCustomer() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate("/");
    }
  }, []);

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "https://private-6cf67-mertefekarakose.apiary-mock.com/customerlist"
        );
        setCustomers(response.data.Customers);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div className="page-md">
      {/* HEADER */}
      <Header />

      {/* PAGE CONTAINER */}
      <div className="page-container">
        {/* PAGE HEAD */}
        <PageHead />

        {/* PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_controls.html">Müşteri Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Müşteri Listesi</li>
            </ul>

            {/* PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                {/* TABLE */}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Müşteri Listesi
                      </span>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    {loading ? (
                      <p style={{ textAlign: "center" }}>Yükleniyor...</p>
                    ) : customers.length === 0 ? (
                      <p style={{ textAlign: "center", color: "red" }}>
                        Müşteri bulunamadı veya veri çekilemedi!
                      </p>
                    ) : (
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th>ID</th>
                            <th width="15%">Ad</th>
                            <th>Soyad</th>
                            <th>E-Mail</th>
                            <th>GSM</th>
                            <th>Adres</th>
                            <th>Şehir</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer) => (
                            <tr key={customer.CustomerID}>
                              <td>{customer.CustomerID}</td>
                              <td>{customer.FirstName}</td>
                              <td>{customer.LastName}</td>
                              <td>{customer.Email}</td>
                              <td>{customer.Phone}</td>
                              <td>{customer.Address}</td>
                              <td>{customer.City}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ListCustomer;
