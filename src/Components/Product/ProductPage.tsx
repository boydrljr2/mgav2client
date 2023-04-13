import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import ProductTable from './ProductTable';

export default function ProductPage() {

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'products'}
    ]

    const pageBarProps : PageBarValues = {
        title: "Products",
        pageButtons: pageButtons
    }

    return (
        <div>
            <PageBar {...pageBarProps}/>
            <ProductTable />
        </div>
    )
}