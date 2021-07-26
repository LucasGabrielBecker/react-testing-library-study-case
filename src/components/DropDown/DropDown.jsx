import { useState } from 'react';

/**
 * 
 1 - Dropdown must be initializaed closed
 2 - When clicked the options must be showed
 3 - When clicked on the option must show wich option was selected and close the dropdown
 */
export function DropDown({ title, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelection = opt => {
    onSelect(opt);
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsOpen(open => !open)}>{title}</button>
      {isOpen && (
        <ul role='menu'>
          {options.map(opt => (
            <li key={opt} role='menuitem' onClick={() => handleSelection(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
