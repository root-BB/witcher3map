window.map_path   = 'toussaint_fables';
window.map_sWest  = L.latLng(-85.05, -180);
window.map_nEast  = L.latLng(200, 180);
window.map_center = [0, 0];
window.map_minZoom  = 1;
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
		coords: [[73.7512053908401, -23.818359375]],
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
		coords: [[71.9653876991312, -19.86328125]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [],

	// Place of Power
	pop: [],

	// Point of Interest
	poi: [{
		coords: [[70.37785394, -109.1601562]],
		label: $.t("f:poi.label.thumb"),
		popup: $.t("f:poi.desk.thumb")
	}, {
		coords: [[64.6238772, -144.84375]],
		label: $.t("f:poi.label.pigs"),
		popup: $.t("f:poi.desk.pigs")
	}, {
		coords: [[36.59788913, -83.49609375]],
		label: $.t("f:poi.label.tower"),
		popup: $.t("f:poi.desk.tower")
	}, {
		coords: [[-0.703107352, -122.5195312]],
		label: $.t("f:poi.label.dragon"),
		popup: $.t("f:poi.desk.dragon")
	}, {
		coords: [[-12.89748918, -164.7070313]],
		label: $.t("f:poi.label.balbina"),
		popup: $.t("f:poi.desk.balbina")
	}, {
		coords: [[-62.26792263, -137.6367188]],
		label: $.t("f:poi.label.camp"),
		popup: $.t("f:poi.desk.camp")
	}, {
		coords: [[-57.13623932, -87.36328125]],
		label: $.t("f:poi.label.hood"),
		popup: $.t("f:poi.desk.hood")
	}, {
		coords: [[-28.92163128, -81.03515625]],
		label: $.t("f:poi.label.blaviken"),
		popup: $.t("f:poi.desk.blaviken")
	}, {
		coords: [[-46.07323063, -39.19921875]],
		label: $.t("f:poi.label.den"),
		popup: $.t("f:poi.desk.den")
	}, {
		coords: [[-5.266007883, 23.73046875]],
		label: $.t("f:poi.label.joss"),
		popup: $.t("f:poi.desk.joss")
	}, {
		coords: [[19.97334879, -27.94921875]],
		label: $.t("f:poi.label.wisp"),
		popup: $.t("f:poi.desk.wisp")
	}, {
		coords: [[-53.12040528, 72.421875]],
		label: $.t("f:poi.label.witch"),
		popup: $.t("f:poi.desk.witch")
	}, {
		coords: [[-55.37911045, 172.96875]],
		label: $.t("f:poi.label.grigg"),
		popup: $.t("f:poi.desk.grigg")
	}, {
		coords: [[-74.6832503, 172.6171875]],
		label: $.t("f:poi.label.start"),
		popup: $.t("f:poi.desk.start")
	}, {
		coords: [[56.55948248, -123.046875]],
		label: $.t("f:poi.label.emperor"),
		popup: $.t("f:poi.desk.emperor")
	}],

	// Scavengers
	scavenger: [],

	// Shopkeeper
	shopkeeper: [{
		coords: [[73.7265947021225, -25.13671875]],
		label: $.t("sidebar.shopkeeper"),
		popupTitle: $.t("f:shopkeeper.popup.girl"),
		popup: $.t("f:shopkeeper.desc.girl")
	}],

	// Sidequests
	sidequests: [{
		coords: [[71.9653876991312, -18.3691406249999]],
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
		coords: [[84.5747022855327, -84.90234375]],
		label: $.t("sidebar.treasure"),
		popup: $.t("f:popup.pot")
	}, {
		coords: [[-6.31529853833003, -65.56640625]],
		label: $.t("sidebar.treasure"),
		popup: $.t("f:popup.knight")
	}]
};
