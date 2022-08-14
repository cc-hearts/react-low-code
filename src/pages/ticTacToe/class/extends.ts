/**
 * @author heart
 * @description 继承 super 的使用规则
 * @Date 2022-08-14
 */
// 解释为啥需要在super中调用
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  run() {
    console.log('Person class run')
  }

  static PersonSleep() {
    console.log('PersonSleep call')
  }
}

/**
 * 解释了为什么需要在constructor的开头去super
 * @see https://zh.javascript.info/class-inheritance
 */

// 学生类 学生会有学号(studentNumber)这个属性
// 但是学生继承的是Person类 由于继承的关系 他会有父类的nama age等属性
class Student extends Person {
  studentNumber: number
  constructor(name: string, age: number, studentNumber: number) {
    // 执行 super(...) 来调用一个父类 constructor（ super() 这种方式 只能在我们的 constructor 中调用）。

    // 因为 如果是一个继承的类 会有一个特殊的标签
    // 派生构造器具有特殊的内部属性 [[ConstructorKind]]:"derived"。这是一个特殊的内部标签
    // 基类的这个内部属性是[[ConstructorKind]]: "base"
    // 👆👆👆上面两句话很重要👆👆👆

    // 当[[ConstructorKind]]为 "base" 时 通过 new 执行一个常规函数时，它将创建一个空对象，并将这个空对象赋值给 this
    // 当[[ConstructorKind]]为 "derived"时 继承的 constructor 执行时，它不会执行此操作。它期望父类的 constructor 来完成这项工作。
    // 因此派生的 constructor 必须调用 super 才能执行其父类（base）的 constructor，否则 this 指向的那个对象将不会被创建。并且我们会收到一个报错

    // ECMA 规范中 constructor 的时候发生的事情
    // https://262.ecma-international.org/#sec-ecmascript-function-objects-construct-argumentslist-newtarget
    // eslint-disable-next-line no-debugger
    debugger
    super(name, age)
    this.studentNumber = studentNumber
  }

  running() {
    // 执行 super.method(...) 来调用一个父类方法。
    // 在子类普通方法中，super指向父类的原型对象
    // 类中的方法 都在原型对象上的 也就是 类.protoType中
    // 属性(就是这里的声明的 studentNumber 这都叫属性也就是 变量) 无法用super获取
    super.run()
  }

  static sleep() {
    // 在子类静态方法中，super指向父类  因此可以调用父类的静态方法
    super.PersonSleep()
  }
}

new Student('why', 18, 10001)

export {}
