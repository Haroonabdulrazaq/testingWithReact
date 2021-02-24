import './App.scss';
import Header from './components/header';
import Headline from './components/headline';
import './App.scss';

function App() {
  return (
    <div className="App">
       <Header/>
       <section className="main">
          <Headline header="Post" description="Click the button below to render post"/> 
       </section>
       
    </div>
  );
}

export default App;
