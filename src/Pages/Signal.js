import React from 'react'

import jet from "../Images/logo.png"

export default function Home() {
    let kf = 0

    let eror = (e) => {
        e.preventDefault()
        alert("Ошибка!  Баланс не был пополнен на 25$ Пополните свой игровой счет и попробуйте снова")
    }

    return (
        <>
            <div className="ota_home">
                <div className="top_home">
                    <h1>Добро пожаловать в БОТ команды "Raffl"</h1>
                    <h2> Мы рады вас видеть</h2>
                </div>
                <div className="center_home">
                    <div className="center_home_jet">
                        <img src={jet} alt="jet" />
                    </div>
                    <h1> X {kf} </h1>
                    <button className='center_home_btn' onClick={eror} >СЛЕДУЮЩИЙ КОЭФФИЦИЕНТ</button>
                    <p>Нажмите на СЛЕДУЮЩИЙ КОЭФФИЦИЕНТ чтобы получить сигнал</p>
                </div>
                <div className="bottom_home">
                    <h3>
                        Команда "Raffl" желает вам удачных игр 😉
                    </h3>

                    <h5>
                        Спасибо за сотрудничество
                    </h5>
                </div>
            </div>
        </>
    )
}
