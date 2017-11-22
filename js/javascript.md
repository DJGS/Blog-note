## javascript 语法记录
1.对象的访问

    var name = {
        first: gao,
        last: shuai
    };

    访问name 对象又称关联数组，因为对象对字符串做了映射，而数组对值做了映射。
    使用括号的优势是可以为对象添加自定义属性名字可以是变量，而使用.只能是字符
    串
    1. name.first 
    2. name['first']

2.创建对象 
    
    1. var demo = {}; //直接声明对象，推荐
    2. var demo = new Object(); //new一个新的空的实例对象
    3. var demo = new Object({name: 'gao', age: '22'}); // 直接传入值

3.实例对象 
    
    create()函数是从指定原型对象创建一个新的对象。
    var person2 = Object.create(person1);
    console.log(person2.__proto__)  //person1

4.constructor属性 
    
    每个对象实例都具有constructor属性，它指向创建该实例的构造函数。
    person1.constructor  //Person
    如果想要构造器的名字 personl.constructor.name

5.JSON.stringify() 接收一个对象作为参数，返回一个json对象。

    var json = JSON.stringify({name: 'gao'});
    //{"name": "gao"};

6.JSON.parse() 接收字符串返回一个json对象