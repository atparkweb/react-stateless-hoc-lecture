import React from 'react';
import List from './List';

function byArchived(archivedItems) {
  return function(item) {
    return !archivedItems.includes(item.id);
  };
}

function withArchive(Component) {
  class WithArchive extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        archivedItems: []
      };

      this.onArchive = this.onArchive.bind(this);
    }

    onArchive(id) {
      const { archivedItems } = this.state;

      this.setState({
        archivedItems: [...archivedItems, id]
      });
    }

    render() {
      const { list } = this.props;
      const { archivedItems } = this.state;

      const filteredList = list.filter(byArchived(archivedItems));

        return (
            <Component list={filteredList} onArchive={this.onArchive} />
        );
    }
  }

  return WithArchive;
}

const ListWithArchive = withArchive(List);

export default ListWithArchive;
