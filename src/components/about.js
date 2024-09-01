import React from 'react';


function About() {
    return (
        <>
        <div className='top'>
            <div className='top-inner'>
            <img src={process.env.PUBLIC_URL + 'img/chef_about.png'}/>
            <div className='right'>
            <img src={process.env.PUBLIC_URL + 'img/right1.png'}/>
            <img src={process.env.PUBLIC_URL + 'img/right2.png'}/>
            </div>
            <div className='paragraph'>
                <h2>GLOBAL BUSINESS</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed
                    do eiusmod tempor insididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>
            </div>
        </div>
        <div className='box_all'>
            <div className='box-left'>
                <div id='box' className='brown'>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed
                    do eiusmod tempor insididunt ut
                    labore et dolore magna aliqua.
                    </p>
                </div>
                <div id='box' className='orange'>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed
                    do eiusmod tempor insididunt ut
                    labore et dolore magna aliqua.
                    </p>
                </div>
                <div id='box' className='brown'>3</div>
                </div>
                <div className='box-left'>
                    <div id='box' className='orange'>4</div>
                    <div id='box' className='brown'>5</div>
                    <div id='box' className='orange'> 6</div>
                </div>
                <div className='box-right'>7</div>
            </div>
        <div className='footer'>
            <ul>
                <li>법적고지</li>
                <li>|</li>
                <li>이메일무단수집거부</li>
                <li>|</li>
                <li>이용약관</li>
                <li>|</li>
                <li>개인정보취급방침</li>
                <li>|</li>
                <li>고객센터</li>
                <li>|</li>
                <li>입찰공고</li>
            </ul>
        </div>
        </>
    )
}

export default About;