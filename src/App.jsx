import KalkulatorTPG from "./components/kalkulator";
import Navbar from "./components/navbar";
import Tvc from "./components/tvc";
import Komposisi from "./components/komposisi";
import Footer from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('/assets/images/background-header.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 0,
      }}
    >
      <Navbar />
      <div className="wave container-fluid p-0">
        {/* Produk */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="row justify-content-center">
                <div className="col-10 mb-3">
                  <h2 className="tagline">
                    Bantu pelihara kesehatan tulang anak dalam masa pertumbuhan
                  </h2>
                </div>
                <div className=" col-12 mb-5">
                  <button
                    className="tombol-ukur"
                    onClick={() => {
                      document
                        .getElementById("kalkulator")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Ayo ukur kira - kira tinggi anak kamu!
                  </button>
                </div>
                <div className="col-12">
                  <img
                    className="packshot"
                    src="/assets/images/packshot-01.png"
                    alt="Packshot Lcal Grow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* komposisi */}
        <div className="container">
          <Komposisi />
        </div>
        {/* kalkulator */}
        <div className="container-fluid p-0">
          <KalkulatorTPG />
        </div>
        {/* tvc */}
        <div className="container">
          <Tvc />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
