import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
	const [selected, setSelected] = useState(10);

	const { feedbackEdit } = useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setSelected(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleChange = (e) => {
		setSelected(Number(e.target.value));
		select(Number(e.target.value));
	};

	return (
		<ul className='rating'>
			<li>
				<input
					type='radio'
					id={1}
					name='rating'
					value={1}
					checked={selected === 1}
					onChange={handleChange}
				/>
				<label htmlFor={1}>1</label>
			</li>
			<li>
				<input
					type='radio'
					id={2}
					name='rating'
					value={2}
					checked={selected === 2}
					onChange={handleChange}
				/>
				<label htmlFor={2}>2</label>
			</li>
			<li>
				<input
					type='radio'
					id={3}
					name='rating'
					value={3}
					checked={selected === 3}
					onChange={handleChange}
				/>
				<label htmlFor={3}>3</label>
			</li>
			<li>
				<input
					type='radio'
					id={4}
					name='rating'
					value={4}
					checked={selected === 4}
					onChange={handleChange}
				/>
				<label htmlFor={4}>4</label>
			</li>
			<li>
				<input
					type='radio'
					id={5}
					name='rating'
					value={5}
					checked={selected === 5}
					onChange={handleChange}
				/>
				<label htmlFor={5}>5</label>
			</li>
			<li>
				<input
					type='radio'
					id={6}
					name='rating'
					value={6}
					checked={selected === 6}
					onChange={handleChange}
				/>
				<label htmlFor={6}>6</label>
			</li>
			<li>
				<input
					type='radio'
					id={7}
					name='rating'
					value={7}
					checked={selected === 7}
					onChange={handleChange}
				/>
				<label htmlFor={7}>7</label>
			</li>
			<li>
				<input
					type='radio'
					id={8}
					name='rating'
					value={8}
					checked={selected === 8}
					onChange={handleChange}
				/>
				<label htmlFor={8}>8</label>
			</li>
			<li>
				<input
					type='radio'
					id={9}
					name='rating'
					value={9}
					checked={selected === 9}
					onChange={handleChange}
				/>
				<label htmlFor={9}>9</label>
			</li>
			<li>
				<input
					type='radio'
					id={10}
					name='rating'
					value={10}
					checked={selected === 10}
					onChange={handleChange}
				/>
				<label htmlFor={10}>10</label>
			</li>
		</ul>
	);
}

export default RatingSelect;
