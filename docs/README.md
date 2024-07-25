
# think-weather文档

该文档使用[vitepress](https://vitepress.dev/)进行构建,虽然这是一个node开源项目,但是您一般只需要修改MD文件即可,为了保证文档效果正确，建议您在本地调试满意后再进行贡献

## 安装

```console
cd docs
npm install
```

## 本地调试文档

```console
npm dev
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，而无需重新启动服务器。

## 构建

```console
npm build
```

当您修改文档之后，会自动构建并在在文档中显示最新内容，提交之前您可以在本地尝试执行一下构建命令是否正常构建