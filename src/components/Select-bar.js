import React from 'react'
const SelectBar = () => (
  <div className="container text-center">
  <div className="row text-center">
  <div className=" offset-1 col-10 col-md-6 offset-md-3 div-select">
    <h5>¿Cómo sientes hoy el clima?</h5>
    <select className="custom-select">
      <option selected>Selecciona una opción</option>
      <option value="1">Solo tengo un poco de frio</option>
      <option value="2">Tengo frio</option>
      <option value="3">Me congelo</option>
      <option value="3">Está estupendo</option>
      <option value="3">Hace un poco de calor</option>
      <option value="3">Tengo calor</option>
      <option value="3">Me derrito de calor</option>
   </select>
    </div>
    </div>
  </div>
)
export default SelectBar