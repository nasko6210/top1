import { useState, useContext } from 'react';
import {useNavigate} from "react-router-dom"

import axios from 'axios';
import { AuthContext } from '../helpers/AuthContext';
export const Cars = () => {
    const navigate=useNavigate()
    const { authState } = useContext(AuthContext);
    let [brand, setBrand] = useState(),
        [model, setModel] = useState(),
        [description, setDescription] = useState(),
        [price, setPrice] = useState(),
        [compartment, setCompartment] = useState("sedan"),
        [eurostandart, setEurostandart] = useState(1),
        [engine, setEngine] = useState("benzin"),
        [transmission, setTransmission] = useState("ruchna"),
        [manafacture, setManafacture] = useState(),
        [mileage, setMileage] = useState(),
        [power, setPower] = useState(),
        [doors, setDoors] = useState(),
        [phoneNumber, setPhoneNumber] = useState(),
        [image1, setImage1] = useState(),
        [image2, setImage2] = useState(),
        [image3, setImage3] = useState(),
        [image4, setImage4] = useState();

    const imageHandler = (files) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {

            formData.append("imageToUpload", files[i])
        }


        axios.post("http://localhost:3001/uploadImage", formData).then((result) => {

            for(let i=0; i<result.data.length; i++){
                switch(i){
                    case 0:setImage1(result.data[i].filename);break;
                    case 1:setImage2(result.data[i].filename);break;
                    case 2:setImage3(result.data[i].filename);break;
                    case 3:setImage4(result.data[i].filename);break;
                    
                }
            }
        }).catch((err) => {
            console.log(err.response.data)
        })
    }


    const addCar = () => {

        axios.post("http://localhost:3001/cars", {
            username: authState.username, brand: brand, model: model, description: description, price: price,
            compartment: compartment, eurostandart: eurostandart, engine: engine, transmission: transmission,
            manafacture: manafacture, mileage: mileage, power: power, doors: doors, phoneNumber: phoneNumber,
            image1:image1, image2:image2, image3:image3,image4:image4
        }).then(() => {
                        setImage1();setImage2();setImage3();setImage4();
        navigate("/")
                    })


    }

    return (<div>

        <div>Марка*<input type="text" placeholder="Audi" onChange={(event) => { setBrand(event.target.value) }}></input></div>
        <p>Модел*<input type="text" placeholder='A7' onChange={(event) => { setModel(event.target.value) }} /></p>
        <textarea rows="5" placeholder='Кратко описание...' onChange={(event) => { setDescription(event.target.value) }} />
        <p>Цена: <input type="text" style={{ width: "60px" }} onChange={(e) => { setPrice(e.target.value) }} />лв.</p>


        <input type='file' multiple style={{ "display": "block" }}
            onChange={(e) => { imageHandler(e.target.files) }} />

        <br />

        <select value={compartment} onChange={(e) => { setCompartment(e.target.value) }}>
            <option value="sedan">Седан</option>
            <option value="hechbek">Хечбек</option>
            <option value="kombi">Комби</option>
            <option value="kabrio">Кабрио</option>
            <option value="jeep">Джип</option>
            <option value="pikap">Пикап</option>
            <option value="van">Ван</option>
        </select>
        <select value={eurostandart} onChange={(e) => { setEurostandart(e.target.value) }}>
            <option value="1">Евростандарт 1</option>
            <option value="2">Евростандарт 2</option>
            <option value="3">Евростандарт 3</option>
            <option value="4">Евростандарт 4</option>
            <option value="5">Евростандарт 5</option>
            <option value="6">Евростандарт 6</option>
        </select>

        <select value={engine} onChange={(e) => { setEngine(e.target.value) }}>
            <option value="benzin">Бензин</option>
            <option value="dizel">Дизел</option>
            <option value="gazbenzin">Газ/Бензин</option>
            <option value="metanbenzin">Метан/Бензин</option>
            <option value="metan">Метан</option>
            <option value="hibrid">Хибрид</option>
            <option value="elektrichestvo">Електричество</option>
        </select>
        <select value={transmission} onChange={(e) => { setTransmission(e.target.value) }}>
            <option value="ruchna">Ръчна кутия</option>
            <option value="avtomatichna">Автоматина кутия</option>
            <option value="poluavtomatichna">Полуавтоматична кутия</option>
        </select>
        <p>Година производство* <input type="number" placeholder='г.' onChange={(e) => { setManafacture(e.target.value) }} /></p>
        <p>Пробег*<input type="number" placeholder='км.' onChange={(e) => { setMileage(e.target.value) }} /></p>
        <p>Мощност (к.с)<input type="number" onChange={(e) => { setPower(e.target.value) }} /></p>
        <p>Брой врати<input type="number" onChange={(e) => { setDoors(e.target.value) }} /></p>
        <p>Телефон за контакт: <input type="number" onChange={(e) => { setPhoneNumber(e.target.value) }} /></p>
        <button onClick={addCar}>Добави обява</button>


    </div>)
}