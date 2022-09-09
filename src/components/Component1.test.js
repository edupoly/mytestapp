import { render } from "@testing-library/react"
import Component1 from "./Component1"

jest.mock('./Component2',()=>{
    return(
        ()=>{
            return <div id='mockcmp2'>Hello comp2 mock</div>
        }
    )
})
jest.mock('./Component3',()=>{
    return(
        ()=>{
            return <div id='mockcmp3'>Hello comp3 mock</div>
        }
    )
})

test('testing component 1 for loading Component2 and Component 3',()=>{
    var x = render(<Component1></Component1>)
   
    expect(x.container.querySelector('#mockcmp2')).toBeInTheDocument()
    expect(x.container.querySelector('#mockcmp3')).toBeInTheDocument()
})