@echo off
set /p FolderName=Choose a folder name?

set "Curpath=%cd%"
for %%a in ("%cd%\") do set "Curpath=%%~fa"

md "%Curpath%\%FolderName%"

copy /b NUL "%Curpath%\%FolderName%\index.html"
copy /b NUL "%Curpath%\%FolderName%\style.css"
copy /b NUL "%Curpath%\%FolderName%\script.js"

(echo ^<!DOCTYPE html^>&& echo ^<html^>&& echo 	^<head^>&& echo 		^<meta charset="UTF-8"^>&& echo 		^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>&& echo 		^<meta http-equiv="X-UA-Compatible" content="ie=edge"^>&& echo 		^<title^>%FolderName%^</title^>&& echo 		^<link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.1.3/css/bootstrap.min.css"^>&& echo 		^<link rel="stylesheet" href="style.css"^>&& echo 		^<script src="https://code.jquery.com/jquery-3.4.1.min.js"^>^</script^>&& echo 		^<script src="script.js"^>^</script^>&& echo 	^</head^>&& echo 	^<body^>&& echo. 		&& echo 	^</body^>&& echo ^</html^>)> "%Curpath%\%FolderName%\index.html"

(echo body {&& echo     direction: rtl;&& echo })> "%Curpath%\%FolderName%\style.css"