import { render, screen } from "../../../test-utils/testing-library-utils" //importo la mia versione di render
import { Options } from '../Options';
import {OrderDetailsProvider} from '../../../context/OrderDetails';
test('display image for each scoop options from server',async ()=>{
    render(<Options optionType={'scoops'}></Options>,{wrapper:OrderDetailsProvider});

    // find the images
    const scoopImages =  await screen.findAllByRole('img',{name:/scoop$/i})
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    const altText= scoopImages.map(element=>element.alt)
    expect(altText).toEqual(['Chocolate scoop','Vanilla scoop']);


})


test('display topping images from server',async ()=>{
    render(<Options optionType={'toppings'}></Options>);

    const toppingImages = await screen.findAllByRole('img',{name:/topping$/i});
    expect(toppingImages).toHaveLength(3);
    
    const toppingNames = toppingImages.map(topping=>topping.alt);
    expect(toppingNames).toEqual(["Cherries topping","MandMs topping","Hot Fudge topping"]);

})