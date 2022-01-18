import './App.css';

import ArchiveableList from './components/ArchiveableListHOC';
import A from './components/context_hierarchy/A';

function App() {
  const list = [
    {
      id: 1,
      name: 'Item 1'
    },
    {
      id: 2,
      name: 'Item 2'
    }
  ];

  return (
    <div className="App">
      <ArchiveableList list={list} />
      <A />
    </div>
  );
}

export default App;
