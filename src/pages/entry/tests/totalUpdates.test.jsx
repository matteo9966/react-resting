import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Options} from '../Options';
import {OrderDetailsProvider} from '../../../context/OrderDetails'
test('update scoop subtotal when scoops change',async ()=>{
  // options ha bisogno di un providersenza un provider perche utilizza il context 
  /// è possibile creare un custom render, per vedere come si fa: vai dentro la cartella testing-utils
  

  render(<Options optionType="scoops"></Options>,{wrapper:OrderDetailsProvider}) //redux, router, contextprovider qualsiasi cosa va bene


  //total starts at $0.00
   const scoopsSubtotal = screen.getByText(/^Scoops total/i,{exact:false})
   expect(scoopsSubtotal).toHaveTextContent(/^.*\$0.00$/ig)
  //update vanilla scoops to 1 and check subtotal
   const vanillaInput  = await screen.findByRole('spinbutton',{name:'Vanilla'})
   console.log({value:vanillaInput.value});
   await userEvent.clear(vanillaInput);
   await userEvent.type(vanillaInput,"1");
   console.log({value:vanillaInput.value});
   expect(scoopsSubtotal).toHaveTextContent('2.00')
  //update chocolate scoops to 2 andh check subtotal
   
  const chocolateInput = await screen.findByRole('spinbutton',{name:'Chocolate'});
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput,'2')
  expect(scoopsSubtotal).toHaveTextContent(/^.*\$6.00$/ig);

})