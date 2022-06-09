const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNum){
        super(name, id, email, 'Manager')
        this.role = 'Manager';
        this.officeNum = officeNum;
    }
    getOfficeNum(){
        return this.officeNum
    }
    getRole(){
        return this.role
    }

}
module.exports = Manager;