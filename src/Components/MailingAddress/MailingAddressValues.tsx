export default interface MailingAddressValues {
    id: number;
    name?: string;
    initial?: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
}