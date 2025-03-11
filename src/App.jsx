import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Categorie from "./components/Categorie/Categorie";
import Card from "./components/Card/Card";

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
      <Header />
      <Hero data={data} />
      <main>
        <div className="container">
          <section>
            <Categorie data={data} />
            <Card data={data} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
