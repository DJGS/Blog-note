## SASS语法

#### 变量

sass变量必须是$开头,后面紧跟变量名,变量名和变量值之间需要用(:)分隔开，如果后面加上(!default)表示默认值。

    $fontfamily: Miscroft Yahei;
    $bg-color: #333333;

    body {
        font-family: $fontfamily;
        color: $bg-color;
    }

##### 覆盖默认变量

    $baseline: 3;
    $baseline: 4 !default;

##### 特殊变量

一般我们定义的变量都为属性值，可直接使用，但是如果变量作为属性或在某些特殊情况下等则必须要以#{$variables}形式使用。
    
    //应用于class和属性
    .border-#{$borderDirection}{
      border-#{$borderDirection}:1px solid #ccc;
    }
    //应用于复杂的属性值
    body{
        font:#{$baseFontSize}/#{$baseLineHeight};
    }
    //css style
    //-------------------------------
    .border-top{
      border-top:1px solid #ccc;
    }
    body {
      font: 12px/1.5;
    }

##### 多值变量

多值变量分为list类型和map类型，简单来说list类型有点像js中的数组，而map类型有点像js中的对象。
list
list数据可通过空格，逗号或小括号分隔多个值，可用nth($var,$index)取值。关于list数据操作还有很多其他函数如length($list)，join($list1,$list2,[$separator])，append($list,$value,[$separator])等，具体可参考sass Functions（搜索List Functions即可）
定义
    
    //一维数据
    $px: 5px 10px 20px 30px;
    //二维数据，相当于js中的二维数组
    $px: 5px 10px, 20px 30px;
    $px: (5px 10px) (20px 30px);
    $linkColor:         #08c #333 !default;//第一个值为默认值，第二个鼠标滑过值
    a{
      color:nth($linkColor,1);
      &:hover{
        color:nth($linkColor,2);
      }
    }
    //css style
    //-------------------------------
    a{
      color:#08c;
    }
    a:hover{
      color:#333;
    }

##### map

map数据以key和value成对出现，其中value又可以是list。格式为：$map: (key1: value1, key2: value2, key3: value3);。可通过map-get($map,$key)取值。关于map数据还有很多其他函数如map-merge($map1,$map2)，map-keys($map)，map-values($map)等，具体可参考sass Functions（搜索Map Functions即可）
定义
    
    $headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
    @each $header, $size in $headings {
      #{$header} {
        font-size: $size;
      }
    }

    //css style
    //-------------------------------
    h1 {
      font-size: 2em; 
    }
    h2 {
      font-size: 1.5em; 
    }
    h3 {
      font-size: 1.2em; 
    }

#### 嵌套

sass可以进行选择器嵌套,表示层级关系,看起来很优雅
在选择器嵌套中，可以使用&表示父元素选择器

    nav {
            ul {
                width: 100px;
                height: 100px;
        }
    }
    //属性嵌套
    .fakeshadow {
      border: {
        style: solid;
        left: {
          width: 4px;
          color: #888;
        }
        right: {
          width: 2px;
          color: #ccc;
        }
      }
    }

    //css style
    //-------------------------------
    .fakeshadow {
      border-style: solid;
      border-left-width: 4px;
      border-left-color: #888;
      border-right-width: 2px;
      border-right-color: #ccc; 
    }
    实际不会这么用，估计得疯掉。

##### @at-root

sass3.3.0中新增的功能，用来跳出选择器嵌套的。默认所有的嵌套，继承所有上级选择器，但有了这个就可以跳出所有上级选择器。
普通跳出嵌套
@at-root (without: ...)和@at-root (with: ...)
默认@at-root只会跳出选择器嵌套，而不能跳出@media或@support，如果要跳出这两种，则需使用@at-root (without: media)，@at-root (without: support)。这个语法的关键词有四个：all（表示所有），rule（表示常规css），media（表示media），support（表示support，因为@support目前还无法广泛使用，所以在此不表）。我们默认的@at-root其实就是@at-root (without:rule)。

#### 导入

sass中导入其他的sass文件,最后编译为一个css文件,优于css的@import。
如果导入的是.css文件,那效果跟普通的css导入样式文件一样，导入的css文件
不会合并到编译后的文件中。而已@import方式存在。一般来说基础文件命名方式都
以_开头，如_main.scss。这种文件在导入的时候可以不写下划线。
    
    //a.scss
    body {
        color: red;
    }
    //b.css
    @import 'reset.css';
    @import 'a';
    p {
        background: green;
    }
    //转义b的文件
    @import 'reset.css';
    body {
        color: red;
    }
    p {
        background: green;
    }

    @import 'reset';

#### 注释

