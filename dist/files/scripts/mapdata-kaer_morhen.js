window.map_path   = 'kaer_morhen';
window.map_sWest  = L.latLng(0,0);
window.map_nEast  = L.latLng(160,128);
window.map_center = [85.000,70.000];
window.map_minZoom  = 2;
window.map_mZoom  = 6;
window.map_Zoom  = 3;
window.mapdata_kaer_morhen = {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[58.515,67.484]],
		label: $.t("alchemy.label"),
		popupTitle: $.t("k:alchemy.popuptitle.keira"),
		popup: $.t("k:alchemy.desc.keira")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[65.813,68.547]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [],

	//------------------------------------------------Barber------------------------------------------------
	barber: [],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [],
	
	//------------------------------------------------Boat------------------------------------------------
	boat: [{
		coords: [[83.093,65.000]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[83.671,64.687]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[135.875,73.875]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[132.531,70.109]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[127.781,66.672]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[34.844,71.719]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[46.063,51.453]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[88.188,73.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[75.422,43.063]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[70.906,67.406]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[61.391,88.547]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[50.219,60.594]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[75.062,41.312]],
		label: $.t("k:event.label.trail"),
		popup: $.t("k:event.desc.trail")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[64.297,61.328]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[66.703,68.813]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[62.156,61.688]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[119.313,74.906]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[102.625,52.906]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [{
		coords: [[85.938,60.000]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[83.891,65.078]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[125.781,67.891]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[59.687,89.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	},{
		coords: [[35.000,72.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[46.062,50.843]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3")
	},{
		coords: [[117.031,60.312]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	},{
		coords: [[62.796,41.718]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[117.437,58.687]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	},{
		coords: [[89.843,69.968]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[75.437,42.484]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.3")
	},{
		coords: [[57.031,58.375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[64.156,59.828]],
		label: $.t("k:sidequests.label.blade"),
		popup: $.t("k:sidequests.desc.blade")
	},{
		coords: [[39.703,77.000]],
		label: $.t("k:sidequests.label.greenhouse"),
		popup: $.t("k:sidequests.desc.greenhouse")
	},{
		coords: [[81.375,64.781]],
		label: $.t("k:sidequests.label.slayer"),
		popup: $.t("k:sidequests.desc.slayer")
	},{
		coords: [[62.750,42.531]],
		label: $.t("k:sidequests.label.bastion"),
		popup: $.t("k:sidequests.desc.bastion")
	},{
		coords: [[65.031,67.750]],
		label: $.t("k:sidequests.label.forge"),
		popup: $.t("k:sidequests.desc.forge")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
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

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[117.031,74.906]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[37.719,77.375]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[107.563,60.938]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.750,54.813]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
