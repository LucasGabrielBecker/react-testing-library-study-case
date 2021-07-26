import { DropDown } from './DropDown';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('DropDown', () => {
  //1 - Dropdown must be initializaed closed
  const title = 'Pick the Pokemon';
  const options = ['Bulbasaur', 'Squirtle', 'Chameleon'];

  it('should start closed', () => {
    const options = ['Bulbasaur', 'Squirtle', 'Chameleon'];
    render(<DropDown title={title} options={options} onSelect={() => {}} />);
    options.map(option => {
      return expect(screen.queryByText(option)).not.toBeInTheDocument();
    });
  });

  //2 - When clicked the options must be showed
  it('should show options when open', () => {
    render(<DropDown title={title} options={options} onSelect={() => {}} />);
    expect(
      screen.queryByText('menuitem', { name: options[0] })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('menuitem', { name: options[1] })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('menuitem', { name: options[2] })
    ).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: title }));

    expect(
      screen.getByRole('menuitem', { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('menuitem', { name: options[2] })
    ).toBeInTheDocument();
  });

  //3 - When clicked on the option must show wich option was selected and close the dropdown
  it('should signal wich option was selected and close the dropdown', () => {
    const onSelect = jest.fn();
    render(<DropDown title={title} options={options} onSelect={onSelect} />);
    userEvent.click(screen.getByRole('button', { name: title }));

    const option0 = screen.getByRole('menuitem', { name: options[0] });
    const option1 = screen.getByRole('menuitem', { name: options[1] });
    const option2 = screen.getByRole('menuitem', { name: options[2] });

    expect(option0).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();

    userEvent.click(option1);

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(option0).not.toBeInTheDocument();
    expect(option1).not.toBeInTheDocument();
    expect(option2).not.toBeInTheDocument();
  });
});
