import './style.css'
const Propscomponent = ({ mynumber, mystring, myobject }) => {
  return (
    <div className="example">
      <h3>Props пример</h3>
      <p>Число {mynumber}</p>
      <p>Строка {mystring}</p>
      <p>Oбъект {myobject.name}</p>
    </div>
  )
}
export default Propscomponent
