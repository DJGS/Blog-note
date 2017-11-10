## 属性嵌套简写

    .border {
        border: 1px solid #ccc {
            left: 0;
            right: 0;
        }
    }

## 混合器引用

    @mixin border-line {
        border-bottom: 1px solid #ccc;
    }
    *引用*
    .demo {
        @include border-line;
    }

## 参数混合器

    @mixin link-colors($normal, $hover, $visited) {
      color: $normal;
      &:hover { color: $hover; }
      &:visited { color: $visited; }
    }

    a {
      @include link-colors(blue, red, green);
    }
    //Sass最终生成的是：
    a { color: blue; }
    a:hover { color: red; }
    a:visited { color: green; }

## 继承 @extend

    //通过选择器继承继承样式
    .error {
      border: 1px solid red;
      background-color: #fdd;
    }
    .seriousError {
      @extend .error;
      border-width: 3px;
    }