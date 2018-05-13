export default function fetch(state = {
	fetching: false,
	fetched: false,
	data: [],
	error: null
}, action){
	switch(action.type){
		case 'FETCH_GAMES_START' : {
			return {...state, fetching: true}
		}
		case 'FETCH_GAMES_SUCESSFUL' : {
			return {...state, fetching: false, fetched: true, data: action.payload}
		}
		case 'FETCH_GAMES_ERROR' : {
			return {...state, fetching: false, fetched: false, error: action.payload}
		}
		default : {
			return {...state}
		}
	}
}