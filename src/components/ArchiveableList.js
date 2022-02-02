import React from "react";

/*
 * This component has two responsibilities: Rendering a list and managing archived items.
 * It can be improved by separating logic and presentation.
 *
 */

class ArchiveableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedItems: [],
    };

    this.onArchive = this.onArchive.bind(this);
  }

  onArchive(id) {
    const { archivedItems } = this.state;

    this.setState({
      archivedItems: [...archivedItems, id],
    });
  }

  componentDidMount() {
    // rehydration
    fetch('path/to/archived/items')
      .then(response => response.json())
      .then(archivedItems => this.setState(rehydrateArchivedItems(archivedItems)));
  }

  render() {
    const { list } = this.props;
    const { archivedItems } = this.state;

    const filteredList = list.filter(byArchived(archivedItems));

    return (
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>
              <button type="button" onClick={() => this.onArchive(item.id)}>
                Archive
              </button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

function byArchived(archivedItems) {
  return function (item) {
    return !archivedItems.includes(item.id);
  };
}

function rehydrateArchivedItems(archivedItems) {
  return function (prevState) {
    return {
      archivedItems: [
        ...prevState.archivedItems,
        ...archivedItems
      ]
    };
  };
}

export default ArchiveableList;
