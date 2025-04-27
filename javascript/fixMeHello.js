// 6 kyu
// FIXME: Hello

// The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. 
// Furthermore, it is supposed to say them in the same order they were set.

// But it's not working properly.

// Notes
// There are 3 attributes

// name
// age
// sex ('M' or 'F')
// When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order 
// depends on the first assignment of that attribute, but the value is from the last assignment.

// Examples
// Hello.
// Hello. My name is Bob. I am 27. I am male.
// Hello. I am 27. I am male. My name is Bob.
// Hello. My name is Alice. I am female.
// Hello. My name is Batman.
// Task
// Fix the code so we can all go home early.


class Dinglemouse {

    constructor() {
        this.order = []
        this.name = null
        this.age = null
        this.sex = null
    }

    setAge(age) {
        this.age = age

        if (!this.order.includes('age')) {
            this.order.push('age');
        }
        return this
    }

    setSex(sex) {
        this.sex = sex
        if (!this.order.includes('sex')) {
            this.order.push('sex');
        }  
        return this
    }

    setName(name) {
        this.name = name
        if (!this.order.includes('name')) {
            this.order.push('name');
        }
        return this
    }

    hello() {
        let result = 'Hello. '
        const helloName = `My name is ${this.name}.`
        const helloAge = `I am ${this.age}.`
        const helloSex = `I am ${this.sex == 'M' ? "male" : "female"}.`
        for (let i = 0; i < this.order.length; i++) {
            if(this.order[i] === "name") result += helloName + ' '
            if(this.order[i] === "age") result += helloAge + ' '
            if(this.order[i] === "sex") result += helloSex + ' '
        }

        return result.split('').slice(0, -1).join('')
    }
}


console.log(new Dinglemouse().setName("Bob").setAge(27).setSex('M').hello())
console.log(new Dinglemouse().setAge(27).setSex('M').setName("Bob").hello())
console.log(new Dinglemouse().setName("Alice").setSex('F').hello())
console.log(new Dinglemouse().setName("Batman").hello())