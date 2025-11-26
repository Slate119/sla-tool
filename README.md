# 开发工具箱 Pro v3.0.0

一个集成多种实用开发工具的Web应用，包括JSON格式化、CURL解析和密码工具。提供Web版本和Python桌面版。

> 🔒 **隐私保护**：所有数据在浏览器本地处理，不会上传到服务器

## ✨ 核心功能

### 🎯 JSON 格式化工具
#### 基础功能（P0）
- 🎯 **精确错误定位** - 准确显示JSON语法错误的行号和列号
- 📐 **可选缩进设置** - 支持2空格或4空格缩进
- 🎨 **语法高亮** - 彩色显示键、值、数字、布尔值等元素
- ✅ **实时验证** - 输入时自动检查JSON格式有效性
- ⚡ **性能优化** - 支持最大5MB文件，大文件智能警告

#### 高级功能（P1）
- 🔄 **多格式转换**：
  - JSON → YAML（基于js-yaml 4.1.0）
  - JSON → XML（自定义转换器）
  - JSON ↔ 转义字符串（处理嵌套JSON）
- 💾 **智能下载** - 根据转换格式自动设置文件扩展名
- 📋 **增强复制** - 一键复制输入或输出内容
- 🚀 **快捷键支持** - Ctrl+Enter 快速处理

### 🔧 CURL 解析工具
- 📝 **命令解析** - 智能解析CURL命令结构
- 🔍 **信息提取** - 自动提取URL、请求方法、请求头、参数等
- 🎨 **格式化展示** - 清晰展示解析结果，支持语法高亮
- 📋 **快速复制** - 一键复制解析结果
- ⚡ **示例功能** - 内置示例CURL命令供参考

### 🔐 密码工具
#### 密码生成器
- 🎲 **灵活配置** - 自定义密码长度（4-128位）
- 🔤 **字符选择** - 大写字母、小写字母、数字、特殊符号可选
- 🚫 **排除相似字符** - 可选排除易混淆字符（0oO1lI）
- 📦 **批量生成** - 一次生成5个密码供选择
- 💪 **强度显示** - 实时显示密码强度等级

#### 密码强度检测
- 🔍 **深度分析** - 检测密码长度、复杂度、熵值
- ?? **可视化显示** - 强度条直观展示密码安全等级
- 💡 **安全建议** - 根据分析结果提供改进建议
- 🎯 **详细评估** - 显示包含字符类型和安全评分

### 用户体验
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎯 **状态指示** - 清晰的处理状态反馈
- 🛡️ **隐私保护** - 明确的本地处理声明
- ⌨️ **防抖验证** - 避免频繁验证影响性能
- 🎨 **现代化UI** - 渐变色背景和流畅动画效果
- 🔄 **页面切换** - 三个工具之间无缝切换

## 🛠️ 技术栈

### Web 版本
- **前端框架**：HTML5 + CSS3 + JavaScript ES6+
- **UI设计**：Flexbox/Grid 响应式布局，全局导航系统
- **外部依赖**：
  - Font Awesome 6.0.0（图标库）
  - js-yaml 4.1.0（YAML转换）
- **架构特点**：
  - 多页面应用（MPA）架构，三个独立工具页面
  - 单页面应用（SPA）体验，页面间无刷新切换
  - 模块化JavaScript，独立的页面切换控制脚本
- **特性**：
  - 纯前端实现，无需服务器
  - 使用现代Web API（Clipboard API、Blob API、Crypto API）
  - 防抖优化和性能监控
  - 固定顶部导航栏，提升用户体验

### Python 桌面版
- **GUI框架**：tkinter
- **核心库**：json 标准库
- **平台支持**：Windows / macOS / Linux
- **要求**：Python 3.6+ 和 Tkinter（标准库）

## 🚀 快速开始

### Web 版本（推荐）

1. **打开工具**
   - 直接双击 `index.html` 在浏览器中打开
   - 或使用本地服务器：`python -m http.server 8000`
   
2. **选择工具**
   - 点击顶部导航栏切换不同工具
   - **JSON 格式化** - JSON数据处理
   - **CURL 解析** - 解析CURL命令
   - **密码工具** - 生成和检测密码

3. **JSON 格式化工具使用**
   - 粘贴JSON字符串到输入框
   - 或点击"示例"按钮加载示例数据
   - 选择操作：格式化、压缩或转换
   - 点击"处理"按钮（或按 Ctrl+Enter）
   - 复制结果或下载文件

4. **CURL 解析工具使用**
   - 粘贴CURL命令到输入框
   - 点击"示例curl命令"查看示例
   - 点击"解析命令"按钮
   - 查看结构化的解析结果
   - 复制需要的信息

5. **密码工具使用**
   - **生成密码**：配置选项后点击"生成密码"
   - **批量生成**：一次生成5个密码供选择
   - **检测强度**：输入密码查看详细安全分析
   - **显示/隐藏**：切换密码可见性

### Python 桌面版

#### Windows
1. 确保您的电脑已安装Python 3.x
   - 如果尚未安装，请从[Python官网](https://www.python.org/downloads/)下载并安装
   - 安装时请勾选"Add Python to PATH"选项

2. 双击运行`run_json_formatter.bat`文件
   - 或者打开命令提示符(cmd)，导航到程序所在文件夹，然后运行:
   ```
   python json_formatter.py
   ```

#### Mac/Linux
```bash
python3 json_formatter.py
```

## 💡 使用示例

### 1. JSON 格式化
```json
// 输入紧凑JSON
{"name":"开发工具箱","version":"3.0.0","tools":["JSON","CURL","密码"]}

// 输出格式化JSON
{
  "name": "开发工具箱",
  "version": "3.0.0",
  "tools": [
    "JSON",
    "CURL",
    "密码"
  ]
}
```

### 2. CURL 命令解析
```bash
# 输入CURL命令
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token123" \
  -d '{"name":"John","email":"john@example.com"}'

# 解析结果展示
- 请求方法：POST
- URL：https://api.example.com/users
- 请求头：Content-Type, Authorization
- 请求体：JSON格式用户数据
```

### 3. 密码生成
```
配置：长度16位，包含大小写字母+数字+特殊符号
生成结果：aB3$xK9#mN2@pQ7!
强度评级：非常强（熵值：95.3 bits）
```

### 4. 密码强度检测
```
输入密码：MyP@ssw0rd2024!
分析结果：
- 长度：15位
- 包含：大写字母、小写字母、数字、特殊符号
- 强度：强
- 熵值：84.2 bits
- 建议：密码强度良好，建议定期更换
```

使用效果：
![密码强度检测示例](https://example.com/password_strength.png)


## 📚 更多信息
运行视频和操作效果：
https://www.bilibili.com/video/BV1n8UbBKEn6/?buvid=XU90A5D99FC85387D0B5ED40FBDA495765354&is_story_h5=false&mid=tjPWlWTTyCeCx7uyLxfLjw%3D%3D&plat_id=147&share_from=ugc&share_medium=android&share_plat=android&share_session_id=9b64d341-0a07-406a-a207-3aeb1af576d5&share_source=WEIXIN&share_tag=s_i&timestamp=1764123996&unique_k=sqpCqwe&up_id=523850853&share_source=weixin