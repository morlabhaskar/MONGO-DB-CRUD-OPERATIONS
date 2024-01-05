// import logo from './logo.svg';
import './App.css';

import Forms from './form';
import Form1 from './form1';
import Datalist from './getdata';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Editform from './editform';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
              <Route path="/form" element={<Forms/>} />
              <Route path="/form1" element={<Form1/>} />
              {/* <Route path="/login_to_backend" element={<Login/>} /> */}
              <Route path="/" element={<Datalist/>} />
              <Route path="/editform/:id" element={<Editform />}/>
              {/* <Route path="/updatedata/:id" element={<Updatedata />}/> */}
              
          </Routes>
        </BrowserRouter>

      {/* <Forms/> */}
      {/* <Form1 />  */}
     {/* <Datalist/> */}
     
      
    </div>
  );
}

export default App;





// // import logo from './logo.svg';
// // import './App.css';
// // import CompA from './components/compA';
// // import CompB from './components/compB';
// // import CompC from './components/compC';
// // import Classcomp from './components/classcomp';
// // import Image from './components/img';
// // import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Person from './components/person';
// import Students from './components/studentslist';
// // import Shop from './components/kiranashop';
// // import Click from './components/clickevent';
// // import Imageover from './components/imageOver';
// // import Hooks from './components/hooks';
// // import Bulb from './components/bulb';
// // import Fruitcutting from './components/fruit';
// // import Background from './components/background';
// // import Calculator from './components/calculator';
// import Form from './components/form';
// import Form1 from './components/form1';
// import Login from './components/login_to_backend';
// import Datalist from './components/getmethod';
// import Editform from './components/editform';
// function App() {
//   return (
   
//     // <div className="App">
//     //   <h2>This is Front end</h2>
//     //   <CompA/>
//     //   <CompB/>
//     //   <CompC/> 
//     //   <Classcomp/>          <Route path="/compA" element={<CompA />} />

//     <div>
//       {/* <h1>This is Home Page</h1> */}
//       {/* <menu /> */}
//         <Routes>
//           <Route path="/compA" element={<CompA />} />
//           <Route path="/compB" element={<CompB />} />
//           <Route path="/compC" element={<CompC />} />
//           <Route path="/img" element={<Image />} />
//           <Route path="/person" element={<Person />} />
//           <Route path="/studentlist" element={<Students/>} />
//           <Route path="/kiranashop" element={<Shop/>} />
//           <Route path="/clickevents" element={<Click/>} />
//           <Route path="/imageOver" element={<Imageover/>} />
//           <Route path="/hooks" element={<Hooks/>} />
//           <Route path="/bulb" element={<Bulb/>} />
//           <Route path="/fruit" element={<Fruitcutting/>} />
//           <Route path="/background" element={<Background/>} />
//           <Route path="/calculator" element={<Calculator/>} />
//           <Route path="/form" element={<Form/>} />
//           <Route path="/form1" element={<Form1/>} />
//           <Route path="/login_to_backend" element={<Login/>} />
//           <Route path="/getmethod" element={<Datalist/>} />
//           <Route path="/editform/:id" element={<Editform/>} />

//         </Routes>
   
//     </div>
//   );
// }

// export default App;

// import Form1 from "./components/form1";
// import Datalist from "./getmethod";
// function App(){
//   return(
//     <div>
//       <Form1/>
//       <Datalist/>
//     </div>
//   )
//   };
// export default App;
