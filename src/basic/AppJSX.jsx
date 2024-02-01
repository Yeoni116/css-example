import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나', '요거트']
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>name</p>
      <p>{name}</p>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
      <img
        style={{width: '200px', hieght: '200px'}} 
        src='https://www.walkerhill.com/assets/darakhyu/global/images/etc/pic_brandYeosu01.jpg' alt='nature'/>
    </>
  );
}

export default AppJSX;
