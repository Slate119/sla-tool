// 页面工具切换修复脚本
document.addEventListener('DOMContentLoaded', () => {
    console.log('开始修复页面切换功能');
    
    // 页面切换相关元素
    const jsonToolBtn = document.getElementById('jsonToolBtn');
    const curlToolBtn = document.getElementById('curlToolBtn');
    const passwordToolBtn = document.getElementById('passwordToolBtn');
    const jsonToolPage = document.getElementById('jsonToolPage');
    const curlToolPage = document.getElementById('curlToolPage');
    const passwordToolPage = document.getElementById('passwordToolPage');
    
    // 如果找不到这些元素，打印错误
    if (!jsonToolBtn || !curlToolBtn || !passwordToolBtn || 
        !jsonToolPage || !curlToolPage || !passwordToolPage) {
        console.error('找不到页面元素!', {
            jsonToolBtn, curlToolBtn, passwordToolBtn,
            jsonToolPage, curlToolPage, passwordToolPage
        });
        return;
    }
    
    console.log('所有页面元素加载成功');
    
    // 简化的页面切换函数
    function switchToPage(pageId) {
        console.log('切换到页面:', pageId);
        
        // 隐藏所有页面
        [jsonToolPage, curlToolPage, passwordToolPage].forEach(page => {
            if (page) {
                page.classList.remove('active');
                page.style.display = 'none';
            }
        });
        
        // 重置所有按钮
        [jsonToolBtn, curlToolBtn, passwordToolBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        
        // 根据ID显示对应页面
        let targetPage, targetBtn;
        
        if (pageId === 'json') {
            targetPage = jsonToolPage;
            targetBtn = jsonToolBtn;
        } else if (pageId === 'curl') {
            targetPage = curlToolPage;
            targetBtn = curlToolBtn;
        } else if (pageId === 'password') {
            targetPage = passwordToolPage;
            targetBtn = passwordToolBtn;
        }
        
        // 显示目标页面
        if (targetPage && targetBtn) {
            targetPage.classList.add('active');
            targetPage.style.display = 'block';
            targetBtn.classList.add('active');
            console.log(`页面 ${pageId} 已显示`);
        }
    }
    
    // 添加点击事件监听
    jsonToolBtn.addEventListener('click', function(event) {
        event.preventDefault();
        switchToPage('json');
    });
    
    curlToolBtn.addEventListener('click', function(event) {
        event.preventDefault();
        switchToPage('curl');
    });
    
    passwordToolBtn.addEventListener('click', function(event) {
        event.preventDefault();
        switchToPage('password');
    });
    
    console.log('所有事件监听器已添加');
    
    // 初始化显示JSON工具页面
    setTimeout(() => {
        switchToPage('json');
        console.log('初始页面设置完成');
    }, 100);
});