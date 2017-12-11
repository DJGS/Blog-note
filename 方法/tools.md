## js常用的一些操作方法
1.找出数组arr中item的位置，如果没有返回-1.
    
    function getPosition(arr, item){
        //数组的indexOf是在es5中扩展的方法
        if(Array.prototype.indexOf){
            return arr.indexOf(item);
        }
        for(var i=0; i<arr.length; i++){
            if(arr[i]===item){
                return i;
            }
        }
        return -1;
    }

2.求数组的arr和
    
    function sum(){
        /*
         * reduce函数传入一个callback函数,四个参数,上次调用返回值,当前值,当前素
         * 的索引,传入的数组
         */
        return arr.reduce(function(pre, next, index, arr){
            return pre+next;
        })

        //还有一种取巧的做法 eval可以将方法转为字符串运行,
        //join将数组分割成字符串
        return eval(arr.join('+'));
    }

3.返回删除数组arr中所有与item相同的项。

    function deleteItem(arr, item){
        //filter函数三个参数，当前元素值，当前元素索引，当前元素属于的数组对象
        //返回一个新的数组
        return arr.filter(function(current){
            return current != item;
        })
    }

4.删除数组arr中与item相同的项，返回原数组。

    function removeItem(arr, item){
        for( var i=0; i<arr.legth; i++){
            if( arr[i]===item ){
                /*
                 * 该方法会改变原数组,三个参数,index数组开始下标，len替换删除的
                 * 长度 item:替换的值，删除操作的话 item为空
                 */
                arr.splice(i,1);
                i--;
            } 
        }
        return arr;
    }

5.为数组arr添加元素item
    
    function addItem(arr, item){
        //不会改变现有数组，返回一个新的引用
        //slice(start, end) 返回新的数组，截取数组
        return arr.concat(item);
    }