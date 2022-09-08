import {getByTestId, render, screen} from '@testing-library/react'
import App from './App'
test('renders praveen gubbala', () => {
    render(<App/>)
    expect(screen.getByTestId('myname')).toHaveTextContent("Praveen Gubbala")
    expect(screen.getByRole('heading',{name:'Praveen Gubbala'})).toHaveTextContent("Praveen");
    expect(screen.getByRole('heading',{level:3})).toHaveTextContent("Praveen");
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByRole('button',{name:'Add Task'})).toBeInTheDocument();
});
