import MailingAddressList from "../MailingAddress/MailingAddressTable";
import PageBar from '../../Scaffold/PageParts/PageBar';



export default function InsurerPage() {
    
    const pageButtons = [
        {name: 'New', link: 'insurers'}
    ];
    
    return (
        <div>
            <PageBar title="Insurers" pageButtons={pageButtons}/>
            <MailingAddressList />
        </div>
    )
}