import '../App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {global_style} from "../theme";
import Navigation from "./navigation/Navigation";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        display: 'flex',
        flexGrow: 1,
        padding: `${theme.spacing(3)}`,
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "url('assets/img/black_linen.png')",
        textAlign: "center"
    },
    message: {
        color: "rgb(255, 255, 255)",
        marginBottom: "20px"
    }
}));

function App(props) {
    const {container} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navigation/>
            <main className={classes.content}>
                <Container>
                    <Typography variant="h2" component="h2" className={classes.message}>
                        Currently undergoing renovations
                    </Typography>

                    <Typography variant="h5" className={classes.message}>
                        In the meantime, you may visit my LinkedIn and GitHub through the links on the navigation bar
                    </Typography>
                </Container>
                {/*<div className={classes.toolbar} />*/}
                {/*<Container>*/}
                {/*    <Grid*/}
                {/*        container*/}
                {/*        direction="row"*/}
                {/*        justify="center"*/}
                {/*        alignItems="center"*/}
                {/*    >*/}
                {/*        <Grid item xs={12}>*/}
                {/*            Hello World*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Container>*/}
            </main>
        </div>
    );
}

export default withStyles(global_style)(App);
