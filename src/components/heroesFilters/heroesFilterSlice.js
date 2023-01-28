import { createSelector } from "@reduxjs/toolkit";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState()

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            action.payload.value === 'all'?
                filtersAdapter.setAll(state, [action.payload]):
                filtersAdapter.removeOne(state, 1); filtersAdapter.addOne(state, action.payload)

        },
        deleteFilter: (state, action) => {
                filtersAdapter.removeOne(state, action.payload)
        }
    }
})

const {actions, reducer} = filtersSlice
export default reducer

const filtersArr = filtersAdapter.getSelectors(state => state.filters).selectAll

export const filtersList = createSelector(
    filtersArr,
    arr => arr.map(item => item = item.value)
)

export const activeFilters = createSelector

export const {
    addFilter,
    deleteFilter
} = actions