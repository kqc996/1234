/**
 * 供應鏈透明化治理平台 - 核心功能模組
 * 提供四大模組的互動演示功能
 */

// 模組切換功能
function showModule(moduleId) {
    // 隱藏所有模組
    document.querySelectorAll('.module-content').forEach(module => {
        module.classList.remove('active');
    });

    // 取消所有按鈕激活狀態
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 顯示選中的模組
    document.getElementById(moduleId).classList.add('active');

    // 激活對應按鈕
    const activeBtn = event.target.closest('.tab-btn');
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // 儲存選擇狀態到 localStorage
    localStorage.setItem('activeModule', moduleId);
}

// 模組一：原產地溯源功能
function traceProduct() {
    const traceResult = document.getElementById('traceResult');
    if (traceResult) {
        traceResult.style.display = 'block';
        traceResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('✅ 溯源追蹤完成！', '已顯示從原材料到零售的完整供應鏈路徑\n所有數據均已上鏈，不可篡改', 'success');
}

function generateQR() {
    const qrDisplay = document.getElementById('qrDisplay');
    if (qrDisplay) {
        qrDisplay.style.display = 'block';
        qrDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('📱 QR Code 已生成！', '消費者掃描後可查看：\n- 原產地證明\n- 生產過程記錄\n- 碳足跡信息\n- 社會合規報告', 'info');
}

function verifyOrigin() {
    showToast('✅ 原產地驗證通過！', 
        '驗證結果：\n' +
        '- 有機棉產地：印度古吉拉特邦 ✓\n' +
        '- GOTS 認證：有效 ✓\n' +
        '- 區塊鏈記錄：12 條完整記錄 ✓\n' +
        '- 原產地真實性：100%', 
        'success');
}

// 模組二：人權盡職調查功能
function runRiskAssessment() {
    const riskDashboard = document.getElementById('riskDashboard');
    if (riskDashboard) {
        riskDashboard.style.display = 'block';
        riskDashboard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('🔍 風險評估完成！', 
        '評估結果：\n' +
        '- 總供應商：156 家\n' +
        '- 高風險：12 家 (7.7%)\n' +
        '- 中風險：34 家 (21.8%)\n' +
        '- 低風險：110 家 (70.5%)\n\n' +
        '已生成詳細報告，請查看儀表板', 
        'info');
}

function showAnonymousReport() {
    const anonymousReport = document.getElementById('anonymousReport');
    if (anonymousReport) {
        anonymousReport.style.display = 'block';
        anonymousReport.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('🔒 已進入匿名舉報系統', 
        '所有舉報信息均已加密\n' +
        '舉報人身份受到嚴格保護\n' +
        '系統已自動啟動調查流程', 
        'info');
}

function generateAuditReport() {
    showToast('📄 審計報告已生成！', 
        '報告包含：\n' +
        '- 供應商人權合規狀況\n' +
        '- 風險評估結果\n' +
        '- 整改建議清單\n' +
        '- 盡職調查證據鏈\n\n' +
        '報告已上傳區塊鏈，不可篡改', 
        'success');
}

// 模組三：碳排放核算功能
function calculateCarbon() {
    const carbonDashboard = document.getElementById('carbonDashboard');
    if (carbonDashboard) {
        carbonDashboard.style.display = 'block';
        carbonDashboard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('🧮 碳足跡計算完成！', 
        '產品碳足跡：2.3 kg CO2e/件\n' +
        '分解：\n' +
        '- 原材料：35%\n' +
        '- 紡紗織布：26%\n' +
        '- 染色：22%\n' +
        '- 製造：13%\n' +
        '- 運輸：4%', 
        'info');
}

function showReductionPlan() {
    const reductionPlan = document.getElementById('reductionPlan');
    if (reductionPlan) {
        reductionPlan.style.display = 'block';
        reductionPlan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('💡 AI 已生成減排方案！', 
        '建議方案：\n' +
        '1. 使用可再生能源 (減排 11%)\n' +
        '2. 優化物流路線 (減排 2%)\n' +
        '3. 採用有機染料 (減排 6.5%)\n\n' +
        '總體潛力：減排 19.5%', 
        'success');
}

function generateCBAMReport() {
    showToast('📄 CBAM 報告已生成！', 
        '報告符合：\n' +
        '- 歐盟 CBAM 要求 ✓\n' +
        '- ISO14064 標準 ✓\n' +
        '- GHG Protocol ✓\n\n' +
        '報告已準備好提交歐盟監管系統', 
        'success');
}

// 模組四：貿易法規合規功能
function checkCompliance() {
    const complianceDashboard = document.getElementById('complianceDashboard');
    if (complianceDashboard) {
        complianceDashboard.style.display = 'block';
        complianceDashboard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('🔍 合規檢查完成！', 
        '檢查結果：\n' +
        '- 檢查法規條目：156 項\n' +
        '- 風險警示：3 項\n' +
        '- 合規率：98%\n' +
        '- 合規等級：A+\n\n' +
        '請查看詳細報告', 
        'info');
}

function showRegulationUpdates() {
    const regulationUpdates = document.getElementById('regulationUpdates');
    if (regulationUpdates) {
        regulationUpdates.style.display = 'block';
        regulationUpdates.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    showToast('📢 最新法規更新', 
        '近期重要更新：\n' +
        '1. 歐盟 CSDDD 實施細則 (5/20)\n' +
        '2. 美國 UFLPA 實體清單更新 (5/15)\n' +
        '3. CBAM 報告要求調整 (5/10)\n\n' +
        '請查看詳細內容及應對建議', 
        'info');
}

function generateCustomsDoc() {
    showToast('📄 清關文件已生成！', 
        '文件清單：\n' +
        '- 原產地證明書 (RCEP)\n' +
        '- 商業發票\n' +
        '- 裝箱單\n' +
        '- 社會合規聲明\n' +
        '- 碳足跡報告\n\n' +
        '所有文件已加密上鏈，可一鍵下載', 
        'success');
}

// Toast 通知函數（替代 alert）
function showToast(title, message, type = 'info') {
    // 移除現有的 toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // 創建 toast 元素
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message.replace(/\n/g, '<br>')}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;

    // 添加樣式
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: flex-start;
        gap: 15px;
        animation: slideInRight 0.3s ease-out;
        border-left: 4px solid ${type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : '#667eea'};
    `;

    // 添加動畫
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .toast-notification {
            transition: all 0.3s ease;
        }
        .toast-notification:hover {
            transform: translateY(-2px);
        }
        .toast-close {
            background: none;
            border: none;
            font-size: 1.5em;
            cursor: pointer;
            color: #666;
            padding: 0;
            line-height: 1;
        }
        .toast-close:hover {
            color: #333;
        }
        .toast-content {
            flex: 1;
        }
        .toast-title {
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
        }
        .toast-message {
            color: #666;
            font-size: 0.95em;
            line-height: 1.5;
        }
    `;
    document.head.appendChild(style);

    // 添加到頁面
    document.body.appendChild(toast);

    // 5 秒後自動移除
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

// 鍵盤導航支持
document.addEventListener('keydown', (e) => {
    const tabs = document.querySelectorAll('.tab-btn');
    const activeTab = document.querySelector('.tab-btn.active');
    const currentIndex = Array.from(tabs).indexOf(activeTab);

    // Alt + 數字鍵切換模組
    if (e.altKey && e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        if (tabs[index]) {
            tabs[index].click();
        }
    }

    // 左右箭頭切換模組
    if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        let newIndex = currentIndex;
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            newIndex = currentIndex - 1;
        } else if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            newIndex = currentIndex + 1;
        }
        if (newIndex !== currentIndex) {
            tabs[newIndex].click();
        }
    }
});

// 頁面載入完成處理
window.addEventListener('DOMContentLoaded', () => {
    // 恢復上次選擇的模組
    const savedModule = localStorage.getItem('activeModule');
    if (savedModule) {
        const moduleElement = document.getElementById(savedModule);
        const correspondingBtn = document.querySelector(`[onclick="showModule('${savedModule}')"]`);
        
        if (moduleElement && correspondingBtn) {
            // 隱藏所有模組
            document.querySelectorAll('.module-content').forEach(module => {
                module.classList.remove('active');
            });
            
            // 取消所有按鈕激活狀態
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 顯示儲存的模組
            moduleElement.classList.add('active');
            correspondingBtn.classList.add('active');
        }
    }

    // 歡迎提示（使用 toast 而非 alert）
    setTimeout(() => {
        showToast('👋 歡迎使用', 
            '一站式供應鏈透明化治理平台演示系統\n\n' +
            '請點擊上方標籤切換四大核心模組\n' +
            '每個模組都包含互動演示功能\n\n' +
            '快捷鍵：Alt+1~4 切換模組，Alt+←→ 切換模組', 
            'info');
    }, 500);
});

// 性能優化：惰性加載圖片（如果有）
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
