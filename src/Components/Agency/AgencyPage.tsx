import MailingAddressList from "../MailingAddress/MailingAddressTable";
import PageBar from '../../Scaffold/PageParts/PageBar';

const agencyButtons = [
    {name: 'New', link: 'agencies'}
]

export default function AgencyPage() {
    return (
        <div>
            <PageBar title="Agencies" pageButtons={agencyButtons} />
            <MailingAddressList />
        </div>
    )
}