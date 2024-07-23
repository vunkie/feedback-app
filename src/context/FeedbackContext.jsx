import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 0,
			text: "Isso é um teste review",
			rating: 10,
		},
		{
			id: 1,
			rating: 9,
			text: "Great job!",
		},
		{
			id: 2,
			rating: 7,
			text: "Good job!",
		},
		{
			id: 3,
			rating: 3,
			text: "Bad job!",
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Deseja realmente excluir o feedback?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)));
	};

	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				addFeedback,
				deleteFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
