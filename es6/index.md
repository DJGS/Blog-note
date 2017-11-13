##ES6的一些简单语法

1. 变量声明方式新增let、const

let声明的变量有块作用域限制。

    for(var i=1;i<5;i++){
        console.log(i);
    }
    console.log(i) //永远等于5
    for(let j=1;j<5;j++){
        console.log(j);
    }
    console.log(j); //报错，因为没有j块级作用域。

    const 声明变量为常亮，声明后就不能更改，声明的时候必须赋值。

2. 箭头函数

箭头函数语法

    (param,[,param])=>{
        statements;
    }
    1. 参数为1个时()可以省略 
    x=>{
        console.log(1);
    }
    2. 参数为多个时，不能省略()
    (x,y)=>{
        console.log(x,y)
    }
    3. 没有参数时用()表示
    ()=>{
        consoel.log(11)
    }

    4. (a,b)=>a+b; 
    单行可以省略{},后面的值作为return返回。多行必须添加{}。
    (a,b)=>{
        demo();
        demo2();
    }
    x => { return x * x }; // 函数返回 x * x
    x => x * x; // 同上一行
    x => return x * x; // SyntaxError 报错，不能省略 {}
    x => { x * x }; // 合法，没有定义返回值，返回 undefined

箭头函数的特性

    箭头函数内部没有constructor方法,也没有prototype，所以不支持new操作。但是它对this的处理与一般函数不同，箭头函数的this永远指向函数定义时的this，而非执行时。
    例:
    var o={
        func: function(){
            console.log(1);
        }
        test: function(){
            this.func();
        }
    }
    o.test(); //Typeerror: this.func is not a function;
    箭头函数中this是不会改变指向对象的，我们知道call和apply可以改变this的指向，但是箭头函数中是无效的。

3. 模板字符串

    用一对反向单引号作为封装。(``),通过一个$()将参数引入。
    例:
    var a='你好';
    `小明$(a)!
    `