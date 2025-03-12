import "./Categorie.css";
import Food from "./Food";

const Categorie = ({
  data,
  card,
  setCard,
  subtotal,
  setSubtotal,
  setIsDisable,
}) => {
  return (
    <div className="menu-categories">
      {data.categories.map((categorie, index) => {
        if (categorie.meals.length !== 0) {
          return (
            <div key={index} className="categorie-food">
              <h2>{categorie.name}</h2>{" "}
              <div>
                {categorie.meals.map((meals) => {
                  return (
                    <Food
                      key={meals.id}
                      meals={meals}
                      card={card}
                      setCard={setCard}
                      subtotal={subtotal}
                      setSubtotal={setSubtotal}
                      setIsDisable={setIsDisable}
                    />
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Categorie;
