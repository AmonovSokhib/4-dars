import './card.css';
export const Card = ({ item }) => {
	return (
		<li className='card m-2  w-25 '>
			<img className='card-img' src={item.flags.png} alt={item.name.official} />
			<div>
				<h3 className='card-title'>{item.name.common}</h3>
				<p className='card-item'>
					Population :{' '}
					<span className='card-item__span'> {item.population} </span>
				</p>
				<p className='card-item'>
					Region : <span className='card-item__span'> {item.region} </span>
				</p>
				<p className='card-item'>
					Capital : <span className='card-item__span'> {item.capital} </span>
				</p>
			</div>
		</li>
	);
};
