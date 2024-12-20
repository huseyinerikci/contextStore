const Total = ({ basket }) => {
  //sepetteki tüm ürünlerin toplamı
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  return (
    <div className="rounded my-5 border p-4 d-flex justify-content-between flex-column">
      <div className="fs-4">
        <p>
          Sepette <span className=" text-warning fw-bold">{totalAmount}</span>{" "}
          adet ürün var
        </p>
        <p>
          Toplam fiyat{" "}
          <span className=" text-success fw-bold">
            {totalPrice.toFixed(2)}₺
          </span>
        </p>
      </div>
      <button className="btn btn-warning py-3 px-4">Siparişi Onayla</button>
    </div>
  );
};

export default Total;
