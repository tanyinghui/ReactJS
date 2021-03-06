import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Import custom components
import standardstyle from '../../styles/standardstyle';
import formstyle from '../../styles/formstyle';

const styles = {
    card: formstyle.card,
    content: formstyle.content,
    continuebutton: standardstyle.centeredbutton,
    text: standardstyle.title,
}

class DeliverParcel extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <div className={classes.text}>
                            <Typography variant="h6">
                                Let us know when you've placed your parcel on the tray.
                            </Typography>
                        </div>
                        <Link to={'/parcelpath'}>
                            <Button variant="contained" className={classes.continuebutton}>
                                Continue
                            </Button>
                        </Link>
                    </CardContent>
                </Card>  
            </div>
        );
    }
}

export default withStyles(styles)(DeliverParcel)