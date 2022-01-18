import './App.css';

import ArchiveableList from './components/ArchiveableListHOC';

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
    </div>
  );
}

export default App;
