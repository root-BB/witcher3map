window.map_path   = 'kaer_morhen';
window.map_sWest  = L.latLng(0,0);
window.map_nEast  = L.latLng(160,128);
window.map_center = [85,70];
window.map_minZoom  = 2;
window.map_mZoom  = 6;
window.map_Zoom  = 3;
window.mapdata_kaer_morhen = {
// Abandoned Site
	abandoned: [],

	// Alchemy Supplies
	alchemy: [{
		coords: [[58.515625,67.484375]],
		label: $.t("alchemy.label"),
		popupTitle: $.t("k:alchemy.popuptitle.keira"),
		popup: $.t("k:alchemy.desc.keira")
	}],

	// Armourer
	armourer: [],

	// Armourer's Table
	armourerstable: [{
		coords: [[65.813,68.547]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	// Bandit Camp
	banditcamp: [],

	// Barber
	barber: [],

	// Blacksmith
	blacksmith: [],
	
	// Boat
	boat: [{
		coords: [
		[83.09375,65],
		[83.671875,64.6875]
		],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	}],

	// Brothel
	brothel: [],

	// Contracts
	contracts: [],

	// Entrance
	entrance: [{
		coords: [
			[135.875,73.875],
			[132.531,70.109],
			[127.781,66.672],
			[34.844,71.719],
			[46.063,51.453],
			[88.188,73.125],
			[75.422,43.063],
			[70.906,67.406],
			[61.391,88.547],
			[50.219,60.594]
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	// Events
	event: [{
		coords: [[75.0625,41.3125]],
		label: $.t("k:event.label.trail"),
		popup: $.t("k:event.desc.trail")
	}],

	// Grindstone
	grindstone: [{
		coords: [
			[64.297,61.328],
			[66.703,68.813],
			[62.156,61.688]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	// Guarded Treasure
	guarded: [{
		coords: [[119.313,74.906]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[102.625,52.906]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}],

	// Gwent Player
	gwent: [],

	// Harbor
	harbor: [{
		coords: [
			[85.938,60.000],
			[83.891,65.078]
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	// Herbalist
	herbalist: [],

	// Hidden Treasure
	hidden: [],

	// Innkeep
	innkeep: [],

	// Monster Den
	monsterden: [],

	// Monster Nest
	monsternest: [],

	// Notice Board
	notice: [],

	// Person in Distress
	pid: [],

	// Place of Power
	pop: [{
		coords: [[125.781,67.891]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}],

	// Point of Interest
	poi: [],

	// Scavengers
	scavenger: [{
		coords: [[59.6875,89.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	},{
		coords: [[35,72.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[46.0625,50.84375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3")
	},{
		coords: [[117.03125,60.3125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	},{
		coords: [[62.796875,41.71875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[117.4375,58.6875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	},{
		coords: [[89.84375,69.96875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[75.4375,42.484375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.3")
	},{
		coords: [[57.03125,58.375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	}],

	// Shopkeeper
	shopkeeper: [],

	// Sidequests
	sidequests: [{
		coords: [[64.15625,59.828125]],
		label: $.t("k:sidequests.label.blade"),
		popup: $.t("k:sidequests.desc.blade")
	},{
		coords: [[39.703125,77]],
		label: $.t("k:sidequests.label.greenhouse"),
		popup: $.t("k:sidequests.desc.greenhouse")
	},{
		coords: [[81.375,64.78125]],
		label: $.t("k:sidequests.label.slayer"),
		popup: $.t("k:sidequests.desc.slayer")
	},{
		coords: [[62.75,42.53125]],
		label: $.t("k:sidequests.label.bastion"),
		popup: $.t("k:sidequests.desc.bastion")
	},{
		coords: [[65.03125,67.75]],
		label: $.t("k:sidequests.label.forge"),
		popup: $.t("k:sidequests.desc.forge")
	}],

	// Sign Post
	signpost: [{
		coords: [[82.109,65.656]],
		label: $.t("k:signpost.label.lakesideHut"),
		popup: $.t("k:signpost.desc.lakesideHut")
	},{
		coords: [[47.922,55.547]],
		label: $.t("k:signpost.label.ironMine"),
		popup: $.t("k:signpost.desc.ironMine")
	},{
		coords: [[61.172,58.734]],
		label: $.t("k:signpost.label.kaerMorhen"),
		popup: $.t("k:signpost.desc.kaerMorhen")
	},{
		coords: [[62.531,43.719]],
		label: $.t("k:signpost.label.bastion"),
		popup: $.t("k:signpost.desc.bastion")
	},{
		coords: [[116.625,58.813]],
		label: $.t("k:signpost.label.ruinedWatchtower"),
		popup: $.t("k:signpost.desc.ruinedWatchtower")
	}],

	// Smugglers' Cache
	smugglers: [],

	// Spoils of War
	spoils: [],
	
	// Treasure
	treasure: [{ //Surface Treause
		coords: [
			[117.031,74.906],
			[37.719,77.375],
			[107.563,60.938],
			[97.750,54.813]
		],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desk")
	},{ //Underwater Treause
		coords: [
			
		],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desk")
	}]
};
