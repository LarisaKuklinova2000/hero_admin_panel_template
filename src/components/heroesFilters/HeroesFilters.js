import { useSelector } from "react-redux";
import { addFilter, deleteFilter } from "../heroesFilters/heroesFilterSlice";
import { useDispatch } from "react-redux";
import { filtersList } from "../heroesFilters/heroesFilterSlice";

const HeroesFilters = () => {

    const filters = useSelector(filtersList)
    const dispatch = useDispatch()

    const btnsData = [
        {id: 1, class: 'btn-outline-dark', name: 'Все', value:'all'},
        {id: 2, class: 'btn-danger', name: 'Огонь', value:"fire"},
        {id: 3, class: 'btn-primary', name: 'Вода', value:"water"},
        {id: 4, class: 'btn-success', name: 'Ветер', value:"wind"},
        {id: 5, class: 'btn-secondary', name: 'Земля', value:"earth"}];

    const buttons = btnsData.map((item, i) => {
        const active = filters.includes(item.value)
        const clazz = active? 'active': null

        return <button 
            key={i} 
            className={`btn ${item.class} ${clazz}`}
            onClick={() => {
                filters.includes(item.value)? dispatch(deleteFilter(item.id)): dispatch(addFilter(item))
            }}
            >{item.name}</button>
    })

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;