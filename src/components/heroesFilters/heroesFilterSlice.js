import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: []
}

const heroesFiltersSlice = createSlice({
    name: 'heroesFilters',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.filters = state.filters.includes('all') || action.payload === 'all'? [action.payload]: [...state.filters, action.payload]
        },
        deleteFilter: (state, action) => {
            state.filters = !state.filters.includes('all')? state.filters.filter(item => item !== action.payload): [action.payload]
        }
    }
})

const {actions, reducer} = heroesFiltersSlice
export default reducer
export const {
    addFilter,
    deleteFilter
} = actions