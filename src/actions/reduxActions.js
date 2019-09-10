import axios from 'axios';
export function fetchData(){
	return function(dispatch){
		dispatch({type:'FETCH_GAMES_START'})
		axios.get('http://starlord.hackerearth.com/gamesarena')
		.then(res => {
			dispatch({type: 'FETCH_GAMES_SUCESSFUL', payload: res.data})
		})
		.catch(err => {
			dispatch({type: 'FETCH_GAMES_ERROR', payload: err})
		})
	}
} 
