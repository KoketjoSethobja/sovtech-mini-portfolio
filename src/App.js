import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import 'animate.css'
import Contact from './components/Contact';

function App() {
	return (
		<div className="app">
			<Home />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
