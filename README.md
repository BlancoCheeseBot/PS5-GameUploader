# PS5-GameUploader

PS5-GameUploader is a lightweight desktop GUI for uploading PS5 game folders to a PS5 FTP server. It supports fast parallel transfers, pause/resume, and optional integrity checks.

## What’s included
- 🖥️ Python + PySide6 GUI application
- 🔑 License system support (license file bundled with the project)

## Features
- 📂 Drag & drop game folders (or Browse → Add)
- 🗂️ Remote browsing: double-click folders to change directory
- 🚀 Upload selected folder to the current remote directory
- 🔄 Parallel uploads: up to 4 concurrent file slots
- ⏯️ Pause / Resume: continues partially uploaded files
- 🛠️ Automatic creation of missing remote folders
- ✅ Optional verify after upload (SHA-256)
- ♻️ Optional repair on mismatch (re-upload if verification fails)
- 📊 Live progress: per-slot bars, overall progress, speed/ETA, detailed log

## Basic usage
1) Start an FTP server on your PS5.
2) In the app: enter Host/Port/User/Pass and click **Connect**.
3) Add a game folder (Browse → Add or Drag & Drop).
4) Select the folder and click **Upload selected**.

## Credits
- by BlancoCheeseBot  
- https://github.com/BlancoCheeseBot/PS5-GameUploader
