window.map_path   = 'toussaint_fables';
window.map_sWest  = L.latLng(-100,-180);
window.map_nEast  = L.latLng(100,180);
window.map_center = [0,0];
window.map_minZoom  = 2;
window.map_mZoom  = 4;
window.map_Zoom  = 1;
window.mapdata_toussaint_fables = {
	
	// Abandoned Site
	abandoned: [],

	// Alchemy Supplies
	alchemy: [],

	// Armourer
	armourer: [],

	// Armourer's Table
	armourerstable: [],

	// Bandit Camp
	banditcamp: [],

	// Barber
	barber: [],

	// Blacksmith
	blacksmith: [],

	// Boat
	boat: [],

	// Brothel
	brothel: [],

	// Contracts
	contracts: [],

	// Entrance
	entrance: [],

	// Events
	event: [],

	// Grindstone
	grindstone: [],

	// Guarded Treasure
	guarded: [],

	// Gwent Player
	gwent: [{
		coords: [[2.28455066023697,-50.361328125]],
		label: $.t("sidebar.gwent"),
		popupTitle: $.t("f:gwent.popup.girl"),
		popup: $.t("f:gwent.desc.girl")
	}],

	// Harbor
	harbor: [],

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
	notice: [{
		coords: [[-1.318243056862001,-50.185546875]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [],

	// Place of Power
	pop: [],

	// Point of Interest
	poi: [{
		coords: [[-2.811371193331128,-91.23046875]],
		label: $.t("f:poi.label.thumb"),
		popup: $.t("f:poi.desk.thumb")
	},{
		coords: [[-8.928487062665504,-106.875]],
		label: $.t("f:poi.label.pigs"),
		popup: $.t("f:poi.desk.pigs")
	},{
		coords: [[-29.535229562948444,-78.57421875]],
		label: $.t("f:poi.label.tower"),
		popup: $.t("f:poi.desk.tower")
	},{
		coords: [[-45.08903556483102,-99.49218749999999]],
		label: $.t("f:poi.label.dragon"),
		popup: $.t("f:poi.desk.dragon")
	},{
		coords: [[-47.98992166741417,-114.9609375]],
		label: $.t("f:poi.label.balbina"),
		popup: $.t("f:poi.desk.balbina")
	},{
		coords: [[-65.21989393613208,-105.29296875]],
		label: $.t("f:poi.label.camp"),
		popup: $.t("f:poi.desk.camp")
	},{
		coords: [[-63.31268278043484,-82.96875]],
		label: $.t("f:poi.label.hood"),
		popup: $.t("f:poi.desk.hood")
	},{
		coords: [[-53.5403073915002,-79.98046875]],
		label: $.t("f:poi.label.blaviken"),
		popup: $.t("f:poi.desk.blaviken")
	},{
		coords: [[-58.90464570301998,-58.7109375]],
		label: $.t("f:poi.label.den"),
		popup: $.t("f:poi.desk.den")
	},{
		coords: [[-45.08903556483102,-30.234375]],
		label: $.t("f:poi.label.joss"),
		popup: $.t("f:poi.desk.joss")
	},{
		coords: [[-37.43997405227057,-55.37109375]],
		label: $.t("f:poi.label.wisp"),
		popup: $.t("f:poi.desk.wisp")
	},{
		coords: [[-60.326947743,-9.66796875]],
		label: $.t("f:poi.label.witch"),
		popup: $.t("f:poi.desk.witch")
	},{
		coords: [[-61.938950426660604,35.15625]],
		label: $.t("f:poi.label.grigg"),
		popup: $.t("f:poi.desk.grigg")
	},{
		coords: [[-69.53451763078357,36.5625]],
		label: $.t("f:poi.label.start"),
		popup: $.t("f:poi.desk.start")
	},{
		coords: [[-19.808054128088575,-99.4921875]],
		label: $.t("f:poi.label.emperor"),
		popup: $.t("f:poi.desk.emperor")
	}],

	// Scavengers
	scavenger: [],

	// Shopkeeper
	shopkeeper: [{
		coords: [[1.581830264,-52.119140625]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("f:shopkeeper.popup.girl"),
		popup: $.t("f:shopkeeper.desc.girl")
	}],

	// Sidequests
	sidequests: [{
		coords: [[-1.1425024037061522,-48.251953125]],
		label: $.t("f:sidequests.label.duck"),
		popup: $.t("f:sidequests.desk.duck")
	}],

	// Sign Post
	signpost: [],

	// Smugglers' Cache
	smugglers: [],

	// Spoils of War
	spoils: [],
	
	// Treasure
	treasure: [{
		coords: [[26.902476886279832,-79.1015625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("f:treasure.popup.pot")
	},{
		coords: [[-46.55886030311717,-70.3125]],
		label: $.t("sidebar.treasure"),
		popup: $.t("f:treasure.popup.knight")
	}]
};
