function Footer() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#3B54A4",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        marginTop: "150px",
        paddingTop: "100px",
        paddingBottom: "20px",
      }}
    >
      <div id="pembatas-footer" className="container-fluid">
        <div className="row mb-5">
          <div className="col-12 col-lg-6 col-md-6 text-center">
            <img
              src="/assets/images/logo-l-lcal-grow.png"
              alt="logo lcal grow"
              style={{ width: "50%" }}
            />
            <br />
            <img
              src="/assets/images/packshot-01.png"
              alt="logo lcal grow"
              style={{ width: "70%" }}
            />
          </div>
          <div className="footer-content col-12 col-lg-6 col-md-6">
            <h2>Tersedia di apotek :</h2>
            <img
              className="apotek"
              src="/assets/images/logo-viva.png"
              alt="viva apotek"
            />
            <img
              className="apotek"
              src="/assets/images/apotek24.png"
              alt="apotek 24"
            />
            <h2>Atau dapat dibeli via online di :</h2>
            <a
              href="https://shopee.co.id/lapi.official?c=s51763019_SS_ID_OTHR_organic&pid=instagram&smtt=9&uls_trackid=becbe3895d8e&utm_campaign=s51763019_SS_ID_OTHR_organic&utm_content=all&utm_medium=seller&utm_source=instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="online"
                src="/assets/images/shopee.png"
                alt="shopee"
              />
            </a>
            <a
              href="https://www.tokopedia.com/lapi-official-shop?entrance_name=search_suggestion_store&source=universe&st=product"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="online"
                src="/assets/images/tokopedia.png"
                alt="tokopedia"
              />
            </a>
            <img
              className="online"
              src="/assets/images/tiktok.png"
              alt="tiktok"
            />
            <a
              href="https://www.blibli.com/merchant/lapi-shop/LAO-70135?pickupPointCode=PP-3359192&fbbActivated=false"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="online"
                src="/assets/images/blibli.png"
                alt="blibli"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6287887762626&text=Hai,%20saya%20ingin%20memesan%20EYEVIT!%20Saya%20dari%20Web%20EYEVIT%20Segera%20hubungi%20saya."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="online"
                src="/assets/images/whatsapp.png"
                alt="whatsapp"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center" style={{ color: "white" }}>
              {new Date().getFullYear()} © PT. LAPI Laboratories | All Right
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
