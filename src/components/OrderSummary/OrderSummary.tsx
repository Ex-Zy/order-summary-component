import './OrderSummary.scss';
import React from 'react';
import { ProductOrder } from '../ProductOrder/ProductOrder.tsx';
import { Product } from '../../types';

const getImage = (path: string) => new URL(`../../assets/${path}`, import.meta.url).href;

type Props = {
  products: Product[];
};

export const OrderSummary: React.FC<Props> = ({ products }: Props) => {
  return (
    <article className="order">
      <div className="order__media">
        <img src={getImage('illustration-hero.svg')} alt="Illustration hero" />
      </div>
      <div className="order__content">
        <h2 className="order__title">Order Summary</h2>
        <p className="order__description">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
          you like!
        </p>
        <div className="order__list">
          {products.map((product) => {
            return <ProductOrder {...product} key={product.id} />;
          })}
        </div>
        <div className="order__actions">
          <button className="btn btn--primary">Proceed to Payment</button>
          <button className="btn btn--secondary">Cancel Order</button>
        </div>
      </div>
    </article>
  );
};
