import { useState, useContext } from "react";
import {useNavigate} from "react-router"
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
export const Jobs = () => {
    const [title, setTitle] = useState("")
    const [textDescription, setTextDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const { authState } = useContext(AuthContext);
    const [imageInput,setImageInput]=useState();
    const [image1,setImage1]=useState()
const navigate=useNavigate()
    
   
    const addJobPoster = () => {
        
        const convertImageToBase64=(file)=>{
            return new Promise((resolve,reject)=>{
                const reader=new FileReader();
                reader.onload=()=>{
                    const base64String=reader.result;
                    resolve(base64String)
                };
                reader.onerror=reject;
                reader.readAsDataURL(file)
    
            })
        }
         convertImageToBase64(imageInput).then((result)=>{
            setImage1(result);

         });
        axios.post("http://localhost:3001/jobs",
            {
                title: title, description: textDescription,
                salary: salary, phoneNumber: phone,
                username: authState.username,
                image1:image1
            }).then(() => {
                navigate('/')

            })


    }
    return (<div>
        <div>Позиция* <input type="text" placeholder="Например: Водопроводчик" onChange={(event) => { setTitle(event.target.value) }}></input></div>
        <p>Описание на длъжността*<textarea rows="6" placeholder="Кратко описание..." onChange={(event) => { setTextDescription(event.target.value) }}></textarea></p>

        <div style={{ float: "left" }}>Заплата: <input type="number" style={{ width: "30px", height: "12px" }}
            onChange={(event) => { setSalary(event.target.value) }} /> лв. </div>
        <br />
        <div>Телефон за контакт*<input type="number" style={{ width: "112px" }} onChange={(e) => { setPhone(e.target.value) }} />
            <button onClick={addJobPoster}>Добави обява</button></div>
<input type="file" onChange={(event)=>{setImageInput(event.target.files[0])}}/>
    </div>)


}