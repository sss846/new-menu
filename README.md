# PWA图标文件说明

## 必要的图标文件

PWA应用需要以下图标文件：

1. **icon-192x192.png** - 192x192像素的普通图标
2. **icon-512x512.png** - 512x512像素的普通图标
3. **maskable-icon-192x192.png** - 192x192像素的可遮罩图标
4. **maskable-icon-512x512.png** - 512x512像素的可遮罩图标
5. **screenshot-1.png** - 应用截图1
6. **screenshot-2.png** - 应用截图2

## 如何生成图标

### 使用Trae图片生成API

你可以使用Trae提供的图片生成API来创建这些图标：

#### 1. 生成普通图标

```
https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=food%20order%20app%20icon%20modern%20simple%20design&image_size=square
```

#### 2. 生成可遮罩图标（安全区域）

```
https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=food%20order%20app%20icon%20modern%20simple%20design%20safe%20zone&image_size=square
```

#### 3. 生成应用截图

```
https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=food%20order%20app%20interface%20mobile%20screenshot&image_size=portrait_4_3
```

## 图标要求

1. **格式**：PNG格式
2. **大小**：
   - 192x192像素（小图标）
   - 512x512像素（大图标）
   - 1280x720像素（截图）
3. **内容**：
   - 图标应简洁明了，与食品点餐主题相关
   - 可使用餐具、食物等元素
   - 颜色应与应用主题色（#667eea）协调

## 替换说明

生成图标后，将文件保存到本目录，并确保文件名与上述要求一致。

## 测试

在浏览器中打开应用，使用Chrome开发者工具的Application标签页检查PWA配置是否正确。

## 注意事项

- 可遮罩图标需要考虑安全区域，重要内容应位于中心
- 截图应展示应用的主要功能界面
- 图标应适配不同设备的显示需求
