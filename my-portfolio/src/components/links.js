import React from 'react'
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > * + *': {
//         marginLeft: theme.spacing(2),
//       },
//     },
//   }));

const Links = () => {
    // const classes = useStyles()
    
    return (
    // <Typography className={classes.root}>
    // <div className="links-container">
    // <h2>Check Out My Other Work and Certifications At:</h2>
    //   <Link color="red" href="https://github.com/doug392" target="blank" onClick=''>
    //     GitHub
    //   </Link>
    //   <Link href="#" onClick=''>
    //     CodePen
    //   </Link>
    //   <Link href="#" onClick=''>
    //     FreeCodeCamp Certifications
    //   </Link>
    //   </div>
    // </Typography>

<div className="links-container" id="links">
<h2>Check Out My Other Work and Certifications At:</h2>
  <a href="https://github.com/doug392" target="blank" onClick=''>
    GitHub </a>
    <a href="https://codepen.io/doug392" target="blank" onClick=''>
    CodePen </a>
    <a href="https://www.freecodecamp.org/doug392" target="blank" onClick=''>
    FreeCodeCamp Certifications </a>
  </div>
    )
}

export default Links