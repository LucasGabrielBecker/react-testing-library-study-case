import { useState } from 'react';
import { DropDown } from './components/DropDown/DropDown';
function App() {
  const [sel, setSel] = useState(null);
  return (
    <div className='App'>
      {sel && <div>Choosed pokemon: {sel}</div>}
      <DropDown
        title='Choose your initial Pokemon'
        options={['Bubasaur', 'Squirtle', 'Chameleon']}
        onSelect={setSel}
      />
    </div>
  );
}

export default App;
