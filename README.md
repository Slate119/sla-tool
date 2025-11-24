# JSON格式化工具 Pro v2.0.0

一个功能强大的JSON处理工具，支持格式化、压缩和多格式转换。提供Web版本和Python桌面版。

> 🔒 **隐私保护**：所有数据在浏览器本地处理，不会上传到服务器

## ✨ 核心功能

### 基础功能（P0）
- 🎯 **精确错误定位** - 准确显示JSON语法错误的行号和列号
- 📐 **可选缩进设置** - 支持2空格或4空格缩进
- 🎨 **语法高亮** - 彩色显示键、值、数字、布尔值等元素
- ✅ **实时验证** - 输入时自动检查JSON格式有效性
- ⚡ **性能优化** - 支持最大5MB文件，大文件智能警告

### 高级功能（P1）
- 🔄 **多格式转换**：
  - JSON → YAML（基于js-yaml 4.1.0）
  - JSON → XML（自定义转换器）
  - JSON ↔ 转义字符串（处理嵌套JSON）
- 💾 **智能下载** - 根据转换格式自动设置文件扩展名
- 📋 **增强复制** - 一键复制输入或输出内容
- 🚀 **快捷键支持** - Ctrl+Enter 快速处理

### 用户体验
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎯 **状态指示** - 清晰的处理状态反馈
- 🛡️ **隐私保护** - 明确的本地处理声明
- ⌨️ **防抖验证** - 避免频繁验证影响性能

## 🛠️ 技术栈

### Web 版本
- **前端框架**：HTML5 + CSS3 + JavaScript ES6+
- **UI设计**：Flexbox/Grid 响应式布局
- **外部依赖**：
  - Font Awesome 6.0.0（图标库）
  - js-yaml 4.1.0（YAML转换）
- **特性**：
  - 纯前端实现，无需服务器
  - 使用现代Web API（Clipboard API、Blob API）
  - 防抖优化和性能监控

### Python 桌面版
- **GUI框架**：tkinter
- **核心库**：json 标准库
- **平台支持**：Windows / macOS / Linux
- **要求**：Python 3.6+ 和 Tkinter（标准库）

## 🚀 快速开始

### Web 版本（推荐）

1. **打开工具**
   - 直接打开 `index.html` 或访问在线版本
   
2. **输入JSON**
   - 粘贴JSON字符串到输入框
   - 或点击"示例"按钮加载示例数据

3. **选择操作**
   - **格式化**：选择2或4空格缩进
   - **压缩**：移除所有空格换行
   - **转换**：选择目标格式（YAML/XML/字符串）

4. **处理并使用**
   - 点击"处理"按钮（或按 Ctrl+Enter）
   - 复制结果或下载文件

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

### 使用示例

1. **格式化JSON**:
   ```json
   // 输入紧凑JSON
   {"name":"JSON工具Pro","version":"2.0.0","features":["格式化","压缩","转换"]}
   
   // 输出格式化JSON
   {
     "name": "JSON工具Pro",
     "version": "2.0.0",
     "features": [
       "格式化",
       "压缩",
       "转换"
     ]
   }
   ```

2. **转换为YAML**:
   ```yaml
   # 从JSON转换为YAML
   name: JSON工具Pro
   version: 2.0.0
   features:
     - 格式化
     - 压缩
     - 转换
   ```