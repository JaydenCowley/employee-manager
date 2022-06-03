const Employee = require("../lib/Employee")

test('Creates Employee object', () => {
    const employee = new Employee('sue', 1, 'sue@test.com')
    expect(employee.name).toBe('sue');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
})
test('return name', () => {
    const employee = new Employee('sue', 1, 'sue@test.com')
    expect(employee.getName()).toBe('sue')
})
test('return id', () => {
    const employee = new Employee('sue', 1, 'sue@test.com')
    expect(employee.getId()).toEqual(1)
})
test('return email', () => {
    const employee = new Employee('sue', 1, 'sue@test.com')
    expect(employee.getEmail()).toBe('sue@test.com')
})
test('return employee', () => {
    const employee = new Employee('sue', 1, 'sue@test.com')
    expect(employee.getRole()).toBe('Employee')
})