import "./Card.css";
const Card = ({ card, isDisabled }) => {
  return (
    <div className="card">
      <button disabled={isDisabled}>Valider mon panier</button>
      <div>
        <div>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <span>Price €</span>
      </div>
      <div>
        <div>
          <span>Sous-total</span>
          <span>Price €</span>
        </div>
        <div>
          <span>Frais de livraison</span>
          <span>2,50 €</span>
        </div>
      </div>
      <div>
        <span>Total</span> <span>Price €</span>
      </div>
    </div>
  );
};
export default Card;
