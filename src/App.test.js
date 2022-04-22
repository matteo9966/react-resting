import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
   render(<App></App>);
 const colorBtn=  screen.getByRole('button',{name:'Change to blue'})
   
   //expect the background color to be red
   expect(colorBtn).toHaveStyle({backgroundColor:'MediumVioletRed'})
});

test('button turns blue when clicked', () => {
   render(<App></App>)
   const colorBtn = screen.getByRole('button',{name:'Change to blue'});
  //click button
   fireEvent.click(colorBtn);
 //expect to have color blue
   expect(colorBtn).toHaveStyle({backgroundColor:'MidnightBlue'});
  
   //expect the button text to be 'Change to Red'
    
   expect(colorBtn.textContent).toBe('Change to red');

});

test('initial conditions',()=>{
  render(<App></App>)
   
  const button = screen.getByRole('button',{name:'Change to blue'});

  expect(button).toBeEnabled();
  //button starts enabled

  //checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox',{name:"Disable button"})
  expect(checkbox).not.toBeChecked();

})

test('button disabled',()=>{
  render(<App></App>)
   
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox',{name:"Disable button"});
   
  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();


})

test('gray button if disabled, enabled back to red',()=>{
  render(<App></App>)
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox',{name:"Disable button"});
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'gray'})
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'MediumVioletRed'})
  
})
 
test('click button turn blue ,gray button if disabled, enabled back to blue',()=>{
  render(<App></App>)
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox',{name:"Disable button"});
  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'gray'})
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'MidnightBlue'})
  
})
 

describe('spaces before camel-case capital letters',()=>{
  test('Works for no inner capital letters',()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('Works for one inner capital letter',()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('Works for multiple capital letters',()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})