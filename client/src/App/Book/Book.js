import React, { useState, useContext } from 'react'
import { Card, CardContent, CardMedia, Collapse, IconButton, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
      width: 235,
      maxHeight: 421,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: '13px',
    },
    title: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(1.2),
      paddingRight: theme.spacing(1.2),
    },
    flexGrow: {
      flexGrow: 1,
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
      expand: {
        transform: 'rotate(0deg)',
      },
      expanded: {
        maxHeight: 574,
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}))

const BookContext = React.createContext({ expanded: false, setExpanded: () => {}})

function Book({ children }) {
    const classes = useStyles()

    const [expanded, setExpanded] = useState(false)

    return (
        <BookContext.Provider value={{ expanded, setExpanded }}>
            <Card
                className={[classes.card, expanded ? classes.expanded: null].join(' ')}
                >
                {children}
            </Card>
            
        </BookContext.Provider>
    )
}

function Title({title}) {
  const classes = useStyles()
    return  (
    <Typography variant="body2" align="center" className={[classes.flexGrow, classes.title].join(' ')}>
        {title}
    </Typography>)
}

function Cover({image}) {
  const classes = useStyles()

  return ( <CardMedia
    classes={{ media: classes.media }}
    className={classes.flexGrow}
    component="img"
    image={image || ' '}
  />)
}

function Description({ description }) {
    const classes = useStyles()

    return (
      <CardContent className={classes.flexGrow}>
        <Typography
          variant="caption"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
    )
}

function Expandable({ children }) {
  const classes = useStyles()
  const { expanded, setExpanded } = useContext(BookContext)

  return (
      <>
        <IconButton
          data-testid="expandButton"
          onClick={() => setExpanded(!expanded)}
          className={expanded ? classes.expandOpen : classes.expand}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {children}
          </CardContent>
        </Collapse>
      </>
  )
}

function Ratings({ text, rating}) {
  return (
    <Typography variant="caption" component="div">
      {text} {rating}
    </Typography>
  )
}

Book.Title = Title
Book.Cover = Cover
Book.Description = Description
Book.Expandable = Expandable
Book.Ratings = Ratings

export default Book