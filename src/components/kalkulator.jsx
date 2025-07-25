import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function KalkulatorTPG() {
  const [gender, setGender] = useState("");
  const [ayah, setAyah] = useState("");
  const [ibu, setIbu] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const tbAyah = parseFloat(ayah);
    const tbIbu = parseFloat(ibu);
    if (isNaN(tbAyah) || isNaN(tbIbu) || !gender) {
      alert("Lengkapi semua data terlebih dahulu.");
      return;
    }

    let tpg;
    if (gender === "laki-laki") {
      tpg = (tbIbu + 13 + tbAyah) / 2;
    } else if (gender === "perempuan") {
      tpg = (tbAyah - 13 + tbIbu) / 2;
    }

    const min = (tpg - 8.5).toFixed(1);
    const max = (tpg + 8.5).toFixed(1);

    setResult({ min, max });
  };

  return (
    <div
      className="kalkulator-section container-fluid p-0"
      style={{
        backgroundImage: "url('assets/images/bg-kalkulator-01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="container"
        style={{ paddingBottom: "100px", paddingTop: "100px" }}
      >
        <div className="card shadow-sm">
          <div className="card-body">
            <h2
              className="card-title mb-4 text-center"
              style={{ fontWeight: "600", color: "#3B54A4" }}
            >
              Kalkulator Perkiraan Tinggi Anak
            </h2>
            <div className="mb-3">
              <label className="form-label">Jenis Kelamin:</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="laki-laki"
                    checked={gender === "laki-laki"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label">Laki-laki</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="perempuan"
                    checked={gender === "perempuan"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label">Perempuan</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Tinggi Ayah (cm):</label>
              <input
                type="number"
                value={ayah}
                onChange={(e) => setAyah(e.target.value)}
                className="form-control"
                placeholder="Masukkan tinggi ayah"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tinggi Ibu (cm):</label>
              <input
                type="number"
                value={ibu}
                onChange={(e) => setIbu(e.target.value)}
                className="form-control"
                placeholder="Masukkan tinggi ibu"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#3B54A4" }}
            >
              Hitung
            </button>

            {result && (
              <div className="alert alert-success mt-4 text-center">
                <h4>Perkiraan Tinggi Anak</h4>
                <p>
                  {result.min} cm — {result.max} cm
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KalkulatorTPG;
