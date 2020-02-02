## 用于调试webpack-dev-server搭建开发环境

### htmlwebpackplugin插件的filename会自动根据当前filename的层级及output filename的层级来插入script标签

比如：
```
...
output: {
  filename: 'static/js/bundle.js'
},
plugins: [
  new HtmlWebpackPlugin({
    template: 'view/index.html',
    filename: 'view/index.html',
    inject: true
  }) 
]
```

最终在dist目录下的index.html中会渲染为

```
<script src=../static/js/bundle.js></script>
```
