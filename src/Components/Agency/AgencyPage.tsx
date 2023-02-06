
import { PageBarValues, PageButtonValues } from '../../Scaffold/PageParts/PageValues';
import MailingAddressList from "../MailingAddress/MailingAddressTable";
import PageBar from '../../Scaffold/PageParts/PageBar';

const pageButtons : PageButtonValues[] = [
    {name: 'New', link: 'agencies'}
];

const pageBarProps : PageBarValues = {
    title: "Agencies",
    pageButtons: pageButtons
}

export default function AgencyPage() {
    return (
        <div>
            <PageBar {...pageBarProps} />
            <MailingAddressList />
        </div>
    )
}