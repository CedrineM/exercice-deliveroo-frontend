import "./Card.css";
const Card = ({ card, setCard, isDisabled, subtotal, setSubtotal }) => {
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
                  <span>-</span>
                  <span>{meals.quantity}</span>
                  <span>+</span>
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
              <span>{subtotal} €</span>
            </div>

            <div>
              <span>Frais de livraison</span>
              <span>2,50 €</span>
            </div>
          </div>
          <div className="card-total">
            <span>Total</span>{" "}
            <span>{Math.round((subtotal + 2.5) * 100) / 100} €</span>
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
