import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Avocado.css';
import 'tachyons';
import Avocadolist from './Avocadolist';




class Avocado extends Component{

	constructor(){
		super();
		this.state = {
			name: "Welcome To My First ReactJs Project  "
		}
	}
	namechange(){
		this.setState({
			name:"Good Work Rohit"
		})
	}

	render(){
	const avocadolistarry = [

			{
				id:1,
				name:"Rohit",
				work:"Scientist"	
			},
			{
				id:2,
				name:"Rushii",
				work:"Nurologist"
			},	
			{
				id:3,
				name:"Ronit",
				work:"Space Research"
			},
			{
				id:4,
				name:"Ronny",
				work:"Data Manupulator"
			}
				
	]
	const arrayavocadocard = avocadolistarry.map( (Avocadocard,i) => {
		return <Avocadolist key={i} id = {avocadolistarry[i].name} 
 				          name = {avocadolistarry[i].name}
 			              work = {avocadolistarry[i].work}/>

	})
	// map(callback(currentvalue,index,areay) arg)
    


	return (
		<div className = 'mainpage tc'>
			<h1>{this.state.name}</h1>
 			    	{arrayavocadocard}	
			<button onClick={()=> this.namechange()}> Click </button>
			</div>
			)
	}
}
	
export default Avocado;