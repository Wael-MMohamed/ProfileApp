import Profile from './profile/Profile';


function App() {
    const handleName = e =>{
    e.preventDefault();
    alert('you are logged in');
    };

    const imgStyle = {
      hight : '300px',
      width : '300px',
      borderRadius : "50%"
    }

  return (
    <div className="App">
      <Profile fullName='Wael Mohamed' bio='Junior Front-end Developer' handleName={handleName}>
        <img src='/aot.jpg' alt="attack on titan" style={imgStyle} className="img-thumbnail"/>
      </Profile>
    </div>
  );
}

export default App;
