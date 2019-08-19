import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SidebarNavItem from "./SidebarNavItem";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import Certificate from "mdi-material-ui/Certificate";
import BookOpenOutline from "mdi-material-ui/BookOpenOutline";
import GithubBox from "mdi-material-ui/GithubBox";
import Linkedin from "mdi-material-ui/Linkedin";

const useStyles = makeStyles(theme => ({
    mySiteName: {
        '& img': {
            display: "block"
        },
        '& h2': {
            display: "block",
            position: "static",
            width: "auto",
            lineHeight: 1.2,
            textAlign: "center",
            padding: ".8em",
            background: "#2ba163",
            fontSize: "12px",
            textTransform: "upperCase",
            color: "rgb(255,255,255)",
            fontWeight: "bold",
            letterSpacing: "1px"
        }
    },
    socialIcons: {
        padding: "10px 0",
        '& a': {
            margin: "5px",
            color: "rgba(225, 246, 255, 0.45)",
            '&:hover': {
                color: "rgba(225, 246, 255, 1)"
            }
        }
    }
}));

const sidebarNav = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid>
                <div className={classes.mySiteName}>
                    <img src="assets/img/me_new.jpg"/>
                    <Typography variant="h1" component="h2">
                        Mark Cinco
                    </Typography>
                </div>
                <Divider/>
                <List disablePadding>
                    <ListItem button divider={true}>
                        <SidebarNavItem navName="About me"><AccountCircleOutlined/></SidebarNavItem>
                    </ListItem>
                    <ListItem button divider={true}>
                        <SidebarNavItem navName="Portfolio"><Certificate/></SidebarNavItem>
                    </ListItem>
                    <ListItem button divider={true}>
                        <SidebarNavItem navName="Blog"><BookOpenOutline/></SidebarNavItem>
                    </ListItem>
                </List>
            </Grid>
            <div className={classes.socialIcons}>
                <a href="https://github.com/Saiyha240"><GithubBox/></a>
                <a href="https://www.linkedin.com/in/mark-cinco/"><Linkedin/></a>
            </div>
        </Fragment>
    );
};

export default sidebarNav;