import React from 'react';

let Hello = React.createClass({
	render: function() {
		return (
			<p>Hello {this.props.name}! Nice to meet you! </p>
		);
	}
});

let Greetings = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Welcome to our community.</h2>
				<Hello name={this.props.name} />
				<Hello name="Jack" />
				<hr />
				<footer>{this.props.time}</footer>
			</div>
		);
	}
});

export default Greetings;