sass有两种注释方式，一种是css的注释方式/**/,另一种是//双斜杠形式的单行注释.
不过这种单行注释不会被转译出来。

#### mixin

sass中可用mixin定义一些代码片段,且可传参数,方便日后根据需求调用。
sass中使用@mixin声明混合，可以传递参数，参数名以$符号开始，多个参数以逗号分开，也可以给参数设置默认值。声明的@mixin通过@include来调用。

##### 无参数mixin

    @mixin center-block {
        margin-left:auto;
        margin-right:auto;
    }
    .demo{
        @include center-block;
    }

##### 有参数

    //css style
    //-------------------------------
    .demo{
        margin-left:auto;
        margin-right:auto;
    }

    @mixin box-sizing ($sizing) {
        -webkit-box-sizing: $sizing;
        -moz-box-sizing: $sizing;
        box-sizing: $sizing;
    }
    .box-border {
        border: 1px solid red;
        @include box-sizing(border-box);
    }
    //生成
    .box-border {
      border: 1px solid #ccc;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

##### 多个参数mixin

调用时可直接传入值，如@include传入参数的个数小于@mixin定义参数的个数，则按照顺序表示，后面不足的使用默认值，如不足的没有默认值则报错。除此之外还可以选择性的传入参数，使用参数名与值同时传入。
    
    @mixin horizontal-line($border:1px dashed #ccc, $padding:10px){
        border-bottom:$border;
        padding-top:$padding;
        padding-bottom:$padding;  
    }
    .imgtext-h li{
        @include horizontal-line(1px solid #ccc);
    }
    .imgtext-h--product li{
        @include horizontal-line($padding:15px);
    }

    //css style
    //-------------------------------
    .imgtext-h li {
        border-bottom: 1px solid #cccccc;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .imgtext-h--product li {
        border-bottom: 1px dashed #cccccc;
        padding-top: 15px;
        padding-bottom: 15px;
    }

#### 扩展/继承

sass可以通过@extend来实现代码组合声明,使代码更加优越简洁。

##### 占位选择器%
从sass 3.2.0以后就可以定义占位选择器%。这种选择器的优势在于：如果不调用则不会有任何多余的css文件，避免了以前在一些基础的文件中预定义了很多基础的样式，然后实际应用中不管是否使用了@extend去继承相应的样式，都会解析出来所有的样式。占位选择器以%标识定义，通过@extend调用。

    .demo {
        width: 100px;
        height: 1000px;
    }
    .demo-1 {
        @extend .demo;
        color: red;
    }
    .demo-2 {
        @extend .dmeo;
        color: green;
    }

#### 运算

sass可进行简单的加减乘除运算。

    .container { width: 100%; }

    article[role="main"] {
      float: left;
      width: 600px / 960px * 100%;
    }

    aside[role="complimentary"] {
      float: right;
      width: 300px / 960px * 100%;
    }
    //css
    .container {
      width: 100%;
    }

    article[role="main"] {
      float: left;
      width: 62.5%;
    }

    aside[role="complimentary"] {
      float: right;
      width: 31.25%;
    }

#### 函数

sass定义了很多函数可供使用，当然你也可以自己定义函数，以@fuction开始。sass的官方函数链接为：sass fuction，实际项目中我们使用最多的应该是颜色函数，而颜色函数中又以lighten减淡和darken加深为最，其调用方法为lighten($color,$amount)和darken($color,$amount)，它们的第一个参数都是颜色值，第二个参数都是百分比。

    $baseFontSize:      10px !default;
    $gray:              #ccc !defualt;        

    // pixels to rems 
    @function pxToRem($px) {
      @return $px / $baseFontSize * 1rem;
    }

    body{
      font-size:$baseFontSize;
      color:lighten($gray,10%);
    }
    .test{
      font-size:pxToRem(16px);
      color:darken($gray,10%);
    }

    //css style
    //-------------------------------
    body{
      font-size:10px;
      color:#E6E6E6;
    }
    .test{
      font-size:1.6rem;
      color:#B3B3B3;
    }

#### 条件判断及循环

@if判断
@if可一个条件单独使用，也可以和@else结合多条件使用

    $lte7: true;
    $type: monster;
    .ib{
        display:inline-block;
        @if $lte7 {
            *display:inline;
            *zoom:1;
        }
    }
    p {
      @if $type == ocean {
        color: blue;
      } @else if $type == matador {
        color: red;
      } @else if $type == monster {
        color: green;
      } @else {
        color: black;
      }
    }

    //css style
    //-------------------------------
    .ib{
        display:inline-block;
        *display:inline;
        *zoom:1;
    }
    p {
      color: green; 
    }