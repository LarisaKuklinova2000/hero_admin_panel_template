// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
//     filters: []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HEROES_ADD':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         case 'DELETE_HERO':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.id)
//             }
//         case 'ADD_FILTER':
//             return {
//                 ...state,
//                 filters: state.filters.includes('all') || action.payload === 'all'? [action.payload]: [...state.filters, action.payload]
//             }
//         case 'DELETE_FILTER':
//             return {
//                 ...state,
//                 filters: state.filters.filter(item => item !== action.payload)
//             }
//         default: return state
        
            
//     }
// }

// export default reducer;