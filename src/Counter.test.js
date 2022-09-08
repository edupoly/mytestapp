import { fireEvent, render,screen } from "@testing-library/react"
import Counter from "./Counter"

test("counter should start with 0",()=>{
    render(<Counter></Counter>)
    expect(screen.getByRole('heading',{name:'Count: 0'})).toBeInTheDocument();
    expect(screen.getByTestId('cnt')).toHaveTextContent('0')
})
test("counter should incremented with 1",()=>{
    render(<Counter></Counter>)
    fireEvent.click(screen.getByRole('button',{name:'Increment'}));
    expect(screen.getByTestId('cnt')).toHaveTextContent('1')
})
test("counter should incremented with 2",()=>{
    render(<Counter></Counter>)
    fireEvent.click(screen.getByRole('button',{name:'Increment'}));
    fireEvent.click(screen.getByRole('button',{name:'Increment'}));
    expect(screen.getByRole('heading',{name:'Count: 2'})).toBeInTheDocument()
})
