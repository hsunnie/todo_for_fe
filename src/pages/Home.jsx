import React from 'react';
import Nav from '../components/Nav';

import addtodo from '../img/Type=Add, Size=Large, State=Default.png';
import todoicon from '../img/todo.png';
import doneicon from '../img/done.png';
import notyetchicon from '../img/Property 1=Default.png';
import donechicon from '../img/Property 1=Frame 2610233.png';


import './Home.css';
const Home = () => {
    return(
        <div className='Home'>
            <Nav />
            <div className='todo'>
                <div className='inputcontainer'>
                    <input className="inputtodo" type='text' placeholder="할 일을 입력해주세요" />
                </div>
                <img className="addtodo" src={addtodo} alt="addtodo" />
            </div>
            <div className='todoordoneicon'>
                <img className="todoicon" src={todoicon} alt="todoicon" />
                <img className="doneicon" src={doneicon} alt="doneicon" />
            </div>
            <div className='todolist'>
                <div className='notyet'>
                    <img className="notyetchicon" src={notyetchicon} alt="notyetchicon" />
                    <div className='notyetmemo'>할 일3</div>
                </div>
                <div className='done'>
                    <img className="donechicon" src={donechicon} alt="donechicon" />
                    <div className='donememo'>완료3</div>
                </div>
            </div>
        </div>
    )
}

export default Home