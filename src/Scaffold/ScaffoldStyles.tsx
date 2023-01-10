const drawerWidth = 160;

export const scaffoldStyles={
    drawer:{
        width: drawerWidth,
        "& .MuiBackdrop-root": {
            display: "none"
        }
    },
    drawerPaper : {
        width: drawerWidth,
        backgroundColor : "rgba(120,120,120,0.2)"        
    },
    content : {
        marginLeft : drawerWidth, //shift page content left to get out from behind drawer//
        padding: 5
    }
}