import React from 'react'

//Material-UI
import Grid from "@material-ui/core/Grid";

//Components

import ViewAnalyctics from '../components/ViewAnalytics';
import MobileViewAnalyctics from '../components/MobileViewAnalyctics';

export default function Analytics() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <ViewAnalyctics />
            </Grid>
            <Grid item xs={12} md={6}>
                <ViewAnalyctics />
            </Grid>
            <Grid item xs={12} md={6}>
                <MobileViewAnalyctics />
            </Grid>
            <Grid item xs={12} md={6}>
                <ViewAnalyctics />
            </Grid>
        </Grid>
    )
}
