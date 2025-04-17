@echo off
REM === Run main.go from cmd/api ===
cd /d %~dp0
npm run dev:win

REM === Pause to see output ===
pause