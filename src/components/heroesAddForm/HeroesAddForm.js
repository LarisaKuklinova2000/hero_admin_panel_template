import { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from 'react-redux';
import { useCreateHeroMutation } from "../../api/apiSlicee";

const HeroesAddForm = () => {

    const [name, setName] = useState('')
    const [descr, setDescr] = useState('')
    const [elem, setElem] = useState('')

    const [createHero, {isLoading}] = useCreateHeroMutation()

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
                    createHero({id: Math.floor(Math.random() * 10000), name: name, description: descr, element: elem}).unwrap();
                }}
                >Создать</button>
        </form>
    )
}

export default HeroesAddForm;