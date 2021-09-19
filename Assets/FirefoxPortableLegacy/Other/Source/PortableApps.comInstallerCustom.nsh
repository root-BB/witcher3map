Var strInstallerCustomVersionPreInstall

;!include NewTextReplace.nsh
;!include ReplaceInFileWithTextReplace.nsh

!macro CustomCodePreInstall
	ReadINIStr $strInstallerCustomVersionPreInstall "$INSTDIR\App\AppInfo\appinfo.ini" "Version" "PackageVersion"
	${If} ${FileExists} "$INSTDIR\Data\profile\*.*"
		${VersionCompare} $strInstallerCustomVersionPreInstall "20.0.0.0" $R0
		${If} $R0 == 2
			WriteINIStr "$INSTDIR\Data\settings\FirefoxPortableSettings.ini" "FirefoxPortableSettings" "SubmitCrashReport" "0"
		${EndIf}
		;${VersionCompare} $0 "61.0.0.0" $R0
		;${If} $R0 == 2
		;	${ReplaceInFile} "$INSTDIR\Data\profile\prefs.js" `user_pref("browser.cache.disk.capacity", 0);` `user_pref("browser.cache.disk.enable", false);`
		;${EndIf}
	${EndIf}
!macroend

!macro CustomCodePostInstall
	${If} ${FileExists} "$INSTDIR\Data\profile\*.*"
		${VersionCompare} $strInstallerCustomVersionPreInstall "78.6.0.2" $R0
		${If} $R0 == 2
			Delete "$INSTDIR\Data\settings\update-config.json"
			CopyFiles /SILENT "$INSTDIR\App\DefaultData\settings\update-config.json" "$INSTDIR\Data\settings"
		${EndIf}
	${EndIf}
!macroend