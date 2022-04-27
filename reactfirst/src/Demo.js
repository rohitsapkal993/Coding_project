import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) =>{
	return <div className = "maindiv_style">
		<h1> Hello {name} </h1>
		   <p> Hello This is my First Try for React Js </p>
				</div>
}

export default Demo;