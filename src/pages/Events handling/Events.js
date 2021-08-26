import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <>
      <ul>
        <h2>Events</h2>
        <li>
          События в React именуются в стиле camelCase вместо нижнего регистра.
        </li>
        <li>
          С JSX вы передаёте функцию как обработчик события вместо строки.
        </li>
        <li>
          В React нельзя предотвратить обработчик события по умолчанию, вернув
          false. Нужно явно вызвать preventDefault.
        </li>
      </ul>
      <div>
        <h2 style={{ marginLeft: '40px' }}>Event-синтетическое событие</h2>
        <Link
          style={{ textDecoration: 'overline', marginLeft: '40px' }}
          to={{ pathname: 'https://ru.reactjs.org/docs/events.html' }}
          target="_blank"
        >
          Руководство о Synthetic Event
        </Link>
      </div>
    </>
  )
}
export default Events
