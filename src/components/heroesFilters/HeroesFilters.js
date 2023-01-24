import { useSelector } from "react-redux";
import { addFilter, deleteFilter } from "../../actions";
import { useDispatch } from "react-redux";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом


const HeroesFilters = () => {

    const {filters} = useSelector(state => state.filters)
    const dispatch = useDispatch()

    const btnsData = [
        {class: 'btn-outline-dark', name: 'Все', value:'all'},
        {class: 'btn-danger', name: 'Огонь', value:"fire"},
        {class: 'btn-primary', name: 'Вода', value:"water"},
        {class: 'btn-success', name: 'Ветер', value:"wind"},
        {class: 'btn-secondary', name: 'Земля', value:"earth"}];

    const buttons = btnsData.map((item, i) => {
        const active = filters.includes(item.value)
        const clazz = active? 'active': null

        return <button 
            key={i} 
            className={`btn ${item.class} ${clazz}`}
            onClick={() => {
                filters.includes(item.value)? dispatch(deleteFilter(item.value)): dispatch(addFilter(item.value))
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