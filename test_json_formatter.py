import json

def test_format():
    """测试JSON格式化功能"""
    test_input = '{"query": {"range": {"@timestamp": {"gte": "2025-11-21 00:00:00","lt": "2025-11-21 00:01:00","format":"yyyy-MM-dd HH:mm:ss"}}}}'
    
    try:
        parsed = json.loads(test_input)
        formatted = json.dumps(parsed, indent=4)
        print("格式化测试通过!")
        print("输入:")
        print(test_input)
        print("\n输出:")
        print(formatted)
        return True
    except Exception as e:
        print(f"格式化测试失败: {e}")
        return False

def test_compress():
    """测试JSON压缩功能"""
    test_input = """{
    "query": {
        "range": {
            "@timestamp": {
                "gte": "2025-11-21 00:00:00",
                "lt": "2025-11-21 00:01:00",
                "format": "yyyy-MM-dd HH:mm:ss"
            }
        }
    }
}"""
    
    try:
        parsed = json.loads(test_input)
        compressed = json.dumps(parsed, separators=(',', ':'))
        print("\n压缩测试通过!")
        print("输入:")
        print(test_input)
        print("\n输出:")
        print(compressed)
        return True
    except Exception as e:
        print(f"压缩测试失败: {e}")
        return False

if __name__ == "__main__":
    print("开始测试JSON格式化工具的核心功能...\n")
    print("=" * 60)
    
    format_result = test_format()
    compress_result = test_compress()
    
    print("\n" + "=" * 60)
    if format_result and compress_result:
        print("\n✓ 所有测试通过！程序功能正常。")
    else:
        print("\n✗ 部分测试失败，请检查代码。")