# 简介

这是一个用于增强 Google Gemini 对话界面的 Tampermonkey 脚本。

## 主要功能

### 1. 界面元素控制
支持自定义隐藏以下元素：
- **侧边栏**：隐藏“我的内容”入口按钮。
- **侧边栏**：隐藏“我的内容”内容预览。
- **底部**：隐藏“Gemini 的回答未必正确无误，请注意核查”的免责声明。
- **输入框**：移除输入框上方的渐变遮罩（彻底解决长截图时的阴影接缝问题）。

### 2. 页面布局调整
- **聊天容器**：调整左右边距（支持 `px` 或 `%`），轻松调整阅读宽幅。
- **输入区域**：调整底部边距。
- **阈值限制**：限制左右边距合计不超过 80%，防止设置过大导致内容消失。

### 3. 回答内容间距调整
- **段落 (P)**：调整段落下间距。
- **标题 (H1-H6)**：调整标题的上、下间距。
- **列表 (UL/OL)**：调整列表整体的上、下间距。
- **列表项 (LI)**：调整列表项之间的上、下间距。
- **表格 (Table)**：调整表格下边距，并优化水平滚动条显示（解决多出下间距的问题）。

### 4. 代码块增强
- **行高调整**：调整代码行高（支持倍数或像素）。
- **高度限制**：调整代码块最大高度，超出时显示滚动条，避免页面过长。

### 5. 剪贴板优化
- **删除错误空行**：开启后，复制普通文本时会删除多出的错误空行。

### 6. 便捷设置面板
- **原生融合入口**：设置按钮位于右上角（用户头像和文件图标左边），与原生界面完美融合。
- **滚轮调节**：支持设置值输入框直接用**鼠标滚轮**增减数值。

# 资源

- Github：[https://github.com/duanluan/tampermonkey-scripts/tree/main/gemini-pro](https://github.com/duanluan/tampermonkey-scripts/tree/main/gemini-pro)
- Greasy Fork：[https://greasyfork.org/zh-CN/scripts/558517](https://greasyfork.org/zh-CN/scripts/558517)
- OpenUserJS：[https://openuserjs.org/scripts/duanluan/Gemini_Pro](https://openuserjs.org/scripts/duanluan/Gemini_Pro)
