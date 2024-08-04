import React from 'react';
import Nav from '../components/Nav';
import './Items.css';

import notyetchicon2 from '../img/Property 1=Default.png';
import memobox from '../img/memo.png';
import modifybtn from '../img/Type=Edit, Size=Large, State=Default.png';
import deletebtn from '../img/Type=Delete, Size=Large, State=Default.png';

const Items = () => {
    return(
        <div className='Items'>
            <Nav />
            <div className='items'>
                <div className='todotitlebox'>
                    <img className="notyetchicon2" src={notyetchicon2} alt="notyetchicon2" />
                    <div className='notyetmemotitle'>비타민 챙겨 먹기</div>
                </div>
                <div className='boxes'>
                    <div className='picturebox'></div>
                    <img className="memobox" src={memobox} alt="memobox" />
                </div>
                <div className='actionbtns'>
                    <img className="modifybtn" src={modifybtn} alt="modifybtn" />
                    <img className="deletebtn" src={deletebtn} alt="deletebtn" />
                </div>
            </div>
        </div>
    )
}

export default Items