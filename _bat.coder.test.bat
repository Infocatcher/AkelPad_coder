@echo off
setlocal
:: Commented, even with %~dp0
set dp0=%~dp0
set dllPath="%~dp0Foo.dll"
set test=%ProgramFiles%/foo1
set test2=%ProgramFiles%\foo2
set test3=%ProgramFiles%foo
if not exist %dllPath% set dllPath="%~dp0Foo_1.dll"
if not exist %dllPath% set dllPath="%~dp0Foo_2.dll"
if %count% equ 1 (echo. & echo Processing: %* & echo. & pause) else (echo. & echo Processing %count% objects. & echo. & pause)
if errorlevel 1 (color C & echo. & echo ERROR)
if errorlevel 1 (color C & echo. & echo ERROR) else (pause)

set checkPath="%SystemDrive%\_adminRightsCheck_ln0k2oef9ldj.tmp"
echo You can delete this file>%checkPath%
if not exist %checkPath% (
	cls
	title Error: Admin rights required!
	echo Admin rights required!
	echo Use "Run as administator" from context menu
	echo You can delete this file>%checkPath%
	pause
	exit
)
del %checkPath%

if "%1" == "-o" (
	start "" rundll32.exe %dllPath%,DllInstall
) else if "%1" == "-u" (
	start regsvr32.exe /u %dllPath%
) else (
	start regsvr32.exe %dllPath%
)

endlocal