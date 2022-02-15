window.map_path  = 'white_orchard';
window.map_sWest = L.latLng(-85,-180);
window.map_nEast = L.latLng(0,45);
window.map_center = [-65.000,-65.000];
window.map_minZoom = 2;
window.map_mZoom = 5;
window.map_Zoom = 3;
window.mapdata_white_orchard = {
	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[-77.786,-48.604]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[-65.293,-152.842]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[-69.069,-88.945]],
		label: $.t("sidebar.armourer"),
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[-25.362,-152.539]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[-81.596,-122.168]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-73.800,-43.418]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-53.678,-157.720]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-34.307,-25.537]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-72.462,-16.699]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[-66.000,-19.688]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[-26.981,-151.348]],
		label: $.t("sidebar.blacksmith"),
		popupTitle: $.t("sidebar.blacksmith") + ' - ' + $.t("craftlevels.Amateur"),
		popup: $.t("blacksmith.desc")
	}],

	//------------------------------------------------Boat------------------------------------------------
	boat: [],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],
	
	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[-67.659,-100.546]],
		label: $.t("contracts.label.devil"),
		popup: $.t("w:contracts.desc.devil")
	}],
	
	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[-79.592,-84.199]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry"),
	},{
		coords: [[-77.897,-75.586]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[-33.651,-94.526]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	}],
	
	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[-65.982,-131.748]],
		label: $.t("event.label.tomira"),
		popup: $.t("w:event.desc.tomira")
	},{
		coords: [[-48.283,-126.387]],
		label: $.t("event.label.dwarves"),
		popup: $.t("w:event.desc.dwarves")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[-68.648,-88.206]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-64.624,-155.215]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[-26.902,-149.941]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[-74.914,-59.766]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-48.517,-167.695]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-29.645,-96.943]],
		label: $.t("sidebar.guarded") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("guarded.desc") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-33.651/-94.526\'>"), end: $.t("</a>")})
	},{
		coords: [[-27.333,-134.077]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[-74.776,0.352]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[-65.946,-81.387]],
		label: $.t("sidebar.gwent"),
		popup: $.t("misc.disappears",{quest: $.t("mainquests.incident")})
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[-66.267,-132.627]],
		label: $.t("sidebar.herbalist"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[-77.542,-49.043]],
		label: $.t("sidebar.herbalist") + '*',
		popup: $.t("misc.liberated") + $.t("herbalist.desc")
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[-47.220,-111.006]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_temerian"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-39.028,-56.865]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_dirty"),
		popup: $.t("hidden.desc")
	},{
		coords: [[-28.613,-42.188]],
		label: $.t("sidebar.hidden"),
		popupTitle: $.t("treasure.label") +$.t(": ") +$.t("sidequests.label.tr_deserter"),
		popup: $.t("hidden.desc")
	}],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[-65.731,-80.068]],
		label: $.t("sidebar.innkeep"),
		popupTitle: $.t("sidebar.innkeep") + ' - ' + $.t("w:innkeep.inns.whiteOrchardInn") + '*',
		popup: $.t("misc.disappears",{quest: $.t("mainquests.incident")}) + $.t("innkeep.foodDrinkAndGwent")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[-14.264,-95.625]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[-45.027,-0.308]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[-64.206,9.712]],
		label: $.t("sidebar.monsternest"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[-67.643,-89.385]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[-81.492,-106.699]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-79.703,-52.822]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-51.536,-130.386]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-34.235,-94.043]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-13.325,-97.559]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[-43.771,0.308]],
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[-49.611,7.998]],
		label: $.t("poi.label.lootableBattlefield"),
		popup: $.t("poi.desc.lootableBattlefield")
	},{
		coords: [[-60.000,2.000]],
		label: $.t("w:poi.label.crystalSkull") + '*',
		popup: $.t("misc.disappears",{quest: $.t("mainquests.incident")}) + $.t("w:poi.desc.crystalSkull",{quest: $.t("sidequests.label.last")})
	},{
		coords: [[-67.407,-76.729]],
		label: $.t("w:poi.label.boss"),
		popup: $.t("w:poi.desc.boss")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[-72.500,-17.000]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.level.1"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[-32.953,-95.142]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.level.1") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.item.silver") + $.t("scavenger.level.1") + $.t("<br />") + $.t("misc.entrance1",{x1: $.t("<a href='#6/-33.651/-94.526\'>"), end: $.t("</a>")})
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[-66.320,-75.674]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("w:shopkeeper.desc.gwentCraftingAndHorse")
	},{
		coords: [[-66.338,-155.654]],
		label: $.t("sidebar.shopkeeper") + '*',
		popup: $.t("misc.liberated") + $.t("shopkeeper.desc.alchemyRunesAndFood")
	}],
	
	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[-60.370,-109.248]],
		label: $.t("sidequests.label.fry"),
		popup: $.t("w:sidequests.desc.fry")
	},{
		coords: [[-68.768,-88.989]],
		label: $.t("sidequests.label.twist"),
		popup: $.t("w:sidequests.desc.twist")
	},{
		coords: [[-67.575,-85.034]],
		label: $.t("sidequests.label.faith"),
		popup: $.t("w:sidequests.desc.faith")
	},{
		coords: [[-73.837,-5.053]],
		label: $.t("sidequests.label.missing"),
		popup: $.t("w:sidequests.desc.missing")
	},{
		coords: [[-66.053,-133.374]],
		label: $.t("sidequests.label.death"),
		popup: $.t("w:sidequests.desc.death")
	},{
		coords: [[-47.219,-143.261]],
		label: $.t("sidequests.label.precious"),
		popup: $.t("w:sidequests.desc.precious")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[-78.955,-85.869]],
		label: $.t("w:signpost.label.abandonedVillage"),
		popup: $.t("w:signpost.desc.abandonedVillage")
	},{
		coords: [[-77.916,-109.819]],
		label: $.t("w:signpost.label.brokenBridge"),
		popup: $.t("w:signpost.desc.brokenBridge")
	},{
		coords: [[-67.136,-72.202]],
		label: $.t("w:signpost.label.woesongBridge"),
		popup: $.t("w:signpost.desc.woesongBridge")
	},{
		coords: [[-65.440,-141.855]],
		label: $.t("w:signpost.label.sawmill"),
		popup: $.t("w:signpost.desc.sawmill")
	},{
		coords: [[-47.339,-89.912]],
		label: $.t("w:signpost.label.mill"),
		popup: $.t("w:signpost.desc.mill")
	},{
		coords: [[-20.468,-153.281]],
		label: $.t("w:signpost.label.nilfgaardianGarrison"),
		popup: $.t("w:signpost.desc.nilfgaardianGarrison")
	},{
		coords: [[-46.073,-13.271]],
		label: $.t("w:signpost.label.cacklerBridge"),
		popup: $.t("w:signpost.desc.cacklerBridge")
	},{
		coords: [[-63.015,-4.482]],
		label: $.t("w:signpost.label.crossroads"),
		popup: $.t("w:signpost.desc.crossroads")
	},{
		coords: [[-68.106,-37.266]],
		label: $.t("w:signpost.label.ford"),
		popup: $.t("w:signpost.desc.ford")
	},{
		coords: [[-71.413,1.230]],
		label: $.t("w:signpost.label.ransackedVillage"),
		popup: $.t("w:signpost.desc.ransackedVillage")
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [{
		coords: [[-76.720,-31.201]],
		label: $.t("sidebar.smugglers"),
		popup: $.t("smugglers.desc")
	}],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [{
		coords: [[-12.726,-128.452]],
		label: $.t("sidebar.spoils"),
		popup: $.t("spoils.desc")
	}],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[-63.392,-122.256]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-16.594,-140.449]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-15.792,-151.963]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-44.277,-14.282]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-46.770,-16.611]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-51.014,-111.226]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-67.306,-70.752]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-67.458,-54.756]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-75.175,-19.204]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-78.587,-68.994]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-77.842,-110.566]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-72.881,-119.883]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-20.345,-134.473]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-21.698,-111.533]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-44.434,-77.124]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-58.356,-28.608]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-63.995,-56.909]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-53.540,5.889]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-54.419,6.240]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-55.752,9.229]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-55.504,13.535]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-80.119,-82.485]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-65.330,-16.348]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-73.378,-9.756]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-71.760,-3.428]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-72.449,-3.120]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-72.382,-0.483]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-76.153,-20.435]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-77.390,-33.618]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-64.340,-157.456]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-64.868,-9.668]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-61.101,-19.688]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-78.819,-143.965]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-53.982,-141.064]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-79.505,-51.987]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-32.473,-79.541]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-67.826,-18.325]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},
	//Underwater Treause
	{
		coords: [[-57.232,-103.975]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-50.064,-108.193]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-61.080,-94.878]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-59.467,-99.800]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-75.984,6.108]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-78.639,-77.783]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-79.592/-84.199\'>"), x2: $.t("<a href='#6/-77.897/-75.586\'>"), end: $.t("</a>")})
	},{
		coords: [[-79.545,-83.408]],
		label: $.t("treasure.watertreasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/-79.592/-84.199\'>"), x2: $.t("<a href='#6/-77.897/-75.586\'>"), end: $.t("</a>")})
	},{
		coords: [[-77.059,-70.093]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},
	//Tree Hollow Treause
	{
		coords: [[-58.905,4.658]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-68.057,-18.765]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-63.627,-12.393]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-56.414,-158.467]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-79.836,-66.445]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-16.889,-108.633]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-17.644,-96.328]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-78.341,-35.068]],
		label: $.t("treasure.hollowtreasure"),
		popup: $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
