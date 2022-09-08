import { add } from "./myfuns";
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