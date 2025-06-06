import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledForm from './Components/ControlledForm'
import UncontrolledForm from './Components/UncontrolledForm';
import MultiFieldForm from './Components/MultifieldForm';
import CombinedForm from './Components/CombinedForm';
import ValidationForm from './Components/ValidationForm';
import ComplexForm from './Components/CompleForm';
import CustomHookForm from './Components/CustomHookForm';
import './App.css'

function App() {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3">
        <span className="navbar-brand h1"></span>
        
        <span className="navbar-brand h1 px-1">Suganya S</span>
        <span className="text-light fw-bold px-1">Day_14 Tasks</span>
         <span className="text-light"></span>
      </nav>
      <ControlledForm />
      <br />
      <hr />
      <UncontrolledForm />
      <br />
      <hr />
      <MultiFieldForm />
      <br />
      <hr />
      <CombinedForm />
      <br />
      <hr />
      <ValidationForm />
      <br />
      <hr />
      <ComplexForm />
      <br />
      <hr />
      <CustomHookForm />
      <br />
      <hr />
    </>
  )
}

export default App
