@echo off
title MUNAP DIGITAL - webx Agency Website
echo Starting MUNAP DIGITAL Local Server...

:: Check if Node is installed
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Launching Node.js Live Server...
    node server.js
) else (
    echo Node.js not detected in PATH. Opening index.html directly in your default browser...
    start index.html
)
pause
