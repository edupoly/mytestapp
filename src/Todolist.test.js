import { fireEvent, render,screen } from "@testing-library/react"
import Todolist from "./Todolist";

test('added task or not',()=>{
    render(<Todolist></Todolist>);
    //fireEvent.change(screen.getByTestId('inputtodo'),{target:{value:'learn testing'}});
    fireEvent.change(screen.getByRole('textbox'),{target:{value:'learn testing'}});
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('learn testing')).toBeInTheDocument();
})