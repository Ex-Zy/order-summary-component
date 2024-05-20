import './ProductOrder.scss';
import React, { useMemo } from 'react';
import { Product } from '../../types';

const getImage = (path: string) => new URL(`../../assets/${path}`, import.meta.url).href;

type Props = Product;

export const ProductOrder: React.FC<Props> = (props: Props) => {
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol'
    }).format(props.price);
  }, [props.price]);

  return (
    <div className="product" key={props.title}>
      <div className="product__media">{<img src={getImage(props.image)} alt={props.title} />}</div>
      <div className="product__content">
        <h3 className="product__title">{props.title}</h3>
        <p className="product__price">
          {formattedPrice}/{props.period}
        </p>
      </div>
      <div className="product__actions">
        <a href="#" className="product__link link">
          Change
        </a>
      </div>
    </div>
  );
};
