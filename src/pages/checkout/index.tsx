import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm";

type Props = {};

const Checkout = (props: Props) => {
  const location = useLocation();
  const tickets = location?.state?.tickets.filter((i: any) => i.qty > 0);
  const data = location?.state?.data;

  // Calculate the sum of the amounts
  const calculateTotalAmount = (prices: any) => {
    const price = prices?.reduce(
      (sum: any, item: any) => Number(sum) + Number(item.price * item.qty || 0),
      0
    );
    return price;
  };

  const subtotal = calculateTotalAmount(tickets);
  const taxPercent = Number(process.env.REACT_APP_TAXPERCENT);
  const vat = (taxPercent / 100) * subtotal;
  const totalAmount = subtotal + vat;

  return (
    <CheckoutForm
      tickets={tickets}
      data={data}
      vat={vat}
      totalAmount={totalAmount}
      subTotal={subtotal}
    />
  );
};

export default Checkout;
