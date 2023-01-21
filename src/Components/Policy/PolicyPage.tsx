import MailingAddressList from "../MailingAddress/MailingAddressTable";
import PageBar from '../../Scaffold/PageParts/PageBar';

export default function PolicyPage() {

    const pageButtons = [
        {name: 'New', link: 'policies'}
    ]

    return (
        <div>
            <PageBar title="Policies" pageButtons={pageButtons}/>
        </div>
    )
}