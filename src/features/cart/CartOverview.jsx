import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCart, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utilis/helpers";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 uppercase text-stone-200 sm:px-6">
      <p className="text-stone-12 space-x-4 text-sm font-semibold sm:space-x-6 md:text-base">
        <span>{totalCartQuantity} PIZZAS</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
