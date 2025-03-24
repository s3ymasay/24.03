import PreFooter from "./PreFooter"; 
function Footer(){
    return(
        <div>
            <PreFooter/>
                  {/* BEGIN FOOTER */}
      <div className="page-footer">
        <div className="container">
          2014 © Metronic by keenthemes.{" "}
          <a
            href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
            title="Purchase Metronic just for 27$ and get lifetime updates for free"
            target="_blank"
          >
            Purchase Metronic!
          </a>
        </div>
      </div>
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
      {/* END FOOTER */}
        </div>
    );
}
export default Footer