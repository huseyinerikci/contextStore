import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  //ürün ekleme / ürün miktarı artırma
  const addToBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);
    if (!found) {
      //sepete ürün ekle
      setBasket(basket.concat({ ...product, amount: 1 }));

      toast.success("Ürün sepete eklendi");
    } else {
      //sepette bulunan ürün miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
      setBasket(newBasket);
      toast.info(`Ürünün miktarı arttırıldı (${updated.amount})`);
    }
  };
  //ürün silme
  const removeFromBasket = (delete_id) => {
    const filtered = basket.filter((item) => item.id !== delete_id);
    setBasket(filtered);
    toast.error("Ürün sepetten silindi");
  };
  //ürün azaltma
  const decreaseAmount = (decrs_id) => {
    const found = basket.find((item) => item.id === decrs_id);
    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
      toast.info(`Ürünün miktarı azaltıldı (${updated.amount})`);
    } else {
      removeFromBasket(decrs_id);
    }
  };
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
