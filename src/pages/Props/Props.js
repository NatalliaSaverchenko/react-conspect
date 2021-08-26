import Propscomponent from '../../components/Propscomponent/index'
const Props = () => {
  const user = { id: 0, name: 'Natallia', age: 30 }
  return (
    <>
      <h1 className="title">Props</h1>
      <p className="text">
        Props (пропсы) — это входные данные React-компонентов, передаваемые от
        родительского компонента дочернему компоненту.
      </p>
      <p className="text">
        Props предназначены только для чтения. Ни в каком случае их не следует
        изменять.
      </p>
      <p className="text">
        В любом компоненте доступны props.children. Это контент между
        открывающим и закрывающим тегом компонента.
      </p>
      <Propscomponent mynumber={5} mystring={'Пишу письмо'} myobject={user} />
    </>
  )
}
export default Props
