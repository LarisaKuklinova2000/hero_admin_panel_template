import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { heroesFetching, heroesFetched, heroesFetchingError } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.filters,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter.includes('all') || filter.length === 0) {
                console.log('render')
                return heroes
            } else {
                return heroes.filter(item => filter.includes(item.element))
            } 
        }
    )


    const filtredHeroes = useSelector(filteredHeroesSelector)
    // const filtredHeroes = useSelector(state => {
    //     const {heroes} = state.heroes
    //     const {filters} = state.filters
    //     if (filters.includes('all') || filters.length === 0) {
    //         console.log('render')
    //         return heroes
    //     } else {
    //         return heroes.filter(item => filters.includes(item.element))
    //     }
    // })

    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(item => {
            return <HeroesListItem 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                description={item.description} 
                element={item.element}/>
        })
    }

    const elements = renderHeroesList(filtredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;