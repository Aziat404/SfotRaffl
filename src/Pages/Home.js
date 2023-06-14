import React from 'react'

// import header from "../Images/fon4.png"
import header from "../Images/logo.png"
import { BsTelegram } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'




export default function Home() {

    // let SignalPage = useNavigate()

    // const [inputData, setInputData] = useState({
    //     key: "",
    //     password: ""
    // })



    return (
        <>
            <div className="wrapper">
                <div className="home_header">
                    <img src={header} alt="header" />
                </div>
                <div className="home_body">
                    <div className="body_top">
                        <h1>LUCKY JET SOFT   v1.0</h1>
                        <h1>Raffl team SOFT</h1>
                    </div>
                    <div className="body_center">
                        <form >
                            <label htmlFor="key">Key:</label> <br />
                            <input type="text" id='key' name='key' placeholder='Введите ключ' /> <br /> <br />
                            <label htmlFor="password">Password:</label> <br />
                            <input type="password" id='password' name='password' placeholder='Введите пароль' /> <br /> <br /> <br />
                            <NavLink to={"/signals"} className='formbtnn' >ДОСТУП</NavLink>
                        </form>
                    </div>
                </div>
                <div className="body_bottom">
                    <h3> < BsTelegram /> Telegram:  <a href="https://t.me/Raffl_21"> @Raffl_21</a> </h3>
                </div>
            </div>
        </>
    )
}
