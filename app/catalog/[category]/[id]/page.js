import { ProductPage } from "@/src/views/productPage";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;
  return <ProductPage id={id} />;
}
