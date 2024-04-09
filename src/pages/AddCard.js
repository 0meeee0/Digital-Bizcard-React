import { useEffect, useState } from "react";

function AddCard() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right, #007bff, #00dbde)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E0E0E0",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#333" }}>Add a Card</h1>
        <form>
          <div className="form-row d-flex justify-content-around">
            <div className="col-md-5">
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Card Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Card Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Card Company</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Simplon co"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Coordinates</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Av. 23 r"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ marginTop: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
