const Engineer = require('../lib/Engineer')

test('github', () => {
    const engineer = new Engineer("foo", 1, "test@test.com", "foo/github")
    expect(engineer.getGithub()).toBe("foo/github");
})
test('engineer role', () =>{
    const engineer = new Engineer("foo", 1, "test@test.com", "foo/github")
    expect(engineer.getRole()).toBe("Engineer")
})