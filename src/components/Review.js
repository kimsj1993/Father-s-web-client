import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    card: {
      minWidth: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

const Review = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
        <CardContent>
          <Typography variant="h1" className={classes.title} gutterBottom>
            한미숙
          </Typography>
          <Typography variant="h5" component="p">
            다리 길이가 달라서 걷는것도 불편하고 운동하고 나면 통증이 심했는데 몇회 교정을 받은후 체형이 잘 잡혀서 운동하기 훨씬 수월해졌어요.
          </Typography>
        </CardContent>
      </Card>
    )
}

export default Review

