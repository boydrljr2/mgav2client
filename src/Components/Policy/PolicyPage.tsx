
import { Paper } from '@mui/material';

import PageBar from '../../Scaffold/PageParts/PageBar';
import PolicyTable from "./PolicyTable";

export default function PolicyPage() {

    const pageButtons = [
        {name: 'New', link: 'policies'}
    ]

    return (
        <div>
            <PageBar title="Policies" pageButtons={pageButtons}/>
            <PolicyTable />
        </div>
    )
}