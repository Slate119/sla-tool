document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // 页面切换相关元素
    const jsonToolBtn = document.getElementById('jsonToolBtn');
    const curlToolBtn = document.getElementById('curlToolBtn');
    const passwordToolBtn = document.getElementById('passwordToolBtn');
    const jsonToolPage = document.getElementById('jsonToolPage');
    const curlToolPage = document.getElementById('curlToolPage');
    const passwordToolPage = document.getElementById('passwordToolPage');
    const navMobileToggle = document.querySelector('.nav-mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    console.log('Navigation elements:', { 
        jsonToolBtn, curlToolBtn, passwordToolBtn, 
        jsonToolPage, curlToolPage, passwordToolPage,
        navMobileToggle, navMenu 
    });

    // 移动端导航切换
    navMobileToggle.addEventListener('click', () => {
        console.log('Mobile nav toggle clicked');
        navMenu.classList.toggle('active');
    });

    // 页面切换函数
    function switchToPage(targetPage) {
        console.log('开始切换页面到:', targetPage.id);
        
        try {
            // 先移除所有页面的active类
            const allPages = document.querySelectorAll('.tool-page');
            console.log('找到页面数量:', allPages.length);
            
            allPages.forEach((page, index) => {
                console.log(`页面 ${index}: ${page.id}, 当前display:`, getComputedStyle(page).display);
                page.classList.remove('active');
                page.style.display = 'none';
            });
            
            // 移除所有导航按钮的active类
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 显示目标页面
            console.log('设置目标页面为可见:', targetPage.id);
            targetPage.classList.add('active');
            
            // 直接强制设置内联样式
            targetPage.setAttribute('style', 'display: block !important');
            
            // 如果是curlToolPage，确保其直接子元素可见
            if (targetPage.id === 'curlToolPage' || targetPage.id === 'passwordToolPage') {
                console.log('特殊处理:', targetPage.id);
                // 确保所有直接子元素可见
                targetPage.childNodes.forEach(node => {
                    if (node.nodeType === 1) { // 元素节点
                        console.log('子元素:', node.tagName);
                        node.style.display = '';
                    }
                });
            }
            
            // 关闭移动端菜单
            if (navMenu) navMenu.classList.remove('active');
            
            // 检查页面切换后的实际状态
            setTimeout(() => {
                console.log('页面切换完成检查');
                console.log('目标页面display:', getComputedStyle(targetPage).display);
                console.log('目标页面visibility:', getComputedStyle(targetPage).visibility);
                console.log('目标页面opacity:', getComputedStyle(targetPage).opacity);
                console.log('目标页面classes:', targetPage.className);
            }, 10);
            
        } catch (error) {
            console.error('页面切换出错:', error);
        }
    }

    // 添加全局重置函数，用于恢复所有页面的默认状态
    function resetAllPages() {
        const allPages = document.querySelectorAll('.tool-page');
        allPages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // 仅显示JSON工具页面
        jsonToolPage.classList.add('active');
        jsonToolPage.style.display = 'block';
    }
    
    // 页面加载完成后，确保只有JSON工具页面显示
    resetAllPages();
    
    // JSON工具页面切换
    jsonToolBtn.addEventListener('click', () => {
        console.log('点击JSON格式化按钮');
        // 强制完全重置所有页面
        resetAllPages();
        // 再添加active类和设置当前页面
        jsonToolBtn.classList.add('active');
    });

    // CURL工具页面切换
    curlToolBtn.addEventListener('click', () => {
        console.log('点击CURL解析按钮');
        // 先重置所有按钮状态
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 再隐藏所有页面
        document.querySelectorAll('.tool-page').forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // 最后显示CURL页面并激活按钮
        curlToolPage.classList.add('active');
        curlToolPage.style.display = 'block';
        curlToolBtn.classList.add('active');
        
        // 确保CURL页面是可见的
        console.log('CURL页面可见性检查:', curlToolPage.id, getComputedStyle(curlToolPage).display);
    });

    // 密码工具页面切换
    passwordToolBtn.addEventListener('click', () => {
        console.log('点击密码工具按钮');
        // 先重置所有按钮状态
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 再隐藏所有页面
        document.querySelectorAll('.tool-page').forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // 最后显示密码工具页面并激活按钮
        passwordToolPage.classList.add('active');
        passwordToolPage.style.display = 'block';
        passwordToolBtn.classList.add('active');
        
        // 确保密码工具页面是可见的
        console.log('密码工具页面可见性检查:', passwordToolPage.id, getComputedStyle(passwordToolPage).display);
    });

    // 密码工具相关元素
    const generateTabBtn = document.getElementById('generateTabBtn');
    const checkTabBtn = document.getElementById('checkTabBtn');
    const passwordGenerateTab = document.getElementById('passwordGenerateTab');
    const passwordCheckTab = document.getElementById('passwordCheckTab');
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const generatePasswordBtn = document.getElementById('generatePasswordBtn');
    const batchGenerateBtn = document.getElementById('batchGenerateBtn');
    const passwordResult = document.getElementById('passwordResult');
    const passwordStatus = document.getElementById('passwordStatus');
    const passwordStrength = document.getElementById('passwordStrength');
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    const passwordInput = document.getElementById('passwordInput');
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    const passwordAnalysis = document.getElementById('passwordAnalysis');
    
    // 密码生成配置
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const excludeSimilar = document.getElementById('excludeSimilar');

    // 标签切换事件
    generateTabBtn.addEventListener('click', () => {
        generateTabBtn.classList.add('active');
        checkTabBtn.classList.remove('active');
        passwordGenerateTab.style.display = 'grid';
        passwordCheckTab.style.display = 'none';
    });

    checkTabBtn.addEventListener('click', () => {
        checkTabBtn.classList.add('active');
        generateTabBtn.classList.remove('active');
        passwordCheckTab.style.display = 'grid';
        passwordGenerateTab.style.display = 'none';
    });

    // 密码长度滑块事件
    passwordLength.addEventListener('input', () => {
        lengthValue.textContent = passwordLength.value;
    });

    // 生成密码函数
    function generatePassword(length, options) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const similarChars = 'iIlL1oO0';

        let chars = '';
        if (options.uppercase) chars += uppercaseChars;
        if (options.lowercase) chars += lowercaseChars;
        if (options.numbers) chars += numberChars;
        if (options.symbols) chars += symbolChars;
        if (options.excludeSimilar) {
            chars = chars.split('').filter(char => !similarChars.includes(char)).join('');
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    // 生成密码按钮点击事件
    generatePasswordBtn.addEventListener('click', () => {
        const length = parseInt(passwordLength.value);
        const options = {
            uppercase: includeUppercase.checked,
            lowercase: includeLowercase.checked,
            numbers: includeNumbers.checked,
            symbols: includeSymbols.checked,
            excludeSimilar: excludeSimilar.checked
        };

        const password = generatePassword(length, options);
        passwordResult.textContent = password;
        passwordStatus.textContent = '✓ 密码已生成';
        passwordStatus.style.color = '#28a745';
        
        // 评估密码强度
        const strength = evaluatePasswordStrength(password);
        passwordStrength.textContent = `强度: ${strength.score}`;
        passwordStrength.className = `strength-score ${strength.class}`;
    });

    // 批量生成密码按钮点击事件
    batchGenerateBtn.addEventListener('click', () => {
        const length = parseInt(passwordLength.value);
        const options = {
            uppercase: includeUppercase.checked,
            lowercase: includeLowercase.checked,
            numbers: includeNumbers.checked,
            symbols: includeSymbols.checked,
            excludeSimilar: excludeSimilar.checked
        };

        let passwords = '';
        for (let i = 0; i < 5; i++) {
            passwords += generatePassword(length, options) + '\n';
        }
        passwordResult.innerHTML = `<pre class="password-list">${passwords.trim()}</pre>`;
        passwordStatus.textContent = '✓ 已生成5个密码';
        passwordStatus.style.color = '#28a745';
        passwordStrength.textContent = '';
    });

    // 复制密码按钮点击事件
    copyPasswordBtn.addEventListener('click', () => {
        const password = passwordResult.textContent;
        if (password && password !== '点击"生成密码"开始') {
            navigator.clipboard.writeText(password)
                .then(() => {
                    showNotification('密码已复制到剪贴板', 'success');
                })
                .catch(err => {
                    console.error('无法复制密码: ', err);
                    showNotification('复制失败，请手动选择并复制', 'error');
                });
        } else {
            showNotification('没有可复制的密码', 'warning');
        }
    });

    // 显示/隐藏密码按钮点击事件
    showPasswordBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            showPasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });

    // 密码输入事件
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        if (password) {
            const strength = evaluatePasswordStrength(password);
            updatePasswordStrengthUI(strength);
            updatePasswordAnalysis(password, strength);
        } else {
            resetPasswordStrengthUI();
        }
    });

    // 评估密码强度函数
    function evaluatePasswordStrength(password) {
        let score = 0;
        const minLength = 8;
        const strongLength = 12;

        // 长度评分
        if (password.length >= minLength) {
            score += 1;
            score += Math.min(2, Math.floor((password.length - minLength) / 2));
        }

        // 复杂性评分
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        // 额外的复杂性奖励
        const uniqueChars = new Set(password).size;
        if (uniqueChars > 10) score += 1;

        // 最终评分和对应的强度级别
        let strengthClass, strengthText;
        if (score >= 7 && password.length >= strongLength) {
            strengthClass = 'very-strong';
            strengthText = '非常强';
        } else if (score >= 6) {
            strengthClass = 'strong';
            strengthText = '强';
        } else if (score >= 4) {
            strengthClass = 'medium';
            strengthText = '中等';
        } else if (score >= 2) {
            strengthClass = 'weak';
            strengthText = '弱';
        } else {
            strengthClass = 'very-weak';
            strengthText = '非常弱';
        }

        return { score: strengthText, class: strengthClass };
    }

    // 更新密码强度UI
    function updatePasswordStrengthUI(strength) {
        const strengthBar = document.querySelector('.strength-fill');
        strengthBar.className = `strength-fill ${strength.class}`;
        document.getElementById('checkInputStatus').textContent = `强度: ${strength.score}`;
        document.getElementById('checkInputStatus').className = `strength-score ${strength.class}`;
    }

    // 重置密码强度UI
    function resetPasswordStrengthUI() {
        const strengthBar = document.querySelector('.strength-fill');
        strengthBar.className = 'strength-fill';
        document.getElementById('checkInputStatus').textContent = '等待输入...';
        document.getElementById('checkInputStatus').className = '';
        passwordAnalysis.innerHTML = '输入密码后将显示详细分析';
    }

    // 更新密码分析
    function updatePasswordAnalysis(password, strength) {
        let analysis = `<div class="analysis-item">
            <span class="analysis-label">长度:</span>
            <span class="analysis-value">${password.length} 个字符</span>
        </div>`;

        analysis += `<div class="analysis-item">
            <span class="analysis-label">强度:</span>
            <span class="strength-score ${strength.class}">${strength.score}</span>
        </div>`;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[^A-Za-z0-9]/.test(password);

        analysis += `<div class="analysis-item">
            <span class="analysis-label">包含大写字母:</span>
            <span class="analysis-value">${hasUppercase ? '是' : '否'}</span>
        </div>`;
        analysis += `<div class="analysis-item">
            <span class="analysis-label">包含小写字母:</span>
            <span class="analysis-value">${hasLowercase ? '是' : '否'}</span>
        </div>`;
        analysis += `<div class="analysis-item">
            <span class="analysis-label">包含数字:</span>
            <span class="analysis-value">${hasNumbers ? '是' : '否'}</span>
        </div>`;
        analysis += `<div class="analysis-item">
            <span class="analysis-label">包含特殊符号:</span>
            <span class="analysis-value">${hasSymbols ? '是' : '否'}</span>
        </div>`;

        const uniqueChars = new Set(password).size;
        analysis += `<div class="analysis-item">
            <span class="analysis-label">唯一字符数:</span>
            <span class="analysis-value">${uniqueChars}</span>
        </div>`;

        // 添加安全建议
        let recommendations = '<h4>安全建议:</h4><ul>';
        if (password.length < 12) {
            recommendations += '<li>增加密码长度至少12个字符</li>';
        }
        if (!hasUppercase || !hasLowercase) {
            recommendations += '<li>同时使用大小写字母</li>';
        }
        if (!hasNumbers) {
            recommendations += '<li>添加数字</li>';
        }
        if (!hasSymbols) {
            recommendations += '<li>添加特殊符号</li>';
        }
        if (uniqueChars < 8) {
            recommendations += '<li>增加不同字符的种类</li>';
        }
        recommendations += '</ul>';

        analysis += `<div class="security-recommendations">${recommendations}</div>`;

        passwordAnalysis.innerHTML = analysis;
    }

    // 文件大小限制（5MB）
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const LARGE_FILE_WARNING = 1 * 1024 * 1024; // 1MB警告阈值

    // curl解析功能
    const curlInput = document.getElementById('curlInput');
    const parseCurlConfirmBtn = document.getElementById('parseCurlConfirmBtn');
    const curlParseResult = document.getElementById('curlParseResult');

    // 解析curl命令的函数（增强版）
    function parseCurlCommand(curlCommand) {
        const result = {
            method: 'GET',
            url: '',
            headers: {},
            data: null,
            params: {},
            auth: null,
            cookies: []
        };

        try {
            // 使用正则表达式更准确地解析curl命令
            const cleanCommand = curlCommand.replace(/\\\n/g, ' ').replace(/\s+/g, ' ').trim();
            
            // 提取URL
            const urlMatch = cleanCommand.match(/curl\s+(?:-[^\s]+\s+)*(?:'([^']+)'|"([^"]+)"|(\S+))/);
            if (urlMatch) {
                const url = urlMatch[1] || urlMatch[2] || urlMatch[3];
                if (url.startsWith('http')) {
                    const urlObj = new URL(url);
                    result.url = urlObj.origin + urlObj.pathname;
                    
                    // 解析查询参数
                    urlObj.searchParams.forEach((value, key) => {
                        result.params[key] = value;
                    });
                } else {
                    result.url = url;
                }
            }

            // 提取请求方法
            const methodMatch = cleanCommand.match(/(?:-X|--request)\s+(?:'([^']+)'|"([^"]+)"|(\S+))/);
            if (methodMatch) {
                result.method = (methodMatch[1] || methodMatch[2] || methodMatch[3]).toUpperCase();
            }

            // 提取请求头
            const headerRegex = /(?:-H|--header)\s+(?:'([^']+)'|"([^"]+)"|(\S+))/g;
            let headerMatch;
            while ((headerMatch = headerRegex.exec(cleanCommand)) !== null) {
                const headerValue = headerMatch[1] || headerMatch[2] || headerMatch[3];
                const colonIndex = headerValue.indexOf(':');
                if (colonIndex > 0) {
                    const key = headerValue.substring(0, colonIndex).trim();
                    const value = headerValue.substring(colonIndex + 1).trim();
                    result.headers[key] = value;
                }
            }

            // 提取请求体数据
            const dataMatch = cleanCommand.match(/(?:-d|--data|--data-raw)\s+(?:'([^']*)'|"([^"]*)"|(\S+))/);
            if (dataMatch) {
                result.data = dataMatch[1] || dataMatch[2] || dataMatch[3];
                if (result.method === 'GET') {
                    result.method = 'POST';
                }
            }

            // 提取用户认证
            const authMatch = cleanCommand.match(/(?:-u|--user)\s+(?:'([^']+)'|"([^"]+)"|(\S+))/);
            if (authMatch) {
                result.auth = authMatch[1] || authMatch[2] || authMatch[3];
            }

            // 提取Cookies
            const cookieMatch = cleanCommand.match(/(?:-b|--cookie)\s+(?:'([^']+)'|"([^"]+)"|(\S+))/);
            if (cookieMatch) {
                const cookieString = cookieMatch[1] || cookieMatch[2] || cookieMatch[3];
                result.cookies = cookieString.split(';').map(cookie => {
                    const [name, value] = cookie.split('=');
                    return { name: name?.trim(), value: value?.trim() };
                });
            }

        } catch (error) {
            throw new Error('curl命令格式错误: ' + error.message);
        }

        return result;
    }

    // 显示curl解析结果（增强版）
    function displayCurlParseResult(parsedResult) {
        let resultHtml = `
            <div class="curl-result">
                <div class="result-section">
                    <strong>🌐 请求信息</strong>
                    <div class="info-item">URL: <code>${parsedResult.url}</code></div>
                    <div class="info-item">Method: <span class="method-${parsedResult.method.toLowerCase()}">${parsedResult.method}</span></div>
                </div>
        `;

        // 查询参数
        if (Object.keys(parsedResult.params).length > 0) {
            resultHtml += `
                <div class="result-section">
                    <strong>🔍 查询参数</strong>
                    <pre class="params-block">`;
            for (const [key, value] of Object.entries(parsedResult.params)) {
                resultHtml += `${key} = ${value}\n`;
            }
            resultHtml += `</pre>
                </div>
            `;
        }

        // 请求头
        if (Object.keys(parsedResult.headers).length > 0) {
            resultHtml += `
                <div class="result-section">
                    <strong>📋 请求头</strong>
                    <pre class="headers-block">`;
            for (const [key, value] of Object.entries(parsedResult.headers)) {
                resultHtml += `${key}: ${value}\n`;
            }
            resultHtml += `</pre>
                </div>
            `;
        }

        // 认证信息
        if (parsedResult.auth) {
            resultHtml += `
                <div class="result-section">
                    <strong>🔐 认证信息</strong>
                    <div class="info-item">Basic Auth: <code>${parsedResult.auth}</code></div>
                </div>
            `;
        }

        // Cookies
        if (parsedResult.cookies.length > 0) {
            resultHtml += `
                <div class="result-section">
                    <strong>🍪 Cookies</strong>
                    <pre class="cookies-block">`;
            parsedResult.cookies.forEach(cookie => {
                resultHtml += `${cookie.name} = ${cookie.value}\n`;
            });
            resultHtml += `</pre>
                </div>
            `;
        }

        // 请求体
        if (parsedResult.data) {
            resultHtml += `
                <div class="result-section">
                    <strong>📦 请求体</strong>
            `;
            
            try {
                // 尝试解析为JSON并格式化
                const jsonData = JSON.parse(parsedResult.data);
                const formattedJson = JSON.stringify(jsonData, null, 2);
                resultHtml += `<pre class="json-block">${syntaxHighlight(formattedJson)}</pre>`;
            } catch (e) {
                // 如果不是JSON，直接显示原始数据
                resultHtml += `<pre class="data-block">${parsedResult.data}</pre>`;
            }
            
            resultHtml += `</div>`;
        }

        resultHtml += `</div>`;
        curlParseResult.innerHTML = resultHtml;
    }

    // curl界面相关元素  
    const curlExampleBtn = document.getElementById('curlExampleBtn');
    const copyResultBtn = document.getElementById('copyResultBtn');
    const curlInputStatus = document.getElementById('curlInputStatus');
    const curlInputCount = document.getElementById('curlInputCount');

    // curl示例按钮
    curlExampleBtn.addEventListener('click', () => {
        const exampleCurl = `curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-token-here" \\
  -H "User-Agent: MyApp/1.0" \\
  -d '{
    "name": "张三",
    "email": "zhangsan@example.com",
    "age": 28,
    "department": "开发部"
  }'`;
        
        curlInput.value = exampleCurl;
        updateCharCount(curlInput, curlInputCount);
        curlInputStatus.textContent = '✓ 已加载示例';
        curlInputStatus.style.color = '#28a745';
        showNotification('示例curl命令已加载', 'info');
    });

    // 复制解析结果
    copyResultBtn.addEventListener('click', () => {
        const resultText = curlParseResult.textContent || '';
        if (!resultText || resultText === '解析结果将在这里显示') {
            showNotification('没有可复制的结果', 'warning');
            return;
        }
        
        navigator.clipboard.writeText(resultText)
            .then(() => {
                showNotification('✓ 解析结果已复制', 'success');
                copyResultBtn.style.color = '#28a745';
                setTimeout(() => {
                    copyResultBtn.style.color = '';
                }, 1000);
            })
            .catch((error) => {
                console.error('复制失败:', error);
                showNotification('复制失败，请手动选择复制', 'error');
            });
    });

    // curl输入区域字符计数和实时验证
    curlInput.addEventListener('input', () => {
        updateCharCount(curlInput, curlInputCount);
        const input = curlInput.value.trim();
        
        if (!input) {
            curlInputStatus.textContent = '等待输入...';
            curlInputStatus.style.color = '#6c757d';
            return;
        }
        
        if (input.startsWith('curl')) {
            // 进一步验证curl命令格式
            if (input.includes('-X') || input.includes('--request') || input.includes('-H') || input.includes('--header')) {
                curlInputStatus.textContent = '✓ curl命令格式正确';
                curlInputStatus.style.color = '#28a745';
            } else if (input.length < 15) {
                curlInputStatus.textContent = '⏳ 继续输入...';
                curlInputStatus.style.color = '#6c757d';
            } else {
                curlInputStatus.textContent = '✓ 基本格式正确';
                curlInputStatus.style.color = '#28a745';
            }
        } else {
            curlInputStatus.textContent = '⚠️ 请输入以curl开头的命令';
            curlInputStatus.style.color = '#ffc107';
        }
    });

    // 为curl输入区域添加键盘快捷键支持
    curlInput.addEventListener('keydown', (event) => {
        // Ctrl+Enter 或 Command+Enter 触发解析
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            parseCurlConfirmBtn.click();
        }
    });

    // 解析curl命令
    parseCurlConfirmBtn.addEventListener('click', () => {
        const curlCommand = curlInput.value.trim();
        if (!curlCommand) {
            showNotification('请输入curl命令', 'warning');
            return;
        }

        if (!curlCommand.startsWith('curl')) {
            showNotification('请输入有效的curl命令', 'warning');
            return;
        }
        
        // 更新按钮状态，提供视觉反馈
        parseCurlConfirmBtn.disabled = true;
        parseCurlConfirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 解析中...';
        
        try {
            showLoading(true);
            
            setTimeout(() => {
                try {
                    const parsedResult = parseCurlCommand(curlCommand);
                    
                    // 验证解析结果是否有效
                    if (!parsedResult.url) {
                        throw new Error('无法解析URL地址，请检查curl命令格式');
                    }
                    
                    displayCurlParseResult(parsedResult);
                    showNotification('✓ curl命令解析成功', 'success');
                    
                    // 添加命令复制到剪贴板功能
                    const copyBtn = document.createElement('button');
                    copyBtn.className = 'btn btn-outline';
                    copyBtn.innerHTML = '<i class="fas fa-code"></i> 复制代码示例';
                    copyBtn.style.marginTop = '20px';
                    copyBtn.onclick = () => {
                        try {
                            // 生成对应的代码示例
                            const codeExample = generateCodeExample(parsedResult);
                            navigator.clipboard.writeText(codeExample)
                                .then(() => {
                                    showNotification('✓ 代码示例已复制到剪贴板', 'success');
                                    copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
                                    setTimeout(() => {
                                        copyBtn.innerHTML = '<i class="fas fa-code"></i> 复制代码示例';
                                    }, 2000);
                                })
                                .catch(err => {
                                    showNotification('复制失败: ' + err.message, 'error');
                                });
                        } catch (err) {
                            showNotification('生成代码示例失败', 'error');
                        }
                    };
                    curlParseResult.appendChild(copyBtn);
                    
                } catch (error) {
                    const errorMessage = error.message || '未知错误';
                    showNotification('curl命令解析失败: ' + errorMessage, 'error');
                    console.error('解析curl命令时出错:', error);
                    
                    // 提供更详细的错误信息和修复建议
                    let fixSuggestion = '请检查curl命令格式是否正确';
                    if (errorMessage.includes('URL')) {
                        fixSuggestion = '确保URL格式正确，并包含http://或https://前缀';
                    } else if (errorMessage.includes('header')) {
                        fixSuggestion = '请确保请求头格式为 -H "Key: Value"';
                    } else if (errorMessage.includes('JSON')) {
                        fixSuggestion = '请确保JSON格式正确，检查引号和大括号是否配对';
                    }
                    
                    curlParseResult.innerHTML = `
                        <div class="error-details">
                            <strong>解析失败:</strong> ${errorMessage}<br>
                            <strong>建议:</strong> ${fixSuggestion}<br><br>
                            <strong>命令示例:</strong><br>
                            curl -X POST https://api.example.com/data \\<br>
                            &nbsp;&nbsp;-H "Content-Type: application/json" \\<br>
                            &nbsp;&nbsp;-d '{"name": "value"}'
                        </div>
                    `;
                } finally {
                    showLoading(false);
                    parseCurlConfirmBtn.disabled = false;
                    parseCurlConfirmBtn.innerHTML = '<i class="fas fa-play"></i><span>解析命令</span>';
                }
            }, 100);
            
        } catch (error) {
            showNotification('curl命令解析失败: ' + error.message, 'error');
            console.error('解析curl命令时出错:', error);
            showLoading(false);
            parseCurlConfirmBtn.disabled = false;
            parseCurlConfirmBtn.innerHTML = '<i class="fas fa-play"></i><span>解析命令</span>';
        }
    });

    // 生成代码示例的函数
    function generateCodeExample(parsedResult) {
        const { method, url, headers, data } = parsedResult;
        
        // 生成JavaScript Fetch API示例
        let jsCode = `// JavaScript Fetch API\n`;
        jsCode += `fetch("${url}", {\n`;
        jsCode += `  method: "${method}",\n`;
        
        if (Object.keys(headers).length > 0) {
            jsCode += `  headers: {\n`;
            for (const [key, value] of Object.entries(headers)) {
                jsCode += `    "${key}": "${value}",\n`;
            }
            jsCode += `  },\n`;
        }
        
        if (data) {
            // 尝试解析为JSON
            try {
                const jsonData = JSON.parse(data);
                jsCode += `  body: JSON.stringify(${JSON.stringify(jsonData, null, 2)})\n`;
            } catch (e) {
                jsCode += `  body: '${data}'\n`;
            }
        }
        
        jsCode += `})\n`;
        jsCode += `.then(response => response.json())\n`;
        jsCode += `.then(data => console.log(data))\n`;
        jsCode += `.catch(error => console.error('Error:', error));`;
        
        return jsCode;
    }


    // 添加语法高亮函数
    function syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                } else {
                    cls = 'json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'json-boolean';
            } else if (/null/.test(match)) {
                cls = 'json-null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

// 增强的错误提示函数 - 精确定位行列号并提供修复建议
function showJsonError(error, textarea) {
    let errorMessage = '解析错误: ';
    let lineNumber = 0;
    let columnNumber = 0;
    let errorContext = '';
    let fixSuggestion = '';

    // 尝试从错误信息中提取位置信息
    const positionMatch = error.message.match(/position (\d+)/);
    if (positionMatch) {
        const position = parseInt(positionMatch[1]);
        const textBefore = textarea.value.substring(0, position);
        const lines = textBefore.split('\n');
        lineNumber = lines.length;
        columnNumber = lines[lines.length - 1].length + 1;
        
        // 获取错误上下文
        const errorLine = textarea.value.split('\n')[lineNumber - 1];
        if (errorLine) {
            errorContext = errorLine.trim();
        }
        
        // 根据错误类型提供修复建议
        if (error.message.includes('Unexpected token')) {
            const unexpectedChar = error.message.match(/Unexpected token (.)/)[1];
            if (unexpectedChar === '}' || unexpectedChar === ']') {
                fixSuggestion = '可能缺少逗号或存在多余的逗号';
            } else if (unexpectedChar === ':') {
                fixSuggestion = '检查是否缺少键名或键名是否未用引号包围';
            }
        } else if (error.message.includes('Unexpected end of JSON input')) {
            fixSuggestion = '检查是否缺少右括号或右大括号';
        }
    } else {
        // 尝试其他格式的错误信息
        const lineMatch = error.message.match(/line (\d+)/i);
        const colMatch = error.message.match(/column (\d+)/i);
        if (lineMatch) lineNumber = parseInt(lineMatch[1]);
        if (colMatch) columnNumber = parseInt(colMatch[1]);
    }

    errorMessage = `第 ${lineNumber} 行, 第 ${columnNumber} 列附近存在语法错误`;
    
    // 创建详细的错误信息HTML
    const errorDetails = document.createElement('div');
    errorDetails.className = 'error-details';
    errorDetails.innerHTML = `
        <strong>错误位置:</strong> 第 ${lineNumber} 行, 第 ${columnNumber} 列<br>
        <strong>错误描述:</strong> ${error.message}<br>
        ${errorContext ? `<strong>错误上下文:</strong> "${errorContext}"<br>` : ''}
        ${fixSuggestion ? `<strong>修复建议:</strong> ${fixSuggestion}` : ''}
    `;

    // 显示错误通知
    showNotification(errorMessage, 'error');
    
    // 更新输入状态
    inputStatus.innerHTML = '❌ JSON 格式无效 <span class="error-hint">(点击查看详情)</span>';
    inputStatus.style.color = '#dc3545';
    
    // 添加点击事件以显示/隐藏详细错误信息
    inputStatus.onclick = () => {
        const existingErrorDetails = document.querySelector('.error-details');
        if (existingErrorDetails) {
            existingErrorDetails.remove();
        } else {
            inputArea.parentNode.insertBefore(errorDetails, inputArea.nextSibling);
        }
    };
}

    // 检查文件大小并警告
    function checkFileSize(text) {
        const size = new Blob([text]).size;
        if (size > MAX_FILE_SIZE) {
            showNotification('文件过大（超过5MB），可能导致浏览器卡顿', 'warning');
            return false;
        } else if (size > LARGE_FILE_WARNING) {
            showNotification('文件较大（超过1MB），处理可能需要一些时间...', 'warning');
        }
        return true;
    }

    // JSON转XML函数
    function jsonToXml(obj, rootName = 'root') {
        function convertToXml(obj, nodeName) {
            let xml = '';
            if (obj === null || obj === undefined) {
                return `<${nodeName}/>`;
            }
            
            if (typeof obj === 'object') {
                if (Array.isArray(obj)) {
                    obj.forEach((item, index) => {
                        xml += convertToXml(item, 'item');
                    });
                } else {
                    for (let prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            xml += convertToXml(obj[prop], prop);
                        }
                    }
                }
            } else {
                xml = `<${nodeName}>${obj}</${nodeName}>`;
                return xml;
            }
            
            if (nodeName) {
                xml = `<${nodeName}>${xml}</${nodeName}>`;
            }
            return xml;
        }
        
        let xmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xmlStr += convertToXml(obj, rootName);
        return xmlStr;
    }

    // JSON转义/反转义函数
    function escapeJsonString(str) {
        return JSON.stringify(str);
    }

    function unescapeJsonString(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            throw new Error('不是有效的转义JSON字符串');
        }
    }

    const inputArea = document.getElementById('inputArea');
    const outputArea = document.getElementById('outputArea');
    const formatBtn = document.getElementById('formatBtn');
    const compressBtn = document.getElementById('compressBtn');
    const processBtn = document.getElementById('processBtn');
    const clearBtn = document.getElementById('clearBtn');
    const exampleBtn = document.getElementById('exampleBtn');
    const pasteBtn = document.getElementById('pasteBtn');
    const copyInputBtn = document.getElementById('copyInputBtn');
    const copyOutputBtn = document.getElementById('copyOutputBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const inputStatus = document.getElementById('inputStatus');
    const outputStatus = document.getElementById('outputStatus');
    const inputCount = document.getElementById('inputCount');
    const outputCount = document.getElementById('outputCount');
    const notification = document.getElementById('notification');
    const indentSelect = document.getElementById('indentSelect');
    const convertSelect = document.getElementById('convertSelect');

    let currentMode = 'format';
    let currentIndent = 4;

// 函数：显示通知
function showNotification(message, type = 'success') {
    const icon = {
        'success': '<i class="fas fa-check-circle"></i>',
        'error': '<i class="fas fa-exclamation-circle"></i>',
        'warning': '<i class="fas fa-exclamation-triangle"></i>',
        'info': '<i class="fas fa-info-circle"></i>'
    };
    notification.innerHTML = `${icon[type]} ${message}`;
    notification.className = `notification ${type} show`;
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

    // 函数：更新字符计数
    function updateCharCount(textarea, countElement) {
        const count = textarea.value.length;
        countElement.textContent = `${count} 字符`;
    }

// 函数：格式化 JSON（支持可选缩进）
function formatJSON(json, indent = 4) {
    try {
        // 尝试解析JSON
        const obj = JSON.parse(json);
        return JSON.stringify(obj, null, indent);
    } catch (error) {
        console.error("JSON解析错误:", error);
        throw error;
    }
}

// 函数：压缩 JSON
function compressJSON(json) {
    try {
        const obj = JSON.parse(json);
        return JSON.stringify(obj);
    } catch (error) {
        console.error("JSON压缩错误:", error);
        throw error;
    }
}

// 函数：转换格式
function convertFormat(json, targetFormat) {
    try {
        const obj = JSON.parse(json);
        
        switch(targetFormat) {
            case 'yaml':
                if (typeof jsyaml === 'undefined') {
                    // 检查js-yaml库是否加载
                    throw new Error('YAML库未加载，请刷新页面重试');
                }
                return jsyaml.dump(obj, {
                    indent: currentIndent,
                    lineWidth: -1,
                    noRefs: true
                });
                
            case 'xml':
                return jsonToXml(obj);
                
            case 'string':
                return escapeJsonString(JSON.stringify(obj, null, currentIndent));
                
            default:
                return json;
        }
    } catch (error) {
        console.error(`转换到${targetFormat}格式错误:`, error);
        throw error;
    }
}
// 函数：处理 JSON
function processJSON() {
    const input = inputArea.value.trim();
    if (!input) {
        showNotification('请输入 JSON 字符串', 'warning');
        inputStatus.textContent = '⚠️ 请输入内容';
        inputStatus.style.color = '#ffc107';
        return;
    }

    // 检查文件大小
    if (!checkFileSize(input)) {
        return;
    }

    // 显示加载状态
    showLoading(true);
    
    // 禁用处理按钮
    processBtn.disabled = true;
    processBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 处理中...';

    // 使用setTimeout来模拟异步处理，避免UI卡顿
    setTimeout(() => {
        try {
            let result;
            const convertType = convertSelect.value;
            
            // 首先处理格式化或压缩
            if (currentMode === 'format') {
                result = formatJSON(input, currentIndent);
            } else {
                result = compressJSON(input);
            }
            
            // 如果需要转换格式
            if (convertType !== 'none') {
                // 对于转换，总是使用格式化的结果作为输入
                const jsonForConvert = currentMode === 'compress' ? formatJSON(input, currentIndent) : result;
                result = convertFormat(jsonForConvert, convertType);
                outputStatus.textContent = `✓ 已转换为 ${convertType.toUpperCase()}`;
            } else {
                outputStatus.textContent = '✓ 处理成功';
            }
            
            outputArea.value = result;
            updateCharCount(outputArea, outputCount);
            showNotification('处理成功', 'success');
            updateModeVisuals();
            
            // 添加成功样式
            outputStatus.closest('.status-bar').classList.add('success');
            
        } catch (error) {
            outputArea.value = '';
            outputStatus.textContent = '❌ 处理失败';
            outputStatus.closest('.status-bar').classList.add('error');
            showJsonError(error, inputArea);
        } finally {
            // 隐藏加载状态
            showLoading(false);
            
            // 恢复处理按钮状态
            processBtn.disabled = false;
            processBtn.innerHTML = '<i class="fas fa-play"></i><span>处理</span>';
        }
    }, 0);
}

// 函数：显示/隐藏加载动画
function showLoading(show) {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (!loadingOverlay) {
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(overlay);
    }
    document.querySelector('.loading-overlay').classList.toggle('show', show);
}

    // 函数：更新模式视觉效果
    function updateModeVisuals() {
        if (currentMode === 'format') {
            formatBtn.classList.add('active');
            compressBtn.classList.remove('active');
            outputArea.style.whiteSpace = 'pre';
            outputArea.style.fontFamily = 'monospace';
        } else {
            compressBtn.classList.add('active');
            formatBtn.classList.remove('active');
            outputArea.style.whiteSpace = 'nowrap';
            outputArea.style.fontFamily = 'inherit';
        }
    }

    // 事件监听器：缩进选择
    indentSelect.addEventListener('change', (e) => {
        currentIndent = parseInt(e.target.value);
        if (outputArea.value && currentMode === 'format') {
            processJSON();
        }
    });

    // 事件监听器：转换格式选择
    convertSelect.addEventListener('change', () => {
        if (outputArea.value) {
            processJSON();
        }
    });

    // 事件监听器：格式化按钮
    formatBtn.addEventListener('click', () => {
        currentMode = 'format';
        updateModeVisuals();
        if (inputArea.value.trim()) {
            processJSON();
        }
    });

    // 事件监听器：压缩按钮
    compressBtn.addEventListener('click', () => {
        currentMode = 'compress';
        updateModeVisuals();
        if (inputArea.value.trim()) {
            processJSON();
        }
    });

    // 事件监听器：处理按钮
    processBtn.addEventListener('click', processJSON);

    // 事件监听器：清空按钮
    clearBtn.addEventListener('click', () => {
        if (inputArea.value || outputArea.value) {
            const confirmed = confirm('确定要清空所有内容吗？');
            if (!confirmed) return;
        }
        
        inputArea.value = '';
        outputArea.value = '';
        updateCharCount(inputArea, inputCount);
        updateCharCount(outputArea, outputCount);
        inputStatus.textContent = '等待输入...';
        inputStatus.style.color = '';
        outputStatus.textContent = '等待处理...';
        
        // 重置状态栏样式
        const inputStatusBar = inputStatus.closest('.status-bar');
        const outputStatusBar = outputStatus.closest('.status-bar');
        if (inputStatusBar) inputStatusBar.className = 'status-bar';
        if (outputStatusBar) outputStatusBar.className = 'status-bar';
        
        showNotification('已清空', 'info');
    });

    // 事件监听器：示例按钮
    exampleBtn.addEventListener('click', () => {
        const exampleJSON = {
            "name": "JSON格式化工具 Pro",
            "version": "2.0.0",
            "description": "功能强大的JSON处理工具，支持多格式转换",
            "features": [
                "格式化JSON（支持2/4空格缩进）",
                "压缩JSON",
                "JSON转YAML",
                "JSON转XML",
                "JSON转义字符串",
                "精确错误定位",
                "大文件处理优化",
                "本地安全处理"
            ],
            "author": {
                "name": "开发团队",
                "email": "team@example.com",
                "website": "https://example.com"
            },
            "config": {
                "maxFileSize": "5MB",
                "supportedFormats": ["JSON", "YAML", "XML"],
                "privacy": "所有数据在浏览器本地处理"
            },
            "stats": {
                "downloads": 10000,
                "stars": 500,
                "lastUpdate": "2024-01-01"
            },
            "license": "MIT"
        };
        inputArea.value = JSON.stringify(exampleJSON);
        updateCharCount(inputArea, inputCount);
        inputStatus.innerHTML = '<i class="fas fa-check-circle"></i> 已加载示例';
        inputStatus.className = 'status-bar success';
        
        // 添加动画效果
        inputArea.classList.add('highlight');
        setTimeout(() => {
            inputArea.classList.remove('highlight');
        }, 1000);
        
        showNotification('示例JSON已加载', 'info');
    });

    // 事件监听器：粘贴按钮
    pasteBtn.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (!text) {
                showNotification('剪贴板为空', 'warning');
                return;
            }
            inputArea.value = text;
            updateCharCount(inputArea, inputCount);
            inputStatus.textContent = '✓ 已从剪贴板粘贴';
            inputStatus.style.color = '#28a745';
            
            // 触发输入事件以验证
            inputArea.dispatchEvent(new Event('input'));
            
            showNotification('已粘贴剪贴板内容', 'success');
        } catch (error) {
            console.error('粘贴失败:', error);
            showNotification('无法访问剪贴板，请检查浏览器权限', 'error');
        }
    });

    // 事件监听器：复制输入按钮
    copyInputBtn.addEventListener('click', () => {
        const content = inputArea.value;
        if (!content) {
            showNotification('输入区域为空', 'warning');
            return;
        }
        
        navigator.clipboard.writeText(content)
            .then(() => {
                showNotification('✓ 已复制输入内容', 'success');
                // 添加视觉反馈
                copyInputBtn.style.color = '#28a745';
                setTimeout(() => {
                    copyInputBtn.style.color = '';
                }, 1000);
            })
            .catch((error) => {
                console.error('复制失败:', error);
                showNotification('复制失败，请手动选择复制', 'error');
            });
    });

    // 事件监听器：复制输出按钮
    copyOutputBtn.addEventListener('click', () => {
        const textContent = outputArea.value || '';
        
        if (!textContent) {
            showNotification('输出区域为空', 'warning');
            return;
        }
        
        navigator.clipboard.writeText(textContent)
            .then(() => {
                showNotification('✓ 已复制输出内容', 'success');
                // 添加视觉反馈
                copyOutputBtn.style.color = '#28a745';
                setTimeout(() => {
                    copyOutputBtn.style.color = '';
                }, 1000);
            })
            .catch((error) => {
                console.error('复制失败:', error);
                showNotification('复制失败，请手动选择复制', 'error');
            });
    });

    // 事件监听器：下载按钮
    downloadBtn.addEventListener('click', () => {
        const textContent = outputArea.value || '';
        if (!textContent) {
            showNotification('没有可下载的内容', 'warning');
            return;
        }
        
        // 根据转换类型确定文件扩展名和MIME类型
        const convertType = convertSelect.value;
        let extension = 'json';
        let mimeType = 'application/json';
        
        switch(convertType) {
            case 'yaml':
                extension = 'yaml';
                mimeType = 'text/yaml';
                break;
            case 'xml':
                extension = 'xml';
                mimeType = 'application/xml';
                break;
            case 'string':
                extension = 'txt';
                mimeType = 'text/plain';
                break;
        }
        
        const blob = new Blob([textContent], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `formatted.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showNotification(`文件已下载为 formatted.${extension}`, 'success');
    });

    // 输入区域字符计数更新和实时语法检查
    inputArea.addEventListener('input', () => {
        updateCharCount(inputArea, inputCount);
        const input = inputArea.value.trim();
        
        if (!input) {
            inputStatus.textContent = '等待输入...';
            inputStatus.style.color = '#6c757d';
            const statusBar = inputStatus.closest('.status-bar');
            if (statusBar) statusBar.className = 'status-bar';
            return;
        }
        
        inputStatus.textContent = '⏳ 正在输入...';
        inputStatus.style.color = '#6c757d';
        
        // 防抖：延迟语法检查
        clearTimeout(inputArea.validationTimer);
        inputArea.validationTimer = setTimeout(() => {
            try {
                JSON.parse(input);
                inputStatus.textContent = '✓ JSON 格式有效';
                inputStatus.style.color = '#28a745';
                const statusBar = inputStatus.closest('.status-bar');
                if (statusBar) statusBar.className = 'status-bar success';
            } catch (error) {
                inputStatus.textContent = '❌ JSON 格式无效 (点击"处理"查看详情)';
                inputStatus.style.color = '#dc3545';
                const statusBar = inputStatus.closest('.status-bar');
                if (statusBar) statusBar.className = 'status-bar error';
            }
        }, 500);
    });

    // 键盘快捷键：Ctrl+Enter 处理 JSON
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            processJSON();
        }
    });

    // 初始化
    updateCharCount(inputArea, inputCount);
    updateCharCount(outputArea, outputCount);
    updateModeVisuals(); // 初始化视觉效果
});