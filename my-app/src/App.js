import './App.scss';
import Header from './components/header';
import Headline from './components/headline';
import './App.scss';

function App() {
  const tempArr = [{
    firstname: "Haroon",
    lastname: "Abdulrazaq",
    Email: "Abdul@yahoomail.com",
    age: 18,
    onlineStatus: true
  }]  

  return (
    <div className="App">
       <Header/>
       <section className="main">
          <Headline header="Post" description="Click the button below to render post" tempArr = {tempArr}/> 
       </section>
       
    </div>
  );
}

export default App;
