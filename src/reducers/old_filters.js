const initialState = {
    filters: []
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FILTER':
            return {
                ...state,
                filters: state.filters.includes('all') || action.payload === 'all'? [action.payload]: [...state.filters, action.payload]
            }
        case 'DELETE_FILTER':
            return {
                ...state,
                filters: state.filters.filter(item => item !== action.payload)
            }
        default: return state
        
            
    }
}

export default filters;