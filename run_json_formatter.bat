@echo off
echo 正在启动JSON格式化工具...
python json_formatter.py
if %errorlevel% neq 0 (
    echo 程序启动失败，可能是因为Python未安装或路径不正确。
    echo 请确保已安装Python 3.x，并将其添加到系统环境变量。
    pause
)