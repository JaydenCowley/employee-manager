const Intern = require('../lib/Intern')

test('school', () => {
    const intern = new Intern("tom", 1, "tom@test.com", "UofU")
    expect(intern.getSchool()).toBe("UofU");
})
test('intern role', () =>{
    const intern = new Intern("foo", 1, "test@test.com", "UofU")
    expect(intern.getRole()).toBe("Intern")
})