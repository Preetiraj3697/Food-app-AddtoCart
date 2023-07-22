import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/store/CartProvider";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const showCartItem = () => {
    setCartShow(true);
  };
  const hideCardItem = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCardItem} />}
      <Header onShow={showCartItem} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
