import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

export default function(props){
	let btn;

	if(props.inCart){
		btn =	<Button variant="danger" onClick={props.onRemove}>
					Remove
				</Button>
	} else {
		btn = 	<Button variant="success" onClick={props.onAdd}>
					Add to cart
				</Button> 
			}

	return(
	       <div>
	       		<h1>{props.title}</h1>
	       		<hr/>
	       		<div>
	       			<strong>Price: {props.price}</strong>
	       		</div>
	       		<Link to={props.backUrl}>Back</Link>
	       		<p>Text about product</p>
	       		{btn}
	       </div>			
	)
};
