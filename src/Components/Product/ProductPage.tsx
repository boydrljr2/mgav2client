import PageBar from '../../Scaffold/PageParts/PageBar';

const productButtons = [
    {name: 'New', link: 'products'}
]

export default function ProductPage() {
    return (
        <div>
            <PageBar title="Products" pageButtons={productButtons}/>
        </div>
    )
}