import { shallowMount, mount } from '@vue/test-utils'
import Counter  from '@/components/Counter'


describe( 'Counter Component' , () => {

    let wrapper;

    beforeEach( () => {

        wrapper = shallowMount( Counter )
    })

    // test('debe de hacer match con el snapshot' , () => {

    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test( 'h2 debe de tener el valor por defecto "Counter', () => {
        
        // const wrapper = shallowMount( Counter )

        const h2 = wrapper.find('h2')

        expect( h2.exists ).toBeTruthy()
        
        const h2Value= h2.text()
        
        expect( h2Value ).toBe('Counter')
        

    })

    test('el valor por defecto debe ser 100 en el p' , () =>{

        // const wrapper = shallowMount( Counter )

        //const  pTags= wrapper.findAll( 'p' )
        const pTags = wrapper.find( '[data-testid="counter"]' )

        const p2Value= pTags.text()

        expect(p2Value).toBe('100')

    })

    test('debe de incrementar y decrementar en 1 el valor del contador' , async () => {

        // const wrapper = shallowMount( Counter )

        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

   
        const value = wrapper.find( '[data-testid="counter"]' ).text()

        expect(value).toBe('101')

    })

    test( 'debe de establecer el valor por defecto', () => {

        const { start } =wrapper.props()

       const value =wrapper.find( '[data-testid="counter"]' ).text()

       expect( Number(value) ).toBe(start)
    })

    test('debe de mostar la prop title', () => {

        const title= 'Hola Mundo!!!!'

        const wrapper = shallowMount(Counter,{
            props:{
                title
            }
        } )
       
        expect( wrapper.find( 'h2' ).text() ).toBe( title )
    })
})