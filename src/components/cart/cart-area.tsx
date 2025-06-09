import useCartInfo from "../../hooks/use-cart-info";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { clearCart } from "../../redux/features/cart";
import CartItem from "./cart-item";
import { NavLink } from "react-router-dom";

const CartArea = () => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const { total } = useCartInfo();
  const dispatch = useAppDispatch();
  const ship_cost = 13.0;
  
  const content =
   cart_products.length === 0 ? (
      <div className="text-center pt-50">
        <h3>No Cart Items Found</h3>
        <NavLink to="/shop" className="btn-ten tran3s update-cart-button mt-20">
          Continue Shipping
        </NavLink>
      </div>
    ) : (
      <div className="cart-list-form">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Product</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* cart item start */}
              <CartItem />
              {/* cart item end */}
            </tbody>
          </table>
        </div>

        <div className="d-sm-flex justify-content-between cart-footer">
          <div className="coupon-section d-flex flex-column">
            <form className="coupon-form d-lg-flex align-items-center">
              <input type="text" placeholder="Enter your code" />
              <button className="btn-ten tran3s md-mt-20 xs-mb-20">
                Apply Coupon
              </button>
            </form>
            <div className="mt-auto">
              <button
                onClick={() => dispatch(clearCart())}
                className="btn-ten tran3s update-cart-button"
              >
                Clear cart
              </button>
            </div>
          </div>

          <div className="cart-total-section d-flex flex-column sm-pt-40">
            <table className="cart-total-table">
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>${total.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Shipping Cost</th>
                  <td>${ship_cost.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>${(total + ship_cost).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <NavLink
              to="/checkout"
              className="btn-ten tran3s checkout-process mt-30"
            >
              Checkout
            </NavLink>
          </div>
        </div>
      </div>
    );
  return (
    <div className="cart-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
      <div className="container">{content}</div>
    </div>
  );
};

export default CartArea;
