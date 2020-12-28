import logo from './logo.svg';
import './App.css';
import  MainDesktop from './components/desktop/MainDesktop' 
import MainMobile from './components/mobile/MainMobile'
import  Header from './components/Header' 
import  Footer from './components/Footer' 
import MainClass from "./components/MainClass"
import {Mobile, Desktop} from "./components/shared/Responsive"
import ArticlesDesktop from "./components/desktop/article/ArticlesDesktop"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Articles from './components/desktop/home/Articles';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />
        <Desktop>
        <Switch>
          <Route path="/articles">
            <ArticlesDesktop />
          </Route>
          <Route path="/">
            <MainDesktop />
          </Route>
        </Switch> 
          
        </Desktop>

        <Mobile> 
          <MainMobile />
        </Mobile>
        <Footer />
    </div>
    </Router>

    
  );
}

export default App;
