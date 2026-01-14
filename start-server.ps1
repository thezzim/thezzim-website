# THE ZZIM 로컬 서버 시작 스크립트 (PowerShell)
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  THE ZZIM 로컬 서버 시작" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 현재 스크립트가 있는 디렉토리로 이동
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath
Write-Host "[현재 디렉토리] $PWD" -ForegroundColor Yellow
Write-Host ""

# Node.js 확인
$nodePath = Get-Command node -ErrorAction SilentlyContinue
if ($nodePath) {
    Write-Host "[Node.js 발견] 서버를 시작합니다..." -ForegroundColor Green
    Write-Host ""
    Write-Host "서버 주소: http://localhost:1001" -ForegroundColor Cyan
    Write-Host "서버 주소: http://127.0.0.1:1001" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "서버를 중지하려면 이 창을 닫거나 Ctrl+C를 누르세요." -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    
    try {
        npx --yes http-server . -p 1001 -a localhost
    }
    catch {
        Write-Host ""
        Write-Host "[오류] 서버 시작에 실패했습니다: $_" -ForegroundColor Red
        Read-Host "아무 키나 눌러 종료하세요"
        exit 1
    }
    exit 0
}

# Python 확인
$pythonPath = Get-Command python -ErrorAction SilentlyContinue
if ($pythonPath) {
    $pythonVersion = python --version 2>&1
    if ($pythonVersion -match "Python 3") {
        Write-Host "[Python 3 발견] 서버를 시작합니다..." -ForegroundColor Green
        Write-Host ""
        Write-Host "서버 주소: http://localhost:1001" -ForegroundColor Cyan
        Write-Host "서버 주소: http://127.0.0.1:1001" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "서버를 중지하려면 이 창을 닫거나 Ctrl+C를 누르세요." -ForegroundColor Yellow
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        
        python -m http.server 1001
        exit 0
    }
    elseif ($pythonVersion -match "Python 2") {
        Write-Host "[Python 2 발견] 서버를 시작합니다..." -ForegroundColor Green
        Write-Host ""
        Write-Host "서버 주소: http://localhost:1001" -ForegroundColor Cyan
        Write-Host "서버 주소: http://127.0.0.1:1001" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "서버를 중지하려면 이 창을 닫거나 Ctrl+C를 누르세요." -ForegroundColor Yellow
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        
        python -m SimpleHTTPServer 1001
        exit 0
    }
}

# 아무것도 없으면 오류
Write-Host "[오류] Node.js 또는 Python이 설치되어 있지 않습니다." -ForegroundColor Red
Write-Host ""
Write-Host "Node.js를 설치해주세요: https://nodejs.org/" -ForegroundColor Yellow
Write-Host "또는 Python을 설치해주세요: https://www.python.org/downloads/" -ForegroundColor Yellow
Write-Host ""
Read-Host "아무 키나 눌러 종료하세요"
exit 1

