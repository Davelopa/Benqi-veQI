/*--------------------APP CSS---------------------*/

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuSelector from './components/MenuSelector';
import ThemeChanger from './components/ThemeChanger';
import Main from './components/Main';

function App() {
  return (
    <div>
    <Header />
    <ThemeChanger />
    <MenuSelector />
    <Main />
    <Footer />
    </div>
  );
}

export default App;

/*------------------------------------------------*/