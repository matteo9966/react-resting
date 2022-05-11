import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';

test('order phases for happy path',async ()=>{
    //render app
    render(<App></App>);
    //ora c'è app sullo schermo.
    const user = userEvent.setup();
    const vanillaInput = await screen.findByRole('spinbutton',{name:'Vanilla'})
   
    
    //add icecream scoops and toppings
    
    
    await user.clear(vanillaInput);
    await user.type(vanillaInput,'1')


    //find and click order button

    const orderButton = screen.getByRole('button',{name:'Ordina il tuo Sundae'});
    await user.click(orderButton);


    //check summary information based on order
    
    const summaryButton = await screen.findByRole('button',{name:'Confirm order'});
    const checkbox = await screen.findByRole('checkbox',{name:/terms and conditions/i})
    await user.click(checkbox)
    await user.click(summaryButton);
    //accept terms and conditions and click button to confirm order
    await screen.findByText(/Your order number is: \d+/i);
    
    //confirm that i have a order number on confirmation page
    
    // click new order button on confirmation page
  
    // check that scoops and toppings subtotal have been reset

    // do we need to await enithing to avoid test errors?
    //note: se faccio il submit dell'ordine mi ritrovo che l'ordine va a finire sul server
    //il server genera un numero casuale e restituisce un numero
    //ler richieste al server vengono fatte con mock service worker


})

test('order button is disabled if no scoops are added',async ()=>{
    render(<App></App>);
    const user = userEvent.setup();
    const vanillaInput = await screen.findByRole('spinbutton',{name:'Vanilla'});
    const orderButton = screen.getByRole('button',{name:'Ordina il tuo Sundae'});
    expect(orderButton).toBeDisabled();
    await user.clear(vanillaInput);
    await user.type(vanillaInput,'1');
    expect(orderButton).not.toBeDisabled();
    
})

