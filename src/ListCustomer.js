import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHead from "./PageHead";
import Footer from "./Footer";
import Header from "./Header";

function ListOrder() {

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userName") === null) {
      navigate("/");
    }
  });

  return (
    <div class="page-md">
{/* BEGIN HEADER */}
<Header/>
        {/* END HEADER */}
        {/* BEGIN PAGE CONTAINER */}
        <div className="page-container">
          {/* BEGIN PAGE HEAD */}
         <PageHead/>
          {/* END PAGE HEAD */}
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
                    <div className="modal-body">
                      Widget settings form goes here
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn blue">Save changes</button>
                      <button type="button" className="btn default" data-dismiss="modal">Close</button>
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
                  <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
                </li>
                <li>
                  <a href="form_controls.html">Müşteri Yönetimi</a>
                  <i className="fa fa-circle" />
                </li>
                <li className="active">
                  Müşteri Listesi
                </li>
              </ul>
              {/* END PAGE BREADCRUMB */}
              {/* BEGIN PAGE CONTENT INNER */}
              <div className="row">
                <div className="col-md-12">
                  {/* BEGIN SAMPLE TABLE PORTLET*/}
                  <div className="portlet light">
                    <div className="portlet-title">
                      <div className="caption">
                        <span className="caption-subject font-green-sharp bold">Müşteri Listesi</span>
                      </div>
                      <div className="tools">
                        <a href="javascript:;" className="collapse">
                        </a>
                      </div>
                    </div>
                    <div className="portlet-body flip-scroll">
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th width="20%">
                              Ad
                            </th>
                            <th>
                              Soyad
                            </th>
                            <th>
                              Mail Adresi
                            </th>
                            <th>
                              GSM
                            </th>
                            <th>
                              Adres
                            </th>
                            <th>
                              Şehir
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td className="numeric">john.doe@example.com</td>
                            <td className="numeric">5551234567</td>
                            <td className="numeric">123 Elm Street</td>
                            <td className="numeric">İstanbul</td>
                          </tr>
                          <tr>
                            <td>Jane</td>
                            <td>Smith</td>
                            <td className="numeric">jane.smith@example.com</td>
                            <td className="numeric">5559876543</td>
                            <td className="numeric">456 Oak Avenue</td>
                            <td className="numeric">Ankara</td>
                          </tr>
                          <tr>
                            <td>Ali</td>
                            <td>Yılmaz</td>
                            <td className="numeric">ali.yilmaz@example.com</td>
                            <td className="numeric">5301122334</td>
                            <td className="numeric">789 Pine Street</td>
                            <td className="numeric">İzmir</td>
                          </tr>
                          <tr>
                            <td>Mehmet</td>
                            <td>Kaya</td>
                            <td className="numeric">mehmet.kaya@example.com</td>
                            <td className="numeric">5322233445</td>
                            <td className="numeric">321 Cedar Lane</td>
                            <td className="numeric">İstanbul</td>
                          </tr>
                          <tr>
                            <td>Ayşe</td>
                            <td>Demir</td>
                            <td className="numeric">ayse.demir@example.com</td>
                            <td className="numeric">5359988776</td>
                            <td className="numeric">654 Maple Avenue</td>
                            <td className="numeric">Ankara</td>
                          </tr>
                          <tr>
                            <td>Burak</td>
                            <td>Çelik</td>
                            <td className="numeric">burak.celik@example.com</td>
                            <td className="numeric">5336677889</td>
                            <td className="numeric">852 Spruce Road</td>
                            <td className="numeric">İzmir</td>
                          </tr>
                          <tr>
                            <td>Zeynep</td>
                            <td>Şahin</td>
                            <td className="numeric">zeynep.sahin@example.com</td>
                            <td className="numeric">5367788990</td>
                            <td className="numeric">951 Walnut Street</td>
                            <td className="numeric">İstanbul</td>
                          </tr>
                          <tr>
                            <td>Emre</td>
                            <td>Öztürk</td>
                            <td className="numeric">emre.ozturk@example.com</td>
                            <td className="numeric">5314455667</td>
                            <td className="numeric">369 Chestnut Lane</td>
                            <td className="numeric">Ankara</td>
                          </tr>
                          <tr>
                            <td>Fatma</td>
                            <td>Koç</td>
                            <td className="numeric">fatma.koc@example.com</td>
                            <td className="numeric">5345566778</td>
                            <td className="numeric">753 Ash Street</td>
                            <td className="numeric">İzmir</td>
                          </tr>
                          <tr>
                            <td>Hasan</td>
                            <td>Arslan</td>
                            <td className="numeric">hasan.arslan@example.com</td>
                            <td className="numeric">5376677889</td>
                            <td className="numeric">258 Birch Road</td>
                            <td className="numeric">İstanbul</td>
                          </tr>
                          <tr>
                            <td>Elif</td>
                            <td>Kurt</td>
                            <td className="numeric">elif.kurt@example.com</td>
                            <td className="numeric">5307788990</td>
                            <td className="numeric">147 Redwood Street</td>
                            <td className="numeric">Ankara</td>
                          </tr>
                          <tr>
                            <td>Yusuf</td>
                            <td>Erdem</td>
                            <td className="numeric">yusuf.erdem@example.com</td>
                            <td className="numeric">5328899001</td>
                            <td className="numeric">369 Hickory Lane</td>
                            <td className="numeric">İzmir</td>
                          </tr>
                          <tr>
                            <td>Selin</td>
                            <td>Güneş</td>
                            <td className="numeric">selin.gunes@example.com</td>
                            <td className="numeric">5359911223</td>
                            <td className="numeric">159 Magnolia Avenue</td>
                            <td className="numeric">İstanbul</td>
                          </tr>
                          <tr>
                            <td>Ahmet</td>
                            <td>Bozkurt</td>
                            <td className="numeric">ahmet.bozkurt@example.com</td>
                            <td className="numeric">5391122334</td>
                            <td className="numeric">753 Sycamore Street</td>
                            <td className="numeric">Ankara</td>
                          </tr>
                          <tr>
                            <td>Gizem</td>
                            <td>Acar</td>
                            <td className="numeric">gizem.acar@example.com</td>
                            <td className="numeric">5382233445</td>
                            <td className="numeric">852 Poplar Road</td>
                            <td className="numeric">İzmir</td>
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
     <Footer/>
        {/* END FOOTER */}

    </div>
);
}
export default ListOrder;
