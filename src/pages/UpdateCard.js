import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateCard() {
  const { id } = useParams();
  
  useEffect(() => {
    document.body.style.background = "linear-gradient(to right, #007bff, #00dbde)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const [InputErrorList, setInputErrorList] = useState({});
  const [Loading, setLoading] = useState(true); // Set loading to true initially
  const [card, setCard] = useState({ // Initialize card state with an empty object
    name: "",
    company: "",
    title: "",
    coordinates: "",
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/find/${id}`)
      .then((response) => {
        console.log(response.data);
        setCard(response.data); // Set the card state with the received card object
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
        setLoading(false); // Set loading to false on error
      });
  }, [id]);
  
  const handleInputs = (e) => {
    e.persist();
    setCard({ ...card, [e.target.name]: e.target.value });
  }

  const UpdateCard = (e) => {
    e.preventDefault();
    console.log("Saving card...");
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      name: card.name,
      company: card.company,
      title: card.title,
      coordinates: card.coordinates,
    };
    axios.post(`http://127.0.0.1:8000/api/update/${id}`, data, config)
      .then((res) => {
        setLoading(false);
        alert(res.data.message);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
            setLoading(false);
          }
        }
      });
  };

  if (Loading) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }
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
        <h1 style={{ color: "#333" }}>Edit a Card</h1>
        <form onSubmit={UpdateCard}>
          <div className="form-row d-flex justify-content-around">
            <div className="col-md-5">
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Card Name</label>
                <input
                  value={card.name}
                  onChange={handleInputs}
                  name="name"
                  type="text"
                  className="form-control"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
                <span className="text-danger">{InputErrorList.name}</span>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Card Title</label>
                <input
                  value={card.title}
                  onChange={handleInputs}
                  name="title"
                  type="text"
                  className="form-control"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
                <span className="text-danger">{InputErrorList.title}</span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Card Company</label>
                <input
                  value={card.company}
                  onChange={handleInputs}
                  name="company"
                  type="text"
                  className="form-control"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
                <span className="text-danger">{InputErrorList.company}</span>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ color: "#666" }}>Coordinates</label>
                <input
                  value={card.coordinates}
                  onChange={handleInputs}
                  name="coordinates"
                  type="text"
                  className="form-control"
                  style={{
                    borderColor: "#E0E0E0",
                    borderRadius: "5px",
                  }}
                ></input>
                <span className="text-danger">
                  {InputErrorList.coordinates}
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary"
            style={{ marginTop: "20px" }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCard;
