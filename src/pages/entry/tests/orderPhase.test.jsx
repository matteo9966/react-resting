import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';

test('order phases for happy path',()=>{
    //render app

    //add icecream scoops and toppings

    //find and click order button

    //check summary information based on order

    //accept terms and conditions and click button to confirm order

    //confirm that i have a order number on confirmation page

    // click new order button on confirmation page

    // check that scoops and toppings subtotal have been reset

    // do we need to await enithing to avoid test errors?


})

//note: se faccio il submit dell'ordine mi ritrovo che l'ordine va a finire sul server
//il server genera un numero casuale e restituisce un numero
//ler richieste al server vengono fatte con mock service worker