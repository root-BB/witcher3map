window.map_path   = 'isle_mists';
window.map_sWest  = L.latLng(-85.05, -180);
window.map_nEast  = L.latLng(200, 180);
window.map_center = [0, 0];
window.map_mZoom  = 6;
window.mapdata_isle_mists = {
	
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
	entrance: [{
		coords: [
			[32.8426736319543, 60.2929687499999],
			[26.5885271473086, 68.203125],
			[21.1254976366062, 67.5],
			[7.88514728342433, 54.66796875]
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	// Events
	event: [],

	// Grindstone
	grindstone: [],

	// Guarded Treasure
	guarded: [],

	// Gwent Player
	gwent: [],

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
	notice: [],

	// Person in Distress
	pid: [],

	// Place of Power
	pop: [],

	// Point of Interest
	poi: [{
		coords: [[15.9613290815966, 48.1640625]],
		label: $.t("m:poi.label.hut"),
		popup: $.t("m:poi.desc.hut")
	}, {
		coords: [[-18.4796090558319, -7.03125]],
		label: $.t("m:poi.label.ferenc"),
		popup: $.t("m:poi.desc.ferenc")
	}, {
		coords: [[49.951219908662, -2.98828125]],
		label: $.t("m:poi.label.gasp"),
		popup: $.t("m:poi.desc.gasp")
	}, {
		coords: [[38.685509760012, 39.375]],
		label: $.t("m:poi.label.ivo"),
		popup: $.t("m:poi.desc.ivo")
	}],

	// Scavengers
	scavenger: [],

	// Shopkeeper
	shopkeeper: [],

	// Sidequests
	sidequests: [],

	// Sign Post
	signpost: [],

	// Smugglers' Cache
	smugglers: [],

	// Spoils of War
	spoils: [],
	
	// Treasure
	treasure: [{
		coords: [
			[51.06901666, -5.44921875],
			[8.059229627, -40.25390625],
			[13.5819209, -24.08203125],
			[21.77990534, -22.5],
			[22.43134016, -10.01953125],
			[25.79989118, -3.33984375],
			[22.1059988, 3.515625],
			[22.26876404, 8.61328125],
			[17.9787331, 6.328125],
			[9.968850609, 2.63671875],
			[-26.74561038, -5.2734375],
			[-31.35363694, -0.3515625],
			[-30.75127778, 12.12890625],
			[-8.754794702, 36.73828125],
			[0.175780974, 40.4296875],
			[-2.811371193, 45.3515625],
			[17.30868789, 44.296875],
			[-0.175780974, 87.890625],
			[18.47960906, 81.5625],
			[23.72501174, 84.90234375],
			[26.74561038, 79.453125],
			[29.22889003, 74.1796875],
			[37.57941251, 75.05859375],
			[29.99300228, 65.56640625],
			[35.31736633, 59.0625],
			[42.03297433, 53.61328125],
			[45.82879925, 56.953125],
			[46.19504211, 45.703125],
			[49.72447919, 50.2734375],
			[52.05249048, 44.6484375]
		],
		label: $.t("sidebar.treasure"),
		popup: $.t("treasure.desk")
	}]
};
