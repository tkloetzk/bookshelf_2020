import Header from './header/Header'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

const useStyles = makeStyles(theme => ({
    // tabs: {
    //   background: theme.palette.primary.gray,
    // },
    container: {
      marginTop: 103,
    },
  }))

export default function App() {
    const classes = useStyles()
    const [index, setIndex] = useState(0)

    return (
        <>
            <Header>Book Review Aggregator</Header>
            <div className={classes.container}>
                <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                //className={classes.tabs}
                >
                <Tab
                    label="Search"
                    onClick={() => setIndex(0)}
                />
                <Tab
                    label="Bookshelf"
                    onClick={() => setIndex(1)}
                />
                </Tabs>
                <SwipeableViews index={index} onChangeIndex={setIndex}>
                    <div>0</div>
                    <div>1</div>
                </SwipeableViews>
            </div>
        </>
    )
}