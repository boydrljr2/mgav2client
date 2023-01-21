import PageBar from '../Scaffold/PageParts/PageBar'

const homeButtons = [{}] // No buttons on the home page

export default function HomePage() {
    return(
        <PageBar title="Home" pageButtons={homeButtons}/>
    )
}