import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	getData();

	return (
		<>
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
		</>
	);
}


const getData = async function() {
	let localdata = localStorage.getItem('data');
	if (localdata) localdata = JSON.parse(localdata);

	if (localdata && localdata.length > 0) return localdata;

	localdata = await fetch(`https://6369571515219b849615d39a.mockapi.io/product`)
	.then(response => response.text())
	.then(data => {
		localStorage.setItem('data', data);

		return getData();
	});
};


export { getData }
export default App;
