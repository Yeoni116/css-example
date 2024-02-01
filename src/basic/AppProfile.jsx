import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import Backgr from './components/Backgr';

function AppProfile() {
  return (
  <>
    <Backgr>
      <Avatar 
      image='https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F60%2F201506011137165771.jpg'
      name='Joe Biden'
      title='미국 대통령'/>
      <p>안녕하세요</p>
    </Backgr>

    <Profile 
      image='https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F60%2F201506011137165771.jpg'
      name='Joe Biden'
      title='미국 대통령'
      isNew={true}
    ></Profile>

    <Profile 
      image='https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F7%2F201804241120041041.jpg'
      name='Donald Trump'
      title='전 미국 대통령'
    />
    <Profile 
      image='https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F47%2F201806201044501851.jpg'
      name='Nikki Haley'
      title='미국 정치인'
    />

  </>
  );
}

export default AppProfile;
