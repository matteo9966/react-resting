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
    
   expect(colorBtn.textContent).not.toBeEnabled();

});
 