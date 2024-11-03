import './css/style.scss';
import Intro from './section/intro';
import Greeting from './section/greeting';
import Call from './section/call';
import Info from './section/info';
import Map from './section/map';
import Send from './section/send';

function App() {
  return (
    <div className="App">
      <Intro />
      <Greeting />
      <Call />
      <Info />
      <Map />
      <Send />
    </div>
  );
}

export default App;
