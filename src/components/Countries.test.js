import { fireEvent,getByText,render,screen } from '@testing-library/react'
import Countries from './Countries'
import {mockfetch} from './mockFetch'
test("testing coutnries component fetch requ",async ()=>{
    jest.spyOn(window,"fetch").mockImplementation(mockfetch)
    render(<Countries></Countries>)
    fireEvent.click(screen.getByRole('button',{name:"GetCountries"}))
    expect(await screen.findByText('India')).toBeInTheDocument()
})