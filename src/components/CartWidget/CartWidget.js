import cart from './assets/cart.svg';
const CartWidget = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ps-2 pe-2 pb-2 pb-lg-0">
      <div>
        <img src={cart} alt="cart-widget" className="img-fluid" />
      </div>
      <div className="fw-bold ps-2">
        <p className="m-0">0</p>
      </div>
    </div>
  );
};

export default CartWidget;
