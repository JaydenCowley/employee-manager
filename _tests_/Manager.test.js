const Manager = require('../lib/Manager')

test('office Numer', () => {
    const manager = new Manager("john", 1, "john@test.com", 15)
    expect(manager.getOfficeNum()).toBe(15);
})
test('manager role', () =>{
    const manager = new Manager("john", 1, "john@test.com", 15)
    expect(manager.getRole()).toBe("Manager")
})