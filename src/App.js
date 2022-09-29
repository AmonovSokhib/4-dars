import { useEffect, useRef, useState } from 'react';
import { List } from './components/List/List';
import { Card } from './components/Card/Card';
import Loading from './assets/imgs/loading.svg';

const App = () => {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{data ? (
				<List>
					{data.map((e) => (
						<Card key={e.name.common} item={e} />
					))}
				</List>
			) : (
				<img src={Loading} />
			)}
		</div>
	);
};
export default App;
