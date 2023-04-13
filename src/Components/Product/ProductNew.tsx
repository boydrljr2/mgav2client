import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { ProductItemValues, newProduct } from '../Scaffold/MGAValues';
import ProductItem from './ProductItem';

export default function ProductNew() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "New Product",
        pageButtons: pageButtons
    }

    const productItemProps : ProductItemValues = {
        product: newProduct
    };

    return (
        <React.Fragment>
            <PageBar {...pageBarProps}/>
            <ProductItem {...productItemProps} />
        </React.Fragment>
    )
}