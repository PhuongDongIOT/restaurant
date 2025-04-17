@echo off
REM === Run main.go from cmd/api ===
cd /d %~dp0
go run cmd\api\main.go

REM === Pause to see output ===
pause