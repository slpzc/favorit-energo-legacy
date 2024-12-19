import { AssortimentPage } from '@/src/views/assortimentPage'
import React from 'react'

export default async function Page ({ params }) {
  const { category } = await params;
  return <AssortimentPage category={category}/>;
}
