import React from 'react';
import { useParams } from 'react-router-dom';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { InsurerItemValues, INSURERS, InsurerValues, newInsurer } from '../Scaffold/MGAValues';
import InsurerItem from './InsurerItem';

export default function InsurerEdit ()  {

    const insurerId = useParams().insurerId;
    let selectedInsurer : InsurerValues | undefined  = 
        INSURERS.find(insurer => String(insurer.id) === insurerId);
    const selectedInsurerUndefined = (selectedInsurer === undefined);
    selectedInsurer = !selectedInsurerUndefined ? selectedInsurer : newInsurer;
    const insurerItemProps : InsurerItemValues =  { insurer : selectedInsurer };

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'insurers/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: 'Insurer: ' + selectedInsurer?.name,
        pageButtons: pageButtons
    }

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <InsurerItem {...insurerItemProps} />
        </React.Fragment>
    )
}

