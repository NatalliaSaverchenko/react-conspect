const State = () => {
  return (
    <>
      <h1 className="title">State </h1>
      <p className="text">
        Компонент нуждается в state, когда данные в нём со временем изменяются.
      </p>
      <p className="text">
        Самая большая разница между state и props состоит в том, что props
        передаются от родителя потомку, а state управляется самим компонентом.
        Компонент не может изменять props, но может изменять state.
      </p>
    </>
  )
}
export default State
