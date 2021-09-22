import React from "react";
import { useParams, Link } from "react-router-dom";

const allProducts = {
  0: {
    pname: "AMD Radeon HD 7470",
    price: "3500",
    delivery: "Paid",
    image:
      "https://store.hp.com/app/assets/images/uploads/prod/gpu-buying-guide1611945219050856.jpg",
  },
  1: {
    pname: "Realme Air Pods",
    price: "2500",
    delivery: "Paid",
    image:
      "https://static-01.daraz.pk/other/shop/67b1e1e7b24ee3656cbabc591a4c8335.jpeg",
  },
  2: {
    pname: "Lipsticks",
    price: "250",
    delivery: "Paid",
    image:
      "https://static-01.daraz.pk/p/8f4dc268170fb761f8d965e1ad0b2aad.jpg_340x340q80.jpg_.webp",
  },
  3: {
    pname: "ABC Wrist Watch",
    price: "1000",
    delivery: "Paid",
    image:
      "https://static-01.daraz.pk/other/shop/2c29bbe8288424db9307926d07d84b1a.jpeg",
  },
  4: {
    pname: "USB Stick 4GB",
    price: "400",
    delivery: "Paid",
    image:
      "https://images.yaoota.com/xf-IvtdVuX3hMgDcGR3tfJUtEyE=/trim/yaootaweb-production-ke/media/crawledproductimages/ddc5f5d9c7ac3815272d4bfdd15c4316e170c59f.jpg",
  },
  5: {
    pname: "Health Band",
    price: "2000",
    delivery: "Paid",
    image: "https://static-01.daraz.pk/p/3c7e2ff36e9e65624fe6a1b1308b4b41.jpg",
  },
  6: {
    pname: "Key Chains",
    price: "100",
    delivery: "Paid",
    image: "https://m.media-amazon.com/images/I/81jinHAemvL._AC_UX385_.jpg",
  },
  7: {
    pname: "Chairs",
    price: "400",
    delivery: "Paid",
    image:
      "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg",
  },
};

export default function ProductDetail() {
  let { keys } = useParams();
  let { pname, price, delivery, image } = allProducts[keys];
  return (
    <div>
      <img src={image} style={{ width: "200px" }} />
      <h1>{pname}</h1>
      <h2>Delivery Type : {delivery}</h2>
      <h2>Price : {price}</h2>
    </div>
  );
}
