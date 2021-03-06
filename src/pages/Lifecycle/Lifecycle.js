import Lifecycleimage from '../../images/lifecycle.jpg'
import { Table } from 'antd'
import './style.css'
const Lifecycle = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a href="/lifecycle/methods">{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ]
  const data = [
    {
      key: '1',
      name: 'Инициализация',
      description:
        'Это фаза, на которой компонент собирается начать свой путь, установив состояние и пропсы. Обычно это делается внутри метода конструктора',
    },
    {
      key: '2',
      name: 'Монтирование',
      description:
        'Это фаза, на которой наш компонент React монтируется в DOM (то есть создается и вставляется в DOM). Эта фаза появляется на сцене после завершения фазы инициализации. На этом этапе наш компонент рендерит в первый раз. ',
    },
    {
      key: '3',
      name: 'Обновление',
      description:
        'Это третья фаза, через которую проходит наш компонент. После фазы монтажа, на которой был создан компонент, на сцену приходит фаза обновления. Это то место где состояние компонента изменяется и, следовательно, происходит повторный рендеринг. На этом этапе данные компонента (state и props) обновляются в ответ на пользовательские события, такие как клик, ввод текста и так далее. Это приводит к повторной визуализации компонента. ',
    },
    {
      key: '4',
      name: 'Размонтирование',
      description:
        'Это последний этап в жизненном цикле компонента. Как ясно видно из названия, компонент отключается от DOM на этом этапе.',
    },
  ]

  return (
    <>
      <h1 className="title">Жизненный цикл компонента</h1>
      <p className="text">
        Каждый компонент имеет несколько «методов жизненного цикла».
        Переопределение такого метода позволяет выполнять код на конкретном
        этапе этого процесса.
      </p>
      <h2 className="title">
        Жизненный цикл компонента в целом делится на четыре части:
      </h2>
      <div className="lifecycle">
        <Table
          className="table-lifecycle"
          columns={columns}
          dataSource={data}
          bordered
        />
        ,
        <div>
          <img src={Lifecycleimage} alt="lifecycle" />
        </div>
      </div>
    </>
  )
}
export default Lifecycle
