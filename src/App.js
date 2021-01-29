import Video from "./Components/Video";
import videoSrc from "./bunnyStory.mp4"
import "./App.css";

function App() {

  return (

    <div className="App" data-test="component-app">
    <header>Video Analytics Player</header>
    <div style={{width:'100%',display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    <Video data-test="component-video" src={videoSrc}/>
    <div className="infoSection">
      <h2>Video Overview</h2> 
      <div>
         <h3>Features</h3>
        <ul>
        <li><h4>Custom Controls for Video Player.</h4></li>
        <li><h4>Depicts additional info(driving analytics) as the video progresses.</h4></li> 
        <li><h4>API integration in place</h4></li>
        <li><h4>Implemented with best React standards</h4>
         <ul><li>State Management</li>
         <li>Responsive UI</li>
         <li>React Hooks to build reusable and performant component</li>
         </ul>
         </li>
         </ul>
         <h3>Technologies Used</h3>
         <ul>
           <li>Reactjs : v17.0.1</li>
           <li>TDD with jest-enzyme: v7.1.2</li>
           <li>React-Redux: v7.2.2</li>
           <li>apollo-server: v2.19.2</li>
           <li>graphql: v15.5.0</li>
         </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
