Desctiption
--------------------------------------
It is an enhanced version of the work published by [untamed0](https://github.com/untamed0).

#### Additional Features (Added by [BaHTsIzBEdEvi](https://github.com/root-BB)):
* Updated Velen&Novigrad map, which was expanded with the Hearts of Stone Expansion Pack.
* Added Isle of Mist map.
* Added Toussaint map.
* Added Thousand Fables map.
* Scavengers were gathered under a separate category.
* Contract locations have been added.
* Event locations have been added.
* Side Quest locations have been added.
* Boat locations have been added.
* Added treasure locations that can be overlooked.
* Added missing Scavengers locations.
* Added many missing locations.
* Added where merchants in Person(s) in Distress category will go when released.
* Many incorrect locations have been fixed.
* Few minor bugs fixed.
* The theme has been changed.
* Made more user friendly (Click-to-Run) to make it easier to use in the local network.
* It has a much smaller file size.
* No need to install additional programs.

#### Features ([untamed0 Version](https://github.com/witcher3map/witcher3map))
* Interactive map featuring all markers in game (plus some extra ones)
* Multiple languages (in progress, [help here](https://crowdin.com/project/witcher3map))
* Mobile and tablet friendly
* Clean interface, absolutely no ads
* Easily link your map view to others, address bar is automatically updated with a permalink
* Hide markers, right click (or long press on mobile)
* Search feature (top right, bottom icon)
* 'Waypoint' marker, right click (or long press on mobile)
* Collapsible sidebar
* Fullscreen option (both desktop and mobile)
* Downloadable for offline browsing

Available Languages
--------------------------------------
- English
- Russian

There may be mistakes in translations; In case of any typos or grammatical mistakes, you can create an issue on [Github](https://github.com/root-BB/witcher3map/issues) or [Nexus page](https://www.nexusmods.com/witcher3/mods/6061).
Other translations are still progressing in the [crowdin](https://crowdin.com/project/witcher-3-interactive-map). Those who want to help with the translation can also use the [original translations](https://crowdin.com/project/witcher3map).
If there is another language you want translated you can create an issue on [Github](https://github.com/root-BB/witcher3map/issues) or [Nexus page](https://www.nexusmods.com/witcher3/mods/6061).

Usage
--------------------------------------
Due to the 100MB file limit in Github's fork repository, I placed the files exceeding the 100MB limit in the zip archive to avoid dealing with different servers; Extract the zip before running the application or download it directly from [Nexus page](https://www.nexusmods.com/witcher3/mods/6061).

Just run the "Witcher 3 Map.exe" or "Witcher 3 Map (x86).exe" file in the downloaded folder. 

The exe file opens the "index.html" file in the Dist folder with Portable Firefox in the Assets folder. "The Witcher 3 Map.ps1" file is the source code of the executable files.

#### Use With Default Browser
I've noticed that portable firefox is a bit slow in some situations; In addition, using a browser other than the customary browser can be annoying. But in order to use this version, you need to make a small adjustment. To summarize, the browser's CORS Security policy (a security policy that prevents local files from running certain file types) must be deactivated in order to open the map in any browser. It is very difficult to prepare an executable as click-to-run, as there are too many possibilities depending on the system, browser and user; so I explained below how you do it in few steps;

In Chromium-Based Browsers (Google Chrome, Edge, Opera Etc.)
- Open the "Witcher 3 Map.cmd" file with notepad or a derivative application.
- Enter the location of the exe file of the browser you are using between the quotes in the first line (Example: Set BrowserLocation="C:\Program Files\Opera\launcher.exe").
- Save and close the file.
- You can open the map by running cmd.
- Optionally, you can create a shortcut of the cmd file and add an icon.
Note1: Just below the line you made the change are the sample file locations for chrome, edge, and opera (Warning: it's also possible in a different file location).
Note2: When you run cmd, it will create an additional profile to your default browser. The map can only be opened through this newly created profile.

In Mozilla Firefox
- Type "about:config" in the address bar and press enter.
- On the page that opens, click the "I accept the risk!" button.
- Type "security.fileuri.strict_origin_policy" at the top of the new page (in the search field).
- Double-click on the search result and in this way set the "true" variable to "false".
- - Enter "-FilePath-/Witcher3Map/Dist/index.html" in the address bar. (If Firefox is your default browser, you can open it simply by double-clicking the index.html in the dist folder).
Warning: Since this setting will cause a security vulnerability on the browser, it is not recommended to use the browser in this way continuously. After using the map, the settings can be turned back to "true" by following the same steps.

#### There is also a site that continues in parallel with my work with the work of the [TiVa85](https://www.nexusmods.com/witcher3/users/40356455); You can access the site [here](http://www.tivaprojects.com/witcher3map/).
You can also access [Nexus page](https://www.nexusmods.com/witcher3/mods/6061).

Credits & Licence
--------------------------------------
Thanks to [untamed0](https://github.com/untamed0) for this nice work; it really worked very organized, it was very easy to make my additions and edits in this respect.

Created by [untamed0](https://github.com/untamed0) and edited by [BaHTsIzBEdEvi](https://github.com/root-BB). Licensed under [CC BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/4.0/). With help from [mcarver](https://github.com/mcarver), [Gerignak](https://www.nexusmods.com/witcher3/users/44200822) and the other [contributors](https://github.com/untamed0/witcher3map/graphs/contributors). Thanks to [@DesignGears](https://twitter.com/DesignGears) & [hhrhhr](https://github.com/hhrhhr) for map & asset extraction.

The Witcher 3, logo, icons &amp; map are the property of [CD PROJEKT RED](http://en.cdprojektred.com/) and are used without permission. Under section 9.4 of the CD PROJEKT RED [User Agreement](http://bar.cdprojektred.com/regulations/):
> If you create your User Generated Content using any of CD PROJEKT RED graphics, audio, video, text or any other content - you may use it and share for personal enjoyment, but we do not allow any use of it for financial profit.

Translations
- Russian - [Arkwulf](https://www.nexusmods.com/users/62669641) (with the help of old crowdin translation)

This software uses the following libraries developed by third parties, and are licenced seperately;

- jQuery (MIT)
- jQuery.NiceScroll (MIT)
- jQuery.ddslick
- Leaflet (BSD2)
- Fuse (APACHE 2.0)
- Font Awesome (MIT)