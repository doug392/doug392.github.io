import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
  listItemText:{
    fontFamily: 'Playfair Display, serif',
    fontSize: '18px',
    height: '14px'
  }
}));


const Bio = () => {
  const classes = useStyles();


  return (
    <div className='bio'>
      <p>I'm an aspiring web developer with a current focus on JavaScript, along with both the Vue.js and more recently React.js frameworks. Besides creating smaller projects to hone my skills further, I've accrued just over a year of work experience this past year developing Moods App with a few others. More of each project can be seen directly below. Thank you for taking the time to look at my portfolio, it is very much appreciated. </p>
      <br />
      <h2>Primary Skills</h2>
      <span>
        <h4>Languages</h4>
        <List dense="true">
                <ListItem>
                  <ListItemText
                  classes={{primary: classes.listItemText}}
                    primary="JavaScript"
                  />
                </ListItem>
            </List>
      {/* <h4>Frameworks</h4>
      <ul>
          <li>Vue.js</li>
          <li>React.js</li>
      </ul> */}
      <h4>Frameworks</h4>
            <List dense="true">
                <ListItem>
                  <ListItemText
                  classes={{primary: classes.listItemText}}
                    primary="Vue.js"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                  classes={{primary: classes.listItemText}}
                    primary="React.js"                    
                  />
                </ListItem>
            </List>
      </span>
      </div>)
}

export default Bio