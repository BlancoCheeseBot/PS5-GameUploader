# PS5GameUploader (v1.1.0)

PS5GameUploader is a Windows GUI tool for uploading PS5 game folders to a PS5/FTP target and validating an offline license before allowing usage.

## What it can do
- Upload game folders/files via FTP using a simple GUI workflow (select folder → upload). 
- Load and validate an offline license file (e.g., `license.json`) to enable the application features.
- Show user-friendly dialogs for information/warnings/errors and an About dialog in the UI. [web:856][web:899]

## Typical workflow
1. Start `PS5GameUploader.exe`
2. Load your license file (`license.json`)
3. Configure FTP target (host/IP, port, username, password)
4. Select a game folder
5. Start upload and monitor status/log output

## Notes
- If distributed as a PyInstaller **onedir** build, keep the entire application folder together (don’t move only the `.exe`). [web:548]
- Never share private signing material (private keys) with end users.
