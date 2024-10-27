import React from 'react';
import Menu from '../Menu';

  function IconTitle() {
      return (
        <>
        <span>"WHAT'S FOR DINNER"</span>
        <p>FINALLY HAS AN <br/>EASY ANWSER</p>
        </>
      )
  }
  
  function IconBox(image) {  
    return (
      <div className='icon-box'>
        <div className='box'>
          <img src = {image}/>
          <p>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna 
            aliqua.
          </p>
        </div>
      </div>
    )
  }
  
  const icons = [
    {id: 1, image: process.env.PUBLIC_URL + 'img/icon1.png'},
    {id: 2, image: process.env.PUBLIC_URL + 'img/icon2.png'},
    {id: 3, image: process.env.PUBLIC_URL + 'img/icon3.png'},
    {id: 4, image: process.env.PUBLIC_URL + 'img/icon4.png'}
  ];
  
  function Chefs() {
    return(
      <div className='chefs-inner'>
        <div className='box'>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <img src={ process.env.PUBLIC_URL + 'img/chef.png'}/>
      </div>
    )
  }

  const Home = () => {
    return (
        <div className='App'>
          <Menu />
          <div className='App-main'>
            <img src={process.env.PUBLIC_URL + 'img/main.png'}/>
          </div>
          <div className='App-icon-title'>
          <IconTitle />
          </div>
          <div className='App-icon-box'>
          {icons.map(icon => (<IconBox key={icon.id} image={icon.image}/>))}
          </div>
          <div className='App-chef'>
            <Chefs/>
          </div>
        </div>
    );
  }

  export default Home;