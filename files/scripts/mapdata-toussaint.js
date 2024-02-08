window.map_path  = 'toussaint';
window.map_sWest = L.latLng(0,0);
window.map_nEast = L.latLng(144,144);
window.map_center = [72.000,77.000];
window.map_minZoom = 2;
window.map_mZoom = 6;
window.map_Zoom = 3;
window.mapdata_toussaint = {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[67.547,51.734]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[66.875,37.406]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[78.656,45.859]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[82.344,47.219]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[90.109,47.094]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[32.391,68.297]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[112.875,66.172]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[88.188,101.797]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[91.531,78.688]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[31.141,71.953]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[57.656,94.109]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[52.719,62.609]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[79.141,53.453]],
		label: $.t("alchemy.label") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_chuchote")}) + $.t("alchemy.desc")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[39.969,81.000]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[64.956,65.109]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[86.156,63.453]],
		label: $.t("sidebar.armourer") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman") + '*',
		popup: $.t("armourer.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/88.750/40.984\'>"), end: $.t("</a>")})
	},{
		coords: [[79.703,108.828]],
		label: $.t("sidebar.armourer") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman") + '*',
		popup: $.t("misc.liberated") + $.t("armourer.desc")
	},{
		coords: [[50.281,64.297]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[58.202,94.210]],
		label: $.t("sidebar.armourer") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman") + '*',
		popup: $.t("misc.liberated") + $.t("armourer.desc")
	},{
		coords: [[98.031,43.953]],
		label: $.t("sidebar.armourer") + ' (' + $.t("misc.underground") + ')' + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.liberated") + $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[50.500,64.453]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[116.538,71.366]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[65.422,65.344]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[105.047,79.422]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[69.609,100.609]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[40.047,81.156]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[86.156,63.734]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[98.203,43.688]],
		label: $.t("armourerstable.label") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[52.188,100.469]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[94.984,42.109]],
		label: $.t("banditcamp.label"),
		popup: $.t("t:banditcamp.desc.hanse",{location: $.t("t:signpost.label.fox"), hanse: $.t("sidebar.hansebase")}) + $.t("banditcamp.desc")
	},{
		coords: [[86.313,109.484]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[102.938,75.563]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[108.438,65.031]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[111.828,72.338]],
		label: $.t("banditcamp.label"),
		popup: $.t("t:banditcamp.desc.hanse",{location: $.t("t:signpost.label.arthachpalaceruins"), hanse: $.t("sidebar.hansebase")}) + $.t("banditcamp.desc")
	},{
		coords: [[114.313,75.469]],
		label: $.t("banditcamp.label"),
		popup: $.t("t:banditcamp.desc.hanse",{location: $.t("t:signpost.label.arthachpalaceruins"), hanse: $.t("sidebar.hansebase")}) + $.t("banditcamp.desc")
	},{
		coords: [[73.156,109.594]],
		label: $.t("banditcamp.label"),
		popup: $.t("t:banditcamp.desc.hanse",{location: $.t("t:signpost.label.montcranecastle"), hanse: $.t("sidebar.hansebase")}) + $.t("banditcamp.desc")
	},{
		coords: [[73.750,114.063]],
		label: $.t("banditcamp.label"),
		popup: $.t("t:banditcamp.desc.hanse",{location: $.t("t:signpost.label.montcranecastle"), hanse: $.t("sidebar.hansebase")}) + $.t("banditcamp.desc")
	},{
		coords: [[68.828,115.984]],
		label: $.t("banditcamp.label"),
		popup: $.t("t:banditcamp.desc.ussar",{quest: $.t("contracts.label.bonvineblues")}) + $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [{
		coords: [[64.531,63.641]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[88.969,102.594]],
		label: $.t("barber.label") + '*',
		popup: $.t("misc.liberated") + $.t("barber.desc")
	}],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[49.813,64.359]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[65.113,64.688]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[69.578,100.859]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[116.516,71.250]],
		label: $.t("sidebar.blacksmith") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman") + '*',
		popup: $.t("misc.liberated") + $.t("blacksmith.desc")
	},{
		coords: [[44.672,72.125]],
		label: $.t("sidebar.blacksmith") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Master") + '*',
		popup: $.t("blacksmith.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/50.953/102.719\'>"), end: $.t("</a>")})
	},{
		coords: [[50.734,65.547]],
		label: $.t("sidebar.blacksmith") + '/' + $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.blacksmith") + '/' + $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Grandmaster") + ' - ' + $.t("t:armourer.lafargue"),
		popup: $.t("blacksmith.desc") + $.t("armourer.desc")
	}],

	//------------------------------------------------Boat------------------------------------------------
	boat: [{
		coords: [[38.593,55.312]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[37.093,62.187]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[45.187,55.562]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[46.281,62.281]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[55.437,73.656]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[50.375,80.437]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[54.578,87.390]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[62.000,87.312]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[73.406,76.218]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[87.437,80.750]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[112.500,65.250]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[96.921,60.765]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[78.625,69.500]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[65.875,76.156]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [{
		coords: [[58.359,72.572]],
		label: $.t("sidebar.brothel"),
		popupTitle: $.t("sidebar.brothel") + ' - ' + $.t("t:brothel.popup.Belle"),
		popup: $.t("brothel.desc")
	}],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[74.600,75.000]],
		label: $.t("contracts.label.biggamehunter"),
		popup: $.t("contracts.desc.biggamehunter")
	},{
		coords: [[48.109,62.750]],
		label: $.t("contracts.label.coldasice") + '*',
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.capture")}) + $.t("contracts.desc.coldasice")
	},{
		coords: [[71.719,102.719]],
		label: $.t("contracts.label.bonvineblues"),
		popup: $.t("contracts.desc.bonvineblues")
	},{
		coords: [[64.328,89.797]],
		label: $.t("contracts.label.tufo"),
		popup: $.t("contracts.desc.tufo")
	},{
		coords: [[94.437,93.546]],
		label: $.t("contracts.label.phantoms"),
		popup: $.t("contracts.desc.phantoms")
	}],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[86.047,72.938]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[79.422,53.250]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[93.141,41.828]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[47.000,79.578]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[47.234,78.734]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[48.594,92.766]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[58.688,84.641]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[49.781,100.625]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[48.188,100.484]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[28.047,81.891]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.cage")}) + $.t("entrance.desc.entry")
	},{
		coords: [[65.156,43.703]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[95.313,41.875]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[95.172,45.188]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[102.203,64.344]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[46.203,51.609]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[43.078,56.094]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[72.172,87.641]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[43.438,95.797]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[60.344,113.328]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[108.891,82.438]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[107.656,80.844]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[94.844,94.359]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[90.969,86.672]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[84.031,84.203]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[77.375,87.125]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[73.063,86.375]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[50.109,84.234]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[39.047,67.703]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[35.469,59.328]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.bloodsimple")}) + $.t("entrance.desc.entry")
	},{
		coords: [[56.484,44.031]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[57.844,50.828]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[59.344,51.313]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[91.766,41.672]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[93.125,53.063]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[64.109,51.500]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[68.516,114.156]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[48.328,66.734]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[48.906,65.000]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[45.859,66.531]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[68.141,93.250]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("contracts.label.tufo")}) + $.t("entrance.desc.exit")
	},{
		coords: [[98.422,58.438]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[60.375,114.453]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[51.641,84.734]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[46.734,100.469]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[65.813,91.672]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[80.328,107.766]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[96.703,106.250]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_spoon")}) + $.t("entrance.desc.entry")
	},{
		coords: [[38.797,96.844]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.cage")}) + $.t("entrance.desc.entry")
	},{
		coords: [[84.922,53.875]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.wine")}) + $.t("entrance.desc.entry")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[55.156,68.468]],
		label: $.t("event.label.contract") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.cintra")}) + $.t("event.desc.contract")
	},{
		coords: [[46.766,65.375]],
		label: $.t("event.label.grave") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.tilldeath")}) + $.t("misc.entrance3",{x1: $.t("<a href='#6/48.906/65.000\'>"), x2: $.t("<a href='#6/48.328/66.734\'>"), x3: $.t("<a href='#6/45.859/66.531'>"), end: $.t("</a>")}) + $.t("event.desc.grave")
	},{
		coords: [[60.406,56.906]],
		label: $.t("event.label.naughty") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.humble")}) + $.t("event.desc.naughty",{quest: $.t("sidequests.label.smittenkight")})
	},{
		coords: [[54.078,56.969]],
		label: $.t("event.label.ring") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.toussaint")}) + $.t("event.desc.ring")
	},{
		coords: [[55.234,53.484]],
		label: $.t("event.label.grain") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.toussaint")}) + $.t("event.desc.grain")
	},{
		coords: [[50.750,61.063]],
		label: $.t("event.label.drunked") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.humble")}) + $.t("event.desc.drunked")
	},{
		coords: [[58.016,59.422]],
		label: $.t("event.label.Delwyn") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.fangs")}) + $.t("event.desc.Delwyn",{quest: $.t("sidequests.label.onlyone")})
	},{
		coords: [[50.344,64.797]],
		label: $.t("event.label.child") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.fangs")}) + $.t("event.desc.child")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[79.625,109.094]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[49.816,64.453]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[116.500,71.188]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[104.969,79.594]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[69.725,100.709]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[40.063,80.938]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[65.391,65.125]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[86.047,63.703]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[98.125,43.656]],
		label: $.t("sidebar.grindstone") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: 	[{
		coords: [[44.781,103.531]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[46.063,88.219]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[37.375,63.016]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[66.922,91.969]],
		label: $.t("sidebar.guarded") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("guarded.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/65.813/91.672\'>"), end: $.t("</a>")})
	},{
		coords: [[111.828,72.859]],
		label: $.t("sidebar.guarded"),
		popup: $.t("t:guarded.desc.hanse",{location: $.t("t:signpost.label.arthachpalaceruins"), hanse: $.t("sidebar.hansebase")}) + $.t("guarded.desc")
	},{
		coords: [[37.875,93.297]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[89.641,93.328]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[99.234,79.234]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[69.859,81.422]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[73.344,109.203]],
		label: $.t("sidebar.guarded"),
		popup: $.t("t:guarded.desc.hanse",{location: $.t("t:signpost.label.montcranecastle"), hanse: $.t("sidebar.hansebase")}) + $.t("guarded.desc")
	},{
		coords: [[73.875,113.547]],
		label: $.t("sidebar.guarded"),
		popup: $.t("t:guarded.desc.hanse",{location: $.t("t:signpost.label.montcranecastle"), hanse: $.t("sidebar.hansebase")}) + $.t("guarded.desc")
	},{
		coords: [[76.563,113.656]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[106.391,86.313]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[114.172,75.891]],
		label: $.t("sidebar.guarded"),
		popup: $.t("t:guarded.desc.hanse",{location: $.t("t:signpost.label.arthachpalaceruins"), hanse: $.t("sidebar.hansebase")}) + $.t("guarded.desc")
	},{
		coords: [[79.594,67.422]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[84.938,40.813]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[86.094,43.375]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[94.906,41.859]],
		label: $.t("sidebar.guarded"),
		popup: $.t("t:guarded.desc.hanse",{location: $.t("t:signpost.label.fox"), hanse: $.t("sidebar.hansebase")}) + $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[51.397,61.141]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[51.047,66.250]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[53.672,61.313]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[52.919,62.609]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[50.750,65.109]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[50.481,64.297]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[40.169,81.000]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[52.328,65.000]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[55.328,61.891]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[41.528,81.109]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[58.359,72.672]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[58.328,72.000]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[64.856,62.734]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[64.831,63.641]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.barber") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[65.313,64.688]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[65.156,65.109]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[85.628,53.734]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[63.653,90.625]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[75.606,75.188]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	}],

	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [{
		coords: [[74.600,75.500]],
		label: $.t("sidequest.gwent") + $.t(": ") + $.t("sidequests.label.gw_tournment") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.gwent") + $.t(": ") + $.t("sidequests.label.gw_fear")}) + $.t("sidequests.desc.gw_tournment")
	},{
		coords: [[51.359,60.890]],
		label: $.t("sidequest.gwent") + $.t(": ") + $.t("sidequests.label.gw_fear"),
		popup: $.t("sidequests.desc.gw_fear")
	},],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [{
		coords: [[116.047,71.625]],
		label: $.t("t:hansebase.label"),
		popup: $.t("t:hansebase.desc")
	},{
		coords: [[96.438,44.750]],
		label: $.t("t:hansebase.label"),
		popup: $.t("t:hansebase.desc")
	},{
		coords: [[80.813,108.313]],
		label: $.t("t:hansebase.label"),
		popup: $.t("t:hansebase.desc")
	}],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [{
		coords: [[47.297,60.734]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[56.109,74.750]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[61.781,88.000]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[96.219,60.594]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	}],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[85.328,53.734]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[51.047,66.250]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[32.406,68.047]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[94.469,70.844]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("herbalist.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/108.438/82.219\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[69.203,42.016]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_experiment"),
		popup: $.t("sidequests.desc.tr_experiment")
	},{
		coords: [[92.125,54.938]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_stranger"),
		popup: $.t("sidequests.desc.tr_stranger")
	},{
		coords: [[89.141,53.375]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_carnarvon"),
		popup: $.t("sidequests.desc.tr_carnarvon")
	},{
		coords: [[57.859,85.031]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_escapology"),
		popup: $.t("sidequests.desc.tr_escapology")
	},{
		coords: [[77.141,42.047]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_suffering"),
		popup: $.t("sidequests.desc.tr_suffering")
	},{
		coords: [[102.297,64.109]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_again"),
		popup: $.t("sidequests.desc.tr_again")
	},{
		coords: [[42.547,54.688]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_enjoytheplay"),
		popup: $.t("sidequests.desc.tr_enjoytheplay")
	},{
		coords: [[24.234,72.422]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_gardener"),
		popup: $.t("sidequests.desc.tr_gardener")
	},{
		coords: [[96.047,80.453]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_eightdays"),
		popup: $.t("sidequests.desc.tr_eightdays")
	},{
		coords: [[44.219,64.484]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_selina"),
		popup: $.t("sidequests.desc.tr_selina")
	},{
		coords: [[63.653,81.234]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_widow"),
		popup: $.t("sidequests.desc.tr_widow")
	},{
		coords: [[61.188,102.641]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_filibert"),
		popup: $.t("sidequests.desc.tr_filibert")
	},{
		coords: [[54.250,106.828]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_doh"),
		popup: $.t("sidequests.desc.tr_doh")
	},{
		coords: [[95.984,88.625]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_stink"),
		popup: $.t("sidequests.desc.tr_stink")
	},{
		coords: [[37.594,97.641]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") + $.t(": ") + $.t("sidequests.label.tr_spoon") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.cage")}) + $.t("sidequests.desc.tr_spoon")
	}],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [{
		coords: [[88.625,74.891]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[88.719,74.547]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[86.531,43.813]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[88.156,46.266]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	},{
		coords: [[51.938,100.344]],
		label: $.t("sidebar.honeycomb"),
		popup: $.t("honeycomb.desc")
	}],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[75.406,75.188]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:signpost.label.cockatrice"),
		popup: $.t("t:innkeep.desc")
	},{
		coords: [[64.656,62.734]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("sidebar.innkeep"),
		popup: $.t("t:innkeep.desc")
	},{
		coords: [[51.438,61.234]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:innkeep.label.pheasantry"),
		popup: $.t("t:innkeep.desc")
	},{
		coords: [[41.328,81.109]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("sidebar.innkeep"),
		popup: $.t("t:innkeep.desc")
	},{
		coords: [[90.703,47.578]],
		label: $.t("sidebar.innkeep") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:innkeep.label.auberge") + '*',
		popup: $.t("misc.liberated") + $.t("t:innkeep.desc")
	},{
		coords: [[63.453,90.625]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:innkeep.label.barrelandbung"),
		popup: $.t("t:innkeep.desc")
	},{
		coords: [[113.891,66.391]],
		label: $.t("sidebar.innkeep") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:innkeep.label.salamander") + '*',
		popup: $.t("misc.liberated") + $.t("t:innkeep.desc")
	},{
		coords: [[52.128,65.000]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:innkeep.label.winery"),
		popup: $.t("t:innkeep.desc")
	},{
		coords: [[47.625,64.625]],
		label: $.t("sidebar.innkeep") + '*',
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("t:innkeep.label.clever") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.father")}) + $.t("t:innkeep.desc")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [{
		coords: [[77.156,103.594]],
		label: $.t("t:kid.label"),
		popup: $.t("t:kid.desc")
	},{
		coords: [[97.813,49.516]],
		label: $.t("t:kid.label"),
		popup: $.t("t:kid.desc")
	},{
		coords: [[38.203,54.750]],
		label: $.t("t:kid.label"),
		popup: $.t("t:kid.desc")
	}],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [{
		coords: [[65.266,43.938]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[75.656,89.453]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[96.047,100.828]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[107.422,76.516]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[89.453,108.266]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	}],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[70.156,74.109]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[48.188,84.078]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[58.813,41.594]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[32.188,79.984]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[33.250,84.797]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[93.188,110.281]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[76.328,86.969]],
		label: $.t("sidebar.monsternest") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("monsternest.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/77.375/87.125\'>"), x2: $.t("<a href='#6/75.656/89.453\'>"), end: $.t("</a>")})
	},{
		coords: [[68.766,115.000]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[75.484,40.313]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[75.328,40.578]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[84.391,55.125]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[75.141,74.844]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[53.375,63.719]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[64.328,89.297]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[41.750,80.313]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[71.719,102.219]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[93.609,65.781]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [{
		coords: [[88.750,40.984]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/86.156/63.453\'>"), end: $.t("</a>")})
	},{
		coords: [[112.859,81.688]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/113.047/81.781\'>"), end: $.t("</a>")})	
	},{
		coords: [[60.125,113.047]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/75.656/75.750\'>"), end: $.t("</a>")})
	},{
		coords: [[108.438,82.219]],
		label: $.t("sidebar.pid") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("pid.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/107.656/80.844\'>"), x2: $.t("<a href='#6/108.891/82.438\'>"), end: $.t("</a>")}) + $.t("pid.afterrescue",{x1: $.t("<a href='#6/94.469/70.844\'>"), end: $.t("</a>")})
	},{
		coords: [[50.953,102.719]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/44.672/72.125\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[48.422,100.266]],
		label: $.t("sidebar.pop") + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}) + ' (' + $.t("misc.underground") + ')',
		popup: $.t("pop.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/48.188/100.484\'>"), end: $.t("</a>")})
	},{
		coords: [[61.531,44.969]],
		label: $.t("sidebar.pop") + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}) + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("pop.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/65.156/43.703\'>"), end: $.t("</a>")})
	},{
		coords: [[36.359,59.375]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[68.625,114.844]],
		label: $.t("sidebar.pop") + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}) + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("pop.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/68.516/114.156\'>"), end: $.t("</a>")})
	},{
		coords: [[119.188,74.125]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[53.768,61.625]],
		label: $.t("t:poi.label.ducal"),
		popup: $.t("t:poi.desc.ducal")
	},{
		coords: [[5.500,4.000]],
		label: $.t("t:poi.label.photo"),
		popup: $.t("poi.desc.easter") + $.t("t:poi.desc.photo",{link1: $.t("<a href='https://www.youtube.com/watch?v=YDPY5H7spSU' target='_blank'>"),link2: $.t("</a>")})
	},{
		coords: [[52.063,64.781]],
		label: $.t("t:poi.label.reginald") + '*',
		popup: $.t("t:poi.desc.reginald",{quest: $.t("sidequests.label.granite")})
	},{
		coords: [[52.281,56.406]],
		label: $.t("t:poi.label.haremask") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.toussaint")}) + $.t("t:poi.desc.haremask")
	},{
		coords: [[27.781,82.109]],
		label: $.t("t:poi.label.tesham") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.cage")}) + $.t("t:poi.desc.tesham") + $.t("misc.entrance1",{x1: $.t("<a href='#6/28.047/81.891\'>"), end: $.t("</a>")})
	},{
		coords: [[27.547,81.125]],
		label: $.t("t:poi.label.tesham") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.cage")}) + $.t("t:poi.desc.tesham") + $.t("misc.entrance1",{x1: $.t("<a href='#6/28.047/81.891\'>"), end: $.t("</a>")})
	},{
		coords: [[27.547,81.656]],
		label: $.t("t:poi.label.tesham") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.cage")}) + $.t("t:poi.desc.tesham") + $.t("misc.entrance1",{x1: $.t("<a href='#6/28.047/81.891\'>"), end: $.t("</a>")})
	},{
		coords: [[33.828,59.094]],
		label: $.t("t:poi.label.hengaidth") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.bloodsimple")}) + $.t("t:poi.desc.hengaidth") + $.t("misc.entrance1",{x1: $.t("<a href='#6/35.469/59.328\'>"), end: $.t("</a>")})
	},{
		coords: [[31.516,56.219]],
		label: $.t("t:poi.label.hengaidth") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.bloodsimple")}) + $.t("t:poi.desc.hengaidth") + $.t("misc.entrance1",{x1: $.t("<a href='#6/35.469/59.328\'>"), end: $.t("</a>")})
	},{
		coords: [[22.344,60.375]],
		label: $.t("t:poi.label.hengaidth") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.bloodsimple")}) + $.t("t:poi.desc.hengaidth") + $.t("misc.entrance1",{x1: $.t("<a href='#6/35.469/59.328\'>"), end: $.t("</a>")})
	},{
		coords: [[45.438,80.047]],
		label: $.t("t:poi.label.cake") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("t:poi.desc.cake",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/51.641/84.734\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[113.609,81.078]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.5")
	},{
		coords: [[107.422,77.000]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	},{
		coords: [[116.781,71.500]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.5")
	},{
		coords: [[80.250,108.641]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.5") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/80.328/107.766\'>"), end: $.t("</a>")})
	},{
		coords: [[69.078,116.578]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.5")
	},{
		coords: [[43.656,96.250]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.armor") + $.t("scavenger.level.5")
	},{
		coords: [[91.547,106.172]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5")
	},{
		coords: [[50.703,50.938]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.silver") + $.t("scavenger.level.5") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/46.203/51.609\'>"), end: $.t("</a>")})
	},{
		coords: [[69.984,42.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.steel") + $.t("scavenger.level.5")
	},{
		coords: [[98.859,57.922]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.boot") + $.t("scavenger.level.5") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/98.422/58.438\'>"), end: $.t("</a>")})
	},{
		coords: [[65.953,91.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.5") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/65.813/91.672\'>"), end: $.t("</a>")})
	},{
		coords: [[71.453,88.109]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.5") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/73.063/86.375\'>"), x2: $.t("<a href='#6/72.172/87.641\'>"), end: $.t("</a>")})
	},{
		coords: [[48.891,101.328]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.entrance1",{x1: $.t("<a href='#6/49.781/100.625\'>"), end: $.t("</a>")}) + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	},{
		coords: [[48.797,100.172]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.5") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.entrance1",{x1: $.t("<a href='#6/49.781/100.625\'>"), end: $.t("</a>")}) + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.5")
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[85.391,72.594]],
		label: $.t("sidebar.shopkeeper") + '*',
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("t:shopkeeper.label.vintner") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_rivecalme")}) + $.t("t:shopkeeper.desc.craftingSuppliesAndDrink")
	},{
		coords: [[56.266,44.641]],
		label: $.t("sidebar.shopkeeper") + '*',
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("t:shopkeeper.label.vintner") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_griffin")}) + $.t("shopkeeper.desc.foodAndDrink")
	},{
		coords: [[49.000,92.688]],
		label: $.t("sidebar.shopkeeper") + '*',
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("t:shopkeeper.label.vintner") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_cleaning")}) + $.t("shopkeeper.desc.foodAndDrink")
	},{
		coords: [[90.672,86.859]],
		label: $.t("sidebar.shopkeeper") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("t:shopkeeper.label.vintner") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_dun")}) + $.t("shopkeeper.desc.alchemyAndRunes") + $.t("misc.entrance1",{x1: $.t("<a href='#6/90.672/86.859\'>"), end: $.t("</a>")})
	},{
		coords: [[50.719,65.109]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("t:shopkeeper.desc.paintingscraftingSupplies")
	},{
		coords: [[63.734,89.188]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.craftingSupplies")
	},{
		coords: [[47.937,64.562]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc.craftingSupplies")
	},{
		coords: [[53.578,73.188]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("t:shopkeeper.label.dye"),
		popup: $.t("t:shopkeeper.desc.dye")
	},{
		coords: [[53.469,61.500]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.bookMerchant"),
		popup: $.t("shopkeeper.desc.bookMerchant")
	},{
		coords: [[113.047,81.781]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("t:shopkeeper.desc.craftingSuppliesAndDrink") + $.t("pid.rescue",{x1: $.t("<a href='#6/112.859/81.688\'>"), end: $.t("</a>")})
	},{
		coords: [[75.656,75.750]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("t:shopkeeper.desc.craftingSuppliesAndDrink") + $.t("pid.rescue",{x1: $.t("<a href='#6/60.125/113.047\'>"), end: $.t("</a>")})
	},{
		coords: [[55.344,62.078]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.tailor"),
		popup: $.t("shopkeeper.desc.tailor")
	},{
		coords: [[58.359,71.797]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("t:shopkeeper.label.butcher"),
		popup: $.t("t:shopkeeper.desc.butcher")
	},{
		coords: [[53.813,62.953]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle:  $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.banker"),
		popup: $.t("shopkeeper.desc.banker")
	},{
		coords: [[57.453,68.234]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("t:shopkeeper.desc.craftingSuppliesAndDrink")
	},{
		coords: [[40.063,80.672]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("t:shopkeeper.desc.craftingSuppliesAndDrink")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[52.844,65.000]],
		label: $.t("sidequests.label.onlyone"),
		popup: $.t("sidequests.desc.onlyone") + $.t(' <a href="https://wiiare.in/witcher3/embodiment-of-the-five-virtues/" target="_blank">[Questhelp]</a>')
	},{
		coords: [[74.600,77.000]],
		label: $.t("sidequests.label.wildkingdom"),
		popup: $.t("sidequests.desc.wildkingdom")
	},{
		coords: [[74.600,76.500]],
		label: $.t("sidequests.label.kingforhire"),
		popup: $.t("sidequests.desc.kingforhire")
	},{
		coords: [[54.234,63.688]],
		label: $.t("sidequests.label.facethestrage"),
		popup: $.t("sidequests.desc.facethestrage")
	},{
		coords: [[83.891,55.156]],
		label: $.t("sidequests.label.knightstale"),
		popup: $.t("sidequests.desc.knightstale")
	},{
		coords: [[84.281,49.844]],
		label: $.t("sidequests.label.knightstale"),
		popup: $.t("sidequests.desc.knightstale")
	},{
		coords: [[48.094,64.375]],
		label: $.t("sidequests.label.tilldeath"),
		popup: $.t("sidequests.desc.tilldeath")
	},{
		coords: [[50.719,65.875]],
		label: $.t("sidequests.label.master"),
		popup: $.t("sidequests.desc.master")
	},{
		coords: [[52.281,65.234]],
		label: $.t("sidequests.label.granite"),
		popup: $.t("sidequests.desc.granite")
	},{
		coords: [[52.844,64.000]],
		label: $.t("sidequests.label.smittenkight") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.toussaint")}) + $.t("sidequests.desc.smittenkight")
	},{
		coords: [[52.844,64.500]],
		label: $.t("sidequests.label.placelikehome"),
		popup: $.t("sidequests.desc.placelikehome")
	},{
		coords: [[50.453,63.734]],
		label: $.t("sidequests.label.paperchase"),
		popup: $.t("sidequests.desc.paperchase")
	},{
		coords: [[51.438,63.797]],
		label: $.t("sidequests.label.portait") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.smittenkight")}) + $.t("sidequests.desc.portait")
	},{
		coords: [[42.625,89.625]],
		label: $.t("sidequests.label.cosplay"),
		popup: $.t("sidequests.desc.cosplay")
	},{
		coords: [[66.500,75.203]],
		label: $.t("sidequests.label.grist") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.cage")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.toys")}) + $.t("sidequests.desc.grist")
	},{
		coords: [[64.703,43.500]],
		label: $.t("sidequests.label.father"),
		popup: $.t("sidequests.desc.father")
	},{
		coords: [[47.156,63.750]],
		label: $.t("sidequests.label.sheers") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.smittenkight")}) + $.t("sidequests.desc.sheers")
	},{
		coords: [[70.468,67.253]],
		label: $.t("sidequests.label.placelikehome") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.toussaint")}) + $.t("sidequests.desc.placelikehome")
	},{
		coords: [[70.468,67.453]],
		label: $.t("sidequests.label.hunger") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.cage")}) + $.t("sidequests.desc.hunger")
	},{
		coords: [[57.796,87.000]],
		label: $.t("sidequests.label.jailbird") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.burlap")}) + $.t("sidequests.desc.jailbird")
	},{
		coords: [[98.656,58.188]],
		label: $.t("sidequests.label.prophet") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.entrance1",{x1: $.t("<a href='#6/98.422/58.438\'>"), end: $.t("</a>")}) + $.t("sidequests.desc.prophet")
	},{
		coords: [[47.312,63.203]],
		label: $.t("sidequest.fist") + $.t(": ") + $.t("sidequests.label.ff_st"),
		popup: $.t("sidequests.desc.ff_st")
	},{
		coords: [[58.875,65.500]],
		label: $.t("sidequest.fist") + $.t(": ") + $.t("sidequests.label.ff_st"),
		popup: $.t("sidequests.desc.ff_st")
	},{
		coords: [[51.922,67.813]],
		label: $.t("sidequest.fist") + $.t(": ") + $.t("sidequests.label.ff_st"),
		popup: $.t("sidequests.desc.ff_st")
	},{
		coords: [[93.750,65.906]],
		label: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_coronata") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_belgaard")}) + $.t("sidequests.desc.ww_coronata")
	},{
		coords: [[74.600,76.000]],
		label: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_belgaard"),
		popup: $.t("sidequests.desc.ww_belgaard")
	},{
		coords: [[93.734,65.562]],
		label: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_consorting") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_deus")}) + $.t("misc.disappears",{quest: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_coronata") + "', '" + $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_vermentino")}) + $.t("sidequests.desc.ww_consorting")
	},{
		coords: [[93.750,66.234]],
		label: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_vermentino"),
		popup: $.t("misc.active",{quest: $.t("sidequest.winewars") + $.t(": ") + $.t("sidequests.label.ww_belgaard")}) + $.t("sidequests.desc.ww_vermentino")
	},{
		coords: [[91.094,86.703]],
		label: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_dun"),
		popup: $.t("sidequests.desc.vc_dun")
	},{
		coords: [[49.047,92.781]],
		label: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_cleaning"),
		popup: $.t("sidequests.desc.vc_cleaning")
	},{
		coords: [[85.563,72.172]],
		label: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_rivecalme"),
		popup: $.t("sidequests.desc.vc_rivecalme")
	},{
		coords: [[79.640,53.656]],
		label: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_chuchote"),
		popup: $.t("sidequests.desc.vc_chuchote")
	},{
		coords: [[56.265,44.343]],
		label: $.t("sidequest.vintnercontract") + $.t(": ") + $.t("sidequests.label.vc_griffin"),
		popup: $.t("sidequests.desc.vc_griffin")
	},{
		coords: [[94.609,50.297]],
		label: $.t("sidequest.bigfeet") + $.t(": ") + $.t("sidequests.label.bf_1"),
		popup: $.t("sidequests.desc.bf_1")
	},{
		coords: [[92.063,63.344]],
		label: $.t("sidequest.bigfeet") + $.t(": ") + $.t("sidequests.label.bf_2"),
		popup: $.t("sidequests.desc.bf_2")
	},{
		coords: [[89.781,56.984]],
		label: $.t("sidequest.bigfeet") + $.t(": ") + $.t("sidequests.label.bf_3"),
		popup: $.t("sidequests.desc.bf_3")
	},{
		coords: [[107.750,72.266]],
		label: $.t("sidequest.bigfeet") + $.t(": ") + $.t("sidequests.label.bf_4"),
		popup: $.t("sidequests.desc.bf_4")
	},{
		coords: [[101.484,61.531]],
		label: $.t("sidequest.bigfeet") + $.t(": ") + $.t("sidequests.label.bf_5"),
		popup: $.t("sidequests.desc.bf_5")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[85.578,74.844]],
		label: $.t("t:signpost.label.dulcineawindmill"),
		popup: $.t("t:signpost.desc.dulcineawindmill")
	},{
		coords: [[76.563,75.891]],
		label: $.t("t:signpost.label.cockatrice"),
		popup: $.t("t:signpost.desc.cockatrice")
	},{
		coords: [[70.719,69.219]],
		label: $.t("t:signpost.label.corvobianco"),
		popup: $.t("t:signpost.desc.corvobianco")
	},{
		coords: [[58.594,55.828]],
		label: $.t("t:signpost.label.palace"),
		popup: $.t("t:signpost.desc.palace")
	},{
		coords: [[52.188,53.859]],
		label: $.t("t:signpost.label.palacegardens"),
		popup: $.t("t:signpost.desc.palacegardens")
	},{
		coords: [[49.188,67.703]],
		label: $.t("t:signpost.label.gate"),
		popup: $.t("t:signpost.desc.gate")
	},{
		coords: [[39.563,79.563]],
		label: $.t("t:signpost.label.francollarts"),
		popup: $.t("t:signpost.desc.francollarts")
	},{
		coords: [[77.813,41.813]],
		label: $.t("t:signpost.label.fort"),
		popup: $.t("t:signpost.desc.fort")
	},{
		coords: [[91.297,47.344]],
		label: $.t("t:signpost.label.fox"),
		popup: $.t("t:signpost.desc.fox")
	},{
		coords: [[85.422,55.938]],
		label: $.t("t:signpost.label.castelravello"),
		popup: $.t("t:signpost.desc.castelravello")
	},{
		coords: [[47.969,78.094]],
		label: $.t("t:signpost.label.cemetry"),
		popup: $.t("t:signpost.desc.cemetry")
	},{
		coords: [[55.359,88.313]],
		label: $.t("t:signpost.label.prison"),
		popup: $.t("t:signpost.desc.prison")
	},{
		coords: [[46.781,92.297]],
		label: $.t("t:signpost.label.farm"),
		popup: $.t("t:signpost.desc.farm")
	},{
		coords: [[46.406,99.547]],
		label: $.t("t:signpost.label.ruins"),
		popup: $.t("t:signpost.desc.ruins")
	},{
		coords: [[35.734,94.438]],
		label: $.t("t:signpost.label.cottage"),
		popup: $.t("t:signpost.desc.cottage")
	},{
		coords: [[27.500,80.031]],
		label: $.t("t:signpost.label.mutnaruins"),
		popup: $.t("t:signpost.desc.mutnaruins")
	},{
		coords: [[48.063,63.016]],
		label: $.t("t:signpost.label.embassy"),
		popup: $.t("t:signpost.desc.embassy")
	},{
		coords: [[53.859,63.641]],
		label: $.t("t:signpost.label.granplace"),
		popup: $.t("t:signpost.desc.granplace")
	},{
		coords: [[64.734,64.125]],
		label: $.t("t:signpost.label.tunier"),
		popup: $.t("t:signpost.desc.tunier")
	},{
		coords: [[96.391,59.031]],
		label: $.t("t:signpost.label.statue"),
		popup: $.t("t:signpost.desc.statue")
	},{
		coords: [[34.719,67.375]],
		label: $.t("t:signpost.label.hortense"),
		popup: $.t("t:signpost.desc.hortense")
	},{
		coords: [[64.609,90.953]],
		label: $.t("t:signpost.label.flovive"),
		popup: $.t("t:signpost.desc.flovive")
	},{
		coords: [[69.688,115.422]],
		label: $.t("t:signpost.label.fortussar"),
		popup: $.t("t:signpost.desc.fortussar")
	},{
		coords: [[78.328,107.422]],
		label: $.t("t:signpost.label.montcranecastle"),
		popup: $.t("t:signpost.desc.montcranecastle")
	},{
		coords: [[82.219,85.750]],
		label: $.t("t:signpost.label.duntynnecastle"),
		popup: $.t("t:signpost.desc.duntynnecastle")
	},{
		coords: [[79.984,94.141]],
		label: $.t("t:signpost.label.duntynnehillside"),
		popup: $.t("t:signpost.desc.duntynnehillside")
	},{
		coords: [[113.828,74.422]],
		label: $.t("t:signpost.label.arthachpalaceruins"),
		popup: $.t("t:signpost.desc.arthachpalaceruins")
	},{
		coords: [[110.344,66.078]],
		label: $.t("t:signpost.label.thesilversalamanderinn"),
		popup: $.t("t:signpost.desc.thesilversalamanderinn")
	},{
		coords: [[104.281,80.156]],
		label: $.t("t:signpost.label.tradingpost"),
		popup: $.t("t:signpost.desc.tradingpost")
	},{
		coords: [[93.203,73.578]],
		label: $.t("t:signpost.label.coronatavineyard"),
		popup: $.t("t:signpost.desc.coronatavineyard")
	},{
		coords: [[88.438,100.969]],
		label: $.t("t:signpost.label.basanefarm"),
		popup: $.t("t:signpost.desc.basanefarm")
	},{
		coords: [[65.719,74.813]],
		label: $.t("t:signpost.label.croixmill"),
		popup: $.t("t:signpost.desc.croixmill")
	},{
		coords: [[57.328,64.453]],
		label: $.t("t:signpost.label.coopersgate"),
		popup: $.t("t:signpost.desc.coopersgate")
	},{
		coords: [[54.844,68.781]],
		label: $.t("t:signpost.label.haborgate"),
		popup: $.t("t:signpost.desc.haborgate")
	},{
		coords: [[58.500,70.047]],
		label: $.t("t:signpost.label.sansebastian"),
		popup: $.t("t:signpost.desc.sansebastian")
	},{
		coords: [[55.859,72.984]],
		label: $.t("t:signpost.label.beauclairport"),
		popup: $.t("t:signpost.desc.beauclairport")
	},{
		coords: [[92.188,90.406]],
		label: $.t("t:signpost.label.duntynnecrossroads"),
		popup: $.t("t:signpost.desc.duntynnecrossroads")
	},{
		coords: [[93.547,66.094]],
		label: $.t("t:signpost.label.plegmundsbridge"),
		popup: $.t("t:signpost.desc.plegmundsbridge")
	},{
		coords: [[78.234,52.672]],
		label: $.t("t:signpost.label.chuchotecave"),
		popup: $.t("t:signpost.desc.chuchotecave")
	},{
		coords: [[76.953,65.938]],
		label: $.t("t:signpost.label.sansretourvalley"),
		popup: $.t("t:signpost.desc.sansretourvalley")
	},{
		coords: [[58.563,42.484]],
		label: $.t("t:signpost.label.riouxcannesoutpost"),
		popup: $.t("t:signpost.desc.riouxcannesoutpost")
	},{
		coords: [[44.078,54.172]],
		label: $.t("t:signpost.label.seidhellyghadamphitheater"),
		popup: $.t("t:signpost.desc.seidhellyghadamphitheater")
	},{
		coords: [[43.031,70.906]],
		label: $.t("t:signpost.label.belgaardvineyard"),
		popup: $.t("t:signpost.desc.belgaardvineyard")
	},{
		coords: [[45.078,65.547]],
		label: $.t("t:signpost.label.lebiodasgate"),
		popup: $.t("t:signpost.desc.lebiodasgate")
	},{
		coords: [[71.750,100.203]],
		label: $.t("t:signpost.label.ardaisoquarry"),
		popup: $.t("t:signpost.desc.ardaisoquarry")
	},{
		coords: [[59.938,100.188]],
		label: $.t("t:signpost.label.casteldacciaabandonedestate"),
		popup: $.t("t:signpost.desc.casteldacciaabandonedestate")
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [{
		coords: [[81.219,109.656]],
		label: $.t("t:signalfire.label"),
		popup: $.t("t:signalfire.desc")
	},{
		coords: [[117.016,71.484]],
		label: $.t("t:signalfire.label"),
		popup: $.t("t:signalfire.desc")
	},{
		coords: [[97.563,44.672]],
		label: $.t("t:signalfire.label") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("t:signalfire.desc")
	}],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[78.547,44.234]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[78.547,40.141]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[60.141,114.266]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.109,44.141]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/95.313/41.875\'>"), x2: $.t("<a href='#6/95.172/45.188\'>"), end: $.t("</a>")})
	},{
		coords: [[96.281,44.500]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/95.313/41.875\'>"), x2: $.t("<a href='#6/95.172/45.188\'>"), end: $.t("</a>")})
	},{
		coords: [[81.250,107.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[96.141,106.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[74.922,74.969]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[83.328,75.484]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[92.063,78.313]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[75.969,64.844]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[76.000,63.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[47.156,79.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[48.109,100.172]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[49.266,100.203]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.672,82.281]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.547,81.328]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.375,81.766]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[57.734,84.828]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[68.391,45.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[102.266,64.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[79.453,101.906]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[79.922,101.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.219,102.047]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.453,94.625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[90.75,105.547]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[77.703,103.750]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[80.266,107.391]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[47.734,79.797]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[101.859,61.484]],
		label: $.t("sidebar.treasure") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequest.bigfeet") + $.t(": ") + $.t("sidequests.label.bf_5")}) + $.t("treasure.desc")
	},{
		coords: [[93.156,52.438]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/93.125/53.063\'>"), end: $.t("</a>")})
	},{
		coords: [[42.641,55.703]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/43.078/56.094\'>"), end: $.t("</a>")})
	},{
		coords: [[104.438,66.391]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/102.203/64.344\'>"), end: $.t("</a>")})
	},{
		coords: [[39.188,67.297]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/39.047/67.703\'>"), end: $.t("</a>")})
	},{
		coords: [[61.594,45.203]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/65.156/43.703\'>"), end: $.t("</a>")})
	},{
		coords: [[40.219,67.969]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/39.047/67.703\'>"), end: $.t("</a>")})
	},{
		coords: [[63.406,49.813]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/64.109/51.500\'>"), end: $.t("</a>")})
	},{
		coords: [[76.641,88.047]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/77.375/87.125\'>"), x2: $.t("<a href='#6/75.656/89.453\'>"), end: $.t("</a>")})
	},{
		coords: [[69.516,88.094]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/73.063/86.375\'>"), x2: $.t("<a href='#6/72.172/87.641\'>"), end: $.t("</a>")})
	},{
		coords: [[58.266,49.563]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/59.344/51.313\'>"), x2: $.t("<a href='#6/57.844/50.828\'>"), end: $.t("</a>")})
	},{
		coords: [[45.391,78.078]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/47.000/79.578\'>"), x2: $.t("<a href='#6/47.234/78.734\'>"), end: $.t("</a>")})
	},{
		coords: [[48.313,82.469]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/51.641/84.734\'>"), end: $.t("</a>")})
	},{
		coords: [[47.172,83.125]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/51.641/84.734\'>"), end: $.t("</a>")})
	},{
		coords: [[47.234,83.953]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/51.641/84.734\'>"), end: $.t("</a>")})
	},{
		coords: [[47.625,85.172]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/51.641/84.734\'>"), end: $.t("</a>")})
	},{
		coords: [[46.688,100.109]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/46.734/100.469\'>"), end: $.t("</a>")})
	},{
		coords: [[48.375,101.406]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/49.781/100.625\'>"), end: $.t("</a>")})
	},{
		coords: [[48.531,100.500]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')' + '*',
		popup: $.t("treasure.desc") + $.t("misc.dactive",{quest: $.t("sidequests.label.facethestrage")}) + $.t("misc.entrance1",{x1: $.t("<a href='#6/49.781/100.625\'>"), end: $.t("</a>")})
	},
	//Underwater Treause
	{
		coords: [[63.438,81.219]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.375,84.938]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.891,85.422]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.781,85.703]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.641,83.656]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.875,83.891]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.141,84.281]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[87.750,41.156]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[91.688,106.781]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[59.953,80.250]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[37.672,62.344]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.109,61.797]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.625,49.672]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[84.891,73.891]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/86.047/72.938\'>"), end: $.t("</a>")})
	},{
		coords: [[84.984,73.547]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/86.047/72.938\'>"), end: $.t("</a>")})
	},{
		coords: [[47.656,93.813]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/48.594/92.766\'>"), end: $.t("</a>")})
	},{
		coords: [[47.156,93.188]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/48.594/92.766\'>"), end: $.t("</a>")})
	},{
		coords: [[87.719,108.000]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/89.453/108.266\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: [{
		coords: [[75.469,62.594]],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	},{
		coords: [[97.859,70.625]],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	},{
		coords: [[46.453,75.563]],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	},{
		coords: [[79.125,86.391]],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	},{
		coords: [[77.875,95.344]],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	}]
};
