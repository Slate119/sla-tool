import json
import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext

def format_json(input_str):
    try:
        # 解析输入的JSON字符串
        parsed = json.loads(input_str)
        # 格式化JSON，缩进为4个空格
        formatted = json.dumps(parsed, indent=4)
        return formatted
    except json.JSONDecodeError:
        messagebox.showerror("错误", "无效的JSON字符串")
        return None

def compress_json(input_str):
    try:
        # 解析输入的JSON字符串
        parsed = json.loads(input_str)
        # 压缩JSON，去掉所有空白字符
        compressed = json.dumps(parsed, separators=(',', ':'))
        return compressed
    except json.JSONDecodeError:
        messagebox.showerror("错误", "无效的JSON字符串")
        return None

def process():
    input_text = input_area.get("1.0", tk.END).strip()
    if not input_text:
        messagebox.showwarning("警告", "请输入JSON字符串")
        return
    
    if var.get() == 1:  # 格式化
        result = format_json(input_text)
    else:  # 压缩
        result = compress_json(input_text)
    
    if result:
        output_area.delete("1.0", tk.END)
        output_area.insert(tk.END, result)

def copy_input():
    text = input_area.get("1.0", tk.END).strip()
    if text:
        root.clipboard_clear()
        root.clipboard_append(text)
        root.update()
        status_label.config(text="已复制输入内容到剪贴板")
    else:
        status_label.config(text="输入内容为空，无法复制")

def copy_output():
    text = output_area.get("1.0", tk.END).strip()
    if text:
        root.clipboard_clear()
        root.clipboard_append(text)
        root.update()
        status_label.config(text="已复制输出内容到剪贴板")
    else:
        status_label.config(text="输出内容为空，无法复制")

def paste_to_input():
    try:
        text = root.clipboard_get()
        input_area.delete("1.0", tk.END)
        input_area.insert(tk.END, text)
        status_label.config(text="已从剪贴板粘贴内容")
    except tk.TclError:
        status_label.config(text="剪贴板为空或无法访问")
    except Exception as e:
        status_label.config(text=f"粘贴失败: {str(e)}")

def clear_input():
    input_area.delete("1.0", tk.END)
    status_label.config(text="已清空输入区域")

def clear_output():
    output_area.delete("1.0", tk.END)
    status_label.config(text="已清空输出区域")

# 创建主窗口
root = tk.Tk()
root.title("JSON格式化工具")
root.geometry("800x600")
root.minsize(600, 400)

# 创建输入区域
input_frame = ttk.LabelFrame(root, text="输入JSON字符串")
input_frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

input_area = scrolledtext.ScrolledText(input_frame, height=10, wrap=tk.WORD)
input_area.pack(padx=5, pady=5, fill=tk.BOTH, expand=True)

# 输入区域按钮框架
input_buttons = ttk.Frame(input_frame)
input_buttons.pack(fill=tk.X, padx=5, pady=2)

paste_btn = ttk.Button(input_buttons, text="粘贴", command=paste_to_input)
paste_btn.pack(side=tk.LEFT, padx=2)
copy_input_btn = ttk.Button(input_buttons, text="复制", command=copy_input)
copy_input_btn.pack(side=tk.LEFT, padx=2)
clear_input_btn = ttk.Button(input_buttons, text="清空", command=clear_input)
clear_input_btn.pack(side=tk.LEFT, padx=2)

# 创建操作选择区域
operation_frame = ttk.LabelFrame(root, text="操作")
operation_frame.pack(padx=10, pady=5, fill=tk.X)

operation_inner = ttk.Frame(operation_frame)
operation_inner.pack(padx=10, pady=10, fill=tk.X)

var = tk.IntVar(value=1)
format_radio = ttk.Radiobutton(operation_inner, text="格式化JSON", variable=var, value=1)
compress_radio = ttk.Radiobutton(operation_inner, text="压缩JSON", variable=var, value=2)
format_radio.pack(side=tk.LEFT, padx=5)
compress_radio.pack(side=tk.LEFT, padx=5)

process_button = ttk.Button(operation_inner, text="处理", command=process, width=10)
process_button.pack(side=tk.LEFT, padx=20)

# 创建输出区域
output_frame = ttk.LabelFrame(root, text="输出结果")
output_frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

output_area = scrolledtext.ScrolledText(output_frame, height=10, wrap=tk.WORD)
output_area.pack(padx=5, pady=5, fill=tk.BOTH, expand=True)

# 输出区域按钮框架
output_buttons = ttk.Frame(output_frame)
output_buttons.pack(fill=tk.X, padx=5, pady=2)

copy_output_btn = ttk.Button(output_buttons, text="复制", command=copy_output)
copy_output_btn.pack(side=tk.LEFT, padx=2)
clear_output_btn = ttk.Button(output_buttons, text="清空", command=clear_output)
clear_output_btn.pack(side=tk.LEFT, padx=2)

# 添加状态栏
status_frame = ttk.Frame(root)
status_frame.pack(fill=tk.X, side=tk.BOTTOM, padx=10, pady=5)
status_label = ttk.Label(status_frame, text="就绪", anchor=tk.W)
status_label.pack(fill=tk.X, side=tk.LEFT)

# 添加帮助按钮
help_btn = ttk.Button(status_frame, text="帮助", 
                      command=lambda: messagebox.showinfo("帮助", 
                      "JSON格式化工具使用说明:\n\n"
                      "1. 在上方输入框中粘贴或输入JSON字符串\n"
                      "2. 选择'格式化JSON'使JSON更易读\n"
                      "3. 选择'压缩JSON'去除所有空格和换行\n"
                      "4. 点击'处理'按钮执行操作\n"
                      "5. 结果将显示在下方输出框中\n"
                      "6. 使用'复制'按钮复制内容到剪贴板"))
help_btn.pack(side=tk.RIGHT, padx=5)

root.mainloop()