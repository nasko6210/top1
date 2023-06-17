import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

export const Electronics = () => {
    const { authState } = useContext(AuthContext);
    const [title, setTitle] = useState(),
        [subCategory, setSubCategory] = useState("computers"),
        [description, setDescription] = useState(),
        [price, setPrice] = useState(),
        [phoneNumber, setPhoneNumber] = useState();

const addElectronic=()=>{
    axios.post("http://localhost:3001/electronics",{username:authState.username,title:title,subCategory:subCategory,description:description,
    price:price, phoneNumber:phoneNumber}).then(()=>{
        console.log("added electronic")
    })
}
    return (<div>
        <p>Заглавие* <input type="text" placeholder="Например iPhone 11 с гаранция" onChange={(e) => { setTitle(e.target.value) }} /></p>
        <select value={subCategory} onChange={(e) => { setSubCategory(e.target.value) }}>
            <option value="computers">Компютри</option>
            <option value="computersParts">Компютърни аксесоари,части</option>
            <option value="tablets">Таблети,четци</option>
            <option value="phones">Телефони</option>
            <option value="phoneParts">Аксесоари,части за телефони</option>
            <option value="tvs">Телевизори</option>
            <option value="audio">Аудио техника</option>
            <option value="household">Домакински уреди</option>
            <option value="airconditioning">Климатици</option>
            <option value="photo">Фото,видео</option>
            <option value="navigation">Навигация</option>
            <option value="other">Друго</option>
        </select>
        <textarea rows="5" placeholder="Кратко описание..." onChange={(e) => { setDescription(e.target.value) }} />
        <p>Цена:<input style={{width:"40px"}}type="number" onChange={(e) => { setPrice(e.target.value) }} />лв.</p>
        <p>Телефон за контакт: <input type="number" onChange={(e)=>{setPhoneNumber(e.target.value)}}/></p>
        <button onClick={addElectronic}>Добави обява</button>
    </div>)
}
//import { useState, useContext } from 'react';
//
//import axios from 'axios';
//import { AuthContext } from '../helpers/AuthContext';
//export const Cars = () => {
//    const { authState } = useContext(AuthContext);
//    let [brand, setBrand] = useState(),
//        [model, setModel] = useState(),
//        [description, setDescription] = useState(),
//        [price, setPrice] = useState(),
//        [compartment, setCompartment] = useState("sedan"),
//        [eurostandart, setEurostandart] = useState(1),
//        [engine, setEngine] = useState("benzin"),
//        [transmission, setTransmission] = useState("ruchna"),
//        [manafacture, setManafacture] = useState(),
//        [mileage, setMileage] = useState(),
//        [power, setPower] = useState(),
//        [doors, setDoors] = useState();
//
//    const addCar = () => {
//
//        axios.post("http://localhost:3001/cars", {
//            username: authState.username, brand: brand, model: model, description: description, price: price, compartment: compartment,
//            eurostandart: eurostandart, engine: engine, transmission: transmission, manafacture: manafacture, mileage: mileage, power: power, doors: doors
//        }).then(() => {
//            console.log("addec car")
//        })
//
//
//    }
//    return (<div>
//
//        <div>Марка*<input type="text" placeholder="Audi" onChange={(event) => { setBrand(event.target.value) }}></input></div>
//        <p>Модел*<input type="text" placeholder='A7' onChange={(event) => { setModel(event.target.value) }} /></p>
//        <p>Описание*<textarea rows="5" placeholder='Кратко описание...' onChange={(event) => { setDescription(event.target.value) }} /></p>
//        <p>Цена: <input type="text" style={{ width: "60px" }} onChange={(e) => { setPrice(e.target.value) }} /></p>
//        <p>Купе*<select value={compartment} onChange={(e) => { setCompartment(e.target.value) }}>
//            <option value="sedan">Седан</option>
//            <option value="hechbek">Хечбек</option>
//            <option value="kombi">Комби</option>
//            <option value="kabrio">Кабрио</option>
//            <option value="jeep">Джип</option>
//            <option value="pikap">Пикап</option>
//            <option value="van">Ван</option>
//        </select></p>
//        <p>Евростандарт<select value={eurostandart} onChange={(e) => { setEurostandart(e.target.value) }}>
//            <option value="1">Евро 1</option>
//            <option value="2">Евро 2</option>
//            <option value="3">Евро 3</option>
//            <option value="4">Евро 4</option>
//            <option value="5">Евро 5</option>
//            <option value="6">Евро 6</option>
//        </select>
//        </p>
//        <p>Двигател*<select value={engine} onChange={(e) => { setEngine(e.target.value) }}>
//            <option value="benzin">Бензин</option>
//            <option value="dizel">Дизел</option>
//            <option value="gazbenzin">Газ/Бензин</option>
//            <option value="metanbenzin">Метан/Бензин</option>
//            <option value="metan">Метан</option>
//            <option value="hibrid">Хибрид</option>
//            <option value="elektrichestvo">Електричество</option>
//        </select></p>
//        <p>Скоростна кутия*<select value={transmission} onChange={(e) => { setTransmission(e.target.value) }}>
//            <option value="ruchna">Ръчна</option>
//            <option value="avtomatichna">Автоматина</option>
//            <option value="poluavtomatichna">Полуавтоматична</option>
//        </select></p>
//        <p>Година производство* <input type="number" placeholder='г.' onChange={(e) => { setManafacture(e.target.value) }} /></p>
//        <p>Пробег*<input type="number" placeholder='км.' onChange={(e) => { setMileage(e.target.value) }} /></p>
//        <p>Мощност (к.с)<input type="number" onChange={(e) => { setPower(e.target.value) }} /></p>
//        <p>Брой врати<input type="number" onChange={(e) => { setDoors(e.target.value) }} /></p>
//        <button onClick={addCar}>Добави обява</button>
//    </div>)
//}