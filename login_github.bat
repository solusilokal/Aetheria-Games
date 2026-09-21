@echo off
title Login GitHub - Aetheria Games
echo ========================================================
echo               LOGIN AKUN GITHUB
echo ========================================================
echo.
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%LOCALAPPDATA%\Programs\gh;%PATH%"

echo Menghubungkan ke akun GitHub: nabilabila082020-byte
echo.
echo Langkah Login:
echo 1. Halaman GitHub Device Login akan otomatis terbuka di browser.
echo 2. Masukkan kode 8 karakter yang muncul di layar ini.
echo 3. Klik tombol "Authorize github" di browser.
echo.
echo ========================================================
echo.

gh auth login --hostname github.com --git-protocol https --web

echo.
echo ========================================================
echo Status Login Saat Ini:
gh auth status
echo ========================================================
echo.
echo Jika berhasil, silakan jalankan deploy_github.bat untuk push ke GitHub.
echo.
pause
