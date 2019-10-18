import {createMuiTheme} from "@material-ui/core";

const global_style = theme => ({
    "@global": {
        img: {
            maxWidth: "100%",
            height: "auto"
        }
    }
});

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorDockedLeft: {
                borderRight: 0
            }
        }
    }
});

export {theme, global_style};