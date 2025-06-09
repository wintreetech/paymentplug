import { NavLink } from "react-router-dom";
import { IProduct } from "../../types/product-d-t";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { add_cart_product } from "../../redux/features/cart";
import { remove_wishlist_product } from "../../redux/features/wishlist";

const WishlistArea = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  // handle remove
  const handleRemove = (item: IProduct) => {
    dispatch(remove_wishlist_product(item));
  };

  return (
    <div className="cart-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
      <div className="container">
        {wishlist.length === 0 && (
          <div className="text-center pt-50">
            <h3>No Wishlist Items Found</h3>
            <NavLink
              to="/shop"
              className="btn-ten tran3s update-cart-button mt-20"
            >
              Continue Shipping
            </NavLink>
          </div>
        )}
        {wishlist.length > 0 && (
          <div className="cart-list-form">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan={2}>Product</th>
                    <th>Price</th>
                    <th>Add Cart</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item, i) => (
                    <tr key={i}>
                      <td className="product-thumbnails">
                        <NavLink to={`/shop-details/${item.id}`} className="product-img">
                          <img src={item.img} alt="cart-img" />
                        </NavLink>
                      </td>
                      <td className="product-info">
                        <NavLink to={`/shop-details/${item.id}`} className="product-name">
                          {item.title}
                        </NavLink>
                        <div className="serial">#859632007881</div>
                        <ul className="style-none">
                          <li className="size">Size: 23”</li>
                          <li className="color">Color: Red</li>
                        </ul>
                      </td>
                      <td className="price">
                        <span>${item.price}</span>
                      </td>
                      <td className="cart-btn">
                        <button onClick={() => dispatch(add_cart_product(item))} className="btn-ten tran3s">
                          Add To cart
                        </button>
                      </td>
                      <td>
                        <a onClick={() => handleRemove(item)} className="remove-product cursor-pointer">
                          x
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistArea;
