import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import DisposedList from './components/DisposeList';
import PendingList from './components/PendingList';
import GenReport from './components/GenReport';
import AddCase from './components/AddCase';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

function App() {
  
  
  
  return (
  //   <>
  //  {false ? <>
  //   <Navbar/>
  //     <Routes>
  //       <Route path='/' element={<Home/>}></Route>
  //         <Route path='disposedList' element={<DisposedList/>}></Route>
  //         <Route path='pendingList' element={<PendingList/>}></Route>
  //         <Route path='report' element={<GenReport/>}></Route>
  //         <Route path='addCase' element={<AddCase/>}></Route>
        
  //     </Routes>
  //  </> :<>
  //  {location.pathname === '/' || location.pathname === '/register' ? 
  //     <Routes>
  //       <Route path='/' element={<Login/>}></Route>
  //       <Route path='register' element={<Register/>}></Route>
  //     </Routes>
  //     : <p>Unauthorized path<button onClick={()=> navigate(-1)}>Back</button></p>
  //   }
   
  //  </>
  //  }  
  //   </>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* public routes */}
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          {/* <Route path='unauthorized' element={<Unauthorized/>}></Route> */}

          {/* protected routes*/}
          <Route element={<RequireAuth/>}>
            
            <Route path='/' element={<Home/>}></Route>
            <Route path='disposedList' element={<DisposedList/>}></Route>
            <Route path='pendingList' element={<PendingList/>}></Route>
            <Route path='report' element={<GenReport/>}></Route>
            <Route path='addCase' element={<AddCase/>}></Route>
          </Route>
           {/* catch all*/}
           {/* <Route path='*' element={<Missing />}></Route> */}
        </Route>
      </Routes>
  );
}

export default App;
