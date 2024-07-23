import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext);


	if (feedback.length === 0 || !feedback) {
		return <p>Sem Feedback ainda</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>

		// <div className='feedback-list'>
		// 	{feedback.map((item) => (
		// 		<FeedbackItem
		// 			key={item.id}
		// 			item={item}
		// 			handleDelete={handleDelete}
		// 		/>
		// 	))}
		// </div>
	);
}


export default FeedbackList;
