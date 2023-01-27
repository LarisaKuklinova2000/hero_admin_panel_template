// import { createReducer } from "@reduxjs/toolkit"
// import {
//     heroesFetching,
//     heroesFetched,
//     heroFatched,
//     heroesFetchingError,
//     deleteHero
// } from '../actions'

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle'
// }

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading'
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle'
//             state.heroes = action.payload
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error'
//         })
//         .addCase(heroFatched, (state, action) => {
//             state.heroes.push(action.payload)
//         })
//         .addCase(deleteHero, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload)
//         })
//         .addDefaultCase(() => {})
// })

// export default heroes;