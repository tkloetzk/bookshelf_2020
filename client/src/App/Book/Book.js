import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
      width: 235,
      maxHeight: 459,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: '13px',
    },
    media: {
      width: '33%',
      paddingTop: '16px',
      minHeight: '116px',
    },
    description: {
        height: '153px',
        overflow: 'auto',
      },
}))

const BookContext = React.createContext()

function Book(props) {
    const classes = useStyles()

    return (
        <BookContext.Provider>
            <Card
                className={classes.card}
                // className={[
                //     classes.card,
                //     expanded ? classes.expanded : null,
                //     differences.length ? classes.different : null,
                // ].join(' ')}
                >
                {props.children}
            </Card>
            
        </BookContext.Provider>
    )
}

function Title({title}) {
    return  (
    <Typography variant="body2" align="center">
        {title}
    </Typography>)
}

function Cover({image}) {
  const classes = useStyles()

  return ( <CardMedia
    classes={{ media: classes.media }}
    component="img"
    image={image || ' '}
  />)
}

function Description({ description }) {
    const classes = useStyles()

    return (<CardContent>
      <Typography
        variant="caption"
        color="textSecondary"
        component="p"
        className={classes.description}
      >
        {description}
      </Typography>
    </CardContent>)
}

Book.Title = Title
Book.Cover = Cover
Book.Description = Description

export default Book