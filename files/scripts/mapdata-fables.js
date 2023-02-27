window.map_path  = 'fables';
window.map_sWest = L.latLng(-80,-180);
window.map_nEast = L.latLng(60,120);
window.map_center = [-50.000,-50.000];
window.map_minZoom = 3;
window.map_mZoom = 4;
window.map_Zoom = 3;
window.mapdata_fables = {
	
	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [],

	//------------------------------------------------Barber------------------------------------------------
	barber: [],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [],

	//------------------------------------------------Boat------------------------------------------------
	boat: [],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [],

	//------------------------------------------------Events------------------------------------------------
	event: [],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[2.284,-50.361]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("f:gwent.popup.girl"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("gwent.desc.player")
	}],
	
	//------------------------------------------------Gwent Quest------------------------------------------------
	gwentquest: [],
	
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
	notice: [{
		coords: [[-1.318,-50.185]],
		label: $.t("sidebar.notice"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[-2.811,-91.230]],
		label: $.t("f:poi.label.thumb"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.thumb")
	},{
		coords: [[-8.928,-106.875]],
		label: $.t("f:poi.label.pigs"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.pigs")
	},{
		coords: [[-29.535,-78.574]],
		label: $.t("f:poi.label.tower"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.tower")
	},{
		coords: [[-45.089,-99.492]],
		label: $.t("f:poi.label.dragon"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.dragon")
	},{
		coords: [[-47.989,-114.960]],
		label: $.t("f:poi.label.balbina"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.balbina")
	},{
		coords: [[-65.219,-105.292]],
		label: $.t("f:poi.label.camp"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.camp")
	},{
		coords: [[-63.312,-82.968]],
		label: $.t("f:poi.label.hood"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.hood")
	},{
		coords: [[-53.540,-79.980]],
		label: $.t("f:poi.label.blaviken"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.blaviken")
	},{
		coords: [[-58.904,-58.710]],
		label: $.t("f:poi.label.den"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.den")
	},{
		coords: [[-45.089,-30.234]],
		label: $.t("f:poi.label.joss"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.joss")
	},{
		coords: [[-37.439,-55.371]],
		label: $.t("f:poi.label.wisp"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.wisp")
	},{
		coords: [[-60.326,-9.667]],
		label: $.t("f:poi.label.witch"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.witch")
	},{
		coords: [[-61.938,35.156]],
		label: $.t("f:poi.label.grigg"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.grigg")
	},{
		coords: [[-69.534,36.562]],
		label: $.t("f:poi.label.start"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.start")
	},{
		coords: [[-31.203,-32.871]],
		label: $.t("f:poi.label.emperor"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:poi.desc.emperor")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[1.581,-52.119]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("f:shopkeeper.popup.girl"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:shopkeeper.desc.girl")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[-1.142,-48.251]],
		label: $.t("sidequests.label.duck"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("sidequests.desc.duck")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [{
		coords: [[26.902,-79.101]],
		label: $.t("treasure.label"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:treasure.popup.pot")
	},{
		coords: [[-46.558,-70.312]],
		label: $.t("treasure.label"),
		popup: $.t("misc.dactive",{quest: $.t("mainquests.label.beyond")}) + $.t("f:treasure.popup.knight")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
