import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/test`).then((res) => {
      console.log(res.data);
      if (res.data.cards) {
        setCards(res.data.cards.map((card) => ({ ...card, favorited: false })));
        setLoading(false);
      }
    });
  }, []);
  const handleSvgClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, favorited: !card.favorited };
        }
        return card;
      })
    );
  };

  if (loading) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-between">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card bg-light shadow gap-1 my-4"
              style={{ maxWidth: "32rem", minHeight: "12rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://i.pinimg.com/564x/38/c7/99/38c799a2cc5152244c5d34ada5904634.jpg"
                    className="img-fluid rounded-start"
                    alt="Placeholder"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <ul className="list-group list-group-flush bg-light">
                      <li className="list-group-item bg-light">
                        Name: <span>{card.name}</span>
                      </li>
                      <li className="list-group-item bg-light">
                        Company Name: <span>{card.company}</span>
                      </li>
                      <li className="list-group-item bg-light">
                        Coordinates: <span>{card.coordinates}</span>
                      </li>
                    </ul>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <Link
                        className="rounded-circle p-2"
                        onClick={() => handleSvgClick(card.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill={card.favorited ? "red" : "pink"}
                          class="bi bi-chat-heart"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                          />
                        </svg>
                      </Link>
                      <div>
                        <Link
                          to="/"
                          className="card-link text-decoration-none"
                        >
                          ✎
                        </Link>
                        <Link to="/" className="card-link text-decoration-none">
                          ❌
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
