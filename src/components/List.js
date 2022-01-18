/* Note that this is a stateless component.
 * The state and behavior are handled when the higher
 * order component function is applied to this component.
*/

function List({ list, onArchive }) {
  return (
    <ul>
      {list.map(item =>
        <li key={item.id}>
          <span>
            {item.name}
          </span>
          <span>
            <button type="button" onClick={() => onArchive(item.id)}>
              Archive
            </button>
          </span>
        </li>
      )}
    </ul>
  )
}

export default List;