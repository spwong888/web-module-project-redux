import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions';

const initialState = {
    favorites: [{title: 'Movie', id: 1}, {title: 'Movie', id: 2}], 
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default favoritesReducer;