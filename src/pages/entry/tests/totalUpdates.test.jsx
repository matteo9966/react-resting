import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Options} from '../Options';
import {OrderDetailsProvider} from '../../../context/OrderDetails'
import App from '../../../App';

test('update scoop subtotal when scoops change',async ()=>{
  // options ha bisogno di un providersenza un provider perche utilizza il context 
  /// è possibile creare un custom render, per vedere come si fa: vai dentro la cartella testing-utils


  render(<Options optionType="scoops"></Options>,{wrapper:OrderDetailsProvider}) //redux, router, contextprovider qualsiasi cosa va bene


  //total starts at $0.00
   const scoopsSubtotal = screen.getByText(/^Scoops total/i,{exact:false})
   expect(scoopsSubtotal).toHaveTextContent(/^.*\$0.00$/ig)
  //update vanilla scoops to 1 and check subtotal
   const vanillaInput  = await screen.findByRole('spinbutton',{name:'Vanilla'})
  //  console.log({value:vanillaInput.value});
   await userEvent.clear(vanillaInput);
   await userEvent.type(vanillaInput,"1");
  //  console.log({value:vanillaInput.value});
   expect(scoopsSubtotal).toHaveTextContent('2.00')
  //update chocolate scoops to 2 andh check subtotal
   
  const chocolateInput = await screen.findByRole('spinbutton',{name:'Chocolate'});
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput,'2')
  expect(scoopsSubtotal).toHaveTextContent(/^.*\$6.00$/ig);

})


test('update topping subtotal when clicking a checkbox', async ()=>{
  render(<Options optionType={"toppings"}></Options>,{wrapper:OrderDetailsProvider})
  const toppingsSubtotal = screen.getByText(/Toppings total/,{exact:false});
  expect(toppingsSubtotal).toHaveTextContent(/^.*\$0.00$/i);
  const fudgeCheckbox = await screen.findByLabelText('Hot fudge',{exact:false});
  const cherriesCheckbox = await screen.findByLabelText('Cherries',{exact:false});
  expect(fudgeCheckbox).not.toBeChecked();
  expect(cherriesCheckbox).not.toBeChecked();
  await userEvent.click(fudgeCheckbox);
  expect(fudgeCheckbox).toBeChecked();
  expect(toppingsSubtotal).toHaveTextContent('1.50');
  await userEvent.click(cherriesCheckbox);
  expect(toppingsSubtotal).toHaveTextContent('3.00');
  await userEvent.click(fudgeCheckbox);
  expect(toppingsSubtotal).toHaveTextContent('1.50');

  

})

describe('Grand Total',()=>{
  test('grand total starts at 0',async ()=>{
    render(<App></App>)
    const grandTotal = await screen.findByRole('heading',{name:/^Grand total/i});
    expect(grandTotal).toHaveTextContent('0.00');

  })
  test('add a scoop updates grand total',async ()=>{
    render(<App></App>)
    const grandTotal = await screen.findByRole('heading',{name:/^Grand total/i});
    const vanillaInput  = await screen.findByRole('spinbutton',{name:'Vanilla'})
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput,"1");
    expect(grandTotal).toHaveTextContent('2.00');

  })
  test('add a topping updates grad total', async ()=>{
    render(<App></App>)
    const grandTotal = await screen.findByRole('heading',{name:/^Grand total/i});
    const fudgeCheckbox = await screen.findByLabelText('Hot fudge',{exact:false});
    await userEvent.click(fudgeCheckbox);
    expect(grandTotal).toHaveTextContent('1.50')
  })
  test('grand total updates if you remove a scoop',async ()=>{
    render(<App></App>);
    const grandTotal = await screen.findByRole('heading',{name:/^Grand total/i});
    const vanillaInput  = await screen.findByRole('spinbutton',{name:'Vanilla'})
    const fudgeCheckbox = await screen.findByLabelText('Hot fudge',{exact:false});
    await userEvent.click(fudgeCheckbox);
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput,"2");
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput,"1");
    expect(grandTotal).toHaveTextContent('3.50')
    

  })

})