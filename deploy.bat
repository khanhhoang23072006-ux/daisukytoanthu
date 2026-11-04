@echo off
chcp 65001 > nul
title Đồng bộ lên GitHub (daisukytoanthu)
echo ========================================================
echo Đang đồng bộ website lên GitHub: daisukytoanthu...
echo ========================================================
node "%~dp0deploy.js"
echo.
pause

