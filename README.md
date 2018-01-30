# vue-emoji
一个web端的表情包
安装和使用方法如下：

  npm install vue-emoji

  import emo from "emo/emoji"
  
  import emoUtil from "emo/util"

  emoUtil里包括两个方法，用来格式化表情与文字互排的情况
  
  emo是一个vue组件，里面加载了png表情图片
  
  后期会将emo里的图片合成到一张图片上，使用雪碧图减少请求量
  
  这一版是个很简单的表情包插件。以后的版本里会慢慢迭代出更好的功能，更优化的代码
