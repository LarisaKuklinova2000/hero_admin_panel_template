import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';
import { filtersList } from "../heroesFilters/heroesFilterSlice";

const heroAdapter = createEntityAdapter();

const initialState = heroAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
})

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    () => {
        const {request} = useHttp()
        return request('http://localhost:3001/heroes')
    }
)

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroFatched: (state, action) => {heroAdapter.addOne(state, action.payload)},
        deleteHero: (state, action) => {heroAdapter.removeOne(state, action.payload)}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle'
                heroAdapter.setAll(state, action.payload)
            })
            .addCase(fetchHeroes.rejected, state => {state.heroesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = heroesSlice

export default reducer

const {selectAll} = heroAdapter.getSelectors(state => state.heroes)

export const filteredHeroesSelector = createSelector(
    filtersList,
    selectAll,
    (filter, heroes) => {
        if (filter.includes('all') || filter.length === 0) {
            return heroes
        } else {
            return heroes.filter(item => filter.includes(item.element))
        } 
    }
)

export const {
    heroFatched,
    deleteHero
} = actions