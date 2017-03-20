## js对象高级属性
### 属性类型
#### 1.数据属性:
数据属性包含一个数据值的位置,可在该位置读取或写入值,该属性有4个特性:

* [configurable]:表示能否用delete操作符删除而重新定义.
* [Enumberable]:表示能否用for-in循环返回其属性.
* [Writable]:表示能否修改属性的值。
* [Value]:包含属性的数据值。

要修改对象属性的默认特征，可调用Object.defineProperty()方法,他接收三个参数:属性所在的对象，属性和一个描述符对象。

    var person = {};
    Object.defineProperty(persion, 'name', {
        configurable: false,
        writeable: false,
        value: 'jack'
    });
    console.log(person.name);//jack
    delete person.name;
    person.name = 'lily';
    console.log(person.name);//jack

可以看出delete及重置person.name都没有生效。

#### 2.访问器属性:
它主要包含一对getter和setter函数,在读取访问器属性时,会调用getter返回有效值;
写入访问器属性时,调用setter,写入新值。

* [Configurable]:是否可以通过delete删除重新定义属性。
* [Numberable]: 是否可以通过for-in循环查找重新定义属性。
* [Get]:读取属性时调用,默认undefined。
* [Set]:写入时调用，默认undefined。

访问属性不能直接定义，必须使用definedProperty()来定义,如下:

    var person = {
        age: 18
    };
    Object.definedPropery(person, 'isadult', {
        get: function(){
            if (this.age>18){
                return age;
            }
            return false;
        }
    });
    console.log(person.isadult?'成年':'未成年');//成年

从上面可知，定义访问器属性时getter与setter函数不是必须的,并且，在定义getter与setter时不能指定属性的configurable及writable特性；此外,ECMA-262（5）还提供了一
个Object.defineProperties()方法，可以用来一次性定义多个属性的特性：

    var person = {};
    Object.defineProperties(person,{
        _age:{
            value:19
        },
        isAdult:{
            get: function () {
                if (this._age >= 18) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });
    alert(person.isAdult?'成年':'未成年');//成年

上述代码使用Object.defineProperties()方法同时定义了_age及isAudlt两个属性的特性
此外，使用Object.getOwnPropertyDescriptor()方法可以取得给定属性的特性：

    var descriptor = Object.getOwnPropertyDescriptor(person,'_age');
    alert(descriptor.value);//19

对于数据属性，可以取得：configurable,enumberable,writable和value；
对于访问器属性，可以取得：configurable,enumberable,get和set