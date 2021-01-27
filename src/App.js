import Video from "./Components/Video";
import videoSrc from "./bunnyStory.mp4"
import "./App.css";
function App() {
  return (
    <div className="App">
    <header>Video Analytics Player</header>
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
    <Video src={videoSrc}/>
    </div>
    </div>
  );
}

export default App;
