import foodLogo from "../../assets/food_icon.png";

const Food = ({ meals }) => {
  return (
    <div key={meals.id} className="food">
      <div className="food-description">
        <h3>{meals.title}</h3>
        <p>{meals.description}</p>
        <div>
          <span>{meals.price} €</span>
          {meals.popular && <span className="orange">★ Populaire</span>}
        </div>
      </div>

      <div className="food-picture">
        {meals.picture ? (
          <img src={meals.picture} alt="" />
        ) : (
          <img src={foodLogo} alt="" />
        )}
      </div>
    </div>
  );
};
export default Food;
