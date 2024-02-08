window.map_path  = 'hos_velen';
window.map_sWest = L.latLng(0,0);
window.map_nEast = L.latLng(265,240);
window.map_center = [126.000,115.000];
window.map_minZoom = 1;
window.map_mZoom = 6;
window.map_Zoom = 2;
window.mapdata_hos_velen = {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[82.797,87.984]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[106.219,31.016]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[86.703,27.938]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[75.875,26.844]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[177.969,211.656]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[185.750,209.531]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[238.156,201.687]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[250.250,143.500]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[241.125,155.875]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[239.750,69.937]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[115.828,133.875]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[138.031,160.625]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[122.281,179.266]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[29.984,48.000]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[33.969,99.250]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[99.938,130.172]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[218.984,116.516]],
		label: $.t("alchemy.label"),
		popup: $.t("v:alchemy.desc")
	},{
		coords: [[226.328,92.500]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[114.813,49.547]],
		label: $.t("alchemy.label"),
		popupTitle: $.t("alchemy.label") + ' - ' + $.t("v:alchemy.pellar"),
		popup: $.t("alchemy.desc")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[208.672,100.828]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[158.047,166.344]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[129.688,118.719]],
		label: $.t("sidebar.armourer") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur") + '*',
		popup: $.t("armourer.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/115.391/107.094\'>"), end: $.t("</a>")})
	},{
		coords: [[104.734,77.531]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[82.266,40.422]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[178.781,175.984]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[104.906,77.063]],
		label: $.t("sidebar.armourer") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Master") + ' - ' + $.t("v:armourer.yoana") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.masterarmor")}) + $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[210.750,99.016]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[160.922,164.297]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[129.844,119.094]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[106.609,51.953]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[105.375,76.094]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[68.094,74.203]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[82.313,40.984]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[75.859,25.828]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[101.047,166.734]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[102.688,109.234]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[164.796,185.468]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[136.625,89.219]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[110.625,60.016]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[94.344,37.016]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[88.375,34.984]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[85.125,33.172]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[96.938,31.047]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[72.953,24.188]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[77.656,17.750]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[67.531,23.656]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[66.703,26.719]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[106.188,115.703]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[177.750,195.750]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[204.500,197.968]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[214.656,223.281]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[225.812,218.781]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[257.468,208.500]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[260.625,178.468]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[260.937,165.437]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[252.875,113.687]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[175.547,83.125]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[209.156,162.734]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 7)'
	},{
		coords: [[128.469,151.563]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[134.406,129.094]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[38.828,153.984]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 10)'
	},{
		coords: [[80.125,166.000]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[108.234,145.344]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[97.828,124.594]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 7-9)'
	},{
		coords: [[137.688,187.797]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[47.000,123.172]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[57.922,26.797]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [{
		coords: [[215.016,104.297]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[214.484,113.281]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[153.734,164.906]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[81.891,69.703]],
		label: $.t("barber.label") + '*',
		popup: $.t("barber.desc") + $.t("v:barber.free") + $.t("pid.rescue",{x1: $.t("<a href='#6/102.500/33.828\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[197.094,98.766]],
		label: $.t("sidebar.blacksmith") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Master") + ' - ' + $.t("v:blacksmith.label.hattori"),
		popup: $.t("misc.active",{quest: $.t("sidequests.label.dumplings")}) + $.t("blacksmith.desc")
	},{
		coords: [[205.875,100.891]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[211.188,97.266]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[152.125,170.453]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[106.328,52.313]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[67.844,74.031]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[103.156,108.813]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[30.437,123.562]],
		label: $.t("sidebar.blacksmith") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.bald")}) + $.t("blacksmith.desc")
	},{
		coords: [[239.500,214.687]],
		label: $.t("v:blacksmith.label.rune") + '*',
		popupTitle: $.t("v:blacksmith.label.rune") + ' (' + $.t("sidebar.blacksmith") + '/' + $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Master") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.en_s")}) + $.t("v:blacksmith.desc.rune")
	}],

	//------------------------------------------------Boat------------------------------------------------
	boat: [{
		coords: [[49.656,26.250]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[52.656,75.828]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[38.781,99.031]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[59.062,124.968]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[57.437,103.312]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[66.437,81.562]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[68.062,39.187]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[83.171,49.453]],
		label: $.t("sidebar.boat") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("boat.desc")
	},{
		coords: [[84.250,103.125]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[108.937,104.875]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[63.000,201.750]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[77.250,190.062]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[114.094,133.031]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[123.625,173.875]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[127.312,176.500]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[157.187,83.250]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[166.250,86.531]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[151.843,85.218]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[155.062,108.031]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[176.625,125.016]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[170.656,135.656]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[157.562,156.093]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[165.250,163.343]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[149.718,162.781]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[145.406,167.000]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[137.843,167.500]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[139.531,176.562]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[150.000,172.093]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[154.031,171.187]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[155.250,176.093]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[239.687,202.562]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[240.281,210.656]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[171.437,76.312]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[193.562,77.000]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[199.250,87.125]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[198.687,91.375]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[199.437,95.125]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[207.562,88.750]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[206.687,90.250]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[215.750,91.625]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[216.250,94.125]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[220.000,95.875]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[198.375,118.062]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[204.937,120.062]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[208.187,118.750]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[233.937,104.000]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[239.187,89.437]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[48.281,53.593]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[65.563,69.594]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [{
		coords: [[201.547,98.188]],
		label: $.t("sidebar.brothel") + '*',
		popupTitle: $.t("sidebar.brothel") + ' - ' + $.t("v:brothel.popup.crippledKate") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.arse")}) + $.t("brothel.desc")
	},{
		coords: [[221.109,104.109]],
		label: $.t("sidebar.brothel"),
		popupTitle: $.t("sidebar.brothel") + ' - ' + $.t("v:brothel.popup.passiflora"),
		popup: $.t("brothel.desc")
	}],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[209.062,104.390]],
		label: $.t("contracts.label.elusive"),
		popup: $.t("contracts.desc.elusive")
	},{
		coords: [[205.625,97.281]],
		label: $.t("contracts.label.deadly"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("contracts.desc.deadly")
	},{
		coords: [[208.828,103.593]],
		label: $.t("contracts.label.doors"),
		popup: $.t("contracts.desc.doors")
	},{
		coords: [[82.062,42.531]],
		label: $.t("contracts.label.jenny"),
		popup: $.t("contracts.desc.jenny")
	},{
		coords: [[185.515,116.218]],
		label: $.t("contracts.label.lord"),
		popup: $.t("contracts.desc.lord")
	},{
		coords: [[128.953,95.468]],
		label: $.t("contracts.label.brother"),
		popup: $.t("contracts.desc.brother")
	},{
		coords: [[100.625,109.906]],
		label: $.t("contracts.label.tracks"),
		popup: $.t("contracts.desc.tracks")
	},{
		coords: [[33.656,206.687]],
		label: $.t("contracts.label.patrol") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.blood")}) + $.t("contracts.desc.patrol")
	},{
		coords: [[86.281,177.343]],
		label: $.t("contracts.label.phantom"),
		popup: $.t("contracts.desc.phantom")
	},{
		coords: [[104.562,79.781]],
		label: $.t("contracts.label.shrieker"),
		popup: $.t("contracts.desc.shrieker")
	},{
		coords: [[77.250,148.218],[62.297,131.980]],
		label: $.t("contracts.label.swamp") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("contracts.desc.swamp")
	},{
		coords: [[237.156,130.546],[216.359,137.453]],
		label: $.t("contracts.label.apirian"),
		popup: $.t("contracts.desc.apirian")
	},{
		coords: [[104.531,80.312]],
		label: $.t("contracts.label.honorton"),
		popup: $.t("contracts.desc.honorton")
	},{
		coords: [[158.171,165.328]],
		label: $.t("contracts.label.creature"),
		popup: $.t("contracts.desc.creature")
	},{
		coords: [[104.468,80.750]],
		label: $.t("contracts.label.griffin") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.masterarmor")}) + $.t("contracts.desc.griffin")
	},{
		coords: [[100.625,110.312]],
		label: $.t("contracts.label.merry"),
		popup: $.t("contracts.desc.merry")
	},{
		coords: [[69.218,75.843]],
		label: $.t("contracts.label.mystery"),
		popup: $.t("contracts.desc.mystery")
	},{
		coords: [[158.156,165.593]],
		label: $.t("contracts.label.drunk"),
		popup: $.t("contracts.desc.drunk")
	},{
		coords: [[188.562,101.156]],
		label: $.t("contracts.label.white"),
		popup: $.t("contracts.desc.white")
	},{
		coords: [[153.765,113.046]],
		label: $.t("contracts.label.wood"),
		popup: $.t("contracts.desc.wood")
	}],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[229.984,88.844]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[217.875,159.609]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[237.406,151.125]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.poet")}) + $.t("entrance.desc.entry")
	},{
		coords: [[197.969,201.469]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.rose")}) + $.t("entrance.desc.exit")
	},{
		coords: [[206.000,144.031]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.apirian")}) + $.t("entrance.desc.entry")
	},{
		coords: [[159.250,165.641]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.evil")}) + $.t("entrance.desc.exit")
	},{
		coords: [[214.656,192.859]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.deadman")}) + $.t("entrance.desc.exit")
	},{
		coords: [[179.438,175.406]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[183.219,191.281]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[156.031,209.125]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.darkness")}) + $.t("entrance.desc.entry")
	},{
		coords: [[173.750,77.156]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[148.141,107.047]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[130.313,41.109]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[108.234,82.484]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[106.703,72.578]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[152.172,48.781]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[44.531,39.563]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[41.688,46.266]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.mystery")}) + $.t("entrance.desc.entry")
	},{
		coords: [[53.891,126.719]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[56.984,155.984]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[88.688,107.078]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[86.094,107.875]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[111.266,179.234]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[79.094,185.234]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[93.344,155.813]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[101.266,177.547]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[98.906,177.766]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[33.453,128.790]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.bald")}) + $.t("entrance.desc.entry")
	},{
		coords: [[83.766,149.953]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[43.094,163.641]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[115.812,45.906]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[151.156,164.593]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.escape")}) + $.t("entrance.desc.entry")
	},{
		coords: [[251.812,134.875]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[226.875,151.562]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.doors")}) + $.t("entrance.desc.entry")
	},{
		coords: [[99.750,120.625]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[96.438,119.781]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[77.875,140.250]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[53.156,131.560]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[53.875,129.030]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[72.859,59.297]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[49.000,53.094]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("entrance.desc.exit")
	},{
		coords: [[107.906,71.219]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[151.359,170.094]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[57.313,158.188]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[204.500,105.656]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[94.266,184.891]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[96.203,184.750]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[35.406,123.063]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[37.547,123.734]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[34.547,124.094]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[37.906,123.781]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[219.063,101.688]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit") + $.t("v:entrance.desc.sewers4")
	},{
		coords: [[213.422,102.359]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.flowers")}) + $.t("entrance.desc.exit") + $.t("v:entrance.desc.sewers4")
	},{
		coords: [[135.344,127.547]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")})
	},{
		coords: [[257.500,189.876]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.rose")}) + $.t("entrance.desc.exit")
	},{
		coords: [[211.656,110.422]],
		label: $.t("v:entrance.label.sewers"),
		popup: $.t("v:entrance.desc.sewers1")
	},{
		coords: [[205.125,112.234]],
		label: $.t("v:entrance.label.sewers"),
		popup: $.t("v:entrance.desc.sewers1")
	},{
		coords: [[214.297,108.094]],
		label: $.t("v:entrance.label.sewers"),
		popup: $.t("v:entrance.desc.sewers2")
	},{
		coords: [[217.359,105.906]],
		label: $.t("v:entrance.label.sewers"),
		popup: $.t("v:entrance.desc.sewers2")
	},{
		coords: [[219.875,108.391]],
		label: $.t("v:entrance.label.sewers"),
		popup: $.t("v:entrance.desc.sewers2")
	},{
		coords: [[206.750,93.438]],
		label: $.t("v:entrance.label.sewers"),
		popup: $.t("v:entrance.desc.sewers3")
	},{
		coords: [[194.828,103.578]],
		label: $.t("v:entrance.desc.pass"),
		popup: $.t("v:entrance.label.pass",{quest: $.t("mainquests.label.pyres")})
	},{
		coords: [[199.031,103.266]],
		label: $.t("v:entrance.desc.pass"),
		popup: $.t("v:entrance.label.pass",{quest: $.t("mainquests.label.pyres")})
	},{
		coords: [[210.281,104.297]],
		label: $.t("v:entrance.label.sewers") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.never")}) + $.t("v:entrance.desc.sewers3")
	},{
		coords: [[201.891,102.406]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("entrance.desc.exit",{quest: $.t("mainquests.label.pyres")}) + $.t("entrance.desc.entry")
	},{
		coords: [[202.531,102.953]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.pyres")}) + $.t("entrance.desc.entry")
	},{
		coords: [[213.844,106.094]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.sins")}) + $.t("entrance.desc.exit")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[143.468,101.875]],
		label: $.t("event.label.friend"),
		popup: $.t("event.desc.friend")
	},{
		coords: [[190.625,144.312]],
		label: $.t("event.label.welcome"),
		popup: $.t("event.desc.welcome")
	},{
		coords: [[128.187,102.781]],
		label: $.t("event.label.mercy1"),
		popup: $.t("event.desc.mercy1")
	},{
		coords: [[170.953,87.453]],
		label: $.t("event.label.mercy2"),
		popup: $.t("event.desc.mercy2")
	},{
		coords: [[120.250,142.281]],
		label: $.t("event.label.caravan"),
		popup: $.t("event.desc.caravan") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/100.531/76.344\'>"), end: $.t("</a>")})
	},{
		coords: [[101.343,80.187]],
		label: $.t("event.label.crow") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.nilfgaardian")}) + $.t("event.desc.crow")
	},{
		coords: [[89.859,62.218]],
		label: $.t("event.label.crossing1"),
		popup: $.t("event.desc.crossing1")
	},{
		coords: [[111.562,110.968]],
		label: $.t("event.label.crossing2") + '*',
		popup: $.t("misc.liberated") + $.t("event.desc.crossing2")
	},{
		coords: [[78.531,128.468]],
		label: $.t("event.label.crossing3"),
		popup: $.t("event.desc.crossing3")
	},{
		coords: [[83.140,94.953]],
		label: $.t("event.label.crossing4"),
		popup: $.t("event.desc.crossing4")
	},{
		coords: [[205.875,95.843]],
		label: $.t("event.label.drunken"),
		popup: $.t("event.desc.drunken")
	},{
		coords: [[93.625,76.937]],
		label: $.t("event.label.dare1"),
		popup: $.t("event.desc.dare1")
	},{
		coords: [[199.125,117.375]],
		label: $.t("event.label.dare2") + '*',
		popup: $.t("misc.active",{quest: $.t("event.label.dare1")}) + $.t("event.desc.dare2")
	},{
		coords: [[209.656,93.875]],
		label: $.t("event.label.dare3") + '*',
		popup: $.t("misc.active",{quest: $.t("event.label.dare2")}) + $.t("event.desc.dare3")
	},{
		coords: [[144.062,71.921]],
		label: $.t("event.label.troll"),
		popup: $.t("event.desc.troll")
	},{
		coords: [[88.000,81.812]],
		label: $.t("event.label.robbery"),
		popup: $.t("event.desc.robbery")
	},{
		coords: [[204.718,115.343]],
		label: $.t("event.label.karmic"),
		popup: $.t("event.desc.karmic")
	},{
		coords: [[126.656,73.437]],
		label: $.t("event.label.looters1"),
		popup: $.t("event.desc.looters1")
	},{
		coords: [[145.437,136.500]],
		label: $.t("event.label.looters2"),
		popup: $.t("event.desc.looters2")
	},{
		coords: [[99.843,166.562]],
		label: $.t("event.label.looters3"),
		popup: $.t("event.desc.looters3")
	},{
		coords: [[210.578,109.750]],
		label: $.t("event.label.children1"),
		popup: $.t("event.desc.children1")
	},{
		coords: [[195.406,96.890]],
		label: $.t("event.label.racist1"),
		popup: $.t("event.desc.racist1")
	},{
		coords: [[203.875,114.875]],
		label: $.t("event.label.racist2"),
		popup: $.t("event.desc.racist2")
	},{
		coords: [[194.734,102.656]],
		label: $.t("event.label.pyre") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.never")}) + $.t("event.desc.pyre")
	},{
		coords: [[237.938,149.906]],
		label: $.t("event.label.gift") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.poet")}) + $.t("event.desc.gift")
	},{
		coords: [[185.750,145.312]],
		label: $.t("event.label.strangers"),
		popup: $.t("event.desc.strangers")
	},{
		coords: [[195.343,88.265]],
		label: $.t("event.label.strumpet"),
		popup: $.t("event.desc.strumpet")
	},{
		coords: [[200.781,108.046]],
		label: $.t("event.label.suspicious") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.pyres")}) + $.t("event.desc.suspicious")
	},{
		coords: [[206.406,106.468]],
		label: $.t("event.label.flame1"),
		popup: $.t("event.desc.flame1")
	},{
		coords: [[207.719,111.469]],
		label: $.t("event.label.flame2"),
		popup: $.t("event.desc.flame2")
	},{
		coords: [[163.687,177.656]],
		label: $.t("event.label.basilisk"),
		popup: $.t("event.desc.basilisk")
	},{
		coords: [[157.593,163.812]],
		label: $.t("event.label.passage1"),
		popup: $.t("event.desc.passage1")
	},{
		coords: [[157.531,169.500],[159.563,178.578]],
		label: $.t("event.label.passage2") + '*',
		popup: $.t("event.desc.passage2_1") + $.t("misc.active",{quest: $.t("event.label.passage1")})
	},{
		coords: [[189.500,98.640]],
		label: $.t("event.label.raids") + '*',
		popup: $.t("event.desc.raids") +  $.t("misc.active",{quest: $.t("mainquests.label.pyres")}) + $.t("misc.disappears",{quest: $.t("sidequests.label.never")})
	},{
		coords: [[149.312,166.500]],
		label: $.t("sidequests.label.neighborhood") + '*',
		popup: $.t("sidequests.desc.neighborhood") + $.t("misc.active",{quest: $.t("sidequests.label.neighborhood")})
	},{
		coords: [[87.203,164.265]],
		label: $.t("event.label.hazardous2") + '*',
		popup: $.t("event.desc.hazardous2") + $.t("misc.active",{quest: $.t("sidequests.label.hazardous1")})
	},{
		coords: [[42.234,203.172]],
		label: $.t("event.label.death2") + '*',
		popup: $.t("event.desc.death2") + $.t("misc.active",{quest: $.t("sidequests.label.death1")})
	},{
		coords: [[204.594,210.031]],
		label: $.t("event.label.trace2") + '*',
		popup: $.t("event.desc.trace2") + $.t("misc.active",{quest: $.t("sidequests.label.trace1")})
	},{
		coords: [[215.328,105.031]],
		label: $.t("event.label.raids2") + '*',
		popup: $.t("event.desc.raids2") +  $.t("misc.active",{quest: $.t("mainquests.label.pyres")}) + $.t("misc.disappears",{quest: $.t("sidequests.label.never")})
	},{
		coords: [[68.844,75.234]],
		label: $.t("event.label.millie") + '*',
		popup: $.t("event.desc.millie") + $.t("misc.active",{quest: $.t("sidequests.label.cat")})
	},{
		coords: [[209.656,88.375]],
		label: $.t("event.label.vivienne") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.humble")}) + $.t("event.desc.vivienne",{quest: $.t("sidequests.label.smittenkight")})
	},{
		coords: [[101.625,74.625]],
		label: $.t("event.label.daughter1") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.crookback")}) + $.t("event.desc.daughter1")
	},{
		coords: [[102.094,78.188]],
		label: $.t("event.label.daughter2") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.crookback")}) + $.t("event.desc.daughter2")
	},{
		coords: [[104.719,76.563]],
		label: $.t("event.label.stable") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.family")}) + $.t("event.desc.stable")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[210.641,99.266]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[168.094,91.391]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[160.734,164.500]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[129.922,118.313]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[153.016,46.609]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[106.594,52.625]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[105.156,76.313]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[68.094,74.503]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[82.328,40.094]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[75.875,25.531]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[100.703,167.141]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[102.531,108.906]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[23.984,150.546]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[164.296,185.546]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[189.812,97.062]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[197.141,99.516]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[181.531,135.469]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[107.281,42.953]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[98.313,40.141]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[98.578,21.844]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[49.641,150.531]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[84.875,123.281]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[181.156,220.687]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[246.250,182.812]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[258.843,129.187]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[248.437,162.687]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[215.016,126.328]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[229.563,124.656]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[239.594,104.219]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[164.563,198.594]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[171.500,119.516]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[184.609,58.609]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[121.781,136.625]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[122.484,167.156]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[144.641,87.578]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[70.859,44.063]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[93.516,99.344]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[91.563,19.516]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[147.047,57.047]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[37.094,55.438]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[23.172,78.391]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[18.750,78.531]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[34.438,93.125]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[56.953,200.891]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[43.328,149.781]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[28.078,148.406]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[24.063,150.188]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[69.406,162.688]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[132.000,69.516]],
		label: $.t("sidebar.guarded") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.griffin")}) + $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[205.438,99.578]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[209.703,102.953]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[200.859,98.078]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[204.547,109.125]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[199.141,101.578]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[201.953,102.656]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[199.188,126.813]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[198.813,113.438]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[198.409,107.094]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.cabaret")}) + $.t("gwent.desc.player")
	},{
		coords: [[206.406,96.734]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[214.328,110.844]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[206.063,101.203]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[209.453,94.750]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[211.344,97.563]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[212.156,96.172]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[216.281,104.438]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[210.859,113.031]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[211.969,114.422]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[226.516,92.531]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.alchemy") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[219.125,116.844]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.alchemy") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[185.375,117.734]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[209.500,105.313]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player") + $.t("misc.active",{quest: $.t("sidequests.label.never")})
	},{
		coords: [[170.047,179.250]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[158.281,166.453]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[159.344,164.703]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[152.344,170.422]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[129.922,118.688]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent") + '*',
		popup: $.t("gwent.desc.player") + $.t("pid.rescue",{x1: $.t("<a href='#6/115.500/107.875\'>"), end: $.t("</a>")})
	},{
		coords: [[178.844,176.203]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[107.641,54.969]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[106.688,52.172]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[101.750,76.297]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[104.297,76.969]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[104.813,77.609]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[84.000,70.125]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent") + '*',
		popup: $.t("pid.rescue",{x1: $.t("<a href='#6/72.375/104.625\'>"), end: $.t("</a>")})
	},{
		coords: [[70.688,73.453]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[67.703,74.266]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[81.969,41.453]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[82.453,40.422]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[105.125,77.000]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[99.984,110.703]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[103.469,108.953]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[33.672,204.953]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[78.219,147.219]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.gwent") + '*',
		popup: $.t("misc.mdisappears",{quest: $.t("sidequests.label.hillock")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.family")})
	},{
		coords: [[134.016,131.469]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.gwent") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.eternal")}) + $.t("gwent.desc.player")
	},{
		coords: [[187.875,152.038]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[153.563,163.469]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("v:gwent.popup.shani") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[155.875,164.781]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("v:gwent.popup.olgierd") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("misc.active",{quest: $.t("mainquests.label.evil")}) + $.t("gwent.desc.player") + $.t("misc.disappears",{quest: $.t("mainquests.label.marriage")})
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [{
		coords: [[207.516,101.172]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.vivaldi") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_collect")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city")})
	},{
		coords: [[214.406,103.469]],
		label: $.t("sidebar.gwentquest") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("gwentquest.players.dijkstra") + ' - ' +  $.t("sidebar.gwentquest") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city") + ' - ' + $.t("gwentquest.players.serenity")}) + $.t("misc.active",{quest: $.t("mainquests.label.flowers")}) + $.t("misc.mdisappears",{quest: $.t("sidequests.label.reason")}) + $.t("<br />") + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/213.422/102.359\'>"), end: $.t("</a>")})
	},{
		coords: [[220.750,103.906]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.serenity") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city") + ' - ' + $.t("gwentquest.players.vivaldi")}) + $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_collect")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city")})
	},{
		coords: [[186.563,83.313]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.merchant") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city") + ' - ' + $.t("gwentquest.players.dijkstra")}) + $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_collect")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_city")})
	},{
		coords: [[199.391,106.578]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.zoltan") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.novigrad")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals")})
	},{
		coords: [[180.141,176.484]],
		label: $.t("sidebar.gwentquest") + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("gwentquest.players.roche") + ' - ' +  $.t("sidebar.gwentquest") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals") + ' - ' + $.t("gwentquest.players.zoltan")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/179.438/175.406\'>"), end: $.t("</a>")})
	},{
		coords: [[198.656,125.938]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.thaler") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals") + ' - ' + $.t("gwentquest.players.roche")}) + $.t("misc.active",{quest: $.t("sidequests.label.deadly")}) + $.t("misc.mdisappears",{quest: $.t("sidequests.label.reason")}) + $.t("<br />") + $.t("gwentquest.desc.quest2",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals"),quest2: $.t("sidebar.gwent") + $.t(": ") + $.t("sidequests.label.gw_thaler")})
	},{
		coords: [[128.031,95.813]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_inn") + ' - ' + $.t("gwentquest.players.stjepan")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_inn")})
	},{
		coords: [[156.047,165.500]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.stjepan") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_inn")})
	},{
		coords: [[209.516,105.125]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.olivier") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_inn") + ' - ' + $.t("gwentquest.players.stjepan")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_inn")}) + $.t("misc.disappears",{quest: $.t("sidequests.label.never")})
	},{
		coords: [[106.859,73.734]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.baron") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.baron")}) + $.t("misc.disappears",{quest: $.t("sidequests.label.crookback")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_velen")})
	},{
		coords: [[69.000,72.734]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.boatwright") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_velen")})
	},{
		coords: [[80.016,40.500]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.haddy") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_velen")})
	},{
		coords: [[84.563,175.656]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("gwentquest.players.sage") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_velen")})
	},{
		coords: [[213.094,106.906]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.lambert") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals") + ' - ' + $.t("gwentquest.players.thaler")}) + $.t("misc.active",{quest: $.t("sidequests.label.thread")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals")})
	}],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [{
		coords: [[199.828,86.109]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[157.563,161.406]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[123.422,172.734]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[114.156,134.563]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[114.813,104.563]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[82.125,89.125]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[95.344,26.344]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[107.375,41.438]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[53.266,75.359]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[28.094,46.609]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[33.641,119.953]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	}],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[207.172,103.047]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[201.656,102.625]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[184.547,118.500]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[169.859,179.094]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[178.593,216.218]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[251.016,141.938]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[86.609,29.156]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[107.125,31.641]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[34.578,98.656]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[99.828,129.547]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[68.109,23.281]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[199.563,187.438]],
		label: $.t("sidebar.herbalist") + '*',
		popup:$.t("misc.liberated") + $.t("herbalist.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/198.687/186.906\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[153.063,45.953]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.desc")
	},{
		coords: [[107.531,36.859]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_sunkent"),
		popup: $.t("sidequests.desc.tr_sunkent")
	},{
		coords: [[104.422,26.078]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_mistake"),
		popup: $.t("sidequests.desc.tr_mistake")
	},{
		coords: [[94.859,28.031]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_zuleyka"),
		popup: $.t("sidequests.desc.tr_zuleyka")
	},{
		coords: [[54.469,51.313]],
		label: $.t("sidebar.hidden") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("hidden.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[105.625,148.141]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_fire"),
		popup: $.t("sidequests.desc.tr_fire")
	},{
		coords: [[190.937,195.125]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_force"),
		popup: $.t("sidequests.desc.tr_force")
	},{
		coords: [[186.312,211.250]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_surprise"),
		popup: $.t("sidequests.desc.tr_surprise")
	},{
		coords: [[197.593,226.125]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_romilly"),
		popup: $.t("sidequests.desc.tr_romilly")
	},{
		coords: [[245.562,212.562]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_cursed"),
		popup: $.t("sidequests.desc.tr_cursed")
	},{
		coords: [[252.625,133.625]],
		label: $.t("sidebar.hidden") + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_redemption"),
		popup: $.t("sidequests.desc.tr_redemption") + $.t("misc.entrance1",{x1: $.t("<a href='#6/251.812/134.875\'>"), end: $.t("</a>")})
	},{
		coords: [[238.156,155.891]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_tinker"),
		popup: $.t("sidequests.desc.tr_tinker")
	},{
		coords: [[241.750,94.062]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_perfidy"),
		popup: $.t("sidequests.desc.tr_perfidy")
	},{
		coords: [[154.313,96.734]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_forcoin"),
		popup: $.t("sidequests.desc.tr_forcoin")
	},{
		coords: [[168.563,78.875]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_wrecks"),
		popup: $.t("sidequests.desc.tr_wrecks")
	},{
		coords: [[115.891,134.969]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_events"),
		popup: $.t("sidequests.desc.tr_events")
	},{
		coords: [[130.344,173.906]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_goods"),
		popup: $.t("sidequests.desc.tr_goods")
	},{
		coords: [[164.563,146.844]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_bloodgold"),
		popup: $.t("sidequests.desc.tr_bloodgold")
	},{
		coords: [[125.625,143.594]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_luck"),
		popup: $.t("sidequests.desc.tr_luck")
	},{
		coords: [[171.813,139.453]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_battlefield"),
		popup: $.t("sidequests.desc.tr_battlefield")
	},{
		coords: [[166.922,155.281]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_dowry"),
		popup: $.t("sidequests.desc.tr_dowry")
	},{
		coords: [[86.016,17.078]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[50.922,182.641]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[99.469,197.203]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[112.969,162.563]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_world"),
		popup: $.t("sidequests.desc.tr_world")
	},{
		coords: [[56.438,20.781]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_ignored"),
		popup: $.t("sidequests.desc.tr_ignored")
	},{
		coords: [[51.297,34.500]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_defense"),
		popup: $.t("sidequests.desc.tr_defense")
	},{
		coords: [[55.031,49.828]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_gods"),
		popup: $.t("sidequests.desc.tr_gods")
	},{
		coords: [[39.859,70.531]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_sunkenc"),
		popup: $.t("sidequests.desc.tr_sunkenc")
	}],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [{
		coords: [[136.438,122.984]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[132.750,90.313]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[132.063,88.719]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[124.656,88.344]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[138.625,125.813]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[131.625,121.313]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[159.406,126.219]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[129.516,49.000]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[112.922,155.750]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[111.375,155.828]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[66.625,23.906]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[52.219,19.094]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[55.094,20.875]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[62.875,184.430]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[163.750,198.406]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[214.922,125.469]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[137.719,125.188]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[139.063,127.219]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[140.719,127.125]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[141.594,127.375]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[140.406,125.094]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[143.219,125.813]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[142.219,124.406]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[30.344,53.031]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[80.906,19.781]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[85.094,45.063]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[79.000,164.000]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[110.047,147.156]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[156.781,134.594]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[154.766,131.016]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[172.813,87.516]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[171.266,92.578]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[167.578,101.438]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[53.219,69.875]],
		label: $.t("sidebar.hollow") + '*',
		popup: $.t("hollow.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.forefathers")})
	},{
		coords: [[106.016,38.016]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[103.734,41.656]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[62.063,27.563]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[91.828,99.609]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[127.875,118.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[112.719,111.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[131.609,131.281]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[155.406,138.156]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[136.469,148.438]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[137.719,143.938]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[132.656,124.125]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[130.594,130.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[106.625,108.859]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[104.938,126.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[105.656,131.250]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[109.828,145.516]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[105.438,101.563]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[80.719,167.656]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[67.469,182.250]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[49.938,182.625]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[52.938,181.188]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[23.938,149.125]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[170.938,95.406]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[135.875,176.719]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[164.500,200.063]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[163.594,199.500]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[163.125,199.406]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[162.688,199.250]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[132.313,192.875]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[142.781,187.688]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[216.375,126.578]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[180.141,192.297]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[59.531,144.516]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[60.688,143.188]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[63.453,143.938]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[74.172,27.859]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[107.938,45.563]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[85.016,132.922]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[86.703,129.047]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[47.875,43.875]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[112.766,57.828]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[111.813,137.250]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[58.781,193.563]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[39.203,195.266]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[99.047,42.938]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[80.063,15.797]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[78.750,19.000]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[70.500,22.281]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[67.266,20.219]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[64.828,21.063]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[63.031,24.625]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[140.344,120.625]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	}],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [{
		coords: [[34.438,93.688]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[203.750,197.891]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[205.344,197.359]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[206.563,197.703]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[206.844,196.859]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[207.531,198.000]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[207.859,197.125]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[213.000,141.156]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[215.266,140.344]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[251.719,142.266]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[29.125,97.844]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[29.750,97.969]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[75.531,55.906]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[75.500,54.906]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[65.547,91.063]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[66.172,91.266]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[56.063,20.344]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[50.234,27.016]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[50.969,35.469]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[85.906,29.250]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[87.188,28.813]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[85.875,27.375]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[117.516,46.469]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[50.359,72.531]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[49.359,73.938]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[96.359,127.563]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[96.109,126.578]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[95.484,124.828]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[106.328,115.328]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[107.844,145.250]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[106.891,148.328]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[106.938,149.281]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[106.016,150.250]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[137.688,161.094]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[161.953,179.766]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[180.578,121.156]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[181.391,122.203]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[155.078,99.703]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[153.703,96.063]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[154.922,96.563]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[155.078,96.438]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[169.188,96.641]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[169.797,95.063]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[182.625,90.719]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[186.250,96.859]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[185.406,98.922]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[185.578,100.344]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[133.125,162.109]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[153.469,135.078]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[79.719,167.656]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[184.781,113.438]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[188.750,103.031]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[205.703,197.328]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[69.344,145.984]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	}],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[206.000,96.547]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.theGoldenSturgen"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[220.609,104.172]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.passiflora"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[214.000,110.672]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.theNowhere"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	},{
		coords: [[198.859,106.875]],
		label: $.t("sidebar.innkeep") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.rosemaryAndThyme") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.cabaret")}) + $.t("v:innkeep.desc.foodAndDrink")
	},{
		coords: [[198.875,126.656]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.sevenCatsInn"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[209.328,104.719]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.theKingfisher"),
		popup: $.t("v:misc.disappearingTrader") + $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[185.125,118.047]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.cunnyOfTheGoose"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[156.063,165.172]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.theAlchemy"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[128.141,95.516]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("v:innkeep.inns.innAtTheCrossroads"),
		popup: $.t("v:innkeep.desc.gwentAndDrink")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [{
		coords: [[142.984,118.125]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[81.656,136.359]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[237.641,105.016]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[165.891,99.375]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	}],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[153.734,135.203]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[160.500,127.328]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[110.656,88.094]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[100.078,66.047]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[82.969,86.828]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[44.984,40.906]],
		label: $.t("sidebar.monsternest") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("monsternest.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[45.359,41.141]],
		label: $.t("sidebar.monsternest") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("monsternest.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[60.047,126.375]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[204.843,186.437]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[238.812,199.906]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[235.656,201.531]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[240.562,171.500]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[255.125,119.750]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[218.687,183.875]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[154.141,85.000]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[169.094,95.281]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[170.313,98.000]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[170.266,112.969]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[133.422,162.531]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[133.750,161.688]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[125.938,147.391]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[160.750,137.891]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[43.578,108.563]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[86.891,168.969]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[91.297,165.547]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[88.094,161.422]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[87.891,158.172]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[96.875,185.094]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[95.656,185.125]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[209.078,103.609]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[205.641,97.031]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[215.844,105.000]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[188.594,100.641]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[237.172,130.297]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[198.047,126.578]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[205.750,157.922]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[185.500,116.000]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[158.156,165.109]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[131.547,119.453]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[128.953,95.047]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[153.344,112.781]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[82.078,42.078]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[104.547,78.828]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[69.234,75.438]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[77.266,147.797]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[100.641,109.469]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[33.688,206.219]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [{
		coords: [[147.578,119.578]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/151.781/115.188\'>"), end: $.t("</a>")})
	},{
		coords: [[102.500,33.828]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/81.891/69.703\'>"), end: $.t("</a>")})
	},{
		coords: [[198.687,186.906]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/199.563/187.438\'>"), end: $.t("</a>")})
	},{
		coords: [[142.984,199.375]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/130.578/196.953\'>"), end: $.t("</a>")})
	},{
		coords: [[115.391,107.094]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/129.688/118.719\'>"), end: $.t("</a>")})
	},{
		coords: [[72.656,103.797]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/83.766/69.922\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[230.391,98.688]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[200.813,162.688]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[152.688,47.781]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[15.063,76.140]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[53.313,52.578]],
		label: $.t("sidebar.pop") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}) + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("pop.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[35.688,133.594]],
		label: $.t("sidebar.pop") + '*',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}) + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.bald")}) + $.t("pop.desc")
	},{
		coords: [[55.922,154.672]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[80.219,141.359]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[47.125,78.172]],
		label: $.t("v:poi.label.spirits") + '*',
		popup: $.t("v:poi.desc.spirits",{quest: $.t("sidequests.label.towerful")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.towerful")})
	},{
		coords: [[49.391,78.813]],
		label: $.t("v:poi.label.spirits") + '*',
		popup: $.t("v:poi.desc.spirits",{quest: $.t("sidequests.label.towerful")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.towerful")})
	},{
		coords: [[53.469,80.234]],
		label: $.t("v:poi.label.spirits") + '*',
		popup: $.t("v:poi.desc.spirits",{quest: $.t("sidequests.label.towerful")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.towerful")})
	},{
		coords: [[122.656,148.281]],
		label: $.t("poi.label.lootableBattlefield"),
		popup: $.t("poi.desc.lootableBattlefield")
	},{
		coords: [[142.781,118.375]],
		label: $.t("v:poi.label.lantern"),
		popup: $.t("v:poi.desc.lantern")
	},{
		coords: [[45.203,195.156]],
		label: $.t("v:poi.label.nilfgaardian"),
		popup: $.t("v:poi.desc.nilfgaardian")
	},{
		coords: [[156.328,209.422]],
		label: $.t("v:poi.label.lever"),
		popup: $.t("poi.desc.easter") + $.t("v:poi.desc.dlever")
	},{
		coords: [[28.125,148.188]],
		label: $.t("v:poi.label.lever"),
		popup: $.t("poi.desc.easter") + $.t("v:poi.desc.elever")
	},{
		coords: [[33.734,146.313]],
		label: $.t("v:poi.label.lever"),
		popup: $.t("poi.desc.easter") + $.t("v:poi.desc.elever")
	},{
		coords: [[28.641,155.734]],
		label: $.t("v:poi.label.lever"),
		popup: $.t("poi.desc.easter") + $.t("v:poi.desc.elever")
	},{
		coords: [[32.344,150.922]],
		label: $.t("v:poi.label.elementa") + '*',
		popup: $.t("poi.desc.easter") + $.t("v:poi.desc.elementa")
	},{
		coords: [[35.688,152.266]],
		label: $.t("v:poi.label.portal") + '*',
		popup: $.t("poi.desc.easter") + $.t("v:poi.desc.portal")
	},{
		coords: [[159.406,207.656]],
		label: $.t("v:poi.label.contract") + '*',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("contracts.label.creature")}) + $.t("v:poi.desc.contract") + $.t("misc.dactive",{quest: $.t("contracts.label.creature")})
	},{
		coords: [[245.844,195.234]],
		label: $.t("v:poi.label.hat") + '*',
		popup: $.t("v:poi.desc.hat") + $.t("v:poi.desc.qobject",{quest: $.t("mainquests.label.deadman")}) + $.t("misc.dactive",{quest: $.t("mainquests.label.deadman")})
	},{
		coords: [[221.094,193.250]],
		label: $.t("v:poi.label.sketchbook") + '*',
		popup: $.t("v:poi.desc.sketchbook") + $.t("v:poi.desc.qobject",{quest: $.t("mainquests.label.marriage")}) + $.t("misc.dactive",{quest: $.t("mainquests.label.marriage")})
	},{
		coords: [[86.766,150.891]],
		label: $.t("v:poi.label.diary") + '*',
		popup: $.t("v:poi.desc.diary") + $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.reardon")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.reardon")})
	},{
		coords: [[84.453,150.578]],
		label: $.t("v:poi.label.paper") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.paper") + $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.reardon")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.reardon")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/83.766/149.953\'>"), end: $.t("</a>")})
	},{
		coords: [[220.344,194.625]],
		label: $.t("v:poi.label.portrait") + '*',
		popup: $.t("v:poi.desc.portrait") + $.t("v:poi.desc.qobject",{quest: $.t("mainquests.label.marriage")}) + $.t("misc.dactive",{quest: $.t("mainquests.label.marriage")})
	},{
		coords: [[215.938,194.344]],
		label: $.t("v:poi.label.brush") + '*',
		popup: $.t("v:poi.desc.brush") + $.t("v:poi.desc.qobject",{quest: $.t("mainquests.label.marriage")}) + $.t("misc.dactive",{quest: $.t("mainquests.label.marriage")})
	},{
		coords: [[83.109,78.406]],
		label: $.t("v:poi.label.doll") + '*',
		popup: $.t("v:poi.desc.doll") + $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.cat")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.cat")})
	},{
		coords: [[38.688,131.125]],
		label: $.t("v:poi.label.acorn") + '*',
		popup: $.t("v:poi.desc.acorn") + $.t("v:poi.desc.qobject",{quest: $.t("mainquests.label.bald")}) + $.t("misc.dactive",{quest: $.t("mainquests.label.bald")})
	},{
		coords: [[138.219,127.313]],
		label: $.t("v:poi.label.reinald0") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[138.984,126.234]],
		label: $.t("v:poi.label.reinald1") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[140.281,131.203]],
		label: $.t("v:poi.label.reinald2") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[144.750,128.922]],
		label: $.t("v:poi.label.reinald3") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[140.813,132.234]],
		label: $.t("v:poi.label.reinald4") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[136.703,134.344]],
		label: $.t("v:poi.label.reinald5") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[141.672,130.703]],
		label: $.t("v:poi.label.edgar") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[144.828,131.828]],
		label: $.t("v:poi.label.priest") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("v:poi.desc.qobject",{quest: $.t("sidequests.label.eternal")}) + $.t("v:poi.desc.notes",{quest: $.t("sidequests.label.eternal")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[156.031,208.844]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	},{
		coords: [[100.671,177.343]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance4",{x1: $.t("<a href='#6/101.266/177.547\'>"), x2: $.t("<a href='#6/98.906/177.766\'>"), x3: $.t("<a href='#6/96.203/184.75\'>"), x4: $.t("<a href='#6/94.266/184.891\'>"), end: $.t("</a>")})
	},{
		coords: [[184.469,62.484]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.cross") + $.t("scavenger.level.1")
	},{
		coords: [[137.531,136.906]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.level.1") + '*' + ' (' + $.t("misc.underground") + ')',
		popup:$.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.item.boot") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.item.silver") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.item.steel") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fwol") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[144.234,134.609]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[182.563,191.609]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/183.219/191.281\'>"), end: $.t("</a>")})
	},{
		coords: [[212.688,113.969]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	},{
		coords: [[166.359,99.516]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	},{
		coords: [[178.547,106.328]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[92.859,155.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/92.859/155.953\'>"), end: $.t("</a>")})
	},{
		coords: [[237.984,105.422]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.3") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/237.641/105.016\'>"), end: $.t("</a>")})
	},{
		coords: [[151.093,170.312]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/151.359/170.094\'>"), end: $.t("</a>")})
	},{
		coords: [[156.047,152.828]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	},{
		coords: [[149.938,75.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	},{
		coords: [[23.656,78.094]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[153.094,46.281]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/152.172/48.781\'>"), end: $.t("</a>")})
	},{
		coords: [[45.656,165.313]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/43.094/163.641\'>"), end: $.t("</a>")})
	},{
		coords: [[160.063,127.094]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[78.516,16.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[107.375,84.438]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[43.828,107.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	},{
		coords: [[53.000,130.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3") + '*' + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.3") + $.t("misc.entrance2",{x1: $.t("<a href='#6/53.875/129.030\'>"), x2: $.t("<a href='#6/53.156/131.560\'>"), end: $.t("</a>")})
	},{
		coords: [[116.344,45.563]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.4") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/115.812/45.906\'>"), end: $.t("</a>")})
	},{
		coords: [[68.297,154.859]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[39.219,71.719]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	},{
		coords: [[36.688,53.203]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.4")
	},{
		coords: [[110.813,179.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/111.266/179.234\'>"), end: $.t("</a>")})
	},{
		coords: [[107.094,73.391]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/106.703/72.578\'>"), x2: $.t("<a href='#6/107.906/71.219\'>"), end: $.t("</a>")})
	},{
		coords: [[50.953,182.453]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	},{
		coords: [[46.797,24.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[225.359,95.906]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/229.984/88.844\'>"), end: $.t("</a>")})
	},{
		coords: [[73.047,121.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	},{
		coords: [[79.531,137.203]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/81.656/136.359\'>"), x2: $.t("<a href='#6/77.875/140.250\'>"), end: $.t("</a>")})
	},{
		coords: [[24.250,150.500]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	},{
		coords: [[141.453,119.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.3") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/142.984/118.125\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[208.734,102.859]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.bookMerchant"),
		popup: $.t("shopkeeper.desc.bookMerchant")
	},{
		coords: [[209.594,102.828]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.bookMerchant"),
		popup: $.t("shopkeeper.desc.bookMerchant")
	},{
		coords: [[205.109,99.563]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	},{
		coords: [[188.281,101.453]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	},{
		coords: [[207.375,100.969]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.banker") + ' - ' + $.t("v:shopkeeper.label.vivaldi"),
		popup: $.t("shopkeeper.desc.banker")
	},{
		coords: [[198.516,113.328]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.tailor") + ' - ' + $.t("v:shopkeeper.label.elihal"),
		popup: $.t("misc.disappears",{quest: $.t("sidequests.label.matter")}) + $.t("shopkeeper.desc.tailor")
	},{
		coords: [[198.891,101.484]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.kingfOfBeggarsMerchant")
	},{
		coords: [[216.016,104.219]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.gildorf"),
		popup: $.t("v:shopkeeper.desc.aeramasTrinketMerchant",{quest1: $.t("sidequests.label.darkness"), quest2: $.t("sidequests.label.nobleman"), quest3: $.t("sidequests.label.tango")})
	},{
		coords: [[211.797,96.109]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	},{
		coords: [[209.234,94.563]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.fishmonger"),
		popup: $.t("v:shopkeeper.desc.fishmonger")
	},{
		coords: [[215.203,92.344]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.emptyBottlesMerchant")
	},{
		coords: [[213.813,93.063]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.stuff")}) + $.t("shopkeeper.desc.alchemyAndRunes")
	},{
		coords: [[239.766,70.563]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.alchemyAndRunes")
	},{
		coords: [[210.578,113.344]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[204.500,109.047]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gemDustWeaponsFoodAndDrink")
	},{
		coords: [[211.516,114.313]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.loanShark"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[212.547,110.969]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.craftingSupplies")
	},{
		coords: [[200.828,98.297]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.foodAndDrink")
	},{
		coords: [[130.578,196.953]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies") + $.t("pid.rescue",{x1: $.t("<a href='#6/142.984/199.375\'>"), end: $.t("</a>")})
	},{
		coords: [[186.656,82.938]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSuppliesFoodAndWeapons")
	},{
		coords: [[167.844,90.969]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[159.141,164.516]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.paintMerchant",{quest: $.t("sidequests.label.volunteer")})
	},{
		coords: [[151.781,115.188]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("v:shopkeeper.desc.alchemyAndFood") + $.t("pid.rescue",{x1: $.t("<a href='#6/147.578/119.578\'>"), end: $.t("</a>")})
	},{
		coords: [[123.156,179.266]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	},{
		coords: [[137.406,160.781]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.alchemyRunesAndFood")
	},{
		coords: [[107.469,54.906]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[101.547,76.094]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks")
	},{
		coords: [[81.797,41.406]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndJewellery")
	},{
		coords: [[90.109,47.906]],
		label: $.t("sidebar.shopkeeper") + '*',
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.keira") + '*',
		popup: $.t("misc.disappears",{quest: $.t("sidequests.label.favor")}) + $.t("v:shopkeeper.desc.alchemyRecipesAndClearance")
	},{
		coords: [[104.031,76.875]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.gwentFoodAndDrink")
	},{
		coords: [[100.531,76.344]],
		label: $.t("sidebar.shopkeeper") + '*',
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.anselm") + '*',
		popup: $.t("v:shopkeeper.desc.blindersMerchant") + $.t("pid.rescue",{x1: $.t("<a href='#6/120.250/142.281\'>"), end: $.t("</a>")})
	},{
		coords: [[70.563,73.188]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.drinksAndSaddlebags")
	},{
		coords: [[83.766,69.922]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks") + $.t("pid.rescue",{x1: $.t("<a href='#6/72.656/103.797\'>"), end: $.t("</a>")})
	},{
		coords: [[83.531,87.641]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.alchemyAndRunes")
	},{
		coords: [[92.156,29.109]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[76.797,26.313]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[239.063,156.281]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[30.359,46.734]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.alchemyRunesAndFood")
	},{
		coords: [[100.578,130.578]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("v:shopkeeper.desc.alchemyAndFood")
	},{
		coords: [[99.984,130.453]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	},{
		coords: [[99.844,110.594]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndCrafting")
	},{
		coords: [[99.000,109.281]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.alchemyRunesAndFood")
	},{
		coords: [[33.453,204.859]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[78.078,147.141]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.mdisappears",{quest: $.t("sidequests.label.hillock")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.family")}) + $.t("v:shopkeeper.desc.drinksmerchant")
	},{
		coords: [[42.156,204.500]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.alchemyAndRunes")
	},{
		coords: [[42.844,206.344]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[44.063,206.734]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	},{
		coords: [[35.406,124.250]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.bald")}) + $.t("shopkeeper.desc.alchemyAndRunes")
	},{
		coords: [[28.500,123.875]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.bald")}) + $.t("v:shopkeeper.desc.alchemyAndFood")
	},{
		coords: [[133.906,131.266]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.eternal")}) + $.t("v:shopkeeper.desc.alchemyAndFood")
	},{
		coords: [[129.578,125.719]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("v:shopkeeper.desc.alchemyAndFood")
	},{
		coords: [[187.797,152.172]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwent")
	},{
		coords: [[208.609,101.938]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.bookMerchant"),
		popup: $.t("shopkeeper.desc.bookMerchant")
	},{
		coords: [[207.484,102.297]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.foodAndDrink")
	},{
		coords: [[99.672,166.813]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	},{
		coords: [[185.500,206.969]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[182.593,155.875]],
		label: $.t("sidequests.label.barnful"),
		popup: $.t("sidequests.desc.barnful")
	},{
		coords: [[199.343,106.343]],
		label: $.t("sidequests.label.dangerous") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.poet")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.dangerous")
	},{
		coords: [[150.531,166.578]],
		label: $.t("sidequests.label.wanted") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.junior")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.wanted")
	},{
		coords: [[66.687,91.125]],
		label: $.t("sidequests.label.dog"),
		popup: $.t("sidequests.desc.dog")
	},{
		coords: [[89.843,48.609]],
		label: $.t("sidequests.label.magiclamp") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) +  $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.magiclamp")
	},{
		coords: [[89.843,48.809]],
		label: $.t("sidequests.label.invitation") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.magiclamp")}) +  $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.invitation")
	},{
		coords: [[89.843,49.009]],
		label: $.t("sidequests.label.towerful") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.invitation")}) +  $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.towerful")
	},{
		coords: [[89.843,49.209]],
		label: $.t("sidequests.label.favor") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.towerful")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.favor")
	},{
		coords: [[198.063,82.391]],
		label: $.t("sidequests.label.reason") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.blindingly") + "', '" + $.t("sidequests.label.deadly") + "', '" + $.t("sidequests.label.eyeforeye") + "', '" + $.t("sidequests.label.wanted")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.ice")}) + $.t("sidequests.desc.favor")
	},{
		coords: [[200.375,105.203]],
		label: $.t("sidequests.label.feast") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.flowers")}) + $.t("sidequests.desc.feast")
	},{
		coords: [[72.437,59.625]],
		label: $.t("sidequests.label.greedy") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("sidequests.desc.greedy")
	},{
		coords: [[205.515,107.984]],
		label: $.t("sidequests.label.entombed") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("sidequests.desc.entombed") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/205.125/112.234\'>"), x2: $.t("<a href='#6/211.656/110.422\'>"), end: $.t("</a>")})
	},{
		coords: [[197.609,93.546]],
		label: $.t("sidequests.label.waterfront"),
		popup: $.t("sidequests.desc.waterfront")
	},{
		coords: [[180.000,176.125]],
		label: $.t("sidequests.label.eyeforeye") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gangs")}) + $.t("sidequests.desc.eyeforeye")
	},{
		coords: [[160.421,166.437]],
		label: $.t("sidequests.label.avid") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.sesame")}) + $.t("sidequests.desc.avid")
	},{
		coords: [[148.156,114.093]],
		label: $.t("sidequests.label.bitter"),
		popup: $.t("sidequests.desc.bitter")
	},{
		coords: [[207.203,97.140]],
		label: $.t("sidequests.label.pearl"),
		popup: $.t("sidequests.desc.pearl")
	},{
		coords: [[42.718,204.250]],
		label: $.t("sidequests.label.blood"),
		popup: $.t("sidequests.desc.blood")
	},{
		coords: [[198.968,107.734]],
		label: $.t("sidequests.label.cabaret") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.poet")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.cabaret")
	},{
		coords: [[198.968,108.000]],
		label: $.t("sidequests.label.sins") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.cabaret")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.sins")
	},{
		coords: [[106.968,74.875]],
		label: $.t("sidequests.label.ciri") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.ciriwolves")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.ciri")
	},{
		coords: [[149.562,129.187]],
		label: $.t("sidequests.label.deathfire"),
		popup: $.t("sidequests.desc.deathfire")
	},{
		coords: [[105.031,59.843]],
		label: $.t("sidequests.label.defender"),
		popup: $.t("sidequests.desc.defender")
	},{
		coords: [[212.781,145.468]],
		label: $.t("sidequests.label.empty"),
		popup: $.t("sidequests.desc.empty")
	},{
		coords: [[152.500,115.343]],
		label: $.t("sidequests.label.fake") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.bitter")}) + $.t("sidequests.desc.fake")
	},{
		coords: [[218.000,106.109]],
		label: $.t("sidequests.label.fencing") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.flowers")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.fencing")
	},{
		coords: [[209.109,103.250]],
		label: $.t("sidequests.label.thread"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.baby")}) + $.t("sidequests.desc.thread")
	},{
		coords: [[101.781,137.718]],
		label: $.t("sidequests.label.fools"),
		popup: $.t("sidequests.desc.fools")
	},{
		coords: [[104.391,76.938],[89.062,47.875]],
		label: $.t("sidequests.label.forefathers") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.towerful")}) + $.t("sidequests.desc.forefathers")
	},{
		coords: [[164.218,89.750]],
		label: $.t("sidequests.label.fromfar2"),
		popup: $.t("sidequests.desc.fromfar2")
	},{
		coords: [[129.687,111.093]],
		label: $.t("sidequests.label.funeral"),
		popup: $.t("sidequests.desc.funeral")
	},{
		coords: [[84.625,150.094]],
		label: $.t("sidequests.label.ghosts"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.ghosts")
	},{
		coords: [[209.078,104.125]],
		label: $.t("sidequests.label.haunted") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.novigrad")}) + $.t("sidequests.desc.haunted")
	},{
		coords: [[104.562,129.296]],
		label: $.t("sidequests.label.hazardous1"),
		popup: $.t("sidequests.desc.hazardous1")
	},{
		coords: [[213.187,94.671]],
		label: $.t("sidequests.label.stuff"),
		popup: $.t("sidequests.desc.stuff")
	},{
		coords: [[210.468,107.234]],
		label: $.t("sidequests.label.messages") + '*',
		popup: $.t("misc.active",{quest: $.t("event.label.children1")}) + $.t("sidequests.desc.messages")
	},{
		coords: [[221.109,104.375]],
		label: $.t("sidequests.label.stakes"),
		popup: $.t("sidequests.desc.stakes")
	},{
		coords: [[198.390,104.546]],
		label: $.t("sidequests.label.honor") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gangs")}) + $.t("sidequests.desc.honor")
	},{
		coords: [[111.843,54.500]],
		label: $.t("sidequests.label.rites") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.defender")}) + $.t("sidequests.desc.rites")
	},{
		coords: [[237.718,129.500]],
		label: $.t("sidequests.label.red"),
		popup: $.t("sidequests.desc.red")
	},{
		coords: [[76.156,28.031]],
		label: $.t("sidequests.label.snares"),
		popup: $.t("sidequests.desc.snares")
	},{
		coords: [[103.843,39.812]],
		label: $.t("sidequests.label.mob"),
		popup: $.t("misc.disappears",{quest: $.t("sidequests.label.favor")}) + $.t("sidequests.desc.mob")
	},{
		coords: [[104.843,77.312]],
		label: $.t("sidequests.label.masterarmor"),
		popup: $.t("sidequests.desc.masterarmor")
	},{
		coords: [[209.515,102.640]],
		label: $.t("sidequests.label.oldfriend"),
		popup: $.t("sidequests.desc.oldfriend")
	},{
		coords: [[240.937,124.375]],
		label: $.t("sidequests.label.hospitality"),
		popup: $.t("sidequests.desc.hospitality")
	},{
		coords: [[210.562,95.609]],
		label: $.t("sidequests.label.city1") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.matter") + "', '" + $.t("mainquests.label.reuven")}) + $.t("sidequests.desc.city1")
	},{
		coords: [[221.812,98.968]],
		label: $.t("sidequests.label.city2") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.matter") + "', '" + $.t("mainquests.label.reuven")}) + $.t("sidequests.desc.city2")
	},{
		coords: [[155.093,208.531]],
		label: $.t("sidequests.label.darkness"),
		popup: $.t("sidequests.desc.darkness")
	},{
		coords: [[197.062,99.031]],
		label: $.t("sidequests.label.dumplings"),
		popup: $.t("sidequests.desc.dumplings")
	},{
		coords: [[201.578,98.515]],
		label: $.t("sidequests.label.arse") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.deadly")}) + $.t("sidequests.desc.arse")
	},{
		coords: [[209.938,109.422]],
		label: $.t("sidequests.label.matter") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.reuven")}) + $.t("sidequests.desc.matter")
	},{
		coords: [[246.547,198.938]],
		label: $.t("sidequests.label.midnight") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.deadman")}) + $.t("sidequests.desc.midnight")
	},{
		coords: [[107.078,73.765]],
		label: $.t("sidequests.label.crookback") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.family")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.crookback")
	},{
		coords: [[247.500,174.343]],
		label: $.t("sidequests.label.rose") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.mainquests.evil")}) + $.t("sidequests.desc.rose")
	},{
		coords: [[154.000,163.500]],
		label: $.t("sidequests.label.neighborhood") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.drunk")}) + $.t("sidequests.desc.neighborhood")
	},{
		coords: [[149.281,183.343]],
		label: $.t("sidequests.label.spooked"),
		popup: $.t("sidequests.desc.spooked")
	},{
		coords: [[95.156,47.718]],
		label: $.t("sidequests.label.takewant") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.cat")}) + $.t("sidequests.desc.takewant")
	},{
		coords: [[202.250,118.687]],
		label: $.t("sidequests.label.dwarven"),
		popup: $.t("sidequests.desc.dwarven")
	},{
		coords: [[98.781,110.562]],
		label: $.t("sidequests.label.reardon"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.reardon")
	},{
		coords: [[159.375,167.218]],
		label: $.t("sidequests.label.taxman"),
		popup: $.t("sidequests.desc.taxman")
	},{
		coords: [[84.406,175.437]],
		label: $.t("sidequests.label.stars"),
		popup: $.t("sidequests.desc.stars")
	},{
		coords: [[155.937,153.281]],
		label: $.t("sidequests.label.volunteer"),
		popup: $.t("sidequests.desc.volunteer")
	},{
		coords: [[76.687,148.281]],
		label: $.t("sidequests.label.hillock"),
		popup: $.t("sidequests.desc.hillock")
	},{
		coords: [[154.968,110.718]],
		label: $.t("sidequests.label.pass"),
		popup: $.t("sidequests.desc.pass")
	},{
		coords: [[197.031,82.625]],
		label: $.t("sidequests.label.woe"),
		popup: $.t("sidequests.desc.woe")
	},{
		coords: [[128.953,95.250],[108.438,53.219]],
		label: $.t("sidequests.label.heart"),
		popup: $.t("sidequests.desc.heart")
	},{
		coords: [[99.656,109.718]],
		label: $.t("sidequests.label.wannabe") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.merry")}) + $.t("sidequests.desc.wannabe")
	},{
		coords: [[242.906,198.562]],
		label: $.t("sidequests.label.trace1"),
		popup: $.t("sidequests.desc.trace1")
	},{
		coords: [[207.875,103.062],[217.531,133.469]],
		label: $.t("sidequest.races") +$.t(": ") +$.t("sidequests.label.rc_derby") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.junior")}) + $.t("sidequests.desc.rc_derby")
	},{
		coords: [[104.562,79.312]],
		label: $.t("sidequest.races") +$.t(": ") +$.t("sidequests.label.rc_perch"),
		popup: $.t("sidequests.desc.rc_perch")
	},{
		coords: [[239.468,213.281]],
		label: $.t("sidequest.races") +$.t(": ") +$.t("sidequests.label.rc_western"),
		popup: $.t("sidequests.desc.rc_western")
	},{
		coords: [[209.062,103.859]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_n"),
		popup: $.t("sidequests.desc.ff_n")
	},{
		coords: [[194.438,97.547]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_n"),
		popup: $.t("sidequests.desc.ff_n")
	},{
		coords: [[206.422,97.141]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_n"),
		popup: $.t("sidequests.desc.ff_n")
	},{
		coords: [[208.016,113.250]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_n"),
		popup: $.t("sidequests.desc.ff_n")
	},{
		coords: [[99.328,110.015]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_v"),
		popup: $.t("sidequests.desc.ff_v")
	},{
		coords: [[128.203,96.078]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_v"),
		popup: $.t("sidequests.desc.ff_v")
	},{
		coords: [[106.906,53.156]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_v"),
		popup: $.t("sidequests.desc.ff_v")
	},{
		coords: [[239.453,214.969]],
		label: $.t("sidequest.enchanting") +$.t(": ") +$.t("sidequests.label.en_s"),
		popup: $.t("sidequests.desc.en_s")
	},{
		coords: [[239.453,215.169]],
		label: $.t("sidequest.enchanting") +$.t(": ") +$.t("sidequests.label.en_q") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.en_s")}) + $.t("sidequests.desc.en_q")
	},{
		coords: [[239.453,215.369]],
		label: $.t("sidequest.enchanting") +$.t(": ") +$.t("sidequests.label.en_m") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.en_q")}) + $.t("sidequests.desc.en_m") + ': ' + ' <a href="https://www.nexusmods.com/witcher3/mods/5528">' + $.t("v:misc.mod") + '</a>' + ' ' + $.t("v:misc.or") + ' <a href="https://www.nexusmods.com/witcher3/mods/5752">' + $.t("v:misc.mod2") + '</a>' 
	},{
		coords: [[160.437,166.187]],
		label: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_legacy") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.sesame")}) + $.t("sidequests.desc.tr_legacy")
	},{
		coords: [[239.468,213.515]],
		label: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_shores"),
		popup: $.t("sidequests.desc.tr_shores")
	},{
		coords: [[216.287,104.625]],
		label: $.t("sidequests.label.nobleman") + '*',
		popup: $.t("sidequests.desc.nobleman")
	},{
		coords: [[205.969,103.797]],
		label: $.t("sidequests.label.soldier") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.dangerous")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.soldier")
	},{
		coords: [[131.234,131.375]],
		label: $.t("sidequests.label.eternal"),
		popup: $.t("sidequests.desc.eternal")
	},{
		coords: [[107.391,55.188]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.fel") + $.t("sidequests.label.scavenger.part.I"),
		popup: $.t("sidequests.label.scavenger.desc.fel")
	},{
		coords: [[190.109,94.000]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.fel"),
		popup: $.t("sidequests.label.scavenger.desc.fel")
	},{
		coords: [[106.234,52.656]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.fel") + $.t("sidequests.label.scavenger.part.II"),
		popup: $.t("sidequests.label.scavenger.desc.fel")
	},{
		coords: [[103.969,77.094]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.fel") + $.t("sidequests.label.scavenger.part.III"),
		popup: $.t("sidequests.label.scavenger.desc.fel")
	},{
		coords: [[103.156,109.125]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.fel") + $.t("sidequests.label.scavenger.part.IV"),
		popup: $.t("sidequests.label.scavenger.desc.fel")
	},{
		coords: [[82.156,40.625]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.gri") + $.t("sidequests.label.scavenger.part.I"),
		popup: $.t("sidequests.label.scavenger.desc.gri")
	},{
		coords: [[82.156,40.825]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.gri") + $.t("sidequests.label.scavenger.part.II"),
		popup: $.t("sidequests.label.scavenger.desc.gri")
	},{
		coords: [[208.547,101.063]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.gri") + $.t("sidequests.label.scavenger.part.III"),
		popup: $.t("sidequests.label.scavenger.desc.gri")
	},{
		coords: [[197.062,99.231]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.gri") + $.t("sidequests.label.scavenger.part.IV"),
		popup: $.t("sidequests.label.scavenger.desc.gri")
	},{
		coords: [[197.062,99.431]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.I"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	},{
		coords: [[103.156,109.325]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.II"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	},{
		coords: [[208.547,101.263]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.IV"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	},{
		coords: [[197.062,99.631]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.V"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[207.375,103.750]],
		label: $.t("v:signpost.label.hierarchSquare"),
		popup: $.t("v:signpost.desc.hierarchSquare")
	},{
		coords: [[208.766,116.672]],
		label: $.t("v:signpost.label.southernGate"),
		popup: $.t("v:signpost.desc.southernGate")
	},{
		coords: [[214.813,116.297]],
		label: $.t("v:signpost.label.oxenfurtGate"),
		popup: $.t("v:signpost.desc.oxenfurtGate")
	},{
		coords: [[218.563,102.031]],
		label: $.t("v:signpost.label.stGregorysBridge"),
		popup: $.t("v:signpost.desc.stGregorysBridge")
	},{
		coords: [[226.313,91.547]],
		label: $.t("v:signpost.label.electorsSquare"),
		popup: $.t("v:signpost.desc.electorsSquare")
	},{
		coords: [[201.391,111.484]],
		label: $.t("v:signpost.label.tretogorGate"),
		popup: $.t("v:signpost.desc.tretogorGate")
	},{
		coords: [[196.563,108.094]],
		label: $.t("v:signpost.label.gateOfTheHierarch"),
		popup: $.t("v:signpost.desc.gateOfTheHierarch")
	},{
		coords: [[191.688,102.781]],
		label: $.t("v:signpost.label.gloryGate"),
		popup: $.t("v:signpost.desc.gloryGate")
	},{
		coords: [[191.250,96.672]],
		label: $.t("v:signpost.label.portsideGate"),
		popup: $.t("v:signpost.desc.portsideGate")
	},{
		coords: [[197.969,88.609]],
		label: $.t("v:signpost.label.novigradDocks"),
		popup: $.t("v:signpost.desc.novigradDocks")
	},{
		coords: [[211.828,121.703]],
		label: $.t("v:signpost.label.arette"),
		popup: $.t("v:signpost.desc.arette")
	},{
		coords: [[198.016,125.922]],
		label: $.t("v:signpost.label.sevenCatsInn"),
		popup: $.t("v:signpost.desc.sevenCatsInn")
	},{
		coords: [[245.109,121.094]],
		label: $.t("v:signpost.label.sarrasinGrange"),
		popup: $.t("v:signpost.desc.sarrasinGrange")
	},{
		coords: [[236.125,130.438]],
		label: $.t("v:signpost.label.yantra"),
		popup: $.t("v:signpost.desc.yantra")
	},{
		coords: [[237.031,149.219]],
		label: $.t("v:signpost.label.isolatedHut"),
		popup: $.t("v:signpost.desc.isolatedHut")
	},{
		coords: [[214.219,140.781]],
		label: $.t("v:signpost.label.honeyfillMeadworks"),
		popup: $.t("v:signpost.desc.honeyfillMeadworks")
	},{
		coords: [[223.516,174.375]],
		label: $.t("v:signpost.label.martinFeuillesFarmstead"),
		popup: $.t("v:signpost.desc.martinFeuillesFarmstead")
	},{
		coords: [[231.734,162.984]],
		label: $.t("v:signpost.label.winespringGrange"),
		popup: $.t("v:signpost.desc.winespringGrange")
	},{
		coords: [[225.672,149.938]],
		label: $.t("v:signpost.label.moldavieResidence"),
		popup: $.t("v:signpost.desc.moldavieResidence")
	},{
		coords: [[234.469,105.234]],
		label: $.t("v:signpost.label.cavern"),
		popup: $.t("v:signpost.desc.cavern")
	},{
		coords: [[205.438,157.313]],
		label: $.t("v:signpost.label.alness"),
		popup: $.t("v:signpost.desc.alness")
	},{
		coords: [[194.000,149.969]],
		label: $.t("v:signpost.label.wheatFields"),
		popup: $.t("v:signpost.desc.wheatFields")
	},{
		coords: [[189.813,161.063]],
		label: $.t("v:signpost.label.vegelbudResidence"),
		popup: $.t("v:signpost.desc.vegelbudResidence")
	},{
		coords: [[184.719,155.609]],
		label: $.t("v:signpost.label.carsten"),
		popup: $.t("v:signpost.desc.carsten")
	},{
		coords: [[179.703,174.922]],
		label: $.t("v:signpost.label.temerianPartisanHideout"),
		popup: $.t("v:signpost.desc.temerianPartisanHideout")
	},{
		coords: [[182.984,189.391]],
		label: $.t("v:signpost.label.estTayiar"),
		popup: $.t("v:signpost.desc.estTayiar")
	},{
		coords: [[168.672,178.078]],
		label: $.t("v:signpost.label.herbalistsHut"),
		popup: $.t("v:signpost.desc.herbalistsHut")
	},{
		coords: [[155.203,206.688]],
		label: $.t("v:signpost.label.aeramasAbandonedManor"),
		popup: $.t("v:signpost.desc.aeramasAbandonedManor")
	},{
		coords: [[142.641,186.875]],
		label: $.t("v:signpost.label.crossroads"),
		popup: $.t("v:signpost.desc.crossroads")
	},{
		coords: [[168.969,165.375]],
		label: $.t("v:signpost.label.gustfieldsFarm"),
		popup: $.t("v:signpost.desc.gustfieldsFarm")
	},{
		coords: [[215.406,154.203]],
		label: $.t("v:signpost.label.dancingWindmill"),
		popup: $.t("v:signpost.desc.dancingWindmill")
	},{
		coords: [[193.328,81.500]],
		label: $.t("v:signpost.label.loggersHut"),
		popup: $.t("v:signpost.desc.loggersHut")
	},{
		coords: [[192.875,67.359]],
		label: $.t("v:signpost.label.lighthouse"),
		popup: $.t("v:signpost.desc.lighthouse")
	},{
		coords: [[184.484,117.922]],
		label: $.t("v:signpost.label.cunnyOfTheGoose"),
		popup: $.t("v:signpost.desc.cunnyOfTheGoose")
	},{
		coords: [[179.016,106.938]],
		label: $.t("v:signpost.label.drahimCastle"),
		popup: $.t("v:signpost.desc.drahimCastle")
	},{
		coords: [[173.828,76.719]],
		label: $.t("v:signpost.label.widowsGrotto"),
		popup: $.t("v:signpost.desc.widowsGrotto")
	},{
		coords: [[165.188,91.438]],
		label: $.t("v:signpost.label.ursten"),
		popup: $.t("v:signpost.desc.ursten")
	},{
		coords: [[182.469,88.563]],
		label: $.t("v:signpost.label.luciansWindmill"),
		popup: $.t("v:signpost.desc.luciansWindmill")
	},{
		coords: [[185.109,136.172]],
		label: $.t("v:signpost.label.eternalFireChapel"),
		popup: $.t("v:signpost.desc.eternalFireChapel")
	},{
		coords: [[156.516,108.625]],
		label: $.t("v:signpost.label.borderPost"),
		popup: $.t("v:signpost.desc.borderPost")
	},{
		coords: [[157.484,172.031]],
		label: $.t("v:signpost.label.novigradGate"),
		popup: $.t("v:signpost.desc.novigradGate")
	},{
		coords: [[149.547,165.094]],
		label: $.t("v:signpost.label.westernGate"),
		popup: $.t("v:signpost.desc.westernGate")
	},{
		coords: [[156.859,162.375]],
		label: $.t("v:signpost.label.oxenfurtHarbor"),
		popup: $.t("v:signpost.desc.oxenfurtHarbor")
	},{
		coords: [[139.359,146.203]],
		label: $.t("v:signpost.label.stonecuttersSettlement"),
		popup: $.t("v:signpost.desc.stonecuttersSettlement")
	},{
		coords: [[155.391,152.375]],
		label: $.t("v:signpost.label.whiteEagleFort"),
		popup: $.t("v:signpost.desc.whiteEagleFort")
	},{
		coords: [[148.453,136.422]],
		label: $.t("v:signpost.label.codgersQuarry"),
		popup: $.t("v:signpost.desc.codgersQuarry")
	},{
		coords: [[158.813,126.328]],
		label: $.t("v:signpost.label.hindhold"),
		popup: $.t("v:signpost.desc.hindhold")
	},{
		coords: [[125.281,173.141]],
		label: $.t("v:signpost.label.ferryStation"),
		popup: $.t("v:signpost.desc.ferryStation")
	},{
		coords: [[137.906,121.516]],
		label: $.t("v:signpost.label.hangedMansTree"),
		popup: $.t("v:signpost.desc.hangedMansTree")
	},{
		coords: [[131.859,131.781]],
		label: $.t("v:signpost.label.devilsPit"),
		popup: $.t("v:signpost.desc.devilsPit")
	},{
		coords: [[129.016,116.984]],
		label: $.t("v:signpost.label.mulbrydale"),
		popup: $.t("v:signpost.desc.mulbrydale")
	},{
		coords: [[128.797,94.375]],
		label: $.t("v:signpost.label.innAtTheCrossroads"),
		popup: $.t("v:signpost.desc.innAtTheCrossroads")
	},{
		coords: [[143.859,52.156]],
		label: $.t("v:signpost.label.harpyFeedingGround"),
		popup: $.t("v:signpost.desc.harpyFeedingGround")
	},{
		coords: [[150.906,46.625]],
		label: $.t("v:signpost.label.lornruk"),
		popup: $.t("v:signpost.desc.lornruk")
	},{
		coords: [[126.828,57.891]],
		label: $.t("v:signpost.label.heatherton"),
		popup: $.t("v:signpost.desc.heatherton")
	},{
		coords: [[128.688,49.313]],
		label: $.t("v:signpost.label.abandonedTower"),
		popup: $.t("v:signpost.desc.abandonedTower")
	},{
		coords: [[129.781,40.859]],
		label: $.t("v:signpost.label.isolatedShack"),
		popup: $.t("v:signpost.desc.isolatedShack")
	},{
		coords: [[107.016,54.078]],
		label: $.t("v:signpost.label.blackbough"),
		popup: $.t("v:signpost.desc.blackbough")
	},{
		coords: [[103.656,40.563]],
		label: $.t("v:signpost.label.hangmansAlley"),
		popup: $.t("v:signpost.desc.hangmansAlley")
	},{
		coords: [[97.219,74.875]],
		label: $.t("v:signpost.label.crowsPerch"),
		popup: $.t("v:signpost.desc.crowsPerch")
	},{
		coords: [[83.781,88.406]],
		label: $.t("v:signpost.label.boatmakersHut"),
		popup: $.t("v:signpost.desc.boatmakersHut")
	},{
		coords: [[86.516,27.609]],
		label: $.t("v:signpost.label.refugeesCamp"),
		popup: $.t("v:signpost.desc.refugeesCamp")
	},{
		coords: [[92.203,28.359]],
		label: $.t("v:signpost.label.coastOfWrecks"),
		popup: $.t("v:signpost.desc.coastOfWrecks")
	},{
		coords: [[82.688,42.859]],
		label: $.t("v:signpost.label.midcopse"),
		popup: $.t("v:signpost.desc.midcopse")
	},{
		coords: [[78.109,57.844]],
		label: $.t("v:signpost.label.wastrelManor"),
		popup: $.t("v:signpost.desc.wastrelManor")
	},{
		coords: [[71.516,103.234]],
		label: $.t("v:signpost.label.banditsCamp"),
		popup: $.t("v:signpost.desc.banditsCamp")
	},{
		coords: [[69.109,75.000]],
		label: $.t("v:signpost.label.oreton"),
		popup: $.t("v:signpost.desc.oreton")
	},{
		coords: [[91.438,37.625]],
		label: $.t("v:signpost.label.forestHut"),
		popup: $.t("v:signpost.desc.forestHut")
	},{
		coords: [[118.281,68.047]],
		label: $.t("v:signpost.label.wolvenGlade"),
		popup: $.t("v:signpost.desc.wolvenGlade")
	},{
		coords: [[106.688,84.781]],
		label: $.t("v:signpost.label.burnedRuins"),
		popup: $.t("v:signpost.desc.burnedRuins")
	},{
		coords: [[89.984,61.938]],
		label: $.t("v:signpost.label.trollBridge"),
		popup: $.t("v:signpost.desc.trollBridge")
	},{
		coords: [[82.281,70.359]],
		label: $.t("v:signpost.label.claywich"),
		popup: $.t("v:signpost.desc.claywich")
	},{
		coords: [[58.672,99.766]],
		label: $.t("v:signpost.label.drudge"),
		popup: $.t("v:signpost.desc.drudge")
	},{
		coords: [[68.141,22.922]],
		label: $.t("v:signpost.label.condyle"),
		popup: $.t("v:signpost.desc.condyle")
	},{
		coords: [[65.422,36.578]],
		label: $.t("v:signpost.label.duenHen"),
		popup: $.t("v:signpost.desc.duenHen")
	},{
		coords: [[49.875,78.141]],
		label: $.t("v:signpost.label.fykeIsle"),
		popup: $.t("v:signpost.desc.fykeIsle")
	},{
		coords: [[39.219,47.703]],
		label: $.t("v:signpost.label.byways"),
		popup: $.t("v:signpost.desc.byways")
	},{
		coords: [[25.406,78.266]],
		label: $.t("v:signpost.label.frischlow"),
		popup: $.t("v:signpost.desc.frischlow")
	},{
		coords: [[33.813,98.703]],
		label: $.t("v:signpost.label.olenasGrove"),
		popup: $.t("v:signpost.desc.olenasGrove")
	},{
		coords: [[32.125,120.547]],
		label: $.t("v:signpost.label.roadToBaldMountain"),
		popup: $.t("v:signpost.desc.roadToBaldMountain")
	},{
		coords: [[25.000,149.563]],
		label: $.t("v:signpost.label.destroyedBastion"),
		popup: $.t("v:signpost.desc.destroyedBastion")
	},{
		coords: [[41.250,157.594]],
		label: $.t("v:signpost.label.crossroadsVillage"),
		popup: $.t("v:signpost.desc.crossroadsVillage")
	},{
		coords: [[37.828,206.734]],
		label: $.t("v:signpost.label.nilfgaardianArmyGroupCenterCamp"),
		popup: $.t("v:signpost.desc.nilfgaardianArmyGroupCenterCamp")
	},{
		coords: [[46.219,198.172]],
		label: $.t("v:signpost.label.houseOfRespite"),
		popup: $.t("v:signpost.desc.houseOfRespite")
	},{
		coords: [[59.203,186.266]],
		label: $.t("v:signpost.label.kimboltWay"),
		popup: $.t("v:signpost.desc.kimboltWay")
	},{
		coords: [[62.953,143.797]],
		label: $.t("v:signpost.label.theOrphansOfCrookbackBog"),
		popup: $.t("v:signpost.desc.theOrphansOfCrookbackBog")
	},{
		coords: [[66.625,154.531]],
		label: $.t("v:signpost.label.ruinedTower"),
		popup: $.t("v:signpost.desc.ruinedTower")
	},{
		coords: [[55.734,159.281]],
		label: $.t("v:signpost.label.ancientOak"),
		popup: $.t("v:signpost.desc.ancientOak")
	},{
		coords: [[76.219,149.703]],
		label: $.t("v:signpost.label.downwarren"),
		popup: $.t("v:signpost.desc.downwarren")
	},{
		coords: [[82.016,135.516]],
		label: $.t("v:signpost.label.dragonslayersGrotto"),
		popup: $.t("v:signpost.desc.dragonslayersGrotto")
	},{
		coords: [[88.328,149.813]],
		label: $.t("v:signpost.label.reardonManor"),
		popup: $.t("v:signpost.desc.reardonManor")
	},{
		coords: [[86.313,175.969]],
		label: $.t("v:signpost.label.benek"),
		popup: $.t("v:signpost.desc.benek")
	},{
		coords: [[100.563,164.641]],
		label: $.t("v:signpost.label.toderas"),
		popup: $.t("v:signpost.desc.toderas")
	},{
		coords: [[101.938,136.266]],
		label: $.t("v:signpost.label.lurtch"),
		popup: $.t("v:signpost.desc.lurtch")
	},{
		coords: [[99.906,109.500]],
		label: $.t("v:signpost.label.lindenvale"),
		popup: $.t("v:signpost.desc.lindenvale")
	},{
		coords: [[115.656,156.328]],
		label: $.t("v:signpost.label.maraudersBridge"),
		popup: $.t("v:signpost.desc.maraudersBridge")
	},{
		coords: [[111.234,178.766]],
		label: $.t("v:signpost.label.grotto"),
		popup: $.t("v:signpost.desc.grotto")
	},{
		coords: [[197.203,225.640]],
		label: $.t("v:signpost.label.arns"),
		popup: $.t("v:signpost.desc.arns")
	},{
		coords: [[254.000,153.312]],
		label: $.t("v:signpost.label.bowdon"),
		popup: $.t("v:signpost.desc.bowdon")
	},{
		coords: [[243.343,197.468]],
		label: $.t("v:signpost.label.brun"),
		popup: $.t("v:signpost.desc.brun")
	},{
		coords: [[239.969,70.000]],
		label: $.t("v:signpost.label.crane"),
		popup: $.t("v:signpost.desc.crane")
	},{
		coords: [[217.562,184.625]],
		label: $.t("v:signpost.label.draken"),
		popup: $.t("v:signpost.desc.draken")
	},{
		coords: [[203.281,207.437]],
		label: $.t("v:signpost.label.erde"),
		popup: $.t("v:signpost.desc.erde")
	},{
		coords: [[240.937,175.625]],
		label: $.t("v:signpost.label.garin"),
		popup: $.t("v:signpost.desc.garin")
	},{
		coords: [[176.343,209.875]],
		label: $.t("v:signpost.label.heddel"),
		popup: $.t("v:signpost.desc.heddel")
	},{
		coords: [[258.031,128.687]],
		label: $.t("v:signpost.label.hunter"),
		popup: $.t("v:signpost.desc.hunter")
	},{
		coords: [[213.625,221.812]],
		label: $.t("v:signpost.label.kilker"),
		popup: $.t("v:signpost.desc.kilker")
	},{
		coords: [[239.312,211.562]],
		label: $.t("v:signpost.label.mill"),
		popup: $.t("v:signpost.desc.mill")
	},{
		coords: [[195.875,192.125]],
		label: $.t("v:signpost.label.vikk"),
		popup: $.t("v:signpost.desc.vikk")
	},{
		coords: [[228.218,197.500]],
		label: $.t("v:signpost.label.voneverec"),
		popup: $.t("v:signpost.desc.voneverec")
	},{
		coords: [[221.000,217.968]],
		label: $.t("v:signpost.label.zuetzer"),
		popup: $.t("v:signpost.desc.zuetzer")
	},{
		coords: [[104.641,75.641]],
		label: $.t("v:signpost.label.castle") + '*',
		popup: $.t("v:signpost.desc.castle") + $.t("misc.active",{quest: $.t("sidequests.label.crookback")})
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [{
		coords: [[193.547,103.891]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[201.000,121.516]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[183.547,68.297]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[75.844,15.000]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	}],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [{
		coords: [[153.609,79.109]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[111.500,105.250]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[46.078,24.953]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	}],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[101.094,25.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[239.609,201.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[225.313,147.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[206.344,142.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[192.469,124.016]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[249.656,143.984]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[222.625,97.109]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[222.109,95.031]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[229.625,90.328]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[226.000,95.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[239.828,69.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[199.906,130.766]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[196.750,87.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[178.094,106.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[189.141,97.078]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[180.469,89.359]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[166.641,96.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.656,26.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.375,28.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[91.625,36.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[91.203,68.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.781,73.484]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.172,74.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.766,76.516]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[119.453,68.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[128.875,50.578]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[139.953,59.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[143.484,52.234]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[54.656,77.969]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[55.094,79.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.188,77.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.469,80.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.500,113.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[99.438,108.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[100.500,117.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[84.344,150.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[68.281,143.719]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.781,175.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.750,168.531]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[130.344,116.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[129.703,119.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[173.359,78.453]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[174.234,78.234]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[193.531,66.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[213.234,111.391]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[209.906,110.359]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[208.672,99.891]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[30.344,47.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.906,50.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[44.656,40.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[219.547,102.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.000,131.969]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.bald")}) + $.t("treasure.desc")
	},{
		coords: [[52.625,50.500]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[214.531,193.344]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.deadman")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/214.656/192.859\'>"), end: $.t("</a>")})
	},{
		coords: [[216.766,193.875]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.deadman")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/214.656/192.859\'>"), end: $.t("</a>")})
	},{
		coords: [[217.344,193.438]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.marriage")}) + $.t("treasure.desc")
	},{
		coords: [[216.734,192.906]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.deadman")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/214.656/192.859\'>"), end: $.t("</a>")})
	},{
		coords: [[220.672,193.000]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.marriage")}) + $.t("treasure.desc")
	},{
		coords: [[47.844,77.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.094,25.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[202.266,102.609]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.pyres")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/202.531/102.953\'>"), x2: $.t("<a href='#6/201.891/102.406\'>"), end: $.t("</a>")})
	},{
		coords: [[201.991,102.406]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.pyres")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/202.531/102.953\'>"), x2: $.t("<a href='#6/201.891/102.406\'>"), end: $.t("</a>")})
	},{
		coords: [[37.969,125.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.219,129.844]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/53.875/129.030\'>"), x2: $.t("<a href='#6/53.156/131.560\'>"), end: $.t("</a>")})
	},{
		coords: [[217.922,160.438]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/217.875/159.609\'>"), end: $.t("</a>")})
	},{
		coords: [[217.391,108.344]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance3",{x1: $.t("<a href='#6/219.875/108.391\'>"), x2: $.t("<a href='#6/217.359/105.906\'>"), x3: $.t("<a href='#6/214.297/108.094\'>"), end: $.t("</a>")})
	},{
		coords: [[158.266,210.969]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.darkness")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/156.031/209.125\'>"), end: $.t("</a>")})
	},{
		coords: [[159.297,211.203]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.darkness")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/156.031/209.125\'>"), end: $.t("</a>")})
	},{
		coords: [[157.875,208.891]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.darkness")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/156.031/209.125\'>"), end: $.t("</a>")})
	},{
		coords: [[33.844,146.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[170.406,156.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[180.766,145.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[44.344,157.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.813,183.438]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance4",{x1: $.t("<a href='#6/94.266/184.891\'>"), x2: $.t("<a href='#6/96.203/184.75\'>"), x3: $.t("<a href='#6/98.906/177.766\'>"), x4: $.t("<a href='#6/101.266/177.547\'>"), end: $.t("</a>")})
	},{
		coords: [[109.938,170.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[127.719,166.406]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[124.594,147.406]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[143.719,118.500]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[148.281,119.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[220.188,105.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[227.281,216.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[187.125,166.703]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.sins")}) + $.t("misc.dactive",{quest: $.t("sidequests.label.matter")}) + $.t("treasure.desc")
	},{
		coords: [[164.094,164.391]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.drunk")}) + $.t("treasure.desc")
	},{
		coords: [[140.844,167.109]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.whatsoever")}) + $.t("treasure.desc")
	},{
		coords: [[146.281,180.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[119.125,133.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[139.313,152.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[133.875,49.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.266,68.234]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.297,75.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.219,161.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.219,165.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[82.688,160.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[96.594,117.500]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[43.438,38.219]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[42.969,35.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[36.469,40.500]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[50.688,26.656]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[30.188,77.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[42.938,101.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[56.250,132.530]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[55.594,137.810]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[136.344,176.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[150.906,162.219]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.641,163.406]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[214.734,225.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[234.625,205.719]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[239.938,207.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[211.813,137.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[216.063,138.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[217.313,135.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[209.750,137.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[227.125,108.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[175.234,97.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[207.531,114.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[203.813,84.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[197.125,86.375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[208.656,106.656]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[212.125,88.266]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[213.922,93.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[228.719,101.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[227.219,84.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[30.594,111.969]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[35.125,108.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[58.375,42.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.188,60.422]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.188,59.047]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.greedy")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/72.859/59.297\'>"), end: $.t("</a>")})
	},{
		coords: [[66.531,76.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[126.203,146.094]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[90.125,15.219]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.625,26.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[117.453,46.766]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[149.781,45.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[124.656,65.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[133.500,107.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[140.031,120.672]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[67.438,101.047]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[76.391,113.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.938,68.078]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[49.250,74.266]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.781,79.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.766,80.703]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.969,197.547]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[70.984,147.984]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.484,151.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.297,140.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[92.188,184.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[154.828,162.359]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[155.375,162.438]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[110.422,136.453]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[166.750,170.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[158.375,85.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.797,86.547]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[155.984,85.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[155.453,86.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[158.813,97.016]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.828,97.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.375,128.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.594,128.641]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[156.469,129.484]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.422,123.781]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[166.266,145.734]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[164.719,148.078]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[95.922,78.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.547,82.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[65.906,36.859]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[124.969,173.969]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[136.344,158.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[160.063,128.266]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.922,127.516]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[156.438,122.766]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[129.375,125.984]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[108.750,108.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[77.281,126.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[111.328,156.891]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[111.438,152.047]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[109.531,138.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[66.109,104.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[62.281,109.156]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[67.438,108.406]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[70.469,117.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.188,101.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[33.922,124.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[75.172,152.703]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.594,189.281]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[69.438,163.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[57.688,182.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[185.406,112.469]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[184.500,108.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.375,132.063]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[154.688,160.344]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[145.094,193.188]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[240.813,137.250]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[230.438,181.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[60.641,155.594]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.063,99.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[149.953,125.234]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[69.094,107.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.750,103.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.063,99.156]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.125,58.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[186.625,151.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[153.578,166.875]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.escape")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/151.156/164.593\'>"), end: $.t("</a>")})
	},{
		coords: [[154.438,167.266]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.escape")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/151.156/164.593\'>"), end: $.t("</a>")})
	},{
		coords: [[99.766,117.875]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/99.75/120.625\'>"), x2: $.t("<a href='#6/96.438/119.781\'>"), end: $.t("</a>")})
	},{
		coords: [[88.125,107.688]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/88.688/107.078\'>"), x2: $.t("<a href='#6/86.094/107.875\'>"), end: $.t("</a>")})
	},{
		coords: [[238.078,105.938]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/237.641/105.016\'>"), end: $.t("</a>")})
	},{
		coords: [[173.547,77.734]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/173.75/77.156\'>"), end: $.t("</a>")})
	},{
		coords: [[41.234,45.984]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[48.563,47.063]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[42.922,42.984]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[43.984,43.297]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[43.797,42.250]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[39.641,43.594]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[52.906,42.453]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[39.766,42.656]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[52.563,46.656]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[52.797,47.641]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[51.750,49.781]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[53.313,50.688]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[53.188,54.125]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[47.281,45.500]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[48.219,41.031]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[46.500,40.438]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[49.188,40.969]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[49.125,42.625]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[49.891,43.938]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[48.453,41.328]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[48.141,44.297]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[41.047,39.578]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[43.641,39.438]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[38.922,39.703]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[57.344,41.563]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[51.734,39.828]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[203.875,107.125]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/204.500/105.656\'>"), end: $.t("</a>")})
	},{
		coords: [[142.672,120.313]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/142.984/118.125\'>"), end: $.t("</a>")})
	},{
		coords: [[145.000,128.219]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[141.156,128.406]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.eternal")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.344/127.547\'>"), end: $.t("</a>")})
	},{
		coords: [[208.594,104.875]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.never")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/210.281/104.297\'>"), x2: $.t("<a href='#6/206.750/93.438\'>"), end: $.t("</a>")})
	},{
		coords: [[92.313,149.797]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/93.344/155.813\'>"), end: $.t("</a>")})
	},{
		coords: [[89.391,150.484]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/142.984/118.125\'>"), end: $.t("</a>")})
	},{
		coords: [[142.953,107.594]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[142.188,109.547]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[141.313,106.375]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[139.703,107.656]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[159.109,166.578]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/159.25/165.641\'>"), end: $.t("</a>")})
	},{
		coords: [[157.906,164.922]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/159.25/165.641\'>"), end: $.t("</a>")})
	},{
		coords: [[156.344,165.328]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/159.25/165.641\'>"), end: $.t("</a>")})
	},{
		coords: [[155.047,164.672]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/159.25/165.641\'>"), end: $.t("</a>")})
	},{
		coords: [[154.094,164.313]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/159.25/165.641\'>"), end: $.t("</a>")})
	},{
		coords: [[239.563,76.688]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc")
	},{
		coords: [[223.297,90.469]],
		label: $.t("sidebar.treasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/229.718/89.125\'>"), end: $.t("</a>")})
	},
	//Underwater Treause
	{
		coords: [[52.219,61.594]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[64.703,141.359]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[207.219,84.766]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[191.391,134.000]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[232.141,84.016]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[198.641,114.469]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[53.375,67.188]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[151.344,142.000]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[146.000,157.188]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.531,18.719]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.313,17.094]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[83.188,95.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[67.750,99.719]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.344,99.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.344,72.625]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[43.125,106.063]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[43.563,110.719]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[40.781,111.594]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.875,72.188]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.781,72.250]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[115.125,154.750]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[158.063,94.750]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[220.625,99.563]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[203.000,98.375]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.063,124.500]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/37.906/123.781\'>"), end: $.t("</a>")})
	},{
		coords: [[151.125,163.938]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.escape")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/151.156/164.593\'>"), end: $.t("</a>")})
	},{
		coords: [[151.875,165.313]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.escape")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/151.156/164.593\'>"), end: $.t("</a>")})
	},{
		coords: [[149.297,164.859]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.escape")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/151.156/164.593\'>"), end: $.t("</a>")})
	},{
		coords: [[208.031,120.156]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.969,16.953]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.031,25.656]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[146.281,168.781]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[238.906,205.156]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[242.906,208.000]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.734,98.563]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[156.125,97.047]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[160.578,100.063]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[226.531,90.656]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/229.718/89.125\'>"), end: $.t("</a>")})
	},{
		coords: [[34.703,122.281]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[54.531,92.000]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[96.281,26.375]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[111.250,99.156]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[101.313,196.906]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[177.125,124.172]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[176.828,124.594]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.016,32.578]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[123.859,173.734]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[42.484,81.016]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.141,92.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[159.141,92.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[37.813,218.344]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[146.266,158.922]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[30.078,194.250]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/56.984/155.984\'>"), x2: $.t("<a href='#6/57.313/158.188\'>"), end: $.t("</a>")})
	},{
		coords: [[54.656,156.594]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/56.984/155.984\'>"), x2: $.t("<a href='#6/57.313/158.188\'>"), end: $.t("</a>")})
	},{
		coords: [[50.500,46.781]],
		label: $.t("treasure.watertreasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[40.313,42.844]],
		label: $.t("treasure.watertreasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[45.672,38.953]],
		label: $.t("treasure.watertreasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[55.250,41.188]],
		label: $.t("treasure.watertreasure") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/44.531/39.563\'>"), x2: $.t("<a href='#6/49.000/53.094\'>"), end: $.t("</a>")})
	},{
		coords: [[91.563,149.500]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/93.344/155.813\'>"), end: $.t("</a>")})
	},{
		coords: [[91.375,149.703]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/93.344/155.813\'>"), end: $.t("</a>")})
	},{
		coords: [[89.844,150.125]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/93.344/155.813\'>"), end: $.t("</a>")})
	},{
		coords: [[145.172,108.625]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[144.563,110.125]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[143.547,110.484]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	},{
		coords: [[238.844,76.656]],
		label: $.t("treasure.watertreasure") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.evil")}) + $.t("treasure.desc")
	},{
		coords: [[140.781,112.344]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/148.141/107.047\'>"), end: $.t("</a>")})
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
