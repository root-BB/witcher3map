window.map_path   = 'white_orchard';
window.map_sWest  = L.latLng(-85, -180);
window.map_nEast  = L.latLng(0, 45);
window.map_center = [-65, -65];
window.map_minZoom  = 2;
window.map_mZoom  = 5;
window.map_Zoom  = 3;
window.mapdata_white_orchard = {
	// Abandoned Site
	abandoned: [{
		coords: [
			[-77.786, -48.604],
			[-65.293, -152.842]
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	// Alchemy Supplies
	alchemy: [],

	// Armourer
	armourer: [{
		coords: [[-69.069, -88.945]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}],

	// Armourer's Table
	armourerstable: [{
		coords: [
			[-25.362, -152.539],
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	// Bandit Camp
	banditcamp: [{
		coords: [
			[-81.596, -122.168],
			[-73.800, -43.418],
			[-53.678, -157.720],
			[-34.307, -25.537],
			[-72.462, -16.699],
			[-66.000, -19.688]
		],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	// Barber
	barber: [],

	// Blacksmith
	blacksmith: [{
		coords: [[-26.981, -151.348]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}],

	// Boat
	boat: [],

	// Brothel
	brothel: [],
	
	// Contracts
	contracts: [{
		coords: [[-67.6593863700988, -100.546875]],
		label: $.t("w:contracts.label.devil"),
		popup: $.t("w:contracts.desc.devil")
	}],
	
	// Entrance
	entrance: [{
		coords: [[-79.592, -84.199]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc"),
	}, {
		coords: [[-77.897, -75.586]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],
	
	// Events
	event: [],

	// Grindstone
	grindstone: [{
		coords: [
			[-68.648, -88.206],
			[-64.624, -155.215],
			[-26.902, -149.941]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	// Guarded Treasure
	guarded: [{
		coords: [
			[-74.914, -59.766],
			[-48.517, -167.695],
			[-29.645, -96.943],
			[-27.333, -134.077],
			[-74.776, 0.352]
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}],

	// Gwent Player
	gwent: [{
		coords: [[-65.946, -81.387]],
		label: $.t("w:gwent.label.player"),
		popup: $.t("w:gwent.desc.player") + $.t("w:gwent.desc.warn")
	}],

	harbor: [],

	// Herbalist
	herbalist: [{
		coords: [[-66.267, -132.627]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}, {
		coords: [[-77.542, -49.043]],
		label: $.t("herbalist.label"),
		popup: $.t("w:misc.liberated") + $.t("herbalist.desc")
	}],

	// Hidden Treasure
	hidden: [{
		coords: [
			[-47.220, -111.006],
			[-39.028, -56.865],
			[-28.613, -42.188]
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

	// Innkeep
	innkeep: [{
		coords: [[-65.731, -80.068]],
		label: $.t("w:innkeep.inns.whiteOrchardInn"),
		popupTitle: $.t("w:innkeep.popup"),
		popup: $.t("w:innkeep.desc.foodDrinkAndGwent") + $.t("w:misc.disappears")
	}],

	// Monster Den
	monsterden: [],

	// Monster Nest
	monsternest: [{
		coords: [
			[-14.264, -95.625],
			[-45.027, -0.308],
			[-64.206, 9.712]
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],

	// Notice Board
	notice: [{
		coords: [[-67.643, -89.385]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [],

	// Place of Power
	pop: [{
		coords: [[-81.492, -106.699]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-79.703, -52.822]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-51.536, -130.386]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-34.235, -94.043]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-13.325, -97.559]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-43.771, 0.308]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}],

	// Point of Interest
	poi: [{
		coords: [[-49.611, 7.998]],
		label: $.t("w:poi.label.lootableBattlefield"),
		popup: $.t("w:poi.desc.lootableBattlefield")
	}, {
		coords: [[-60, 2]],
		label: $.t("w:poi.label.crystalSkull"),
		popup: $.t("w:poi.desc.crystalSkull")
	}, {
		coords: [[-67.407, -76.729]],
		label: $.t("w:poi.label.boss"),
		popup: $.t("w:poi.desc.boss")
	}],

	// Scavengers
	scavenger: [{
		coords: [[-72.5, -17]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.level.1"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	}, {
		coords: [[-32.953, -95.142]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.level.1"),
		popup: $.t("scavenger.dia") + $.t("scavenger.name.ser") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	}],

	// Shopkeeper
	shopkeeper: [{
		coords: [[-66.320, -75.674]],
		label: $.t("w:shopkeeper.label.shopkeeper"),
		popup: $.t("w:shopkeeper.desc.gwentCraftingAndHorse")
	}, {
		coords: [[-66.338, -155.654]],
		label: $.t("w:shopkeeper.label.shopkeeper"),
		popup: $.t("w:shopkeeper.desc.alchemyRunesAndFood")
	}],
	
	// Sidequests
	sidequests: [{
		coords: [[-60.370429016315, -109.2480469]],
		label: $.t("w:sidequests.label.fry"),
		popup: $.t("w:sidequests.desc.fry")
	}, {
		coords: [[-68.76823505, -88.98925781]],
		label: $.t("w:sidequests.label.twist"),
		popup: $.t("w:sidequests.desc.twist")
	}, {
		coords: [[-67.57571742, -85.03417969]],
		label: $.t("w:sidequests.label.faith"),
		popup: $.t("w:sidequests.desc.faith")
	}, {
		coords: [[-73.83705791, -5.053710937]],
		label: $.t("w:sidequests.label.missing"),
		popup: $.t("w:sidequests.desc.missing")
	}, {
		coords: [[-66.05371622, -133.3740234]],
		label: $.t("w:sidequests.label.death"),
		popup: $.t("w:sidequests.desc.death")
	}, {
		coords: [[-47.21956811, -143.2617188]],
		label: $.t("w:sidequests.label.precious"),
		popup: $.t("w:sidequests.desc.precious")
	}, {
		coords: [[-28.80617351, -42.75878906]],
		label: $.t("treasure.label") +$.t(": ") +$.t("w:sidequests.label.tr_deserter"),
		popup: $.t("w:sidequests.desc.tr_deserter")
	}, {
		coords: [[-39.19820535, -57.56835938]],
		label: $.t("treasure.label") +$.t(": ") +$.t("w:sidequests.label.tr_dirty"),
		popup: $.t("w:sidequests.desc.tr_dirty")
	}, {
		coords: [[-47.42808726, -111.7089844]],
		label: $.t("treasure.label") +$.t(": ") +$.t("w:sidequests.label.tr_temerian") + $.t("misc.key"),
		popup: $.t("w:sidequests.desc.tr_temerian")
	}, {
		coords: [[-42.48830198, -75.49804688]],
		label: $.t("treasure.label") +$.t(": ") +$.t("w:sidequests.label.tr_temerian"),
		popup: $.t("w:sidequests.desc.tr_temerian")
	}],

	// Sign Post
	signpost: [{
		coords: [[-78.955, -85.869]],
		label: $.t("w:signpost.label.abandonedVillage"),
		popup: $.t("w:signpost.desc.abandonedVillage")
	}, {
		coords: [[-77.916, -109.819]],
		label: $.t("w:signpost.label.brokenBridge"),
		popup: $.t("w:signpost.desc.brokenBridge")
	}, {
		coords: [[-67.136, -72.202]],
		label: $.t("w:signpost.label.woesongBridge"),
		popup: $.t("w:signpost.desc.woesongBridge")
	}, {
		coords: [[-65.440, -141.855]],
		label: $.t("w:signpost.label.sawmill"),
		popup: $.t("w:signpost.desc.sawmill")
	}, {
		coords: [[-47.339, -89.912]],
		label: $.t("w:signpost.label.mill"),
		popup: $.t("w:signpost.desc.mill")
	}, {
		coords: [[-20.468, -153.281]],
		label: $.t("w:signpost.label.nilfgaardianGarrison"),
		popup: $.t("w:signpost.desc.nilfgaardianGarrison")
	}, {
		coords: [[-46.073, -13.271]],
		label:  $.t("w:signpost.label.cacklerBridge"),
		popup: $.t("w:signpost.desc.cacklerBridge")
	}, {
		coords: [[-63.015, -4.482]],
		label: $.t("w:signpost.label.crossroads"),
		popup: $.t("w:signpost.desc.crossroads")
	}, {
		coords: [[-68.106, -37.266]],
		label: $.t("w:signpost.label.ford"),
		popup: $.t("w:signpost.desc.ford")
	}, {
		coords: [[-71.413, 1.230]],
		label: $.t("w:signpost.label.ransackedVillage"),
		popup: $.t("w:signpost.desc.ransackedVillage")
	}],

	// Smugglers' Cache
	smugglers: [{
		coords: [[-76.720, -31.201]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}],

	// Spoils of War
	spoils: [{
		coords: [[-12.726, -128.452]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc")
	}],
	
	// Treasure
	treasure: [{ //Surface Treause
		coords: [
			[-63.392, -122.256],
			[-16.594, -140.449],
			[-15.792, -151.963],
			[-44.277, -14.282],
			[-46.770, -16.611],
			[-51.014, -111.226],
			[-67.306, -70.752],
			[-67.458, -54.756],
			[-75.175, -19.204],
			[-78.587, -68.994],
			[-77.842, -110.566],
			[-72.881, -119.883],
			[-20.345, -134.473],
			[-21.698, -111.533],
			[-44.434, -77.124],
			[-58.356, -28.608],
			[-63.995, -56.909],
			[-53.540, 5.889],
			[-54.419, 6.240],
			[-55.752, 9.229],
			[-55.504, 13.535],
			[-80.119, -82.485],
			[-65.330, -16.348],
			[-73.378, -9.756],
			[-71.760, -3.428],
			[-72.449, -3.120],
			[-72.382, -0.483],
			[-76.153, -20.435],
			[-77.390, -33.618],
			[-64.340, -157.456]
			],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desk")
	}, { //Underwater Treause
		coords: [
			[-57.232, -103.975],
			[-50.064, -108.193],
			[-61.080, -94.878],
			[-59.467, -99.800],
			[-75.984, 6.108],
			[-78.639, -77.783],
			[-79.545, -83.408],
			[-77.059, -70.093]
		],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desk")
	}]
	
};
