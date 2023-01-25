export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroFatched = (hero) => {
    return {
        type: 'HEROES_ADD',
        payload: hero
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHero = (id) => {
    return {
        type: 'DELETE_HERO',
        id
    }
}

export const addFilter = (filter) => {
    return {
        type: 'ADD_FILTER',
        payload: filter
    }
}

export const deleteFilter = (filter) => {
    return {
        type: 'DELETE_FILTER',
        payload: filter
    }
}