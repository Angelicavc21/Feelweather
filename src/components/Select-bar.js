import React from 'react'
const SelectBar = () => (
  <div className="container text-center">
  <div className="row text-center">
  <div className=" col-12 col-md-6 offset-md-3 div-select">
    <h5>¿Cómo sientes hoy el clima?</h5>
    <select className="custom-select">
      <option selected>Selecciona una opción</option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
    </div>
    </div>
  </div>
)
export default SelectBar