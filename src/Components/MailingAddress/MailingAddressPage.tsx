import PageBar from '../Scaffold/PageParts/PageBar';
import MailingAddressTable from "./MailingAddressTable";


export default function PolicyPage() {

    const pageButtons = [
        {name: 'New', link: 'policies'}
    ]

    return (
        <div>
            <PageBar title="Mailing Addresses" pageButtons={pageButtons}/>
            <MailingAddressTable />
        </div>
    )
}