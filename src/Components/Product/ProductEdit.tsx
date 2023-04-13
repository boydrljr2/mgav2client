import React from 'react';
import { useParams } from 'react-router-dom';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { ProductItemValues, PRODUCTS, ProductValues, newProduct } from '../Scaffold/MGAValues';

import ProductItem from './ProductItem';

export default function ProductEdit ()  {

    const productId = useParams().productId;
    console.log("productId: ", productId);
    let selectedProduct : ProductValues | undefined  = 
        PRODUCTS.find(product => String(product.id) === productId);
    const selectedProductUndefined = (selectedProduct === undefined);

    selectedProduct = !selectedProductUndefined ? selectedProduct : newProduct;

    const productItemProps : ProductItemValues =  { product : selectedProduct };

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'products/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: 'Product: ' + selectedProduct?.name,
        pageButtons: pageButtons
    }

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <ProductItem {...productItemProps} />
        </React.Fragment>
    )
}