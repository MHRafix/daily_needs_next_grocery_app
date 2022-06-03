import Image from "next/image";
import React from "react";

export default function CardData({ card_data }) {
  const { card_img, card_name, payment_amount, payment_date } = card_data;
  return (
    <div id="payment_card_table">
      <span id="card_info">
        <Image src={card_img} alt="card image" width={50} height={50} />
      </span>
      <span id="card_info">{card_name}</span>
      <span id="card_info" className=" !text-green font-semibold">
        {payment_amount}
      </span>
      <span id="card_info">{payment_date}</span>
    </div>
  );
}
