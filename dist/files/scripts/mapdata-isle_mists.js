window.map_path  = 'isle_mists';
window.map_sWest = L.latLng(-85.050,-180);
window.map_nEast = L.latLng(200,180);
window.map_center = [7.000,22.000];
window.map_minZoom = 2;
window.map_mZoom = 5;
window.map_Zoom = 3;
window.mapdata_isle_mists = {
	
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
	entrance: [{
		coords: [[32.842,60.292]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[26.588,68.203]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[21.125,67.500]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[7.885,54.667]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [],

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
	pop: [],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[15.961,48.164]],
		label: $.t("i:poi.label.hut"),
		popup: $.t("i:poi.desc.hut")
	},{
		coords: [[-18.479,-7.031]],
		label: $.t("i:poi.label.ferenc"),
		popup: $.t("i:poi.desc.ferenc")
	},{
		coords: [[49.951,-2.988]],
		label: $.t("i:poi.label.gasp"),
		popup: $.t("i:poi.desc.gasp")
	},{
		coords: [[38.685,39.375]],
		label: $.t("i:poi.label.ivo"),
		popup: $.t("i:poi.desc.ivo")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [],

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
		coords: [[51.069,-5.449]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[22.268,8.613]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[17.978,6.328]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[9.968,2.636]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-26.745,-5.273]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-30.751,12.128]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-8.754,36.738]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[0.175,40.429]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-2.811,45.351]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[17.308,44.296]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-0.175,87.890]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[26.745,79.453]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[29.228,74.179]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[37.579,75.058]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[29.993,65.566]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[35.317,59.062]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[42.032,53.613]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[46.195,45.703]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},
	//Underwater Treause
	{
		coords: [[22.105,3.515]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[25.799,-3.339]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[22.431,-10.019]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[21.779,-22.500]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[8.059,-40.253]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[13.581,-24.082]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[45.828,56.953]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[49.724,50.273]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.052,44.648]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[23.725,84.902]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[18.479,81.562]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[-31.353,-0.351]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
