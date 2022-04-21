import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
   render(<App></App>);
 const colorBtn=  screen.getByRole('button',{name:'Change to blue'})
   
   //expect the background color to be red
   expect(colorBtn).toHaveStyle({backgroundColor:'red'})
});

test('button turns blue when clicked', () => {
   render(<App></App>)
   const colorBtn = screen.getByRole('button',{name:'Change to blue'});
  //click button
   fireEvent.click(colorBtn);
 //expect to have color blue
   expect(colorBtn).toHaveStyle({backgroundColor:'blue'});
  
   //expect the button text to be 'Change to Red'
    
   expect(colorBtn.textContent).toBe('Change to red');

});

test('initial conditions',()=>{
  render(<App></App>)
   
  const button = screen.getByRole('button',{name:'Change to blue'});

  expect(button).toBeEnabled();
  //button starts enabled

  //checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox',{})
  expect(checkbox).not.toBeChecked();

})

test('button disabled',()=>{
  render(<App></App>)
   
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');
   
  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).not.toBeDisabled();


})
 