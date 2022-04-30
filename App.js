import { Provider } from 'react-redux';
import store from './src/redux/rootStore';
import DDApp from './src/DDApp';

export default function App() {
	return (
		<Provider store={store}>
			<DDApp />
		</Provider>
	);
}
