import React from "react";
import { ErrorMessage } from "../../utilities/AlertMessage";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import AdditonalInfo from "./AdditonalInfo";
import ProductView from "./ProductView";
import RelatedProducts from "./RelatedProducts";

export default function SignleProductMain({ bread_string, single_product }) {
  const additionalInfo = single_product?.additional_info;
  if (!single_product) {
    return (
      <>
        <Breadcrumb bread_nav={bread_string} />
        <ErrorMessage message="Product not found!" />
      </>
    );
  }
  return (
    <div className="document_body">
      <Breadcrumb bread_nav={bread_string} />
      <ProductView product={single_product} />
      <AdditonalInfo additonalInfo={additionalInfo} />
      <RelatedProducts additonalInfo={additionalInfo} />
    </div>
  );
}
