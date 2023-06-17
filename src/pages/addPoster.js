import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";
export function AddPoster() {
    let [textDescription, setTextDescription] = useState('')
    let [title, setTitle] = useState('');
    let category='';
  let selected='';
  const {authState}=useContext(AuthContext);

    const dropdowns = document.querySelectorAll('.dropdownCategory');
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
         selected = dropdown.querySelector('.selected');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li')

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open')
        })
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText= option.innerText
                                               select.classList.remove('select-clicked')
                caret.classList.remove('caret-rotate')
                menu.classList.remove('menu-open')
                options.forEach(option => {
                    option.classList.remove('active')
                })
                option.classList.add('active')
            })

        })
              
    })
    const addPoster = () => {
    category=selected.innerText;
        
    axios.post("http://localhost:3001/posters",{title:title,category:category,description:textDescription,username:authState.username}).then(()=>{
        console.log("added a post")
        
    })

    }
    const renderSwitch=(category)=>{
        switch(category){
            case 'Работа':console.log("rabota");break;
            case 'Електроника':console.log("elektronika");break;
            case 'Автомобили':console.log("awtomobili");break;
            default: return "nbeshto";
        }
    }
    return (<>

        <div>ДОБАВИ ОБЯВА</div>
        <div>Заглавие*</div>
        <input type="text" placeholder="Например: iPhone 11" onChange={(event)=>{setTitle(event.target.value)}}></input>
        <div className="dropdownCategory">
            <div className="select">
                <span className="selected">Работа</span>
                <div className="caret"></div>
            </div>
            <ul className="menu">
                <li>Работа</li>
                <li>Електроника</li>
                <li>Автомобили</li>
            </ul>
        </div>
        {renderSwitch(category)}
        <p>Описание на длъжността</p>
        <div>
            <textarea rows="11" placeholder="Кратко описание..." onChange={(event) => { setTextDescription(event.target.value) }}></textarea>

        </div>
        <button onClick={addPoster}>Добави обява</button>
    </>
    )
}