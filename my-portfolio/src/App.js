import React from 'react';

import TopBar from './components/topbar'
import Bio from './components/bio'
import Project from './components/project'
import Links from './components/links'

import Home from './assets/Home.png'
import Login from './assets/Login.png'
import Questions from './assets/Questions.gif'
import Hamburger from './assets/Hamburger_Menu.png'
import ChoresHome from './assets/ChoresHome.png'
import ChoresList from './assets/ChoresList.png'
import Clock from './assets/25+5.png'
import Calculator from './assets/Calculator.png'
import DrumMachine from './assets/DrumMachine.png'
import ChoresNav from './assets/ChoresNav.gif'
import QuoteGif from './assets/RandomQuote.gif'


function App() {
  return (
    <div className="app">
      <TopBar />
      <h1 className="heading" id="about">About</h1>
      <Bio />
      <h1 className="heading" id="projects">Projects</h1>
      <Project
      project_name="Moods App"
      overview = "Working with an excellent team of both burgeoning and established developers, we're nearing the initial release of Moods App on Android/iOS stores. The impetus was our collective desire to aid others in understanding and bettering their mental health, but we've only been further emboldened by the events of this year as it has been particularly taxing on many of us. I created the majority of the views you'll see below using a combination of both custom and ionic components.. I've also written much of the logic with which the app can update and receive data from Firebase for to display/update a user's settings. My other contributions include a combination of Node.js and vanilla JavaScript within Vue lifecycle hooks across many of the views display and update swaths of the other data presented to the user."
      attributes = {["Node.js","Vue.js", "Vuex", "Ionic","Vue Materials","Firebase"]}
      pic = {[Login,Home,Hamburger,Questions]}
      />
      <Project
      project_name="Chores Assignment"
      overview = "App to assign chores at random each week to my roommates and myself, each week with a simple click of the button on the Home view. An initial chores array is built into the logic, but the Chores List view allows you to dynamically add any additional chores needed. The UI was built using Material Design components and I used JavaScript in conjunction with Vue Router for navigation."
      attributes = {["Vue.js","Material Design"]}
      pic={[ChoresHome, ChoresList, ChoresNav]}
      />
      <Project
      project_name="PokeAPI"
      overview = "Simple app communicating with a pre-existing API, allowing the user to type in Pokemon name to display the corresponding sprite, moves, and abilities as a simple table." 
      attributes = {["Vue.js","Vuex"]}
      pic={[]}
      />
      <Project
      id="fccpics" 
      project_name="Various Smaller Projects Completed For FreeCodeCamp Curriculum"
      overview="You can check these projects out in detail in my showcase at the Codepen link at the bottom of the page, ranging from a calculator to a drum-machine. All were built using React.js and a combination of the other tools listed. Completion of each of these projects and the preceding curriculum earned me a Front End Libraries Developer Certification."
      attributes = {["React.js", "jQuery", "Bootstrap"]}
      pic={[Calculator, DrumMachine, Clock, QuoteGif]}
      />
      <Links />
    </div>
  );
}

export default App;
