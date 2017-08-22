# MeiTuan App Write In latest React-Native(0.44.0)

Github：https://github.com/huanxsd/MeiTuan

简书：http://www.jianshu.com/p/9211f42d5c25

##  screen shot for iOS

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/iOS_0.png">

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/iOS_1.png">

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/iOS_2.png">

## screen shot for Android

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/Android_0.png">

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/Android_1.png">

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/Android_2.png">

## Setup

1. **Clone the repo**

```
$ git clone https://github.com/huanxsd/MeiTuan.git
$ cd MeiTuan
```

2. **Install dependencies** (npm v3+):

```
$ npm install
```


3. **Running on iOS:**

```
$ react-native run-ios
```

## Troubleshooting

> Could not connect to development server

In a separate terminal window run:

```
$ react-native start
```

## Dependency

* [react-navigation](https://github.com/react-community/react-navigation)
* [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)

## Contact

If you have any suggestions, leave a message here
[简书](http://www.jianshu.com/p/9211f42d5c25)

## At last

If you like this project, please give me a star  :)


# 高仿美团客户端 React-Native版(0.44.0)

## 简介

这是一个用React-Native写的美团客户端。

使用了React-Native 0.44.0版本。遵循ES6语法。

主要实现了美团的四个一级页面（团购、附近、订单、我的），以及部分二级页面（团购详情、Web页面）。

所有功能都是用JavaScript写的，iOS和Android的代码复用率达到了97%（别问我这个数字怎么来的，我瞎掰的）。

这个Demo的静态类型检查工具使用了Facebook的Flow。它让我写JavaScript的时候，更有安全感。个人觉得可以用两个字形容这个工具，那就是：灰常牛逼！

我试着让这个Demo的结构尽量接近实际项目，同时使用比较简单方式去实现功能。这样可以让刚接触ReactNative的人（比如我自己...）更够容易理解代码。

该项目没有使用Redux。因为个人觉得目前大部分的中小型App并不需要Redux。如果盲目的将Redux添加到项目中，并不能带来太多的益处。

鲁迅曾说过：
> "如果你不知道是否需要 Redux，那就是不需要它。"

Redux的作者 Dan Abramov 说过：
> "只有遇到 React 实在解决不了的问题，你才需要 Redux 。"

哦，另外一个没有用Redux的原因，是我还不太会用。

App的页面跳转、TabBar、Navigation，全部通过[react-navigation](https://github.com/react-community/react-navigation)实现。这是一个非常牛逼的库，可以实现很多自定义的跳转功能。最早是通过[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)实现跳转。在遇见react-navigation后，我果断放弃了react-native-router-flux。

App中很多页面都使用了同一个网络接口，这不是为了让代码更加简洁，仅仅是我偷懒 >.<

## 第三方依赖

* [react-navigation](https://github.com/react-community/react-navigation)
* [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)

## 安装

1. **Clone the repo**

```
$ git clone https://github.com/huanxsd/MeiTuan.git
$ cd MeiTuan
```

2. **Install dependencies** (npm v3+)

```
$ npm install
```

3. **Running on iOS**

```
$ react-native run-ios
```

## 常见问题

> Could not connect to development server

打开新的terminal窗口，并执行:

```
$ react-native start
```

## 瞎扯蛋

我之前一直在写Objective-C，但不久前看了ES6的语法和Flex布局方式后，我便马上爱上了这种开发方式。

这个Demo花了大概5天时间，是我的第一个ReactNative项目。

如果对这个Demo有任何的意见或建议，或者喜欢ReactNative的朋友，欢迎在下方留言。我会在第一时间回复 :)

另外，不要问我为什么英文说明那么点，中文说明这么多。怪英语老师咯

## 最后

如果您喜欢这个Demo，请给我一个star   :)

Github：https://github.com/huanxsd/MeiTuan

我将持续更新这个Demo

如果您觉得它对您有所帮助，可以通过微信给作者捐赠。我将继续努力，开源更多源码。
捐赠时，请留下您的姓名或昵称，我将不定期更新在下方，谢谢。

<img src="https://github.com/huanxsd/MeiTuan/blob/master/screenshot/wechat.png" width = "480" >

捐赠名单（按时间顺序）：

Xing201314

炎炎乱舞

cao10liu24


