window.map_path  = 'skellige';
window.map_sWest = L.latLng(-85.050,-180);
window.map_nEast = L.latLng(79.300,135);
window.map_center = [-30.000,-23.000];
window.map_minZoom = 2;
window.map_mZoom = 6;
window.map_Zoom = 2;
window.mapdata_skellige = {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[-32.916,85.562]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[-35.996,92.439]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[-23.745,-19.841]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[-45.522,-49.570]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[-59.040,-2.790]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[-20.468,93.318]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[-28.208,-26.147]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[-19.705,17.314]],
		label: $.t("alchemy.label") + ' - ' + $.t("s:alchemy.gremist") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.practicum")}) + $.t("alchemy.desc")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[-29.037,98.569]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[49.253,39.243]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[-62.492,-37.705]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[2.965,-40.210]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[-28.159,101.851]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[-28.825,98.062]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[-32.806,84.771]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[50.247,39.529]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[33.560,-111.445]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[-62.127,-37.375]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[-39.455,-63.127]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[2.826,-40.997]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[20.797,38.848]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[21.861,-121.047]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-29.459,-17.886]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-61.260,-50.669]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-14.562,27.861]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[5.616,15.557]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [{
		coords: [[31.072,-111.973]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[-3.601,-34.277]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[-77.390,50.142]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[-28.613,102.458]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[50.641,38.013]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[33.101,-111.709]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[-62.007,-37.903]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Journeyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[-39.504,-63.647]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[-37.265,-32.014]],
		label: $.t("sidebar.blacksmith") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur") + '*',
		popup: $.t("blacksmith.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/-33.633/-40.298\'>"), end: $.t("</a>")})
	},{
		coords: [[-56.945,-15.513]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[3.141,-40.649]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[-52.133,-109.775]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("misc.active",{quest: $.t("mainquests.bpreparations")}) + $.t("blacksmith.desc")
	},],

	//------------------------------------------------Boat------------------------------------------------
	boat: [{
		coords: [[-43.548,-137.988]],
		label: $.t("sidebar.boat") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.mists")}) + $.t("boat.desc")
	},{
		coords: [[-51.261,-108.984]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-78.647,69.609]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-3.864,82.045]],
		label: $.t("sidebar.boat") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.last")}) + $.t("boat.desc")
	},{
		coords: [[-31.090,81.079]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-26.273,99.008]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[36.173,-16.699]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[47.754,28.564]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[48.312,37.309]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[48.458,38.496]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-8.428,-94.042]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[40.480,-112.983]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-64.774,-49.416]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-36.013,-61.413]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-22.695,-75.432]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-57.136,-13.623]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-59.500,-2.504]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-45.537,26.147]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-12.447,26.081]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-29.592,-28.916]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[10.682,-22.741]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-0.922,-37.221]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-6.555,-40.825]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-7.013,-40.781]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-30.939,28.125]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[12.854,11.865]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-15.199,85.517]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[30.714,-109.688]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-38.651,-65.303]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-14.520,-139.746]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	},{
		coords: [[-77.303,69.126]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[-55.466,-14.985]],
		label: $.t("contracts.label.dragon"),
		popup: $.t("s:contracts.desc.dragon")
	},{
		coords: [[32.008,-110.961]],
		label: $.t("contracts.label.groom"),
		popup: $.t("s:contracts.desc.groom")
	},{
		coords: [[-30.467,-1.582]],
		label: $.t("contracts.label.miners"),
		popup: $.t("s:contracts.desc.miners")
	},{
		coords: [[-29.036,-26.433]],
		label: $.t("contracts.label.missing"),
		popup: $.t("s:contracts.desc.missing")
	},{
		coords: [[-6.511,-37.045]],
		label: $.t("contracts.label.muire"),
		popup: $.t("s:contracts.desc.muire")
	},{
		coords: [[-55.912,-14.743]],
		label: $.t("contracts.label.wanted"),
		popup: $.t("s:contracts.desc.wanted")
	},{
		coords: [[-29.439,98.195]],
		label: $.t("contracts.label.beast"),
		popup: $.t("s:contracts.desc.beast")
	},{
		coords: [[-42.859,-62.644]],
		label: $.t("contracts.label.eldberg"),
		popup: $.t("s:contracts.desc.eldberg")
	},{
		coords: [[-38.942,-31.926]],
		label: $.t("contracts.label.heart"),
		popup: $.t("s:contracts.desc.heart")
	}],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[-78.469,43.484]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-77.250,44.187]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-17.036,91.230]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-18.750,88.022]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-18.813,108.677]],
		label: $.t("entranceunderwatercave.label") + '*',
		popup: $.t("misc.dactive",{quest: $.t("sidequests.label.last")}) + $.t("entranceunderwatercave.desc")
	},{
		coords: [[-25.205,92.769]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-28.033,89.912]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-29.955,94.131]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[50.317,33.289]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[17.225,-123.640]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-15.623,-139.043]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.elderblood")}) + $.t("entrance.desc.entry")
	},{
		coords: [[-51.727,-134.517]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-60.791,-127.375]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-61.470,-122.278]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-56.933,-124.343]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-59.108,-111.313]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.undvik")}) + $.t("entrance.desc.entry")
	},{
		coords: [[-71.124,-8.525]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-69.756,-8.503]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-69.938,-23.906]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-52.389,-42.473]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("entrance.desc.entry")
	},{
		coords: [[-45.722,-30.256]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-23.322,-67.983]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-18.396,-38.804]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-56.801,23.379]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-54.581,12.964]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-47.145,17.468]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-44.072,6.350]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-12.897,-13.667]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-13.240,-27.598]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-20.056,17.446]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.practicum")}) + $.t("entrance.desc.entry")
	},{
		coords: [[-1.801,-1.099]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[9.926,-22.168]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.sunstone")}) + $.t("entrance.desc.entry")
	},{
		coords: [[-9.167,-28.081]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[47.070,31.948]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[52.882,34.277]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-25.602,-5.076]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-57.017,-49.812]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-46.544,-58.008]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[3.009,-42.319]],
		label: $.t("sidebar.entrance") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("entrance.desc.exit")
	},{
		coords: [[-51.727,-138.516]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-49.210,-134.385]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-48.019,-136.011]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-46.710,-137.109]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-62.775,-130.781]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-62.835,-130.210]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-60.845,-123.113]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-60.781,-123.816]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-61.228,-122.454]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-60.305,-125.486]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-53.449,-9.316]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	},{
		coords: [[-55.154,-4.834]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[-43.834,-59.677]],
		label: $.t("event.label.wild"),
		popup: $.t("s:event.desc.wild")
	},{
		coords: [[-57.064,-49.416]],
		label: $.t("event.label.farting") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("s:event.desc.farting") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-57.017/-49.812\'>"), end: $.t("</a>")})
	},{
		coords: [[-43.373,-54.602]],
		label: $.t("event.label.children2"),
		popup: $.t("s:event.desc.children2")
	},{
		coords: [[-39.554,-53.020]],
		label: $.t("event.label.siren"),
		popup: $.t("s:event.desc.siren")
	},{
		coords: [[-76.491,63.786]],
		label: $.t("event.label.hemdall"),
		popup: $.t("s:event.desc.hemdall")
	},{
		coords: [[-46.679,-6.899]],
		label: $.t("event.label.woe"),
		popup: $.t("s:event.desc.woe")
	},{
		coords: [[-2.262,-0.461]],
		label: $.t("event.label.yustianna") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("s:event.desc.yustianna") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-1.801/-1.099\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[-77.355,50.647]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-28.420,102.119]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-28.929,97.754]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-32.990,84.902]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[50.499,39.836]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[33.340,-111.357]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-62.390,-37.156]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-39.317,-62.996]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-23.564,-20.522]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[2.526,-40.957]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[-73.788,20.347]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-46.134,-120.586]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-69.877,-160.225]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-75.958,43.835]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-22.472,85.386]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-46.815,-37.639]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[5.791,-17.754]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-21.678,-32.717]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-23.765,23.291]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-53.278,-63.413]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-13.625,-43.506]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-70.873,-5.625]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-66.531,-15.908]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-26.392,-5.142]],
		label: $.t("sidebar.guarded") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("guarded.desc")
	},{
		coords: [[53.801,-64.336]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[55.826,-30.674]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[59.623,-26.279]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[61.058,-17.754]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[57.845,-1.670]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[28.111,91.406]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[55.279,-40.869]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-70.215,35.552]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[-77.455,49.227]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-77.350,50.242]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-29.206,99.662]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-28.985,100.993]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-28.513,102.658]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-28.937,98.769]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[50.701,38.203]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[50.669,40.630]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[49.313,39.443]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[33.201,-111.909]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[31.360,-110.856]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[31.361,-112.799]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-62.442,-37.585]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-61.917,-37.753]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-64.003,-47.744]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-42.031,-61.873]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-39.404,-63.487]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-37.165,-31.814]],
		label: $.t("sidebar.gwent") + '*',
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent") + '*',
		popup: $.t("gwent.desc.player") + $.t("pid.rescue",{x1: $.t("<a href='#6/-33.633/-40.298\'>"), end: $.t("</a>")})
	},{
		coords: [[-37.584,-29.837]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-56.435,-13.731]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-56.845,-15.313]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[3.085,-40.010]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.armourer") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[3.241,-40.449]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-30.576,-2.481]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-5.997,-34.407]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-3.194,-35.967]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	},{
		coords: [[-39.351,-7.031]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("sidebar.herbalist") + ' - ' +  $.t("sidebar.gwent"),
		popup: $.t("gwent.desc.player")
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [{
		coords: [[-21.780,18.721]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("s:gwentquest.players.ermion") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("misc.active",{quest: $.t("mainquests.echoes")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[-19.705,17.578]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("s:alchemy.gremist") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.practicum")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[-0.527,-41.287]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("s:gwentquest.players.crach") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.king")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[-3.667,-33.948]],
		label: $.t("sidebar.gwentquest"),
		popupTitle: $.t("s:gwentquest.players.sjusta") + ' - ' +  $.t("sidebar.gwentquest"),
		popup: $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	},{
		coords: [[-62.634,-39.045]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("s:gwentquest.players.lugos") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.king")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_sk")})
	}],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [{
		coords: [[-6.075,-40.496]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[11.265,-23.005]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-28.498,-28.696]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-38.514,-65.544]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-23.403,-75.388]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-50.972,-106.721]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-43.628,-116.301]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-64.053,-52.207]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-76.496,53.394]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-58.101,-12.349]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-59.955,-2.944]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-57.065,25.796]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-25.681,100.767]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-31.915,26.938]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[47.725,38.628]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[32.769,-107.974]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-14.477,-141.064]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	},{
		coords: [[-35.604,82.617]],
		label: $.t("sidebar.harbor"),
		popup: $.t("harbor.desc")
	}],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[-32.473,14.722]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[-6.097,-34.607]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[-39.096,-6.965]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("alchemy.desc") + $.t("pid.rescue",{x1: $.t("<a href='#6/-38.994/-6.372\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[46.905,46.582]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_nilf"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-46.073,-133.835]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_precious"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-56.317,-150.073]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-40.028,-18.083]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_inheritance"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-37.845,2.615]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_marks"),
		popup: $.t("hidden.desc")
	},{
		coords: [[2.021,-21.709]],
		label: $.t("sidebar.hidden") + '*' + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.sunstone")}) + $.t("hidden.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	},{
		coords: [[38.788,-21.533]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_unlucky"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-65.658,41.396]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_ironsides"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-78.044,-41.968]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_depths"),
		popup: $.t("hidden.desc")
	},{
		coords: [[63.666,-88.154]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.desc")
	},{
		coords: [[26.274,-104.238]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_dare"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[27.020,-95.977]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-55.937,-121.223]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_shortcut"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-12.039,-98.701]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-78.469,42.957]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-36.315,0.264]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_praised"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-58.825,-3.735]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_fortune"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-32.287,-50.757]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-72.262,5.317]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-21.739,30.498]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[-24.127,-69.829]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_pearls"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[4.083,-78.223]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[31.541,-65.566]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[50.373,-7.515]],
		label: $.t("sidebar.hidden"),
		popup: $.t("hidden.guarded")
	}],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [{
		coords: [[-23.080,-9.976]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-43.325,-42.605]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[37.300,-99.031]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[38.976,-20.544]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[58.089,-2.615]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[5.791,56.250]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-52.268,-63.853]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-49.110,-116.060]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-54.188,-113.774]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-50.972,-124.673]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-59.779,-134.121]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	},{
		coords: [[-59.690,-118.169]],
		label: $.t("sidebar.hollow"),
		popup: $.t("hollow.desc")
	}],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[-77.485,49.007]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.harvikenInn"),
		popup: $.t("s:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[-29.075,100.723]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.houseOfWarriors"),
		popup: $.t("s:innkeep.desc.foodAndDrink")
	},{
		coords: [[50.569,40.430]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.uriallaHarbourInn"),
		popup: $.t("s:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[31.241,-113.049]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.svorlagInn"),
		popup: $.t("s:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[-42.131,-62.073]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.arinbjornInn"),
		popup: $.t("s:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[-3.294,-36.167]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("s:innkeep.inns.theNewPort"),
		popup: $.t("s:innkeep.desc.foodDrinkAndGwent")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [{
		coords: [[-78.587,68.071]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[-77.133,56.646]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[-2.416,-21.841]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[-50.078,-33.245]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[-10.401,1.758]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[-5.922,8.262]],
		label: $.t("sidebar.monsterden"),
		popup: $.t("monsterden.desc")
	}],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[50.458,26.521]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[-23.544,-37.551]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[-59.074,-24.521]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[-24.827,-29.070]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[-59.120,-4.131]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[-28.343,100.239]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[31.996,-111.313]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[-63.095,-43.594]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[-42.844,-62.996]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[-27.547,-25.005]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[-55.454,-15.337]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[-30.468,-1.890]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	},{
		coords: [[-6.905,-35.178]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [{
		coords: [[-33.633,-40.298]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/-37.265/-32.014\'>"), end: $.t("</a>")})
	},{
		coords: [[-38.994,-6.372]],
		label: $.t("sidebar.pid"),
		popup: $.t("pid.desc") + $.t("pid.afterrescue",{x1: $.t("<a href='#6/-39.096/-6.965\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[-76.851,40.891]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	},{
		coords: [[54.496,35.903]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[34.343,-120.564]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-57.350,-48.604]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-24.667,-36.497]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-32.194,15.710]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-21.576,29.795]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[4.784,-42.451]],
		label: $.t("sidebar.pop") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}) + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.gambit")}) + $.t("pop.desc") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/3.009/-42.319\'>"), end: $.t("</a>")})
	},{
		coords: [[4.390,-25.708]],
		label: $.t("sidebar.pop") + '*' + ' (' + $.t("misc.underground") + ')',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}) + ' (' + $.t("misc.underground") + ')',
		popup: $.t("misc.active",{quest: $.t("mainquests.sunstone")}) + $.t("pop.desc") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/9.926/-22.168\'>"), x2: $.t("<a href='#6/-2.416/-21.841\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[21.617,59.854]],
		label: $.t("s:poi.label.gship"),
		popupTitle: $.t("s:poi.popupTitle.gship"),
		popup: $.t("s:poi.desc.gship")
	},{
		coords: [[-3.755,1.494]],
		label: $.t("s:poi.label.poem"),
		popupTitle: $.t("s:poi.popupTitle.poem"),
		popup: $.t("s:poi.desc.poem")
	},{
		coords: [[-32.101,-51.350]],
		label: $.t("s:poi.label.birna"),
		popupTitle: $.t("s:poi.popupTitle.birna"),
		popup: $.t("s:poi.desc.birna",{quest: $.t("sidequests.label.gambit")})
	},{
		coords: [[-76.619,80.354]],
		label: $.t("s:poi.label.dowry"),
		popupTitle: $.t("s:poi.popupTitle.dowry"),
		popup: $.t("s:poi.desc.dowry",{quest: $.t("sidequests.label.price")})
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[-77.147,58.162]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.4") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-77.133/56.646\'>"), end: $.t("</a>")})
	},{
		coords: [[-12.297,0.769]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[-50.000,-34.500]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	},{
		coords: [[-70.500,-8.600]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.3") + $.t("<br />") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-69.756/-8.503\'>"), x2: $.t("<a href='#6/-71.124/-8.525\'>"), end: $.t("</a>")})
	},{
		coords: [[-40.112,-14.546]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[54.500,32.000]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[-56.462,19.753]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[-57.404,-49.349]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-57.017/-49.812\'>"), end: $.t("</a>")})
	},{
		coords: [[17.800,-123.500]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.cross") + $.t("scavenger.level.1")
	},{
		coords: [[-1.274,-11.931]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[5.500,-17.000]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	},{
		coords: [[-6.665,5.581]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.2") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-5.922/8.262\'>"), end: $.t("</a>")})
	},{
		coords: [[-58.344,-2.549]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[-11.501,-100.129]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	},{
		coords: [[-45.935,-102.656]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[-59.221,-23.730]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.3")
	},{
		coords: [[-58.043,-107.886]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	},{
		coords: [[-37.440,-21.907]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4")
	},{
		coords: [[-46.119,-57.437]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.3") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-46.544/-58.008\'>"), end: $.t("</a>")})
	},{
		coords: [[-27.722,73.894]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[22.634,-120.850]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.4")
	},{
		coords: [[-78.039,68.049]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4") + ' (' + $.t("misc.underground") + ')',
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.4") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-78.587/68.071\'>"), end: $.t("</a>")})
	},{
		coords: [[-22.000,31.000]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	},{
		coords: [[8.559,13.733]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	},{
		coords: [[53.800,38.500]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[-29.306,99.492]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[31.260,-111.006]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[-64.063,-47.944]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFishAndSaddles")
	},{
		coords: [[-37.684,-30.037]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[-56.535,-13.931]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	},{
		coords: [[-22.837,-20.522]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[-30.676,-2.681]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFoodAndDrink")
	},{
		coords: [[-14.541,-32.080]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[-7.559,-40.408]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[-3.401,-34.077]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("sidebar.shopkeeper") + ' - ' + $.t("shopkeeper.label.tailor"),
		popup: $.t("s:shopkeeper.desc.clothesAndCraftingSupplies") + $.t("s:shopkeeper.desc.barber")
	},{
		coords: [[-41.837,-2.285]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[-46.453,-48.735]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	},{
		coords: [[-32.676,85.166]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[-43.548,8.459]],
		label: $.t("sidequests.label.beloved"),
		popup: $.t("s:sidequests.desc.beloved")
	},{
		coords: [[-25.621,-67.060]],
		label: $.t("sidequests.label.horn"),
		popup: $.t("s:sidequests.desc.horn")
	},{
		coords: [[-28.439,101.557]],
		label: $.t("sidequests.label.passenger"),
		popup: $.t("s:sidequests.desc.passenger")
	},{
		coords: [[-24.507,8.393]],
		label: $.t("sidequests.label.sawmill"),
		popup: $.t("s:sidequests.desc.sawmill")
	},{
		coords: [[-3.272,-35.573]],
		label: $.t("sidequests.label.unpaid"),
		popup: $.t("s:sidequests.desc.unpaid")
	},{
		coords: [[-32.934,-19.907]],
		label: $.t("sidequests.label.assault"),
		popup: $.t("s:sidequests.desc.assault")
	},{
		coords: [[-46.225,-24.016]],
		label: $.t("sidequests.label.brave"),
		popup: $.t("s:sidequests.desc.brave")
	},{
		coords: [[1.406,-40.979]],
		label: $.t("sidequests.label.coronation"),
		popup: $.t("s:sidequests.desc.coronation")
	},{
		coords: [[12.854,-15.424]],
		label: $.t("sidequests.label.punishment1"),
		popup: $.t("s:sidequests.desc.punishment1")
	},{
		coords: [[-5.681,-19.423]],
		label: $.t("sidequests.label.punishment2"),
		popup: $.t("s:sidequests.desc.punishment2")
	},{
		coords: [[12.490,12.656]],
		label: $.t("sidequests.label.keepers"),
		popup: $.t("s:sidequests.desc.keepers")
	},{
		coords: [[-77.244,71.477]],
		label: $.t("sidequests.label.flesh"),
		popup: $.t("s:sidequests.desc.flesh")
	},{
		coords: [[-29.401,94.174]],
		label: $.t("sidequests.label.glory"),
		popup: $.t("s:sidequests.desc.glory")
	},{
		coords: [[34.939,-20.522]],
		label: $.t("sidequests.label.spirit"),
		popup: $.t("s:sidequests.desc.spirit")
	},{
		coords: [[-33.229,43.198]],
		label: $.t("sidequests.label.fromfar1"),
		popup: $.t("s:sidequests.desc.fromfar1")
	},{
		coords: [[-22.187,-8.525]],
		label: $.t("sidequests.label.hardtimes"),
		popup: $.t("s:sidequests.desc.hardtimes")
	},{
		coords: [[-28.343,100.524]],
		label: $.t("sidequests.label.clothing"),
		popup: $.t("s:sidequests.desc.clothing")
	},{
		coords: [[-77.073,57.480]],
		label: $.t("sidequests.label.maiden"),
		popup: $.t("s:sidequests.desc.maiden")
	},{
		coords: [[2.174,-41.528]],
		label: $.t("sidequests.label.gambit"),
		popup: $.t("s:sidequests.desc.gambit")
	},{
		coords: [[31.015,-100.063]],
		label: $.t("sidequests.label.arena"),
		popup: $.t("s:sidequests.desc.arena")
	},{
		coords: [[-13.752,-27.509]],
		label: $.t("sidequests.label.disturbed"),
		popup: $.t("s:sidequests.desc.disturbed")
	},{
		coords: [[28.940,-112.565]],
		label: $.t("sidequests.label.possession"),
		popup: $.t("s:sidequests.desc.possession")
	},{
		coords: [[-19.787,16.940]],
		label: $.t("sidequests.label.practicum"),
		popup: $.t("s:sidequests.desc.practicum")
	},{
		coords: [[-21.759,15.424]],
		label: $.t("sidequests.label.therapy"),
		popup: $.t("s:sidequests.desc.therapy")
	},{
		coords: [[-61.100,-37.770]],
		label: $.t("sidequests.label.stranger"),
		popup: $.t("s:sidequests.desc.stranger")
	},{
		coords: [[-45.321,24.916]],
		label: $.t("sidequests.label.taken1"),
		popup: $.t("s:sidequests.desc.taken1")
	},{
		coords: [[-20.200,92.834]],
		label: $.t("sidequests.label.taken2"),
		popup: $.t("s:sidequests.desc.taken2")
	},{
		coords: [[-69.824,-22.675]],
		label: $.t("sidequests.label.dreams"),
		popup: $.t("s:sidequests.desc.dreams")
	},{
		coords: [[-19.373,-12.216]],
		label: $.t("sidequests.label.blade"),
		popup: $.t("s:sidequests.desc.blade")
	},{
		coords: [[-29.017,100.195]],
		label: $.t("sidequests.label.last"),
		popup: $.t("s:sidequests.desc.last")
	},{
		coords: [[-56.365,-111.972]],
		label: $.t("sidequests.label.undvik"),
		popup: $.t("s:sidequests.desc.undvik")
	},{
		coords: [[-32.249,-22.500]],
		label: $.t("sidequests.label.nithing"),
		popup: $.t("s:sidequests.desc.nithing")
	},{
		coords: [[50.485,38.913]],
		label: $.t("sidequests.label.warriors"),
		popup: $.t("s:sidequests.desc.warriors")
	},{
		coords: [[52.909,46.736]],
		label: $.t("sidequests.label.warriors"),
		popup: $.t("s:sidequests.desc.warriors")
	},{
		coords: [[-76.930,50.185]],
		label: $.t("sidequests.label.price"),
		popup: $.t("s:sidequests.desc.price")
	},{
		coords: [[-30.675,-4.636]],
		label: $.t("sidequests.label.grossbart"),
		popup: $.t("s:sidequests.desc.grossbart")
	},{
		coords: [[50.401,38.430]],
		label: $.t("sidequests.label.nowheres"),
		popup: $.t("s:sidequests.desc.nowheres")
	},{
		coords: [[-7.318,-39.243]],
		label: $.t("sidequests.label.worthy1"),
		popup: $.t("s:sidequests.desc.worthy1")
	},{
		coords: [[-14.859,-32.629]],
		label: $.t("sidequests.label.worthy2"),
		popup: $.t("s:sidequests.desc.worthy2")
	},{
		coords: [[-55.764,-15.535]],
		label: $.t("sidequests.label.worthy3"),
		popup: $.t("s:sidequests.desc.worthy3")
	},{
		coords: [[-32.583,-27.443]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_fa"),
		popup: $.t("s:sidequests.desc.ps_fa")
	},{
		coords: [[-28.767,96.811]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_sg"),
		popup: $.t("s:sidequests.desc.ps_sg")
	},{
		coords: [[-40.946,-4.130]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_fy"),
		popup: $.t("s:sidequests.desc.ps_fy")
	},{
		coords: [[-27.683,-25.751]],
		label: $.t("sidequest.pursuit") +$.t(": ") +$.t("sidequests.label.ps_sk"),
		popup: $.t("s:sidequests.desc.ps_sk")
	},{
		coords: [[-6.882,-34.409]],
		label: $.t("sidequest.gwent") +$.t(": ") +$.t("sidequests.label.gw_sk"),
		popup: $.t("s:sidequests.desc.gw_sk")
	},{
		coords: [[30.996,-99.755]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_champion"),
		popup: $.t("s:sidequests.desc.ff_champion")
	},{
		coords: [[-6.882,-34.782]],
		label: $.t("sidequest.fist") +$.t(": ") +$.t("sidequests.label.ff_skellige"),
		popup: $.t("s:sidequests.desc.ff_skellige")
	},{
		coords: [[-56.206,-112.741]],
		label: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_ruins"),
		popup: $.t("s:sidequests.desc.tr_ruins")
	},{
		coords: [[2.746,-39.880]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.I"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[2.746,-39.680]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.II"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[2.746,-39.480]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.III"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[2.746,-39.280]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.urs") + $.t("sidequests.label.scavenger.part.IV"),
		popup: $.t("sidequests.label.scavenger.desc.urs")
	},{
		coords: [[2.746,-39.080]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.I"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	},{
		coords: [[2.746,-38.880]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.III"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	},{
		coords: [[2.746,-38.680]],
		label: $.t("sidequests.label.scavenger.quest") + $.t("sidequests.label.scavenger.name.wol") + $.t("sidequests.label.scavenger.part.IV"),
		popup: $.t("sidequests.label.scavenger.desc.wol")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[-77.490,69.829]],
		label: $.t("s:signpost.label.trottheim"),
		popup: $.t("s:signpost.desc.trottheim")
	},{
		coords: [[-77.206,49.526]],
		label: $.t("s:signpost.label.harviken"),
		popup: $.t("s:signpost.desc.harviken")
	},{
		coords: [[-30.031,99.272]],
		label: $.t("s:signpost.label.larvik"),
		popup: $.t("s:signpost.desc.larvik")
	},{
		coords: [[-20.838,86.177]],
		label: $.t("s:signpost.label.freyasGarden"),
		popup: $.t("s:signpost.desc.freyasGarden")
	},{
		coords: [[-25.463,81.563]],
		label: $.t("s:signpost.label.lofoten"),
		popup: $.t("s:signpost.desc.lofoten")
	},{
		coords: [[-29.764,82.375]],
		label: $.t("s:signpost.label.lofotenCemetery"),
		popup: $.t("s:signpost.desc.lofotenCemetery")
	},{
		coords: [[-33.505,85.144]],
		label: $.t("s:signpost.label.isolatedHut"),
		popup: $.t("s:signpost.desc.isolatedHut")
	},{
		coords: [[-36.668,91.604]],
		label: $.t("s:signpost.label.lurthen"),
		popup: $.t("s:signpost.desc.lurthen")
	},{
		coords: [[52.882,46.230]],
		label: $.t("s:signpost.label.trailToYngvarsFang"),
		popup: $.t("s:signpost.desc.trailToYngvarsFang")
	},{
		coords: [[54.623,35.376]],
		label: $.t("s:signpost.label.yngvarsFang"),
		popup: $.t("s:signpost.desc.yngvarsFang")
	},{
		coords: [[50.092,38.364]],
		label: $.t("s:signpost.label.uriallaHarbor"),
		popup: $.t("s:signpost.desc.uriallaHarbor")
	},{
		coords: [[48.444,27.510]],
		label: $.t("s:signpost.label.bayOfWinds"),
		popup: $.t("s:signpost.desc.bayOfWinds")
	},{
		coords: [[33.229,-99.470]],
		label: $.t("s:signpost.label.hov"),
		popup: $.t("s:signpost.desc.hov")
	},{
		coords: [[32.380,-113.005]],
		label: $.t("s:signpost.label.svorlag"),
		popup: $.t("s:signpost.desc.svorlag")
	},{
		coords: [[22.289,-121.509]],
		label: $.t("s:signpost.label.oldWatchtower"),
		popup: $.t("s:signpost.desc.oldWatchtower")
	},{
		coords: [[-16.046,-139.482]],
		label: $.t("s:signpost.label.thePaliGapCoast"),
		popup: $.t("s:signpost.desc.thePaliGapCoast")
	},{
		coords: [[-8.538,-94.922]],
		label: $.t("s:signpost.label.kaerAlmhult"),
		popup: $.t("s:signpost.desc.kaerAlmhult")
	},{
		coords: [[-52.456,-110.391]],
		label: $.t("s:signpost.label.marlinCoast"),
		popup: $.t("s:signpost.desc.marlinCoast")
	},{
		coords: [[-58.984,-98.899]],
		label: $.t("s:signpost.label.gullPoint"),
		popup: $.t("s:signpost.desc.gullPoint")
	},{
		coords: [[-56.377,-113.533]],
		label: $.t("s:signpost.label.dorveRuins"),
		popup: $.t("s:signpost.desc.dorveRuins")
	},{
		coords: [[-61.365,-121.553]],
		label: $.t("s:signpost.label.clanTordarrochForge"),
		popup: $.t("s:signpost.desc.clanTordarrochForge")
	},{
		coords: [[-58.367,-127.529]],
		label: $.t("s:signpost.label.urskar"),
		popup: $.t("s:signpost.desc.urskar")
	},{
		coords: [[-54.801,-135.176]],
		label: $.t("s:signpost.label.abandonedVillage"),
		popup: $.t("s:signpost.desc.abandonedVillage")
	},{
		coords: [[-43.133,-139.219]],
		label: $.t("s:signpost.label.torGvalchca"),
		popup: $.t("s:signpost.desc.torGvalchca")
	},{
		coords: [[-70.707,-6.064]],
		label: $.t("s:signpost.label.elverumLighthouse"),
		popup: $.t("s:signpost.desc.elverumLighthouse")
	},{
		coords: [[-58.939,-3.252]],
		label: $.t("s:signpost.label.ruinedInn"),
		popup: $.t("s:signpost.desc.ruinedInn")
	},{
		coords: [[-55.004,-15.029]],
		label: $.t("s:signpost.label.fyresdal"),
		popup: $.t("s:signpost.desc.fyresdal")
	},{
		coords: [[-63.085,-38.496]],
		label: $.t("s:signpost.label.kaerMuire"),
		popup: $.t("s:signpost.desc.kaerMuire")
	},{
		coords: [[-64.539,-47.329]],
		label: $.t("s:signpost.label.holmsteinsPort"),
		popup: $.t("s:signpost.desc.holmsteinsPort")
	},{
		coords: [[-54.098,-60.754]],
		label: $.t("s:signpost.label.wildShore"),
		popup: $.t("s:signpost.desc.wildShore")
	},{
		coords: [[-50.958,-42.935]],
		label: $.t("s:signpost.label.fornhala"),
		popup: $.t("s:signpost.desc.fornhala")
	},{
		coords: [[-54.763,12.964]],
		label: $.t("s:signpost.label.distillery"),
		popup: $.t("s:signpost.desc.distillery")
	},{
		coords: [[-56.837,23.071]],
		label: $.t("s:signpost.label.grotto"),
		popup: $.t("s:signpost.desc.grotto")
	},{
		coords: [[-47.145,-6.812]],
		label: $.t("s:signpost.label.palisade"),
		popup: $.t("s:signpost.desc.palisade")
	},{
		coords: [[-43.165,-63.677]],
		label: $.t("s:signpost.label.arinbjorn"),
		popup: $.t("s:signpost.desc.arinbjorn")
	},{
		coords: [[-40.212,-47.900]],
		label: $.t("s:signpost.label.sund"),
		popup: $.t("s:signpost.desc.sund")
	},{
		coords: [[-36.351,-31.311]],
		label: $.t("s:signpost.label.fayrlund"),
		popup: $.t("s:signpost.desc.fayrlund")
	},{
		coords: [[-41.311,-17.886]],
		label: $.t("s:signpost.label.boxholm"),
		popup: $.t("s:signpost.desc.boxholm")
	},{
		coords: [[-29.306,-25.928]],
		label: $.t("s:signpost.label.rannvaig"),
		popup: $.t("s:signpost.desc.rannvaig")
	},{
		coords: [[-30.827,-4.219]],
		label: $.t("s:signpost.label.blandare"),
		popup: $.t("s:signpost.desc.blandare")
	},{
		coords: [[-32.064,14.458]],
		label: $.t("s:signpost.label.druidsCamp"),
		popup: $.t("s:signpost.desc.druidsCamp")
	},{
		coords: [[-30.940,25.356]],
		label: $.t("s:signpost.label.redgill"),
		popup: $.t("s:signpost.desc.redgill")
	},{
		coords: [[-25.642,7.031]],
		label: $.t("s:signpost.label.abandonedSawmill"),
		popup: $.t("s:signpost.desc.abandonedSawmill")
	},{
		coords: [[-21.882,18.215]],
		label: $.t("s:signpost.label.gedyneith"),
		popup: $.t("s:signpost.desc.gedyneith")
	},{
		coords: [[-13.475,24.390]],
		label: $.t("s:signpost.label.whaleGraveyard"),
		popup: $.t("s:signpost.desc.whaleGraveyard")
	},{
		coords: [[-21.002,-30.059]],
		label: $.t("s:signpost.label.crossroads"),
		popup: $.t("s:signpost.desc.crossroads")
	},{
		coords: [[-16.341,-9.404]],
		label: $.t("s:signpost.label.minersCamp"),
		popup: $.t("s:signpost.desc.minersCamp")
	},{
		coords: [[-14.520,-70.928]],
		label: $.t("s:signpost.label.eldbergLighthouse"),
		popup: $.t("s:signpost.desc.eldbergLighthouse")
	},{
		coords: [[-12.512,1.626]],
		label: $.t("s:signpost.label.kaerGelen"),
		popup: $.t("s:signpost.desc.kaerGelen")
	},{
		coords: [[-7.067,-37.617]],
		label: $.t("s:signpost.label.KaerTroldeHarbor"),
		popup: $.t("s:signpost.desc.KaerTroldeHarbor")
	},{
		coords: [[2.636,-38.650]],
		label: $.t("s:signpost.label.bridgeToKaerTrolde"),
		popup: $.t("s:signpost.desc.bridgeToKaerTrolde")
	},{
		coords: [[-8.494,-18.171]],
		label: $.t("s:signpost.label.rogne"),
		popup: $.t("s:signpost.desc.rogne")
	},{
		coords: [[-1.384,-1.956]],
		label: $.t("s:signpost.label.yustiannasGrotto"),
		popup: $.t("s:signpost.desc.yustiannasGrotto")
	},{
		coords: [[2.724,15.029]],
		label: $.t("s:signpost.label.giantsToes"),
		popup: $.t("s:signpost.desc.giantsToes")
	},{
		coords: [[9.947,-22.039]],
		label: $.t("s:signpost.label.ancientCrypt"),
		popup: $.t("s:signpost.desc.ancientCrypt")
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [{
		coords: [[-27.722,-50.098]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-23.080,-57.832]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-18.146,-48.955]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-10.185,-52.163]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-3.996,-61.304]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[4.215,-57.173]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[12.340,-56.865]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[7.885,-68.423]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[0.527,-91.846]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-18.355,-82.266]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-24.327,-80.771]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-21.576,-105.469]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-16.594,-121.992]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[1.099,-119.971]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[12.426,-101.250]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[21.943,-72.949]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[36.809,-30.366]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[29.075,-33.706]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[16.720,-35.288]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[17.811,-24.829]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[24.767,-10.942]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[15.538,-3.560]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[32.027,8.833]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[37.788,47.813]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[36.527,43.154]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[37.719,33.926]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[21.617,48.691]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-7.362,28.389]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[2.328,27.686]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-6.446,38.848]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[2.153,37.793]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-10.617,47.417]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-11.092,59.985]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-11.092,70.884]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-26.195,60.029]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-56.705,79.805]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-60.759,40.430]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-62.042,25.269]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-66.496,3.120]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-68.544,8.657]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-77.332,13.623]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-76.321,-22.148]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-77.351,-47.065]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-78.853,-121.729]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-74.068,-79.365]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-70.613,-55.986]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-66.896,-83.145]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-57.374,-78.311]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-41.079,-76.421]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-41.673,-92.505]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-37.125,-97.383]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[-36.510,-82.046]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[53.852,17.050]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[53.697,-55.371]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[36.809,-62.007]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[25.919,84.463]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[61.186,-90.264]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[52.107,-22.500]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[56.023,-8.877]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	}],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [{
		coords: [[-77.466,-63.193]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[-16.426,-144.009]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[-20.879,-158.467]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[29.650,-63.896]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[21.412,-47.285]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[57.891,-28.564]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[-69.396,25.356]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	},{
		coords: [[-50.709,43.550]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	}],

	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[-76.761,40.627]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[54.699,36.563]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-77.245,35.728]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-77.851,69.434]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-78.587/68.071\'>"), end: $.t("</a>")})
	},{
		coords: [[-47.754,-137.373]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-25.006,-33.618]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-23.524,-36.475]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-12.211,-44.341]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-19.601,-11.733]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-7.144,98.218]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-6.359,97.690]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-71.815,1.033]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[1.186,1.538]],
		label: $.t("sidebar.treasure"),
		popup: $.t("s:treasure.desc.solution")
	},{
		coords: [[-3.426,1.582]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-76.911,-118.125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-22.898,-34.673]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-22.187,-37.551]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-18.375,-41.924]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-78.504,79.014]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-2.394,17.974]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[36.474,-98.503]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[43.835,-113.555]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[55.154,-46.560]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[56.170,-57.744]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.935,-55.701]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.147,-71.631]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[55.900,-73.433]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.456,-80.859]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[37.003,-19.666]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[3.864,56.514]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[48.458,65.654]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-0.571,-93.208]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-43.389,-110.215]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-76.771,-67.852]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-58.666,11.909]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-54.750,-111.973]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-53.173,-117.773]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-63.135,-131.309]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-60.791/-127.375"), x2: $.t("-61.470"), y2: $.t("-122.278"), x3: $.t("-60.305"), y3: $.t("-125.486\'>"), end: $.t("</a>")})
	},{
		coords: [[-62.492,-124.453]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-60.791/-127.375"), x2: $.t("-61.470"), y2: $.t("-122.278"), x3: $.t("-60.305"), y3: $.t("-125.486\'>"), end: $.t("</a>")})
	},{
		coords: [[-61.186,-124.980]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-60.791/-127.375"), x2: $.t("-61.470"), y2: $.t("-122.278"), x3: $.t("-60.305"), y3: $.t("-125.486\'>"), end: $.t("</a>")})
	},{
		coords: [[-62.186,-123.398]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-60.791/-127.375"), x2: $.t("-61.470"), y2: $.t("-122.278"), x3: $.t("-60.305"), y3: $.t("-125.486\'>"), end: $.t("</a>")})
	},
	//Underwater Treause
	{
		coords: [[-2.153,-37.947]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-76.916,35.068]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-10.790,22.368]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[6.883,16.501]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[8.016,17.358]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-56.146,21.533]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-56.801/23.379\'>"), end: $.t("</a>")})
	},{
		coords: [[53.697,-86.748]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[48.283,63.545]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[7.188,56.294]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-23.685,102.568]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-41.443,95.361]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-30.449,-70.796]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-34.832,-56.162]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-60.098,4.724]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-59.423,11.909]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-62.714,-126.519]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-60.791/-127.375"), x2: $.t("-61.470"), y2: $.t("-122.278"), x3: $.t("-60.305"), y3: $.t("-125.486\'>"), end: $.t("</a>")})
	},{
		coords: [[-63.627,-126.431]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-60.791/-127.375"), x2: $.t("-61.470"), y2: $.t("-122.278"), x3: $.t("-60.305"), y3: $.t("-125.486\'>"), end: $.t("</a>")})
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
