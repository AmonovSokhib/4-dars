export const Header = ({ setValue, setSelect }) => {
	return (
		<>
			<h1 className='text-center  mb-5 text-info '>COUNTRY'S</h1>
			<div className='d-flex justify-content-between me-5 mb-5 mt-3'>
				<input
					className='form-control w-25 mx-5'
					onChange={(evt) => setValue(evt.target.value)}
					type='search'
					placeholder='Search...'
				/>

				<select
					className='form-select w-25'
					onChange={(evt) => setSelect(evt.target.value)}>
					<option value='All'>All</option>
					<option value='Asia'>Asia</option>
					<option value='Europe'>Europe</option>
					<option value='Africa'>Africa</option>
					<option value='Americas'>Americas</option>
				</select>
			</div>
		</>
	);
};
