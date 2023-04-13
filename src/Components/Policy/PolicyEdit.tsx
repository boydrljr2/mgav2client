import React from 'react';
import { useParams } from 'react-router-dom';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { PolicyItemProps, POLICIES, PolicyValues, newPolicy } from '../Scaffold/MGAValues';
import PolicyItem from './PolicyItem';

export default function PolicyEdit () {

    const policyId = useParams().policyId;

    let selectedPolicy : PolicyValues | undefined  = 
        POLICIES.find(policy => String(policy.id) === policyId);

    const selectedPolicyUndefined = (selectedPolicy === undefined);
    selectedPolicy = !selectedPolicyUndefined ? selectedPolicy : newPolicy;
    const policyItemProps : PolicyItemProps =  { policy : selectedPolicy };

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'insurers/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Policy: " + 
            selectedPolicy?.policyNumber + " - " + 
            selectedPolicy?.insured.name + " - " +
            selectedPolicy?.product.insurer.name, 
        pageButtons: pageButtons
    }

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <PolicyItem {...policyItemProps} />
        </React.Fragment>
    )
}