window.map_path  = 'kaer_morhen';
window.map_sWest = L.latLng(0,0);
window.map_nEast = L.latLng(160,128);
window.map_center = [85.000,70.000];
window.map_minZoom = 2;
window.map_mZoom = 6;
window.map_Zoom = 3;
window.mapdata_kaer_morhen = {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[64.563,67.000]],
		label: $.t("alchemy.label") + '*',
		popupTitle: $.t("alchemy.label") + ' - ' + $.t("k:alchemy.popuptitle.keira") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.battle")}) + $.t("k:alchemy.desc.keira")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[62.781,61.203]],
		label: $.t("sidebar.armourer") + '*',
		popupTitle: $.t("sidebar.armourer") + ' - ' + $.t("craftlevels.Amateur") + ' - ' + $.t("k:armourer.popuptitle.zoltan") + '*',
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.battle")}) + $.t("k:armourer.desc.zoltan",{quest: $.t("sidequests.label.brvelen")})
	}],

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
		coords: [[117.000,66.797]],
		label: $.t("sidebar.boat") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.trial")}) + $.t("boat.desc")
	},{
		coords: [[83.671,64.687]],
		label: $.t("sidebar.boat"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[135.875,73.875]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[132.531,70.109]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[127.781,66.672]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[34.844,71.719]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[46.063,51.453]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[88.188,73.125]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[75.422,43.063]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[70.906,67.406]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[61.391,88.547]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[50.219,60.594]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[48.688,59.719]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[56.813,60.000]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.entry")
	},{
		coords: [[117.734,67.469]],
		label: $.t("sidebar.entrance"),
		popup: $.t("entrance.desc.exit")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[75.062,41.312]],
		label: $.t("event.label.trail"),
		popup: $.t("event.desc.trail")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[64.297,61.328]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[66.703,68.813]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[62.156,61.688]],
		label: $.t("sidebar.grindstone"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[119.313,74.906]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	},{
		coords: [[102.625,52.906]],
		label: $.t("sidebar.guarded"),
		popup: $.t("guarded.desc")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [{
		coords: [[64.219,69.281]],
		label: $.t("sidebar.gwentquest") + '*',
		popupTitle: $.t("gwentquest.players.lambert") + ' - ' +  $.t("sidebar.gwentquest") + '*',
		popup: $.t("misc.active",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals") + ' - ' + $.t("gwentquest.players.thaler")}) + $.t("misc.disappears",{quest: $.t("mainquests.label.baby")}) + $.t("gwentquest.desc.quest",{quest: $.t("gwentquest.label") + $.t(": ") + $.t("sidequests.label.gw_pals")})
	}],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [],

	//------------------------------------------------Hollow Treasure------------------------------------------------
	hollow: [],
	
	//------------------------------------------------Honeycomb------------------------------------------------
	honeycomb: [],

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
		label: $.t("sidebar.pop"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[66.906,66.734]],
		label: $.t("k:poi.label.earring"),
		popup: $.t("k:poi.desc.earring")
	}],

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
		label: $.t("sidequests.label.berengar") + '*',
		popup: $.t("misc.disappears",{quest: $.t("mainquests.label.mists")}) + $.t("sidequests.desc.berengar")
	},{
		coords: [[39.703,77.000]],
		label: $.t("sidequests.label.greenhouse"),
		popup: $.t("sidequests.desc.greenhouse")
	},{
		coords: [[82.500,66.156]],
		label: $.t("sidequests.label.slayer"),
		popup: $.t("sidequests.desc.slayer")
	},{
		coords: [[62.750,42.531]],
		label: $.t("sidequests.label.bastion"),
		popup: $.t("sidequests.desc.bastion")
	},{
		coords: [[65.031,67.750]],
		label: $.t("sidequests.label.forge") + '*',
		popup: $.t("misc.active",{quest: $.t("mainquests.label.wandering")}) + $.t("sidequests.desc.forge")
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
		label: $.t("k:signpost.label.bastion") + '*',
		popup: $.t("misc.active",{quest: $.t("sidequests.label.magiclamp")}) + $.t("k:signpost.desc.bastion")
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
		coords: [[107.563,60.938]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.750,54.813]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[67.250,67.500]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[61.063,42.875]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.688,56.000]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[47.313,64.406]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[135.063,74.031]],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[136.469,74.750]],	
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance1",{x1: $.t("<a href='#6/135.875/73.875\'>"), end: $.t("</a>")})
	},{
		coords: [[122.578,68.563]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/117.734/67.469\'>"), x2: $.t("<a href='#6/127.781/66.672\'>"), end: $.t("</a>")})
	},{
		coords: [[121.203,66.109]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/117.734/67.469\'>"), x2: $.t("<a href='#6/127.781/66.672\'>"), end: $.t("</a>")})
	},{
		coords: [[123.469,68.031]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/117.734/67.469\'>"), x2: $.t("<a href='#6/127.781/66.672\'>"), end: $.t("</a>")})
	},{
		coords: [[126.703,64.109]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/117.734/67.469\'>"), x2: $.t("<a href='#6/127.781/66.672\'>"), end: $.t("</a>")})
	},{
		coords: [[128.391,64.031]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/117.734/67.469\'>"), x2: $.t("<a href='#6/127.781/66.672\'>"), end: $.t("</a>")})
	},{
		coords: [[129.109,66.016]],
		label: $.t("sidebar.treasure") + ' (' + $.t("misc.underground") + ')',
		popup: $.t("treasure.desc") + $.t("misc.entrance2",{x1: $.t("<a href='#6/117.734/67.469\'>"), x2: $.t("<a href='#6/127.781/66.672\'>"), end: $.t("</a>")})
	},
	//Underwater Treause
	{
		coords: [[47.188,57.000]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
