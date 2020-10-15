import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
  listItemText:{
    fontFamily: 'Playfair Display, serif',
    fontSize: '18px',
    height: '10px',
    textAlign: 'center',
  }
}));


const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

// var items = [];


const Project = (props) => {
const classes = useStyles()

    return(
    <div className="moods">
        <h2>{props.project_name}</h2>
        <p>{props.overview}</p>
        <br />
        <h3>Frameworks / Languages / Platforms Used</h3>
        <List dense="true" className="react-list">
            {props.attributes.map(d=>
            <ListItem>
                <ListItemText
                  classes={{primary: classes.listItemText}}
                  primary={d}
                />
            </ListItem>)}
            </List>
        {/* <ul>
            {props.attributes.map(d=><li key={d}>{d}</li>)}
        </ul> */}
        <div id="images-container">
            <AliceCarousel 
            mouseTracking 
            items = {props.pic.map((p,idx)=><img id={props.id} key={idx} src={p} onDragStart={handleDragStart} className="gallery" alt="Pic Here"/>)}
            responsive = {responsive}
            />            
        </div>
    </div>
    )}


export default Project