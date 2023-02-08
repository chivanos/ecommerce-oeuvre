import React from 'react';
import ReactDOM from 'react-dom/client';
import AppOuevraClient from './Oeuvra/AppOuevraClient';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Oeuvra/Login';
import Register from './Oeuvra/Register';
import './Oeuvra/Ouevra.css';
import FillingView from './Oeuvra/Admin/Filling/FillingView';
import LoginClient from './Oeuvra/LoginClient';
import RegisterClient from './Oeuvra/RegisterClient';
import AppOeuvra from './Oeuvra/AppOuevra';
import HelpClient from './Oeuvra/ComponentPropsClient/HelpClient';
import OuevraAdmin from './Oeuvra/Admin/OuevraAdmin';
import Protected from './Oeuvra/Protected';
import AdminProfile from './Oeuvra/Admin/First/AdminProfile';
import Contact from './Oeuvra/Contact';
import MailBox from './Oeuvra/Admin/First/MailBox';
import ContemporaryAdmin from './Oeuvra/Admin/First/ContemporaryAdmin';
import SettingAdmin from './Oeuvra/Admin/First/SettingAdmin';
import HelpAdmin from './Oeuvra/Admin/First/HelpAdmin';
import RoyalAdmin from './Oeuvra/Admin/First/RoyalAdmin';
import AddCont from './Oeuvra/Admin/Filling/Contemporary/AddCont';
import AddRoy from './Oeuvra/Admin/Filling/Royal/AddRoy';
import AddMainCont from './Oeuvra/Admin/Filling/Contemporary/AddMainCont';
import AddMainRoy from './Oeuvra/Admin/Filling/Royal/AddMainRoy';
import ViewDetail from './Oeuvra/Admin/First/ViewDetail';
import ViewDetailCont from './Oeuvra/Admin/First/ViewDetailCont'
import ViewDetailRoy from './Oeuvra/Admin/First/ViewDetailRoy'
import UpdateMainCont from './Oeuvra/Admin/Filling/Contemporary/UpdateMainCont'
import UpdateMainRoy from './Oeuvra/Admin/Filling/Royal/UpdateMainRoy'
import RoyalTresuares from './Oeuvra/ComponentPropsClient/Page/RoyalTresuares'
import ContempArt from './Oeuvra/ComponentPropsClient/Page/ContempArt'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path={'/'} element={<AppOuevraClient />}/>
      <Route path={'/signinclient'} element={<LoginClient />}/>
      <Route path={'/signupclient'} element={<RegisterClient />}/>
      <Route path={'/adminhome'} element={<AppOeuvra />}/>
      <Route path={'/signinadmin'} element={<Login />}/>
      <Route path={'/signupadmin'} element={<Register />}/>
      <Route path={'/helpclient'} element={<HelpClient />}/>
      {/* <Route path={'/adminuser'} element={<OuevraAdmin />}/> */}
      <Route path={'/adminoprofile'} element={<AdminProfile />}/>
      <Route path={'/home/contact/centre'} element={<Contact />}/>
      <Route path={'/settingadmin/oeuvra'} element={<SettingAdmin />}/>
      <Route path={'/helpadmin/oeuvra'} element={<HelpAdmin />}/>
      <Route path={'/royaladmin/oeuvra'} element={<RoyalAdmin />}/>
      <Route path={'/contemporaryadmin/oeuvra'} element={<ContemporaryAdmin />}/>
      <Route path={'/mailboxadmin/oeuvra'} element={<MailBox />}/>
      <Route path={'/ca/oeuvra/add'} element={<AddMainCont />}/>
      <Route path={'/rt/oeuvra/add'} element={<AddMainRoy />}/>
      <Route path={'/add/ca'} element={<AddCont />}/>
      <Route path={'/add/rt'} element={<AddRoy />}/>
      <Route path={'/view/oe/:id'} element={<ViewDetail  />}/>
      <Route path={'/view/cont/:id'} element={<ViewDetailCont  />}/>
      <Route path={'/view/roy/:id'} element={<ViewDetailRoy  />}/>
      <Route path={'/upda/cont/:id'} element={<UpdateMainCont  />}/>
      <Route path={'/upda/roy/:id'} element={<UpdateMainRoy  />}/>
      <Route path={'/home/oeuvra/royal'} element={<RoyalTresuares  />}/>
      <Route path={'/home/oeuvra/art'} element={<ContempArt  />}/>
      <Route path={'/adminuser'} element={<Protected Secure={<OuevraAdmin />} />}/>
    </Routes>
  </BrowserRouter>
);




























































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
