import { Card } from 'antd'
const MyFragment = () => {
  return (
    <>
      <Card
        title="Фрагменты"
        extra={<a href="https://ru.reactjs.org/docs/fragments.html">More</a>}
        style={{ width: 700, margin: 'auto' }}
      >
        <p>
          Возврат нескольких элементов из компонента является распространённой
          практикой в React.
        </p>
        <p>
          Фрагменты позволяют формировать список дочерних элементов, не создавая
          лишних узлов в DOM.
        </p>
        <p>
          Можно использовать 󠀾пустые скобки без тега так же, как используется
          любой другой элемент. Однако такая запись не поддерживает ключи или
          атрибуты.
        </p>
        <p>
          Фрагменты, объявленные с помощью React.Fragment, могут иметь ключи.
          Например, их можно использовать при создании списка определений,
          преобразовав коллекцию в массив фрагментов.
        </p>
      </Card>
    </>
  )
}
export default MyFragment