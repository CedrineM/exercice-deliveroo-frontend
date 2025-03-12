import foodLogo from "../../assets/food_icon.png";

const Food = ({
  meals,
  card,
  setCard,
  subtotal,
  setSubtotal,
  setIsDisable,
}) => {
  const handleAddToCardOnClick = () => {
    const newCard = [...card];
    const index = newCard.indexOf(meals);
    if (index === -1) {
      newCard.push(meals);
      newCard[newCard.length - 1].quantity = 1;
    } else {
      newCard[index].quantity += 1;
    }
    setSubtotal(Math.round((subtotal + Number(meals.price)) * 100) / 100);
    setCard(newCard);
    setIsDisable(false);
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
