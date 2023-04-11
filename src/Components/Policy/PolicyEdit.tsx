import React from 'react';
import { useParams } from 'react-router-dom';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { PolicyItemProps, POLICIES, PolicyValues } from '../Scaffold/MGAValues';
import PolicyItem from './PolicyItem';

export default function PolicyEdit () {

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'insurers/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Edit Policy",
        pageButtons: pageButtons
    }

    const policyId = useParams().policyId;
    let selectedPolicy : PolicyValues | undefined  = 
        POLICIES.find(policy => String(policy.id) === policyId);
    const selectedPolicyUndefined = (selectedPolicy === undefined);
    const policyItemProps : PolicyItemProps =  { policy : selectedPolicy };

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <PolicyItem {...policyItemProps} />
        </React.Fragment>
    )
}