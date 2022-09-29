import { useEffect, useState } from 'react';
import { List } from './components/List/List';
import { Card } from './components/Card/Card';
import Loading from './assets/imgs/loading.svg';
import { Header } from './components/Header/Header';

const App = () => {
	const [data, setData] = useState([]);
	const [value, setValue] = useState('');
	const [select, setSelect] = useState('');

	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => console.log(err));
		} else if (select.length && select !== 'All') {
			fetch(`https://restcountries.com/v3.1/region/${select}`)
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => console.log(err));
		} else {
			fetch('https://restcountries.com/v3.1/all')
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((err) => console.log(err));
		}
	}, [value, select]);

	return (
		<div>
			{/* <div>
				<form onSubmit={handleInputValue}>
					<input ref={inputVal} type='text' placeholder='Search...' />
					<button type='submit'>Search</button>
				</form>
			</div> */}
			<Header setValue={setValue} setSelect={setSelect} />

			{data.length ? (
				<List>
					{data.map((e) => (
						<Card key={e.name.common} item={e} />
					))}
				</List>
			) : (
				<div className='w-100 text-center'>
					<img src={Loading} alt='loading img' />
				</div>
			)}
		</div>
	);
};
export default App;
