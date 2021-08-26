import React from 'react'
const MyMemo = () => {
  return (
    <>
      <div style={{ padding: '15px' }}>
        <h2>React.memo — это компонент высшего порядка</h2>
        <p>
          React будет использовать результат последнего рендера, избегая
          повторного рендеринга.
        </p>
        <p>React.memo затрагивает только изменения пропсов.</p>
        <p>
          Если функциональный компонент обёрнут в React.memo и использует
          useState, useReducer или useContext, он будет повторно рендериться при
          изменении состояния или контекста.
        </p>
      </div>
    </>
  )
}
export default React.memo(MyMemo)
