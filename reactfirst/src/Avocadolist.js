import React from 'react';

const Avocadolist = (props) => {
	return (
		<div className = "Avocadostyle ma4 dib pd4 grow tc">
			<img src = {`https://joeschmoe.io/api/v1/${props.name}`} alt="Avocado"/>
			<h1 className = ""> {props.name} </h1>
			<p> {props.work} </p>
			</div>
		)
} 
export default Avocadolist;