import {  render,screen,waitForElementToBeRemoved } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from '@testing-library/user-event'

test('checkbox unchecked, button disabled',()=>{
 render(<SummaryForm></SummaryForm>);
 
 const checkbox = screen.getByRole('checkbox',{name:/terms and conditions/i});
 const submitButton = screen.getByRole('button',{name:/confirm order/i}) 
 expect(checkbox).not.toBeChecked();
 expect(submitButton).toBeDisabled();



})

test('click checkbox enables button,clicking checkbox disables button',async ()=>{
    render(<SummaryForm></SummaryForm>);
    const user = userEvent.setup()
    const checkbox = screen.getByRole('checkbox',{name:/terms and conditions/i});
    const submitButton = screen.getByRole('button',{name:/confirm order/i});
    expect(submitButton).toBeDisabled();
    await user.click(checkbox)
    // fireEvent.click(checkbox);
    // userEvent.click(checkbox)
    expect(checkbox).toBeChecked();
    expect(submitButton).toBeEnabled();

})

test('popover response to hover',async ()=>{
    render(<SummaryForm></SummaryForm>);
    const user = userEvent.setup()
    //popover starts hidden
    const noPopover=screen.queryByText(/no icecream will actually be delivered/i);
    expect(noPopover).not.toBeInTheDocument();
   //hovering makes it appear
   const termAndConditions = screen.getByText(/terms and conditions/i);
   await user.hover(termAndConditions)
   const popover = screen.getByText(/no icecream will actually be delivered/i);
   expect(popover).toBeInTheDocument();
    
   //dissapears when mouse leaves
   user.unhover(termAndConditions);
   await waitForElementToBeRemoved(()=> screen.queryByText(/no icecream will actually be delivered/i))
   
})