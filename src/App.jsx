import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--vphy6y45v8nk.code.run/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement .... </span>
  ) : (
    <>
      <header>
        <div className="container-header">
          <img
            className="logo"
            src="src\assets\logo-teal.svg"
            alt="Deliveroo"
          />
        </div>
      </header>
      <main>
        <div>
          <div className="container">
            <section className="resto-info">
              <div>
                <h1>{data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
              </div>
              <div className="col-img">
                <img src={data.restaurant.picture} alt="Image de brunch" />
              </div>
            </section>
          </div>
        </div>
        <div className="container">
          <section className="resto-menu-card">
            <div className="menu-categories">
              {data.categories.map((categorie, index) => {
                if (categorie.meals.length !== 0) {
                  return (
                    <div key={index} className="categorie-food">
                      <h2>{categorie.name}</h2>{" "}
                      <div>
                        {categorie.meals.map((meals) => {
                          return (
                            <div key={meals.id} className="food">
                              <div className="food-description">
                                <h3>{meals.title}</h3>
                                <p>{meals.description}</p>
                                <div>
                                  <span>{meals.price}€</span>
                                  {meals.popular && (
                                    <span className="orange">Populaire</span>
                                  )}
                                </div>
                              </div>
                              {meals.picture && (
                                <div className="food-picture">
                                  <img src={meals.picture} alt="" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="card"></div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
