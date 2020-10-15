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
    <div className='bio' id="about">
      <p>I'm an aspiring web developer with a current focus on JavaScript, along with Vue.js and now React.js. Besides creating smaller projects to hone my skillset further, I've spent the last year developing Moods App with a few others. Our aim is to create an app that aids users in tracking their mental health to better understand and improve their lives. You can see more below, along with a few of my other projects. Thank you for taking the time to look at my portfolio. </p>
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