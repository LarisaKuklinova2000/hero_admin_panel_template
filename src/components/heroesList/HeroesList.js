import { useSelector } from 'react-redux';

import { filtersList } from "../heroesFilters/heroesFilterSlice";
import { useGetHeroesQuery } from '../../api/apiSlicee';

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

const HeroesList = () => {

    const {
        data: heroes = [],
        isLoading,
        isError
    } = useGetHeroesQuery();

    const filteredHeroes = (filter, heroes) => {
        if (filter.includes('all') || filter.length === 0) {
            return heroes
        } else {
            return heroes.filter(item => filter.includes(item.element))
        } 
    }

    const filters = useSelector(filtersList)

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
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

    const elements = renderHeroesList(filteredHeroes(filters, heroes));
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;