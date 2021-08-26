import methods from '../../images/lifecycle-methods.jpg'
import './style.css'
const Methods = () => {
  return (
    <>
      <div className="methods">
        <div className="methods-space">
          <img src={methods} alt="lifecycle-methods" />
        </div>
        <div className="methods-space">
          <h2 style={{ 'text-align': 'center', margin: '10px' }}>
            В процессе работы компонент проходит через ряд этапов жизненного
            цикла. На каждом из этапов вызывается определенная функция, в
            которой мы можем определить какие-либо действия:
          </h2>
          <ul>
            <li>
              constructor(props): конструктор, в котором происходит начальная
              инициализация компонента
            </li>
            <li>
              static getDerivedStateFromProps(props, state): вызывается
              непосредственно перед рендерингом компонента. Этот метод не имеет
              доступа к текущему объекту компонента (то есть обратиться к
              объекту компоненту через this) и должен возвращать объект для
              обновления объекта state или значение null, если нечего обновлять.
            </li>
            <li>render(): рендеринг компонента</li>
            <li>
              componentDidMount(): вызывается после рендеринга компонента. Здесь
              можно выполнять запросы к удаленным ресурсам
            </li>
            <li>
              componentWillUnmount(): вызывается перед удалением компонента из
              DOM
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 style={{ 'text-align': 'center', margin: '10px' }}>
          Кроме этих основных этапов или событий жизненного цикла, также имеется
          еще ряд функций, которые вызываются при обновлении состояния после
          начального рендеринга компонента, если в компоненте происходят
          обновления:
        </h2>
        <ul>
          <li>static getDerivedStateFromProps(props, state)</li>
          <li>
            shouldComponentUpdate(nextProps, nextState): вызывается каждый раз
            при обновлении объекта props или state. В качестве параметра
            передаются новый объект props и state. Эта функция должна возвращать
            true (надо делать обновление) или false (игнорировать обновление).
            По умолчанию возвращается true. Но если функция будет возвращать
            false, то тем самым мы отключим обновление компонента, а последующие
            функции не будут срабатывать.
          </li>
          <li>
            render(): рендеринг компонента (если shouldComponentUpdate
            возвращает true)
          </li>
          <li>
            getSnapshotBeforeUpdate(prevProps, prevState): вызывается
            непосредственно перед компонента. Он позволяет компоненту получить
            информацию из DOM перед возможным обновлением. Возвращает в качестве
            значения какой-то отдельный аспект, который передается в качестве
            третьего параметра в метод componentDidUpdate() и может учитываться
            в componentDidUpdate при обновлении. Если нечего возвращать, то
            возвращается значение null
          </li>
          <li>
            componentDidUpdate(prevProps, prevState, snapshot): вызывается сразу
            после обновления компонента (если shouldComponentUpdate возвращает
            true). В качестве параметров передаются старые значения объектов
            props и state. Третий параметр - значение, которое возвращает метод
            getSnapshotBeforeUpdate
          </li>
        </ul>
      </div>
    </>
  )
}
export default Methods
