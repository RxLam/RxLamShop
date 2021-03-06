import React from 'react';
import withStore from '~/hocs/withStore'


class Result extends React.Component{
	render(){
		let data = this.props.stores.order.lastOrderCash;
		return (
			<div>
				<h2>Congratulations!</h2>
				<p>Hi, {data.name}!</p>
				<p><strong>Total: {data.total}</strong></p>
			</div>
		)
	}
};

export default withStore(Result);
