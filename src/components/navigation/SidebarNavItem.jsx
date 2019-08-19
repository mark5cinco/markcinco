import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    listItem: {
        textAlign: "center",
        justifyContent: "center"
    },
    listItemImage: {
        justifyContent: "center",
        color: "rgba(225, 246, 255, 0.45)",
        '&:hover': {
            color: "rgba(225, 246, 255, 1)"
        }
    }
}));

const sidebarNavItem = ({navName, children}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.listItem}>
            <Grid item sm={12}>
                <ListItemIcon
                    classes={{root: classes.listItemImage}}>
                    {children}
                </ListItemIcon>
            </Grid>
            <Grid item sm={12}>
                <ListItemText primary={navName}/>
            </Grid>
        </Grid>
    );
};

export default sidebarNavItem;