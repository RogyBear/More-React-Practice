import React from 'react';
import './App.css';
import Question from './Question';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			questions: [
				{ id: 'fdsd', title: 'Why is the sky blue?' },
				{ id: 'adsf', title: 'Who invented pizza?' },
				{ id: 'afdsf', title: 'Is green tea overrated?' }
			],
			displayQuestions: false
		};
		this.displayQuestions = this.displayQuestions.bind(this);
	}

	displayQuestions = () => {
		this.setState({
			displayQuestions: !this.state.displayQuestions
		});
	};

	render() {
		let questions = null;
		if (this.state.displayQuestions) {
			questions = (
				<div>
					{this.state.questions.map((question, index) => {
						return <Question key={question.id} title={question.title} />;
					})}
				</div>
			);
		}
		return (
			<div className="App">
				<button className="btn" onClick={this.displayQuestions}>
					View Unanswered Questions
				</button>
				{questions}
			</div>
		);
	}
}

export default App;
