import React from 'react';

import { PRODUCTS, ProductRowValues, ProductTableProps } from '../Scaffold/MGAValues';
import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';
import ProductTable from './ProductTable';


export default function ProductPage() {
    
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'products/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Products",
        pageButtons: pageButtons
    }

    const productRows : ProductRowValues[] = PRODUCTS.map(product => {
        return {
            //Identifiers
            id                      : product.id,
            name                    : !!product.name ? product.name : '',
            status                  : !!product.status.value ? product.status.value : '',
            assetType               : !!product.assetType.value ? product.assetType.value : '', 
            state                   : !!product.state.value ? product.state.value : '',
            //Product Terms
            defaultRatingTerritory  : !!product.defaultRatingTerritory.value ? 
                                        product.defaultRatingTerritory.value : '',
            effectiveDate           : !!product.effectiveDate ? product.effectiveDate.toLocaleString().split(',')[0] : '',
            sr22                    : !!product.sr22 ? 
                                        (product.sr22 === true ? 'Required' : 'Not Required') 
                                        : 'N/A',
            insurerName             : !!product.insurer ? product.insurer.name : ' ',
            insurerContactName      : !!product.insurer.contactName ? product.insurer.contactName : ' ',
            insurerPhone            : !!product.insurer.phone ? product.insurer.phone : ' ',
            insurerEmail            : !!product.insurer.principalEmail ? product.insurer.principalEmail : ' ',
            insurerAddress          : !!product.insurer.mailingAddress ?
                                            product.insurer.mailingAddress.streetAddress1 + ' ' +
                                            product.insurer.mailingAddress.city + ', ' +
                                            product.insurer.mailingAddress.state.value + ' ' +
                                            product.insurer.mailingAddress.zip
                                            : ' ',

        }
    });

    const productTableProps : ProductTableProps = {
        productRows: productRows
    }
    
    return (
        <div>
            <PageBar {...pageBarProps}/>
            <ProductTable {...productTableProps} />
        </div>
    )
}