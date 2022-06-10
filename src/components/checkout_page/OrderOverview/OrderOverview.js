import OrderProduct from "./OrderProduct";

export default function OrderOverview({ carted_products }) {
  let total_amount = 0;

  if (carted_products) {
    for (const products of carted_products) {
      total_amount =
        products?.prices?.sale_price > 0
          ? total_amount + products?.prices?.sale_price * products?.quantity
          : total_amount + products?.prices?.regular_price * products?.quantity;
    }
  }
  return (
    <div className="cart_table">
      <div className="table_full">
        <div className="flex bg-slate-100 border-b-1 border-slate-200 py-1">
          <div className="text-black2 text-normal tracking-wider font-semibold w-4/6">
            Product Details
          </div>
          <div className="text-black2 text-normal tracking-wider font-semibold w-2/6">
            Subtotal
          </div>
        </div>
        {carted_products.length ? (
          <>
            <div>
              {carted_products?.map((product) => (
                <OrderProduct key={product._id} product={product} />
              ))}
            </div>
            <div className="flex items-center justify-between px-2 text-black2 tracking-wider font-semibold">
              <div className="text-left">Payable Amount:</div>
              <div className="pr-2">৳ {total_amount.toFixed(2)}</div>
            </div>
          </>
        ) : (
          <div className="my-5 text-black2 tracking-wide">Loading Data....</div>
        )}
      </div>
    </div>
  );
}
