import {Link} from 'react-router-dom';
import {Drawer, Toolbar, List, ListItem } from "@mui/material";
import { scaffoldStyles } from './ScaffoldStyles';

//export const drawerWidth = 160;

export default function NavDrawer() {

    return (
        <Drawer 
            disableEnforceFocus
            variant="temporary"
            open={true}
            sx={scaffoldStyles.drawer }
            PaperProps={{
                sx:scaffoldStyles.drawerPaper,
                elevation:9
            }}
        >
            <Toolbar />
            <List>
                {
                    [
                        {route:"/", text: "Home"},
                        {route:"/insurer", text:"Insurer"}
                    ].map((nav, index) =>(
                        <ListItem key={nav.text}>
                            <Link to = {nav.route}>{nav.text}</Link>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    )

}