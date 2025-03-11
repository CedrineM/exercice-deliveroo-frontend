import foodLogo from "../../assets/food_icon.png";

const Food = ({ meals, card, setCard }) => {
  const handleAddToCardOnClick = () => {
    const newCard = [...card];
    newCard.push({
      name: meals.name,
      price: toNumber(meals.price),
      quantity: 1,
    });
    setCard(newCard);
  };

  return (
    <div key={meals.id} className="food" onClick={handleAddToCardOnClick}>
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
