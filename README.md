# PS5-GameUploader

PS5-GameUploader is a lightweight GUI tool for uploading PS5 game folders to a PS5 FTP server with parallel transfers, pause/resume, and optional integrity verification.
## What’s included
- Python + PySide6 GUI application (desktop)
- License system support (your license file is included with the project)

## Features
- Drag & drop game folders into the app.
- Browse the remote FTP filesystem (double-click folders to change directory).
- Upload a selected game folder to the current remote directory.
- Parallel uploads (up to 4 concurrent file slots).
- Pause / Resume transfers (resume continues partially uploaded files).
- Automatic remote folder creation.
- Optional **Verify after upload (SHA-256)**.
- Optional **Repair on mismatch** (re-upload if verification fails).
- Live progress: per-slot progress bars + overall progress + speed/ETA + log output.

## Basic usage
- Start an FTP server on your PS5, then connect from the app (Host/Port/User/Pass).
- Add a game folder (Browse/Add or Drag & Drop).
- Select the folder and click **Upload selected**.

## Credits
by BlancoCheeseBot  
https://github.com/BlancoCheeseBot/PS5-GameUploader
