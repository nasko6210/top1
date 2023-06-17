import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

export function MyMenu() {
  const { authState,setAuthState } = useContext(AuthContext);
 
  let navigate = useNavigate()
  function dropMenuFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('show')) {
          dropdowns[i].classList.remove('show')
        }
      }
    }
  }

  return (
    <div className="dropdown">
      <button onClick={dropMenuFunction} className="dropbtn">Моят Профил</button>
      <div id="myDropdown" className="dropdown-content">


        {!authState.status ? (
        <>
          <a onClick={() => { navigate("/login") }}>Вход в TOP1</a>
          <a onClick={() => { navigate("/register") }}>Нова регистрация</a>
        </>
        ) : (<button onClick={()=>{localStorage.removeItem("accessToken");   setAuthState({username:"",id:0,status:false}) }}>Logout</button>)
        }
        



      </div>

    </div>

  )
}