import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import filters from '../components/heroesFilters/heroesFilterSlice';
import { apiSlice } from '../api/apiSlicee';


const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {filters, [apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;