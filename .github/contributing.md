# 贡献指北

很高兴你使用这个包，如果您找到这里说明您已经准备好做出贡献，很高兴您能为此做出贡献。


## 拉取请求


- 如果是添加一个新功能:

  - 请提供一个添加此功能的必要理由，理想情况下，您应该先开一个issues讨论并一致同意然后再进行处理，我不想让你的努力白费

- 如果是修复一个Bug:

  - 在PR中提供bug的详细说明，最好能有更加清楚的演示，包括但不限于(线上演示地址，视频，图片).

- 在处理 PR 时可以有多个小的提交 - GitHub 可以在合并之前自动压缩它们

- 提交信息必须遵循[常规提交规范](https://conventionalcommits.org)，具体配置哪些[提交信息约定]在此处查看(https://github.com/ajiho/think-weather/blob/main/composer.json#L57)以便可以自动生成变更日志



## 开发设置

你需要安装 [composer](https://getcomposer.org/)

然后运行:

```sh
$ composer install
```

依赖安装完毕后您会自动注册一些git-hook钩子,在您提交代码前会自动对代码格式和提交信息做检查
