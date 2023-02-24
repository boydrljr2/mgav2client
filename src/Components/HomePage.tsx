import PageBar from './Scaffold/PageParts/PageBar'
import { PageBarValues, PageButtonValues } from './Scaffold/PageParts/PageValues'

export default function HomePage() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "Home",
        pageButtons: pageButtons
    }

    return(
        <PageBar {...pageBarProps}/>
    )
}