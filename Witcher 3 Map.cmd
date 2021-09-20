Set BrowserLocation=""

::Opera: C:\Program Files\Opera\launcher.exe
::Chrome: C:\Program Files\Google\Chrome\Application\chrome.exe
::Edge: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe

::Warning - This file is only suitable for chromium browsers (Google Chrome, Edge, Opera etc.).
::For other browsers, please read the explanations at "https://www.nexusmods.com/witcher3/mods/6061".
%BrowserLocation% --disable-web-security --user-data-dir="%~dp0Dist\disablecorsbrowserdata" "%~dp0Dist\index.html"