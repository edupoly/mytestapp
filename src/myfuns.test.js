import { add,sub,abc } from "./myfuns";
test("first test of my life",()=>{
    expect(add(12,13)).toBe(25)
})
test("check NaN",()=>{
    expect(add(12,'thirteen')).toBe('please enter numbers only')
})

test("string checking",()=>{
    var t = 'indian cricket team lost to srilanka but its a good match';
    expect(t).toMatch(/Srilanka/i)
})
test("testing a single value in an array",()=>{
    var ar = ['praveen','srikanth','rahul','priya','anu','balu']
    expect(ar).toContain('anu')
})

test("testing sub function",()=>{
    expect(sub(22,42)).toBe(-20)
})
test("mocking a callback",()=>{
    const mockcb = jest.fn(x=>2*x)
    abc([12,23,45,19,28],mockcb)
    expect(mockcb.mock.calls.length).toBe(5)
    expect(mockcb.mock.calls[0][0]).toBe(12)
    expect(mockcb.mock.results[0].value).toBe(24)
})