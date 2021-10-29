import './App.css';
import RenderPorts from './Patchbay'
import logo from './logo192.png'

function App() {
	return (
		<div className="App">
		<img src={logo} alt="Logo" className="photo"/>
			<header className="App-header">
			</header>
			<RenderPorts/>
		</div>
	);
}
export default App;
