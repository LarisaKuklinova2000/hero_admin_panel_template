import { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { heroFatched } from '../heroesList/heroesSlice';
import { useDispatch } from 'react-redux';

const HeroesAddForm = () => {

    const [name, setName] = useState('')
    const [descr, setDescr] = useState('')
    const [elem, setElem] = useState('')
    const {request} = useHttp()
    const dispatch = useDispatch()

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={(e) => setDescr(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={(e) => setElem(e.target.value)}>
                    <option disabled >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault()
                    request("http://localhost:3001/heroes", 'POST', JSON.stringify({id: Math.floor(Math.random() * 10000), name: name, description: descr, element: elem}))
                        .then(res => dispatch(heroFatched(res)))
                }}
                >Создать</button>
        </form>
    )
}

export default HeroesAddForm;