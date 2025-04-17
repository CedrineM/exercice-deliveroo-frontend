import "./Card.css";
const Card = ({ card, setCard, isDisabled, subtotal, setSubtotal }) => {
  // Fonction pour augmenter la quantité d'un article
  const handleIncrement = (mealId) => {
    const updatedCard = card.map((meal) => {
      if (meal.id === mealId) {
        const newQuantity = meal.quantity + 1;
        // Mise à jour du sous-total - Conversion en nombre
        setSubtotal(subtotal + parseFloat(meal.price));
        return { ...meal, quantity: newQuantity };
      }
      return meal;
    });
    setCard(updatedCard);
  };

  // Fonction pour diminuer la quantité d'un article
  const handleDecrement = (mealId) => {
    const mealToUpdate = card.find((meal) => meal.id === mealId);

    if (mealToUpdate.quantity === 1) {
      // Si la quantité est 1, on supprime l'article du panier
      const updatedCard = card.filter((meal) => meal.id !== mealId);
      setCard(updatedCard);
      // Mise à jour du sous-total - Conversion en nombre
      setSubtotal(subtotal - parseFloat(mealToUpdate.price));
    } else {
      // Sinon on décrémente la quantité
      const updatedCard = card.map((meal) => {
        if (meal.id === mealId) {
          // Mise à jour du sous-total - Conversion en nombre
          setSubtotal(subtotal - parseFloat(meal.price));
          return { ...meal, quantity: meal.quantity - 1 };
        }
        return meal;
      });
      setCard(updatedCard);
    }
  };

  return (
    <div className="card">
      <button disabled={isDisabled}>Valider mon panier</button>
      {card.length === 0 ? (
        <div className="card-empty">
          <p>Votre panier est vide</p>
        </div>
      ) : (
        <div className="card-meals">
          {card.map((meals) => {
            return (
              <div key={meals.id}>
                <div className="meals-quantity">
                  <span
                    onClick={() => handleDecrement(meals.id)}
                    className="quantity-button"
                  >
                    -
                  </span>
                  <span>{meals.quantity}</span>
                  <span
                    onClick={() => handleIncrement(meals.id)}
                    className="quantity-button"
                  >
                    +
                  </span>
                </div>
                <span>{meals.title}</span>
                <span>{meals.price} €</span>
              </div>
            );
          })}
        </div>
      )}
      {subtotal !== 0 && (
        <>
          <div className="card-subtotal">
            <div>
              <span>Sous-total</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>

            <div>
              <span>Frais de livraison</span>
              <span>2,50 €</span>
            </div>
          </div>
          <div className="card-total">
            <span>Total</span> <span>{(subtotal + 2.5).toFixed(2)} €</span>
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
