window.map_path   = 'hos_velen';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(265, 240);
window.map_center = [126, 115];
window.map_minZoom  = 1;
window.map_mZoom  = 6;
window.map_Zoom  = 2;
window.mapdata_hos_velen = {
// Abandoned Site
	abandoned: [{
		coords: [
			// NW Velen
			[82.797, 87.984],
			[106.219, 31.016],
			[86.703, 27.938],
			[75.875, 26.844],
			[177.96875, 211.65625],
			[185.75, 209.53125],
			[238.15625, 201.6875],
			[250.25, 143.5],
			[241.125, 155.875],
			[239.75, 69.9375]
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}, { // NE Velen
		coords: [[115.828, 133.875]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>)'
	}, {
		coords: [[138.031, 160.625]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.drowners") + '</span>)'
	}, {
		coords: [[122.281, 179.266]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.ghouls") + '</span> and lvl 11<span> ' + $.t("v:monsters.alghoul") + '</span>)'
	}, { // SW Velen
		coords: [[29.984, 48.000]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.bandits") + '</span>)'
	}, {
		coords: [[33.969, 99.250]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.endregas") + '</span>)'
	}, { // SE Velen
		coords: [[99.938, 130.172]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 5<span> ' + $.t("v:monsters.bandits") + '</span>)'
	}],

	// Alchemy Supplies
	alchemy: [{ //Novigrad
		coords: [[218.984, 116.516]],
		label: $.t("alchemy.label"),
		popup: $.t("v:alchemy.desc*")
	}, {
		coords: [[226.328, 92.500]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}, { // NW Velen
		coords: [[114.813, 49.547]],
		label: $.t("alchemy.label"),
		popupTitle: $.t("v:alchemy.pellar"),
		popup: $.t("alchemy.desc")
	}],

	// Armourer
	armourer: [{ // Novigrad
		coords: [[208.672, 100.828]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, { // Oxenfurt
		coords: [[158.047, 166.344]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, { // NE Velen
		coords: [[129.688, 118.719]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/115.500/107.875">' + $.t("pid.rescueLocation") + '</a>'
	}, { // NW Velen
		coords: [[104.734,77.531]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[82.266, 40.422]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[104.906, 77.063]],
		label: $.t("armourer.labelMaster"),
		popupTitle: $.t("v:armourer.yoana"),
		popup: $.t("v:armourer.yoanaQuest") + $.t("armourer.desc")
	}],

	// Armourer's Table
	armourerstable: [{
		coords: [
			// Novigrad
			[211.531, 97.141],
			[210.750, 99.016],
			// Oxenfurt
			[160.922, 164.297],
			// NE Velen
			[129.844, 119.094],
			// NW Velen
			[106.609, 51.953],
			[105.375, 76.094],
			[68.625, 74.219],
			[82.313, 40.984],
			[75.859, 25.828],
			// SE Velen
			[101.047, 166.734],
			[102.688, 109.234],
			//New
			[164.796875, 185.46875]
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	// Bandit Camp
	banditcamp: [{
		coords: [
			// NE Velen
			[136.625, 89.219],
			// NW Velen
			[110.625, 60.016],
			[94.344, 37.016],
			[88.375, 34.984],
			[85.125, 33.172],
			[96.938, 31.047],
			[72.953, 24.188],
			[77.656, 17.750],
			// SW Velen
			[67.531, 23.656],
			[66.703, 26.719],
			// SE Velen
			[106.188, 115.703],
			//New
			[177.75, 195.75],
			[204.5, 197.96875],
			[214.65625, 223.28125],
			[225.8125, 218.78125],
			[257.46875, 208.5],
			[260.625, 178.46875],
			[260.9375, 165.4375],
			[252.875, 113.6875]
		],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}, { // S Novigrad
		coords: [[175.547, 83.125]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, { // E Novigrad
		coords: [[209.156, 162.734]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 7)'
	}, { // NE Velen
		coords: [[128.469, 151.563]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[134.406, 129.094]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, { // SE Velen
		coords: [[38.828, 153.984]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 10)'
	}, {
		coords: [[80.125, 166.000]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[108.234, 145.344]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[97.828, 124.594]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 7-9)'
	}, {
		coords: [[137.688, 187.797]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[47.000, 123.172]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	}, { // SW Velen
		coords: [[57.922, 26.797]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	// Barber
	barber: [{
		coords: [
			// Novigrad
			[215.016, 104.297],
			[214.484, 113.281],
			// Oxenfurt
			[153.734, 164.906]
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}, { // NW Velen
		coords: [[81.891, 69.703]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc") + $.t("v:barber.free") + $.t("pid.rescue") + ' <a href="#6/102.391/34.109">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Blacksmith
	blacksmith: [{ // Novigrad
		coords: [[197.094, 98.766]],
		label: $.t("blacksmith.labelMaster"),
		popupTitle: $.t("v:blacksmith.hattori"),
		popup: $.t("v:blacksmith.hattoriQuest") + $.t("blacksmith.desc")
	}, {
		coords: [[205.875, 100.891]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[211.188, 97.266]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Oxenfurt
		coords: [[152.125, 170.453]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, { // NW Velen
		coords: [[106.328, 52.313]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[67.844, 74.031]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // SE Velen
		coords: [[103.156, 108.813]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	},{ // New
		coords: [[30.4375, 123.5625]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}],

	// Boat
	boat: [{
		coords: [
			[49.65625, 26.25],
			[52.53125, 75.1875],
			[38.78125, 99.03125],
			[59.0625, 124.96875],
			[57.4375, 103.3125],
			[66.4375, 81.5625],
			[68.0625, 39.1875],
			[83.171875, 49.453125],
			[84.25, 103.125],
			[108.9375, 104.875],
			[63, 201.75],
			[77.25, 190.0625],
			[114.094, 133.031],
			[123.625, 173.875],
			[127.3125, 176.5],
			[157.1875, 83.25],
			[166.25, 86.53125],
			[151.84375, 85.21875],
			[155.0625, 108.03125],
			[175.96875, 124.25],
			[170.65625, 135.65625],
			[157.5625, 156.09375],
			[165.25, 163.34375],
			[149.71875, 162.78125],
			[145.40625, 167],
			[137.84375, 167.5],
			[139.53125, 176.5625],
			[150, 172.09375],
			[154.03125, 171.1875],
			[155.25, 176.09375],
			[239.6875, 202.5625],
			[240.28125, 210.65625],
			[171.4375, 76.3125],
			[193.5625, 77],
			[199.25, 87.125],
			[198.6875, 91.375],
			[199.4375, 95.125],
			[207.5625, 88.75],
			[206.6875, 90.25],
			[215.75, 91.625],
			[216.25, 94.125],
			[220, 95.875],
			[198.375, 118.0625],
			[204.9375, 120.0625],
			[208.1875, 118.75],
			[233.9375, 104],
			[239.1875, 89.4375],
			[48.28125, 53.59375],
			[65.563, 69.594]
		],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	}],

	// Brothel
	brothel: [{ // Novigrad
		coords: [[201.547, 98.188]],
		label: $.t("v:brothel.label.crippledKate"),
		popupTitle: $.t("v:brothel.popup.crippledKate"),
		popup: $.t("v:brothel.desc")
	}, {
		coords: [[221.109, 104.109]],
		label: $.t("v:brothel.label.passiflora"),
		popupTitle: $.t("v:brothel.popup.passiflora"),
		popup: $.t("v:brothel.desc")
	}],

	// Contracts
	contracts: [{
		coords: [[209.0625, 104.390625]],
		label: $.t("v:contracts.label.elusive"),
		popup: $.t("v:contracts.desc.elusive")
	}, {
		coords: [[205.625, 97.28125]],
		label: $.t("v:contracts.label.deadly"),
		popup: $.t("v:contracts.desc.deadly")
	}, {
		coords: [[208.828125, 103.59375]],
		label: $.t("v:contracts.label.doors"),
		popup: $.t("v:contracts.desc.doors")
	}, {
		coords: [[82.0625, 42.53125]],
		label: $.t("v:contracts.label.jenny"),
		popup: $.t("v:contracts.desc.jenny")
	}, {
		coords: [[185.515625, 116.21875]],
		label: $.t("v:contracts.label.lord"),
		popup: $.t("v:contracts.desc.lord")
	}, {
		coords: [[128.953125, 95.46875]],
		label: $.t("v:contracts.label.missing"),
		popup: $.t("v:contracts.desc.missing")
	}, {
		coords: [[100.625, 109.90625]],
		label: $.t("v:contracts.label.tracks"),
		popup: $.t("v:contracts.desc.tracks")
	}, {
		coords: [[33.65625, 206.6875]],
		label: $.t("v:contracts.label.patrol"),
		popup: $.t("v:contracts.desc.patrol")
	}, {
		coords: [[86.28125, 177.34375]],
		label: $.t("v:contracts.label.phantom"),
		popup: $.t("v:contracts.desc.phantom")
	}, {
		coords: [[104.5625, 79.78125]],
		label: $.t("v:contracts.label.shrieker"),
		popup: $.t("v:contracts.desc.shrieker")
	}, {
		coords: [[77.25, 148.21875]],
		label: $.t("v:contracts.label.swamp"),
		popup: $.t("v:contracts.desc.swamp")
	}, {
		coords: [[237.15625, 130.546875]],
		label: $.t("v:contracts.label.apirian"),
		popup: $.t("v:contracts.desc.apirian")
	}, {
		coords: [[104.53125, 80.3125]],
		label: $.t("v:contracts.label.beast"),
		popup: $.t("v:contracts.desc.beast")
	}, {
		coords: [[158.171875, 165.328125]],
		label: $.t("v:contracts.label.creature"),
		popup: $.t("v:contracts.desc.creature")
	}, {
		coords: [[104.46875, 80.75]],
		label: $.t("v:contracts.label.griffin"),
		popup: $.t("v:contracts.desc.griffin")
	}, {
		coords: [[100.625, 110.3125]],
		label: $.t("v:contracts.label.merry"),
		popup: $.t("v:contracts.desc.merry")
	}, {
		coords: [[69.21875, 75.84375]],
		label: $.t("v:contracts.label.mystery"),
		popup: $.t("v:contracts.desc.mystery")
	}, {
		coords: [[158.15625, 165.59375]],
		label: $.t("v:contracts.label.drunk"),
		popup: $.t("v:contracts.desc.drunk")
	}, {
		coords: [[188.5625, 101.15625]],
		label: $.t("v:contracts.label.white"),
		popup: $.t("v:contracts.desc.white")
	}, {
		coords: [[153.765625, 113.046875]],
		label: $.t("v:contracts.label.wood"),
		popup: $.t("v:contracts.desc.wood")
	}],

	// Entrance
	// todo, entrance to what?
	entrance: [{ // Novigrad
		coords: [[229.984, 88.844]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // NE Novigrad
		coords: [[237.406, 151.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // SE Novigrad
		coords: [[179.438, 175.406]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[183.219, 191.281]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[156.031, 209.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // S Novigrad
		coords: [[173.750, 77.156]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // NE Velen
		coords: [[148.141, 107.047]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // NW Velen
		coords: [[130.313, 41.109]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[108.234, 82.484]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[106.703, 72.578]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[152.172, 48.781]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // SW Velen
		coords: [[44.531, 39.563]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[41.688, 46.266]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // SE Velen
		coords: [[53.891, 126.719]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[56.984, 155.984]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[88.688, 107.078]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[111.266, 179.234]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[79.094, 185.234]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[93.344, 155.813]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[101.266, 177.547]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[98.906, 177.766]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[30.172, 129.672]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[83.766, 149.953]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[43.094, 163.641]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // New
		coords: [
				[115.8125, 45.90625],
				[151.15625, 164.59375],
				[251.8125, 134.875],
				[226.875, 151.5625],
				[99.750, 120.625]
				],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	// Events
	event: [{
		coords: [[143.46875, 101.875]],
		label: $.t("v:event.label.friend"),
		popup: $.t("v:event.desc.friend")
	}, {
		coords: [[190.625, 144.3125]],
		label: $.t("v:event.label.weolcome"),
		popup: $.t("v:event.desc.weolcome")
	}, {
		coords: [[128.1875, 102.78125]],
		label: $.t("v:event.label.mercy1"),
		popup: $.t("v:event.desc.mercy1")
	}, {
		coords: [[170.953125, 87.453125]],
		label: $.t("v:event.label.mercy2"),
		popup: $.t("v:event.desc.mercy2")
	}, {
		coords: [[120.25, 142.28125]],
		label: $.t("v:event.label.caravan"),
		popup: $.t("v:event.desc.caravan") + $.t("pid.afterrescue") + ' <a href="#6/100.531/76.344">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[101.34375, 80.1875]],
		label: $.t("v:event.label.crow"),
		popup: $.t("v:event.desc.crow")
	}, {
		coords: [[89.859375, 62.21875]],
		label: $.t("v:event.label.crossing1"),
		popup: $.t("v:event.desc.crossing1")
	}, {
		coords: [[111.5625, 110.96875]],
		label: $.t("v:event.label.crossing2"),
		popup: $.t("v:event.desc.crossing2")
	}, {
		coords: [[78.53125, 128.46875]],
		label: $.t("v:event.label.crossing3"),
		popup: $.t("v:event.desc.crossing3")
	}, {
		coords: [[83.140625, 94.953125]],
		label: $.t("v:event.label.crossing4"),
		popup: $.t("v:event.desc.crossing4")
	}, {
		coords: [[205.875, 95.84375]],
		label: $.t("v:event.label.drunken"),
		popup: $.t("v:event.desc.drunken")
	}, {
		coords: [[93.625, 76.9375]],
		label: $.t("v:event.label.dare1"),
		popup: $.t("v:event.desc.dare1")
	}, {
		coords: [[199.125, 117.375]],
		label: $.t("v:event.label.dare2"),
		popup: $.t("v:event.desc.dare2")
	}, {
		coords: [[209.65625, 93.875]],
		label: $.t("v:event.label.dare3"),
		popup: $.t("v:event.desc.dare3")
	}, {
		coords: [[144.0625, 71.921875]],
		label: $.t("v:event.label.troll"),
		popup: $.t("v:event.desc.troll")
	}, {
		coords: [[88, 81.8125]],
		label: $.t("v:event.label.robbery"),
		popup: $.t("v:event.desc.robbery")
	}, {
		coords: [[204.71875, 115.34375]],
		label: $.t("v:event.label.karmic"),
		popup: $.t("v:event.desc.karmic")
	}, {
		coords: [[126.65625, 73.4375]],
		label: $.t("v:event.label.looters1"),
		popup: $.t("v:event.desc.looters1")
	}, {
		coords: [[145.4375, 136.5]],
		label: $.t("v:event.label.looters2"),
		popup: $.t("v:event.desc.looters2")
	}, {
		coords: [[99.84375, 166.5625]],
		label: $.t("v:event.label.looters3"),
		popup: $.t("v:event.desc.looters3")
	}, {
		coords: [[210.578125, 109.75]],
		label: $.t("v:event.label.children"),
		popup: $.t("v:event.desc.children")
	}, {
		coords: [[195.40625, 96.890625]],
		label: $.t("v:event.label.racist1"),
		popup: $.t("v:event.desc.racist1")
	}, {
		coords: [[203.875, 114.875]],
		label: $.t("v:event.label.racist2"),
		popup: $.t("v:event.desc.racist2")
	}, {
		coords: [[194.734375, 102.65625]],
		label: $.t("v:event.label.pyre"),
		popup: $.t("v:event.desc.pyre")
	}, {
		coords: [[185.75, 145.3125]],
		label: $.t("v:event.label.strangers"),
		popup: $.t("v:event.desc.strangers")
	}, {
		coords: [[195.34375, 88.265625]],
		label: $.t("v:event.label.strumpet"),
		popup: $.t("v:event.desc.strumpet")
	}, {
		coords: [[200.78125, 108.046875]],
		label: $.t("v:event.label.suspicious"),
		popup: $.t("v:event.desc.suspicious")
	}, {
		coords: [[206.40625, 106.46875]],
		label: $.t("v:event.label.flame"),
		popup: $.t("v:event.desc.flame")
	}, {
		coords: [[163.6875, 177.65625]],
		label: $.t("v:event.label.basilisk"),
		popup: $.t("v:event.desc.basilisk")
	}, {
		coords: [[157.59375, 163.8125]],
		label: $.t("v:event.label.passage1"),
		popup: $.t("v:event.desc.passage1")
	}, {
		coords: [[157.53125, 169.5]],
		label: $.t("v:event.label.passage2"),
		popup: $.t("v:event.desc.passage2")
	}, {
		coords: [[160.4375, 178.96875]],
		label: $.t("v:event.label.passage3"),
		popup: $.t("v:event.desc.passage3")
	}, {
		coords: [[189.5, 98.640625]],
		label: $.t("v:event.label.raids"),
		popup: $.t("v:event.desc.raids")
	}],

	// Grindstone
	grindstone: [{
		coords: [
			// Novigrad
			[211.547, 97.453],
			[210.641, 99.266],
			// S Novigrad
			[168.094, 91.391],
			// Oxenfurt
			[160.734, 164.500],
			// NE Velen
			[129.922, 118.313],
			// NW Velen
			[153.016, 46.609],
			[106.594, 52.625],
			[105.156, 76.313],
			[82.734, 70.828],
			[68.234, 74.516],
			[82.328, 40.094],
			[75.875, 25.531],
			// SE Velen
			[100.703, 167.141],
			[102.531, 108.906],
			// New
			[23.984375, 150.546875],
			[164.296875, 185.546875],
			[189.8125, 97.0625],
			[196.25, 99.75]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	// Guarded Treasure
	guarded: [{
		coords: [
			// NW Velen
			[107.281, 42.953],
			[98.313, 40.141],
			[98.578, 21.844],
			// SE Velen
			[49.641, 150.531],
			[84.875, 123.281],
			// New
			[181.15625, 220.6875],
			[246.25, 182.8125],
			[258.84375, 129.1875],
			[248.4375, 162.6875]
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: ""})
	}, { // NE Novigrad
		coords: [[215.016, 126.328]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 8<span> " + $.t("v:monsters.hag.water") + "</span>)"})
	}, {
		coords: [[229.563, 124.656]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 15<span> " + $.t("v:monsters.hag.bilge") + "</span>)"})
	}, {
		coords: [[239.594, 104.219]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 23<span> " + $.t("v:monsters.armoredArachas") + "</span>)"})
	}, { // SE Novigrad
		coords: [[164.563, 198.594]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 20<span> " + $.t("v:monsters.leshen") + "</span>)"})
	}, { // S Novigrad
		coords: [[171.500, 119.516]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 18<span> " + $.t("v:monsters.wyvern") + "</span>)"})
	}, {
		coords: [[184.609, 58.609]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 15<span> " + $.t("v:monsters.wraiths.noon") + "</span>)"})
	}, { // NE Velen
		coords: [[121.781, 136.625]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 13<span> " + $.t("v:monsters.alghoul") + "</span>)"})
	}, {
		coords: [[122.484, 167.156]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 9<span> " + $.t("v:monsters.drowners") + "</span>)"})
	}, {
		coords: [[144.641, 87.578]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl xx<span> " + $.t("v:monsters.hag.water") + "</span>)"})
	}, {
		coords: [[70.859, 44.063]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 7<span> " + $.t("v:monsters.wraiths.wraiths") + "</span>)"})
	}, {
		coords: [[93.516, 99.344]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 14<span> " + $.t("v:monsters.forktail") + "</span>)"})
	}, {
		coords: [[91.563, 19.516]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 4<span> " + $.t("v:monsters.drowners") + "</span>)"})
	}, {
		coords: [[147.047, 57.047]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 14<span> " + $.t("v:monsters.basilisk") + "</span>)"})
	}, { // SW Velen
		coords: [[37.094, 55.438]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 8<span> " + $.t("v:monsters.hag.water") + "</span>)"})
	}, {
		coords: [[23.172, 78.391]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 18<span> " + $.t("v:monsters.wraiths.noon") + "/" + $.t("v:monsters.wraiths.night") + "</span>)"})
	}, {
		coords: [[18.750, 78.531]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 19<span> " + $.t("v:monsters.gargoyle") + "</span>)"})
	}, {
		coords: [[34.438, 93.125]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 13<span> " + $.t("v:monsters.alghoul") + "</span>)"})
	}, { // SE Velen
		coords: [[56.953, 200.891]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 24<span> " + $.t("v:monsters.elemental.earth") + "</span>)"})
	}, {
		coords: [[43.328, 149.781]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 20<span> " + $.t("v:monsters.hag.bilge") + "</span>)"})
	}, {
		coords: [[28.078, 148.406]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 14<span> " + $.t("v:monsters.wyvern") + "</span>)"})
	}, {
		coords: [[24.063, 150.188]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 19<span> " + $.t("v:monsters.cyclops") + "</span>)"})
	}, {
		coords: [[69.406, 162.688]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 8<span> " + $.t("v:monsters.hag.water") + "</span>)"})
	}],

	// Gwent Player
	gwent: [{ // Novigrad
		coords: [[205.438, 99.578]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[209.703, 102.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.bookMerchant"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[200.859, 98.078]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.crippledKate"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[220.813, 103.844]],
		label: $.t("v:gwent.label.tournament"),
		popupTitle: $.t("v:gwent.popup.tournament"),
		popup: $.t("v:gwent.desc.tournament")
	}, {
		coords: [[204.547, 109.125]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[199.141, 101.578]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[201.953, 102.656]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.herbalist"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[199.188, 126.813]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[198.813, 113.438]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.merchant"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[199.109, 107.094]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[206.406, 96.734]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[214.328, 110.844]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[206.063, 101.203]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[207.625, 101.047]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.banker"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[209.453, 94.750]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.fishmonger"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[211.859, 97.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[212.156, 96.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[216.281, 104.438]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[210.859, 113.031]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[211.969, 114.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.loanShark"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[226.516, 92.531]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.alchemist"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[219.125, 116.844]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.alchemist"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[209.516, 104.938]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.warn") + $.t("v:gwent.desc.player")
	}, { // S Novigrad
		coords: [[185.375, 117.734]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, { // SE Novigrad
		coords: [[170.047, 179.250]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.herbalist"),
		popup: $.t("v:gwent.desc.player")
	}, { // Oxenfurt
		coords: [[156.094, 165.297]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[158.281, 166.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[159.344, 164.703]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[152.344, 170.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, { // NE Velen
		coords: [[129.922, 118.688]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player") + $.t("pid.rescue") + ' <a href="#6/115.500/107.875">' + $.t("pid.rescueLocation") + '</a>'
	}, { // NW Velen
		coords: [[107.641, 54.969]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[106.688, 52.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[101.750, 76.297]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[104.297, 76.969]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.quartermaster"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[104.813, 77.609]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[107.078, 74.234]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.bloodyBaron"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[84.000, 70.125]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player") + $.t("pid.rescue") + ' <a href="#6/72.375/104.625">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[70.688, 73.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[81.969, 41.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[82.453, 40.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[105.125, 77.000]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.yoana"),
		popup: $.t("v:gwent.desc.player")
	}, { // SE Velen
		coords: [[99.984, 110.703]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[103.469, 108.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[33.672, 204.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.quartermaster"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[78.219, 147.219]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.player"),
		popup: $.t("v:gwent.desc.quest") + $.t("v:gwent.desc.player")
	},{
		coords: [[187.375, 151.938]],
		label: $.t("v:gwent.popup.shopkeeper"),
		popupTitle: $.t("v:gwent.popup.player"),
		popup: $.t("v:gwent.desc.player")
	}],

	// Harbor
	harbor: [{
		coords: [
			// Novigrad
			[199.828, 86.109],
			// Oxenfurt
			[157.563, 161.406],
			// NE Velen
			[123.422, 172.734],
			[114.156, 134.563],
			[114.813, 104.563],
			// NW Velen
			[82.125, 89.125],
			[95.344, 26.344],
			[107.375, 41.438],
			// SW Velen
			[53.266, 75.359],
			[28.094, 46.609],
			// SE Velen
			[33.641, 119.953]
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	// Herbalist
	herbalist: [{
		coords: [
			// Novigrad
			[207.172, 103.047],
			[201.656, 102.625],
			// S Novigrad
			[184.547, 118.500],
			// SE Novigrad
			[169.859, 179.094],
			//New
			[178.59375, 216.21875]
		],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}, { // NW Velen
		coords: [[86.609, 29.156]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, {
		coords: [[107.125, 31.641]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, { // SW Velen
		coords: [[34.578, 98.656]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, { // SE Velen
		coords: [[99.828, 129.547]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, { // New
		coords: [[199.563, 187.438]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc") + $.t(" ") + $.t("pid.rescue") + ' <a href="#6/198.344/187.281">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Hidden Treasure
	hidden: [{
		coords: [
			// NW Velen
			[153.063, 45.953],
			[107.531, 36.859],
			[104.422, 26.078],
			[94.859, 28.031],
			// SW Velen
			[54.469, 51.313],
			// SE Velen
			[105.625, 148.141],
			// New
			[190.9375, 195.125],
			[186.3125, 211.25],
			[197.59375, 226.125],
			[245.5625, 212.5625],
			[252.625, 133.625],
			[239.8125, 155.9375],
			[241.75, 94.0625]
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{ // S Novigrad
		coords: [[154.313, 96.734]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 6<span> ' + $.t("v:monsters.nekkers") + '</span>'})
	}, {
		coords: [[168.563, 78.875]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 15<span> ' + $.t("v:monsters.mucknixers") + '</span>'})
	}, { // NE Velen
		coords: [[115.891, 134.969]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 10<span> ' + $.t("v:monsters.drowners") + '</span>'})
	}, {
		coords: [[130.344, 173.906]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>'})
	}, {
		coords: [[164.563, 146.844]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>'})
	}, {
		coords: [[125.625, 143.594]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4<span> ' + $.t("v:monsters.foglet") + '</span>'})
	}, {
		coords: [[171.813,139.453]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 18<span> ' + $.t("v:monsters.hag.bilge") + '</span>'})
	}, {
		coords: [[166.922, 155.281]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 32<span> ' + $.t("v:monsters.basilisk") + '</span>'})
	}, { // NW Velen
		coords: [[86.016, 17.078]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>'})
	}, { // SE Velen
		coords: [[50.922, 182.641]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 22<span> ' + $.t("v:monsters.fiend") + '</span>'})
	}, {
		coords: [[99.469, 197.203]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4<span> ' + $.t("v:monsters.foglet") + '</span>'})
	}, {
		coords: [[112.969, 162.563]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 9<span> ' + $.t("v:monsters.bandits") + '</span>'})
	}, { // SW Velen
		coords: [[56.438, 20.781]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 28<span> ' + $.t("v:monsters.hag.grave") + '</span>'})
	}, {
		coords: [[51.297, 34.500]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 10<span> ' + $.t("v:monsters.bandits") + '</span>'})
	}, {
		coords: [[55.031, 49.828]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 13<span> ' + $.t("v:monsters.wraiths.wraiths") + '</span>'})
	}, {
		coords: [[39.859, 70.531]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>'})
	}],

	// Innkeep
	innkeep: [{ // Novigrad
		coords: [[206.000, 96.547]],
		label: $.t("v:innkeep.inns.theGoldenSturgen"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[220.609, 104.172]],
		label: $.t("v:innkeep.inns.passiflora"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[214.000, 110.672]],
		label: $.t("v:innkeep.inns.theNowhere"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	}, {
		coords: [[198.859, 106.875]],
		label: $.t("v:innkeep.inns.rosemaryAndThyme"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	}, {
		coords: [[198.875, 126.656]],
		label: $.t("v:innkeep.inns.sevenCatsInn"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[209.328, 104.719]],
		label: $.t("v:innkeep.inns.theKingfisher"),
		popup: $.t("v:misc.disappearingTrader") + $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // S Novigrad
		coords: [[185.125, 118.047]],
		label: $.t("v:innkeep.inns.cunnyOfTheGoose"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // Oxenfurt
		coords: [[156.063, 165.172]],
		label: $.t("v:innkeep.inns.theAlchemy"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // NE Velen
		coords: [[128.141, 95.516]],
		label: $.t("v:innkeep.inns.innAtTheCrossroads"),
		popup: $.t("v:innkeep.desc.gwentAndDrink")
	}],

	// Monster Den
	monsterden: [{
		coords: [
			// NE Velen
			[142.984, 118.125],
			// SE Velen
			[81.656, 136.359]
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: ''})
	}, { // NE Novigrad
		coords: [[237.641, 105.016]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 19<span> ' + $.t("v:monsters.golem") + '</span>)'})
	}, { // S Novigrad
		coords: [[165.891, 99.375]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 16<span> ' + $.t("v:monsters.rabidRockTroll") + '</span> and lvl 18<span> ' + $.t("v:monsters.nekkers") + '</span>)'})
	}],

	// Monster Nest
	monsternest: [{
		coords: [
			// NE Velen
			[153.734, 135.203],
			[160.500, 127.328],
			// NW Velen
			[110.656, 88.094],
			[100.078, 66.047],
			[82.969, 86.828],
			// SW Velen
			[44.984, 40.906],
			[45.984, 41.656],
			// SE Velen
			[60.047, 126.375],
			// New
			[204.84375, 186.4375],
			[238.8125, 199.90625],
			[235.65625, 201.53125],
			[240.5625, 171.5],
			[255.125, 119.75],
			[218.6875, 183.875]
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: ''})
	}, { // S Novigrad
		coords: [[154.141, 85.000]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6<span> ' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, {
		coords: [[169.094, 95.281]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9<span> ' + $.t("v:monsters.endregas") + '</span>)'})
	}, {
		coords: [[170.313, 98.000]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9<span> ' + $.t("v:monsters.endregas") + '</span>)'})
	}, {
		coords: [[170.266, 112.969]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6<span> ' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, { // NE Velen
		coords: [[133.422, 162.531]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9<span> ' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[133.750, 161.688]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9<span> ' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[125.938, 147.391]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9<span> ' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[160.750, 137.891]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6<span> ' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, { // SW Velen
		coords: [[43.578, 108.563]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 4-9<span> ' + $.t("v:monsters.drowners") + '</span>)'})
	}, { // SE Velen
		coords: [[86.891, 168.969]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8<span> ' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[91.297, 165.547]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8-9<span> ' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[88.094, 161.422]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8-9<span> ' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[87.891, 158.172]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8-9<span> ' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[96.875, 185.094]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 21<span> ' + $.t("v:monsters.wyvern") + '</span>)'})
	}, {
		coords: [[95.656, 185.125]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 21<span> ' + $.t("v:monsters.wyvern") + '</span>)'})
	}],

	// Notice Board
	notice: [{
		coords: [
			// Novigrad
			[209.078, 103.609],
			[205.641, 97.031],
			[215.844, 105.000],
			[188.594, 100.641],
			// NE Novigrad
			[237.172, 130.297],
			// E Novigrad
			[198.047, 126.578],
			[205.750, 157.922],
			// S Novigrad
			[185.500, 116.000],
			// Oxenfurt
			[158.156, 165.109],
			// NE Velen
			[131.547, 119.453],
			[128.953, 95.047],
			[153.344, 112.781],
			// NW Velen
			[82.078, 42.078],
			[104.547, 78.828],
			[69.234, 75.438],
			// SE Velen
			[77.266, 147.797],
			[100.641, 109.469],
			[33.688, 206.219],
			// New
			[99.5, 137.21875]
		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [{ // NE Velen
		coords: [[147.578, 119.578]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: ''}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/151.281/115.438">' + $.t("pid.rescueLocation") + '</a>'
	}, { // NW Velen
		coords: [[102.500, 33.828]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: ''}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/81.625/69.906">' + $.t("pid.rescueLocation") + '</a>'
	}, { // New
		coords: [[198.6875, 186.90625]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: ''}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/199.563/187.438">' + $.t("pid.rescueLocation") + '</a>'
	}, { // SE Novigrad
		coords: [[142.984, 199.375]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 9<span> ' + $.t("v:monsters.bandits") + '</span>)'}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/130.125/198.188">' + $.t("pid.rescueLocation") + '</a>'
	}, { // NE Velen
		coords: [[115.391, 107.094]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 10-16<span> ' + $.t("v:monsters.bandits") + '</span>)'}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/129.438/118.906">' + $.t("pid.rescueLocation") + '</a>'
	}, { // NW Velen
		coords: [[72.656, 103.797]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 5<span> ' + $.t("v:monsters.bandits") + '</span>)'}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/83.688/70.125">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Place of Power
	pop: [{ // Novigrad
		coords: [[230.391, 98.688]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, { // E Novigrad
		coords: [[200.813, 162.688]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, { // NW Velen
		coords: [[152.688, 47.781]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}, { // SW Velen
		coords: [[15.063, 76.14]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[53.313, 52.578]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("v:misc.wanderingInTheDark") + $.t("pop.desc")
	}, { // SE Velen
		coords: [[35.688, 133.594]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("v:misc.baldMountain") + $.t("pop.desc")
	}, {
		coords: [[55.922, 154.672]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[80.219, 141.359]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

	// Point of Interest
	poi: [{ // Novigrad
		coords: [[210.156, 109.453]],
		label: $.t("v:poi.label.triss"),
		popup: $.t("v:poi.desc.triss")
	}, {
		coords: [[199.000, 107.484]],
		label: $.t("v:poi.label.dandelionAndZoltan"),
		popup: $.t("v:poi.desc.dandelionAndZoltan")
	}, {
		coords: [[217.453, 110.297]],
		label: $.t("v:poi.label.vilmeriusHospital"),
		popup: $.t("v:poi.desc.vilmeriusHospital")
	}, { // NW Velen
		coords: [[89.828, 48.344]],
		label: $.t("v:poi.label.keira"),
		popup: $.t("v:poi.desc.keira")
	}, { //New
		coords: [[239.5, 214.6875]],
		label: $.t("v:poi.label.rune"),
		popup: $.t("v:poi.desc.rune")
	}, {
		coords: [[153.5, 163.71875]],
		label: $.t("v:poi.label.shani"),
		popup: $.t("v:poi.desc.shani")
	}, {
		coords: [[209.6875, 102.625]],
		label: $.t("v:poi.label.statue"),
		popup: $.t("v:poi.desc.statue")
	}, {
		coords: [[47.125, 78.172]],
		label: $.t("v:poi.label.spirits"),
		popup: $.t("v:poi.desc.spirits")
	}, {
		coords: [[49.391, 78.813]],
		label: $.t("v:poi.label.spirits"),
		popup: $.t("v:poi.desc.spirits")
	}, {
		coords: [[53.469, 80.234]],
		label: $.t("v:poi.label.spirits"),
		popup: $.t("v:poi.desc.spirits")
	}],

	// Scavengers
	scavenger: [{
		coords: [[156.031, 208.844]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	}, {
		coords: [[100.671875, 177.34375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	}, {
		coords: [[184.469, 62.484]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.cross") + $.t("scavenger.level.1")
	}, {
		coords: [[144.234, 134.609]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	}, {
		coords: [[182.563, 191.609]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	}, {
		coords: [[212.688, 113.969]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	}, {
		coords: [[166.359, 99.516]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	}, {
		coords: [[178.547, 106.328]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	}, {
		coords: [[92.859, 155.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	}, {
		coords: [[237.984, 105.422]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	}, {
		coords: [[151.09375, 170.3125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	}, {
		coords: [[156.047, 152.828]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	}, {
		coords: [[149.938, 75.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	}, {
		coords: [[23.656, 78.094]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	}, {
		coords: [[153.094, 46.281]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	}, {
		coords: [[41.3125, 164.4375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	}, {
		coords: [[160.063, 127.094]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	}, {
		coords: [[78.516, 16.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	}, {
		coords: [[107.375, 84.438]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	}, {
		coords: [[43.828, 107.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	}, {
		coords: [[53, 130.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	}, {
		coords: [[116.344, 45.563]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	}, {
		coords: [[68.297, 154.859]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	}, {
		coords: [[39.219, 71.719]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	}, {
		coords: [[36.688, 53.203]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.4")
	}, {
		coords: [[110.813, 179.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	}, {
		coords: [[106.703, 72.75]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	}, {
		coords: [[50.953, 182.453]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	}, {
		coords: [[46.797, 24.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	}, {
		coords: [[229.71875, 89.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	}, {
		coords: [[73.047, 121.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	}, {
		coords: [[81.594, 136.344]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	}, {
		coords: [[24.984375, 150.359375]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	}, {
		coords: [[142.922, 117.656]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	}],

	// Shopkeeper
	shopkeeper: [{ // Novigrad
		coords: [[208.734, 102.859]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	}, {
		coords: [[209.594, 102.828]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	}, {
		coords: [[205.109, 99.563]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	}, {
		coords: [[207.375, 100.969]],
		label: $.t("v:shopkeeper.label.banker"),
		popup: $.t("v:shopkeeper.desc.banker")
	}, {
		coords: [[198.516, 113.328]],
		label: $.t("v:shopkeeper.label.clothingMerchant"),
		popup: $.t("v:shopkeeper.desc.clothingMerchant")
	}, {
		coords: [[198.891, 101.484]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.kingfOfBeggarsMerchant")
	}, {
		coords: [[216.016, 104.219]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.aeramasTrinketMerchant")
	}, {
		coords: [[211.797, 96.109]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	}, {
		coords: [[209.234, 94.563]],
		label: $.t("v:shopkeeper.label.fishmonger"),
		popup: $.t("v:shopkeeper.desc.fishmonger")
	}, {
		coords: [[215.203, 92.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.emptyBottlesMerchant")
	}, {
		coords: [[213.813, 93.063]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[210.578, 113.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[204.500, 109.047]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gemDustWeaponsFoodAndDrink")
	}, {
		coords: [[211.516, 114.313]],
		label: $.t("v:shopkeeper.label.loanShark"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[212.547, 110.969]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSupplies")
	}, {
		coords: [[200.828, 98.297]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.foodAndDrink")
	}, { // NE Novigrad
		coords: [[231.297, 163.828]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // SE Novigrad
		coords: [[130.578, 196.953]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("pid.rescue") + ' <a href="#6/142.563/200.250">' + $.t("pid.rescueLocation") + '</a>'
	}, /*{ // S Novigrad
		// appears on map but nobody there?
		coords: [[65.95, -21.09]],
		label: $.t("shopkeeper.shopkeeper"),
		popup: '???'
	},*/ {
		coords: [[179.969, 88.781]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popup: $.t("v:shopkeeper.desc.windmillMerchant")
	}, {
		coords: [[186.656, 82.938]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSuppliesFoodAndWeapons")
	}, {
		coords: [[167.844, 90.969]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[179.188, 119.516]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // Oxenfurt
		coords: [[159.141, 164.516]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.paintMerchant")
	}, { // NE Velen
		coords: [[147.313, 149.422]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, {
		coords: [[151.781, 115.188]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyAndFood") + ' ' + $.t("pid.rescue") + ' <a href="#6/147.719/119.938">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[123.156, 179.266]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}, {
		coords: [[137.406, 160.781]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // NW Velen
		coords: [[107.469, 54.906]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[101.547, 76.094]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks")
	}, {
		coords: [[81.797, 41.406]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndJewellery")
	}, {
		coords: [[90.109, 47.906]],
		label: $.t("v:shopkeeper.label.keira"),
		popup: $.t("v:shopkeeper.desc.alchemyRecipesAndClearance")
	}, {
		coords: [[104.031, 76.875]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.gwentFoodAndDrink")
	}, {
		coords: [[100.531, 76.344]],
		label: $.t("v:shopkeeper.label.anselm"),
		popup: $.t("v:shopkeeper.desc.blindersMerchant") + '. ' + $.t("pid.rescue") + ' <a href="#6/120.25/142.28125">' + $.t("v:event.label.caravan") + '</a>'
	}, {
		coords: [[70.563, 73.188]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.drinksAndSaddlebags")
	}, {
		coords: [[83.766, 69.922]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks") + $.t("pid.rescue") + ' <a href="#6/72.375/104.625">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[83.531, 87.641]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[92.156, 29.109]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[76.797, 26.313]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, { // SW Velen
		coords: [[30.359, 46.734]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // SE Velen
		coords: [[100.578, 130.578]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.alchemyAndFood")
	}, {
		coords: [[99.844, 110.594]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndCrafting")
	}, {
		coords: [[99.000, 109.281]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, {
		coords: [[33.453, 204.859]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[78.078, 147.141]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.disappearingDrinksMerchant")
	}, {
		coords: [[42.156, 204.500]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[42.844, 206.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[44.063, 206.734]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}, {
		coords: [[130.0625, 126.03125]],
		label: $.t("v:shopkeeper.label.mulbrydale"),
		popup: $.t("shopkeeper.desc")
	}, {
		coords: [
			[35.40625, 124.25],
			[28.5, 123.875],
			[212.640625, 91.09375],
			[208.6875, 107.390625],
			[187.797, 152.172]
				],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	}],

	// Sidequests
	sidequests: [{
		coords: [[182.59375, 155.875]],
		label: $.t("v:sidequests.label.barnful"),
		popup: $.t("v:sidequests.desc.barnful")
	}, {
		coords: [[199.34375, 106.34375]],
		label: $.t("v:sidequests.label.dangerous"),
		popup: $.t("v:sidequests.desc.dangerous")
	}, {
		coords: [[66.6875, 91.125]],
		label: $.t("v:sidequests.label.dog"),
		popup: $.t("v:sidequests.desc.dog")
	}, {
		coords: [[89.84375, 48.609375]],
		label: $.t("v:sidequests.label.favor"),
		popup: $.t("v:sidequests.desc.favor")
	}, {
		coords: [[200.375, 105.203125]],
		label: $.t("v:sidequests.label.feast"),
		popup: $.t("v:sidequests.desc.feast")
	}, {
		coords: [[72.4375, 59.625]],
		label: $.t("v:sidequests.label.greedy"),
		popup: $.t("v:sidequests.desc.greedy")
	}, {
		coords: [[205.515625, 107.984375]],
		label: $.t("v:sidequests.label.entombed"),
		popup: $.t("v:sidequests.desc.entombed")
	}, {
		coords: [[197.609375, 93.546875]],
		label: $.t("v:sidequests.label.waterfront"),
		popup: $.t("v:sidequests.desc.waterfront")
	}, {
		coords: [[180, 176.125]],
		label: $.t("v:sidequests.label.eyeforeye"),
		popup: $.t("v:sidequests.desc.eyeforeye")
	}, {
		coords: [[89.84375, 48.875]],
		label: $.t("v:sidequests.label.invitation"),
		popup: $.t("v:sidequests.desc.invitation")
	}, {
		coords: [[160.421875, 166.4375]],
		label: $.t("v:sidequests.label.avid"),
		popup: $.t("v:sidequests.desc.avid")
	}, {
		coords: [[148.15625, 114.09375]],
		label: $.t("v:sidequests.label.bitter"),
		popup: $.t("v:sidequests.desc.bitter")
	}, {
		coords: [[207.203125, 97.140625]],
		label: $.t("v:sidequests.label.pearl"),
		popup: $.t("v:sidequests.desc.pearl")
	}, {
		coords: [[42.71875, 204.25]],
		label: $.t("v:sidequests.label.blood"),
		popup: $.t("v:sidequests.desc.blood")
	}, {
		coords: [[198.96875, 107.734375]],
		label: $.t("v:sidequests.label.cabaret"),
		popup: $.t("v:sidequests.desc.cabaret")
	}, {
		coords: [[198.96875, 108]],
		label: $.t("v:sidequests.label.sins"),
		popup: $.t("v:sidequests.desc.sins")
	}, {
		coords: [[106.96875, 74.875]],
		label: $.t("v:sidequests.label.ciri"),
		popup: $.t("v:sidequests.desc.ciri")
	}, {
		coords: [[149.5625, 129.1875]],
		label: $.t("v:sidequests.label.deathfire"),
		popup: $.t("v:sidequests.desc.deathfire")
	}, {
		coords: [[105.03125, 59.84375]],
		label: $.t("v:sidequests.label.defender"),
		popup: $.t("v:sidequests.desc.defender")
	}, {
		coords: [[212.78125, 145.46875]],
		label: $.t("v:sidequests.label.empty"),
		popup: $.t("v:sidequests.desc.empty")
	}, {
		coords: [[239.28125, 214.390625]],
		label: $.t("v:sidequests.label.enchantingq"),
		popup: $.t("v:sidequests.desc.enchantingq")
	}, {
		coords: [[239.296875, 214.1875]],
		label: $.t("v:sidequests.label.enchantings"),
		popup: $.t("v:sidequests.desc.enchantings")
	}, {
		coords: [[152.5, 115.34375]],
		label: $.t("v:sidequests.label.fake"),
		popup: $.t("v:sidequests.desc.fake")
	}, {
		coords: [[218, 106.109375]],
		label: $.t("v:sidequests.label.fencing"),
		popup: $.t("v:sidequests.desc.fencing")
	}, {
		coords: [[209.0625, 103.859375]],
		label: $.t("v:sidequests.label.fistsn"),
		popup: $.t("v:sidequests.desc.fistsn")
	}, {
		coords: [[99.328125, 110.015625]],
		label: $.t("v:sidequests.label.fistsv"),
		popup: $.t("v:sidequests.desc.fistsv")
	}, {
		coords: [[209.109375, 103.25]],
		label: $.t("v:sidequests.label.thread"),
		popup: $.t("v:sidequests.desc.thread")
	}, {
		coords: [[101.78125, 137.71875]],
		label: $.t("v:sidequests.label.fools"),
		popup: $.t("v:sidequests.desc.fools")
	}, {
		coords: [[104.391, 76.938]],
		label: $.t("v:sidequests.label.forefathers"),
		popup: $.t("v:sidequests.desc.forefathers")
	}, {
		coords: [[89.0625, 47.875]],
		label: $.t("v:sidequests.label.forefathers"),
		popup: $.t("v:sidequests.desc.forefathers")
	}, {
		coords: [[164.21875, 89.75]],
		label: $.t("v:sidequests.label.fromfar"),
		popup: $.t("v:sidequests.desc.fromfar")
	}, {
		coords: [[129.6875, 111.09375]],
		label: $.t("v:sidequests.label.funeral"),
		popup: $.t("v:sidequests.desc.funeral")
	}, {
		coords: [[86.34375, 148.46875]],
		label: $.t("v:sidequests.label.ghosts"),
		popup: $.t("v:sidequests.desc.ghosts")
	}, {
		coords: [[156.046875, 165.546875]],
		label: $.t("v:sidequests.label.gwenti"),
		popup: $.t("v:sidequests.desc.gwenti")
	}, {
		coords: [[107.09375, 74]],
		label: $.t("v:sidequests.label.gwentv"),
		popup: $.t("v:sidequests.desc.gwentv")
	}, {
		coords: [[209.078125, 104.125]],
		label: $.t("v:sidequests.label.haunted"),
		popup: $.t("v:sidequests.desc.haunted")
	}, {
		coords: [[104.5625, 129.296875]],
		label: $.t("v:sidequests.label.hazardous1"),
		popup: $.t("v:sidequests.desc.hazardous1")
	}, {
		coords: [[87.203125, 164.265625]],
		label: $.t("v:sidequests.label.hazardous2"),
		popup: $.t("v:sidequests.desc.hazardous2")
	}, {
		coords: [[213.1875, 94.671875]],
		label: $.t("v:sidequests.label.stuff"),
		popup: $.t("v:sidequests.desc.stuff")
	}, {
		coords: [[210.46875, 107.234375]],
		label: $.t("v:sidequests.label.messages"),
		popup: $.t("v:sidequests.desc.messages")
	}, {
		coords: [[221.109375, 104.375]],
		label: $.t("v:sidequests.label.stakes"),
		popup: $.t("v:sidequests.desc.stakes")
	}, {
		coords: [[198.390625, 104.546875]],
		label: $.t("v:sidequests.label.honor"),
		popup: $.t("v:sidequests.desc.honor")
	}, {
		coords: [[111.84375, 54.5]],
		label: $.t("v:sidequests.label.rites"),
		popup: $.t("v:sidequests.desc.rites")
	}, {
		coords: [[237.71875, 129.5]],
		label: $.t("v:sidequests.label.red"),
		popup: $.t("v:sidequests.desc.red")
	}, {
		coords: [[76.15625, 28.03125]],
		label: $.t("v:sidequests.label.snares"),
		popup: $.t("v:sidequests.desc.snares")
	}, {
		coords: [[103.84375, 39.8125]],
		label: $.t("v:sidequests.label.mob"),
		popup: $.t("v:sidequests.desc.mob")
	}, {
		coords: [[89.828125, 49.125]],
		label: $.t("v:sidequests.label.magiclamp"),
		popup: $.t("v:sidequests.desc.magiclamp")
	}, {
		coords: [[104.84375, 77.3125]],
		label: $.t("v:sidequests.label.masterarmor"),
		popup: $.t("v:sidequests.desc.masterarmor")
	}, {
		coords: [[209.515625, 102.640625]],
		label: $.t("v:sidequests.label.oldfriend"),
		popup: $.t("v:sidequests.desc.oldfriend")
	}, {
		coords: [[240.9375, 124.375]],
		label: $.t("v:sidequests.label.hospitality"),
		popup: $.t("v:sidequests.desc.hospitality")
	}, {
		coords: [[210.5625, 95.609375]],
		label: $.t("v:sidequests.label.city1"),
		popup: $.t("v:sidequests.desc.city1")
	}, {
		coords: [[221.8125, 98.96875]],
		label: $.t("v:sidequests.label.city2"),
		popup: $.t("v:sidequests.desc.city2")
	}, {
		coords: [[155.09375, 208.53125]],
		label: $.t("v:sidequests.label.darkness"),
		popup: $.t("v:sidequests.desc.darkness")
	}, {
		coords: [[197.0625, 99.03125]],
		label: $.t("v:sidequests.label.dumplings"),
		popup: $.t("v:sidequests.desc.dumplings")
	}, {
		coords: [[201.578125, 98.515625]],
		label: $.t("v:sidequests.label.arse"),
		popup: $.t("v:sidequests.desc.arse")
	}, {
		coords: [[207.875, 103.0625]],
		label: $.t("v:sidequests.label.derby"),
		popup: $.t("v:sidequests.desc.derby")
	}, {
		coords: [[104.5625, 79.3125]],
		label: $.t("v:sidequests.label.perch"),
		popup: $.t("v:sidequests.desc.perch")
	}, {
		coords: [[239.46875, 213.28125]],
		label: $.t("v:sidequests.label.western"),
		popup: $.t("v:sidequests.desc.western")
	}, {
		coords: [[107.078125, 73.765625]],
		label: $.t("v:sidequests.label.crookback"),
		popup: $.t("v:sidequests.desc.crookback")
	}, {
		coords: [[247.5, 174.34375]],
		label: $.t("v:sidequests.label.rose"),
		popup: $.t("v:sidequests.desc.rose")
	}, {
		coords: [[153.53125, 163.25]],
		label: $.t("v:sidequests.label.neighborhood1"),
		popup: $.t("v:sidequests.desc.neighborhood1")
	}, {
		coords: [[149.3125, 166.5]],
		label: $.t("v:sidequests.label.neighborhood2"),
		popup: $.t("v:sidequests.desc.neighborhood2")
	}, {
		coords: [[149.28125, 183.34375]],
		label: $.t("v:sidequests.label.spooked"),
		popup: $.t("v:sidequests.desc.spooked")
	}, {
		coords: [[95.15625, 47.71875]],
		label: $.t("v:sidequests.label.takewant"),
		popup: $.t("v:sidequests.desc.takewant")
	}, {
		coords: [[202.25, 118.6875]],
		label: $.t("v:sidequests.label.dwarven"),
		popup: $.t("v:sidequests.desc.dwarven")
	}, {
		coords: [[98.78125, 110.5625]],
		label: $.t("v:sidequests.label.reardon"),
		popup: $.t("v:sidequests.desc.reardon")
	}, {
		coords: [[159.375, 167.21875]],
		label: $.t("v:sidequests.label.taxman"),
		popup: $.t("v:sidequests.desc.taxman")
	}, {
		coords: [[84.40625, 175.4375]],
		label: $.t("v:sidequests.label.stars"),
		popup: $.t("v:sidequests.desc.stars")
	}, {
		coords: [[155.9375, 153.28125]],
		label: $.t("v:sidequests.label.volunteer"),
		popup: $.t("v:sidequests.desc.volunteer")
	}, {
		coords: [[76.6875, 148.28125]],
		label: $.t("v:sidequests.label.hillock"),
		popup: $.t("v:sidequests.desc.hillock")
	}, {
		coords: [[154.96875, 110.71875]],
		label: $.t("v:sidequests.label.pass"),
		popup: $.t("v:sidequests.desc.pass")
	}, {
		coords: [[104.53125, 26.5]],
		label: $.t("v:sidequests.label.trmistake"),
		popup: $.t("v:sidequests.desc.trmistake")
	}, {
		coords: [[160.4375, 166.1875]],
		label: $.t("v:sidequests.label.trlegacy"),
		popup: $.t("v:sidequests.desc.trlegacy")
	}, {
		coords: [[56.484375, 20.984375]],
		label: $.t("v:sidequests.label.trignored"),
		popup: $.t("v:sidequests.desc.trignored")
	}, {
		coords: [[207.3125, 209.8125]],
		label: $.t("v:sidequests.label.trinheritance"),
		popup: $.t("v:sidequests.desc.trinheritance")
	}, {
		coords: [[115.9375, 135.203125]],
		label: $.t("v:sidequests.label.trevents"),
		popup: $.t("v:sidequests.desc.trevents")
	}, {
		coords: [[171.875, 139.71875]],
		label: $.t("v:sidequests.label.trbattlefield"),
		popup: $.t("v:sidequests.desc.trbattlefield")
	}, {
		coords: [[164.609375, 147.0625]],
		label: $.t("v:sidequests.label.trbloodgold"),
		popup: $.t("v:sidequests.desc.trbloodgold")
	}, {
		coords: [[168.65625, 79.28125]],
		label: $.t("v:sidequests.label.trwrecks"),
		popup: $.t("v:sidequests.desc.trwrecks")
	}, {
		coords: [[55.125, 50.25]],
		label: $.t("v:sidequests.label.trgods"),
		popup: $.t("v:sidequests.desc.trgods")
	}, {
		coords: [[166.96875, 155.78125]],
		label: $.t("v:sidequests.label.trdowry"),
		popup: $.t("v:sidequests.desc.trdowry")
	}, {
		coords: [[239.46875, 213.515625]],
		label: $.t("v:sidequests.label.trshores"),
		popup: $.t("v:sidequests.desc.trshores")
	}, {
		coords: [[113.03125, 163.03125]],
		label: $.t("v:sidequests.label.trworld"),
		popup: $.t("v:sidequests.desc.trworld")
	}, {
		coords: [[130.5, 174.40625]],
		label: $.t("v:sidequests.label.trgoods"),
		popup: $.t("v:sidequests.desc.trgoods")
	}, {
		coords: [[105.59375, 148.5625]],
		label: $.t("v:sidequests.label.trfire"),
		popup: $.t("v:sidequests.desc.trfire")
	}, {
		coords: [[94.90625, 28.5625]],
		label: $.t("v:sidequests.label.trzuleyka"),
		popup: $.t("v:sidequests.desc.trzuleyka")
	}, {
		coords: [[39.90625, 71]],
		label: $.t("v:sidequests.label.trsunkenc"),
		popup: $.t("v:sidequests.desc.trsunkenc")
	}, {
		coords: [[107.578125, 37.125]],
		label: $.t("v:sidequests.label.trsunkent"),
		popup: $.t("v:sidequests.desc.trsunkent")
	}, {
		coords: [[245.859375, 211.9375]],
		label: $.t("v:sidequests.label.trcursed"),
		popup: $.t("v:sidequests.desc.trcursed")
	}, {
		coords: [[51.375, 35.03125]],
		label: $.t("v:sidequests.label.trdefense"),
		popup: $.t("v:sidequests.desc.trdefense")
	}, {
		coords: [[254.25, 134.4375]],
		label: $.t("v:sidequests.label.trredemption"),
		popup: $.t("v:sidequests.desc.trredemption")
	}, {
		coords: [[191.125, 195.1875]],
		label: $.t("v:sidequests.label.trforce"),
		popup: $.t("v:sidequests.desc.trforce")
	}, {
		coords: [[197.609375, 226.515625]],
		label: $.t("v:sidequests.label.trromilly"),
		popup: $.t("v:sidequests.desc.trromilly")
	}, {
		coords: [[241.328125, 94.578125]],
		label: $.t("v:sidequests.label.trperfidy"),
		popup: $.t("v:sidequests.desc.trperfidy")
	}, {
		coords: [[154.40625, 97.1875]],
		label: $.t("v:sidequests.label.trforcoin"),
		popup: $.t("v:sidequests.desc.trforcoin")
	}, {
		coords: [[238.03125, 157.0625]],
		label: $.t("v:sidequests.label.trtinker"),
		popup: $.t("v:sidequests.desc.trtinker")
	}, {
		coords: [[125.71875, 144.09375]],
		label: $.t("v:sidequests.label.trluck"),
		popup: $.t("v:sidequests.desc.trluck")
	}, {
		coords: [[197.03125, 82.625]],
		label: $.t("v:sidequests.label.trwoe"),
		popup: $.t("v:sidequests.desc.trwoe")
	}, {
		coords: [[128.953125, 95.25]],
		label: $.t("v:sidequests.label.trheart"),
		popup: $.t("v:sidequests.desc.trheart")
	}, {
		coords: [[99.65625, 109.71875]],
		label: $.t("v:sidequests.label.trwannabe"),
		popup: $.t("v:sidequests.desc.trwannabe")
	}, {
		coords: [[242.90625, 198.5625]],
		label: $.t("v:sidequests.label.trtrace"),
		popup: $.t("v:sidequests.desc.trtrace")
	}],

	// Sign Post
	signpost: [{ // Novigrad
		coords: [[207.375, 103.750]],
		label: $.t("v:signpost.label.hierarchSquare"),
		popup: $.t("v:signpost.desc.hierarchSquare")
	}, {
		coords: [[208.766, 116.672]],
		label: $.t("v:signpost.label.southernGate"),
		popup: $.t("v:signpost.desc.southernGate")
	}, {
		coords: [[214.813, 116.297]],
		label: $.t("v:signpost.label.oxenfurtGate"),
		popup: $.t("v:signpost.desc.oxenfurtGate")
	}, {
		coords: [[218.563, 102.031]],
		label: $.t("v:signpost.label.stGregorysBridge"),
		popup: $.t("v:signpost.desc.stGregorysBridge")
	}, {
		coords: [[226.313, 91.547]],
		label: $.t("v:signpost.label.electorsSquare"),
		popup: $.t("v:signpost.desc.electorsSquare")
	}, {
		coords: [[201.391, 111.484]],
		label: $.t("v:signpost.label.tretogorGate"),
		popup: $.t("v:signpost.desc.tretogorGate")
	}, {
		coords: [[196.563, 108.094]],
		label: $.t("v:signpost.label.gateOfTheHierarch"),
		popup: $.t("v:signpost.desc.gateOfTheHierarch")
	}, {
		coords: [[191.688, 102.781]],
		label: $.t("v:signpost.label.gloryGate"),
		popup: $.t("v:signpost.desc.gloryGate")
	}, {
		coords: [[191.250, 96.672]],
		label: $.t("v:signpost.label.portsideGate"),
		popup: $.t("v:signpost.desc.portsideGate")
	}, {
		coords: [[197.969, 88.609]],
		label: $.t("v:signpost.label.novigradDocks"),
		popup: $.t("v:signpost.desc.novigradDocks")
	}, {
		coords: [[211.828, 121.703]],
		label: $.t("v:signpost.label.arette"),
		popup: $.t("v:signpost.desc.arette")
	}, {
		coords: [[198.016, 125.922]],
		label: $.t("v:signpost.label.sevenCatsInn"),
		popup: $.t("v:signpost.desc.sevenCatsInn")
	}, { // NE Novigrad
		coords: [[245.109, 121.094]],
		label: $.t("v:signpost.label.sarrasinGrange"),
		popup: $.t("v:signpost.desc.sarrasinGrange")
	}, {
		coords: [[236.125, 130.438]],
		label: $.t("v:signpost.label.yantra"),
		popup: $.t("v:signpost.desc.yantra")
	}, {
		coords: [[237.031, 149.219]],
		label: $.t("v:signpost.label.isolatedHut"),
		popup: $.t("v:signpost.desc.isolatedHut")
	}, {
		coords: [[214.219, 140.781]],
		label: $.t("v:signpost.label.honeyfillMeadworks"),
		popup: $.t("v:signpost.desc.honeyfillMeadworks")
	}, {
		coords: [[223.516, 174.375]],
		label: $.t("v:signpost.label.martinFeuillesFarmstead"),
		popup: $.t("v:signpost.desc.martinFeuillesFarmstead")
	}, {
		coords: [[231.734, 162.984]],
		label: $.t("v:signpost.label.winespringGrange"),
		popup: $.t("v:signpost.desc.winespringGrange")
	}, {
		coords: [[225.672, 149.938]],
		label: $.t("v:signpost.label.moldavieResidence"),
		popup: $.t("v:signpost.desc.moldavieResidence")
	}, {
		coords: [[234.469, 105.234]],
		label: $.t("v:signpost.label.cavern"),
		popup: $.t("v:signpost.desc.cavern")
	}, { // E Novigrad
		coords: [[205.438, 157.313]],
		label: $.t("v:signpost.label.alness"),
		popup: $.t("v:signpost.desc.alness")
	}, {
		coords: [[194.000, 149.969]],
		label: $.t("v:signpost.label.wheatFields"),
		popup: $.t("v:signpost.desc.wheatFields")
	}, {
		coords: [[189.813, 161.063]],
		label: $.t("v:signpost.label.vegelbudResidence"),
		popup: $.t("v:signpost.desc.vegelbudResidence")
	}, { // SE Novigrad
		coords: [[184.719, 155.609]],
		label: $.t("v:signpost.label.carsten"),
		popup: $.t("v:signpost.desc.carsten")
	}, {
		coords: [[179.703, 174.922]],
		label: $.t("v:signpost.label.temerianPartisanHideout"),
		popup: $.t("v:signpost.desc.temerianPartisanHideout")
	}, {
		coords: [[181.391, 189.266]],
		label: $.t("v:signpost.label.estTayiar"),
		popup: $.t("v:signpost.desc.estTayiar")
	}, {
		coords: [[168.672, 178.078]],
		label: $.t("v:signpost.label.herbalistsHut"),
		popup: $.t("v:signpost.desc.herbalistsHut")
	}, {
		coords: [[155.203, 206.688]],
		label: $.t("v:signpost.label.aeramasAbandonedManor"),
		popup: $.t("v:signpost.desc.aeramasAbandonedManor")
	}, {
		coords: [[142.641, 186.875]],
		label: $.t("v:signpost.label.crossroads"),
		popup: $.t("v:signpost.desc.crossroads")
	}, {
		coords: [[168.969, 165.375]],
		label: $.t("v:signpost.label.gustfieldsFarm"),
		popup: $.t("v:signpost.desc.gustfieldsFarm")
	}, {
		coords: [[215.406, 154.203]],
		label: $.t("v:signpost.label.dancingWindmill"),
		popup: $.t("v:signpost.desc.dancingWindmill")
	}, { // S Novigrad
		coords: [[193.328, 81.500]],
		label: $.t("v:signpost.label.loggersHut"),
		popup: $.t("v:signpost.desc.loggersHut")
	}, {
		coords: [[192.875, 67.359]],
		label: $.t("v:signpost.label.lighthouse"),
		popup: $.t("v:signpost.desc.lighthouse")
	}, {
		coords: [[184.484, 117.922]],
		label: $.t("v:signpost.label.cunnyOfTheGoose"),
		popup: $.t("v:signpost.desc.cunnyOfTheGoose")
	}, {
		coords: [[179.016, 106.938]],
		label: $.t("v:signpost.label.drahimCastle"),
		popup: $.t("v:signpost.desc.drahimCastle")
	}, {
		coords: [[173.828, 76.719]],
		label: $.t("v:signpost.label.widowsGrotto"),
		popup: $.t("v:signpost.desc.widowsGrotto")
	}, {
		coords: [[165.188, 91.438]],
		label: $.t("v:signpost.label.ursten"),
		popup: $.t("v:signpost.desc.ursten")
	}, {
		coords: [[182.469, 88.563]],
		label: $.t("v:signpost.label.luciansWindmill"),
		popup: $.t("v:signpost.desc.luciansWindmill")
	}, {
		coords: [[185.109, 136.172]],
		label: $.t("v:signpost.label.eternalFireChapel"),
		popup: $.t("v:signpost.desc.eternalFireChapel")
	}, {
		coords: [[156.516, 108.625]],
		label: $.t("v:signpost.label.borderPost"),
		popup: $.t("v:signpost.desc.borderPost")
	}, { // Oxenfurt
		coords: [[157.484, 172.031]],
		label: $.t("v:signpost.label.novigradGate"),
		popup: $.t("v:signpost.desc.novigradGate")
	}, {
		coords: [[149.547, 165.094]],
		label: $.t("v:signpost.label.westernGate"),
		popup: $.t("v:signpost.desc.westernGate")
	}, {
		coords: [[156.859, 162.375]],
		label: $.t("v:signpost.label.oxenfurtHarbor"),
		popup: $.t("v:signpost.desc.oxenfurtHarbor")
	}, { // NE Velen
		coords: [[139.359, 146.203]],
		label: $.t("v:signpost.label.stonecuttersSettlement"),
		popup: $.t("v:signpost.desc.stonecuttersSettlement")
	}, {
		coords: [[155.391, 152.375]],
		label: $.t("v:signpost.label.whiteEagleFort"),
		popup: $.t("v:signpost.desc.whiteEagleFort")
	}, {
		coords: [[148.453, 136.422]],
		label: $.t("v:signpost.label.codgersQuarry"),
		popup: $.t("v:signpost.desc.codgersQuarry")
	}, {
		coords: [[158.813, 126.328]],
		label: $.t("v:signpost.label.hindhold"),
		popup: $.t("v:signpost.desc.hindhold")
	}, {
		coords: [[125.281, 173.141]],
		label: $.t("v:signpost.label.ferryStation"),
		popup: $.t("v:signpost.desc.ferryStation")
	}, {
		coords: [[137.906, 121.516]],
		label: $.t("v:signpost.label.hangedMansTree"),
		popup: $.t("v:signpost.desc.hangedMansTree")
	}, {
		coords: [[131.859, 131.781]],
		label: $.t("v:signpost.label.devilsPit"),
		popup: $.t("v:signpost.desc.devilsPit")
	}, {
		coords: [[129.016, 116.984]],
		label: $.t("v:signpost.label.mulbrydale"),
		popup: $.t("v:signpost.desc.mulbrydale")
	}, {
		coords: [[128.797, 94.375]],
		label: $.t("v:signpost.label.innAtTheCrossroads"),
		popup: $.t("v:signpost.desc.innAtTheCrossroads")
	}, { // NW Velen
		coords: [[143.859, 52.156]],
		label: $.t("v:signpost.label.harpyFeedingGround"),
		popup: $.t("v:signpost.desc.harpyFeedingGround")
	}, {
		coords: [[150.906, 46.625]],
		label: $.t("v:signpost.label.lornruk"),
		popup: $.t("v:signpost.desc.lornruk")
	}, {
		coords: [[126.828, 57.891]],
		label: $.t("v:signpost.label.heatherton"),
		popup: $.t("v:signpost.desc.heatherton")
	}, {
		coords: [[128.688, 49.313]],
		label: $.t("v:signpost.label.abandonedTower"),
		popup: $.t("v:signpost.desc.abandonedTower")
	}, {
		coords: [[129.781, 40.859]],
		label: $.t("v:signpost.label.isolatedShack"),
		popup: $.t("v:signpost.desc.isolatedShack")
	}, {
		coords: [[107.016, 54.078]],
		label: $.t("v:signpost.label.blackbough"),
		popup: $.t("v:signpost.desc.blackbough")
	}, {
		coords: [[103.656, 40.563]],
		label: $.t("v:signpost.label.hangmansAlley"),
		popup: $.t("v:signpost.desc.hangmansAlley")
	}, {
		coords: [[97.219, 74.875]],
		label: $.t("v:signpost.label.crowsPerch"),
		popup: $.t("v:signpost.desc.crowsPerch")
	}, {
		coords: [[83.781, 88.406]],
		label: $.t("v:signpost.label.boatmakersHut"),
		popup: $.t("v:signpost.desc.boatmakersHut")
	}, {
		coords: [[86.516, 27.609]],
		label: $.t("v:signpost.label.refugeesCamp"),
		popup: $.t("v:signpost.desc.refugeesCamp")
	}, {
		coords: [[92.203, 28.359]],
		label: $.t("v:signpost.label.coastOfWrecks"),
		popup: $.t("v:signpost.desc.coastOfWrecks")
	}, {
		coords: [[82.688, 42.859]],
		label: $.t("v:signpost.label.midcopse"),
		popup: $.t("v:signpost.desc.midcopse")
	}, {
		coords: [[78.109, 57.844]],
		label: $.t("v:signpost.label.wastrelManor"),
		popup: $.t("v:signpost.desc.wastrelManor")
	}, {
		coords: [[71.516, 103.234]],
		label: $.t("v:signpost.label.banditsCamp"),
		popup: $.t("v:signpost.desc.banditsCamp")
	}, {
		coords: [[69.109, 75.000]],
		label: $.t("v:signpost.label.oreton"),
		popup: $.t("v:signpost.desc.oreton")
	}, {
		coords: [[91.438, 37.625]],
		label: $.t("v:signpost.label.forestHut"),
		popup: $.t("v:signpost.desc.forestHut")
	}, {
		coords: [[118.281, 68.047]],
		label: $.t("v:signpost.label.wolvenGlade"),
		popup: $.t("v:signpost.desc.wolvenGlade")
	}, {
		coords: [[106.688, 84.781]],
		label: $.t("v:signpost.label.burnedRuins"),
		popup: $.t("v:signpost.desc.burnedRuins")
	}, {
		coords: [[89.984, 61.938]],
		label: $.t("v:signpost.label.trollBridge"),
		popup: $.t("v:signpost.desc.trollBridge")
	}, {
		coords: [[82.281, 70.359]],
		label: $.t("v:signpost.label.claywich"),
		popup: $.t("v:signpost.desc.claywich")
	}, {
		coords: [[58.672, 99.766]],
		label: $.t("v:signpost.label.drudge"),
		popup: $.t("v:signpost.desc.drudge")
	}, { // SW Velen
		coords: [[68.141, 22.922]],
		label: $.t("v:signpost.label.condyle"),
		popup: $.t("v:signpost.desc.condyle")
	}, {
		coords: [[65.422, 36.578]],
		label: $.t("v:signpost.label.duenHen"),
		popup: $.t("v:signpost.desc.duenHen")
	}, {
		coords: [[49.875, 78.141]],
		label: $.t("v:signpost.label.fykeIsle"),
		popup: $.t("v:signpost.desc.fykeIsle")
	}, {
		coords: [[39.219, 47.703]],
		label: $.t("v:signpost.label.byways"),
		popup: $.t("v:signpost.desc.byways")
	}, {
		coords: [[25.406, 78.266]],
		label: $.t("v:signpost.label.frischlow"),
		popup: $.t("v:signpost.desc.frischlow")
	}, {
		coords: [[33.813, 98.703]],
		label: $.t("v:signpost.label.olenasGrove"),
		popup: $.t("v:signpost.desc.olenasGrove")
	}, { // SE Velen
		coords: [[32.125, 120.547]],
		label: $.t("v:signpost.label.roadToBaldMountain"),
		popup: $.t("v:signpost.desc.roadToBaldMountain")
	}, {
		coords: [[25.000, 149.563]],
		label: $.t("v:signpost.label.destroyedBastion"),
		popup: $.t("v:signpost.desc.destroyedBastion")
	}, {
		coords: [[41.250, 157.594]],
		label: $.t("v:signpost.label.crossroadsVillage"),
		popup: $.t("v:signpost.desc.crossroadsVillage")
	}, {
		coords: [[37.828, 206.734]],
		label: $.t("v:signpost.label.nilfgaardianArmyGroupCenterCamp"),
		popup: $.t("v:signpost.desc.nilfgaardianArmyGroupCenterCamp")
	}, {
		coords: [[46.219, 198.172]],
		label: $.t("v:signpost.label.houseOfRespite"),
		popup: $.t("v:signpost.desc.houseOfRespite")
	}, {
		coords: [[59.203, 186.266]],
		label: $.t("v:signpost.label.kimboltWay"),
		popup: $.t("v:signpost.desc.kimboltWay")
	}, {
		coords: [[62.953, 143.797]],
		label: $.t("v:signpost.label.theOrphansOfCrookbackBog"),
		popup: $.t("v:signpost.desc.theOrphansOfCrookbackBog")
	}, {
		coords: [[66.625, 154.531]],
		label: $.t("v:signpost.label.ruinedTower"),
		popup: $.t("v:signpost.desc.ruinedTower")
	}, {
		coords: [[55.734, 159.281]],
		label: $.t("v:signpost.label.ancientOak"),
		popup: $.t("v:signpost.desc.ancientOak")
	}, {
		coords: [[76.219, 149.703]],
		label: $.t("v:signpost.label.downwarren"),
		popup: $.t("v:signpost.desc.downwarren")
	}, {
		coords: [[82.016, 135.516]],
		label: $.t("v:signpost.label.dragonslayersGrotto"),
		popup: $.t("v:signpost.desc.dragonslayersGrotto")
	}, {
		coords: [[88.328, 149.813]],
		label: $.t("v:signpost.label.reardonManor"),
		popup: $.t("v:signpost.desc.reardonManor")
	}, {
		coords: [[86.313, 175.969]],
		label: $.t("v:signpost.label.benek"),
		popup: $.t("v:signpost.desc.benek")
	}, {
		coords: [[100.563, 164.641]],
		label: $.t("v:signpost.label.toderas"),
		popup: $.t("v:signpost.desc.toderas")
	}, {
		coords: [[101.938, 136.266]],
		label: $.t("v:signpost.label.lurtch"),
		popup: $.t("v:signpost.desc.lurtch")
	}, {
		coords: [[99.906, 109.500]],
		label: $.t("v:signpost.label.lindenvale"),
		popup: $.t("v:signpost.desc.lindenvale")
	}, {
		coords: [[115.656, 156.328]],
		label: $.t("v:signpost.label.maraudersBridge"),
		popup: $.t("v:signpost.desc.maraudersBridge")
	}, {
		coords: [[111.234, 178.766]],
		label: $.t("v:signpost.label.grotto"),
		popup: $.t("v:signpost.desc.grotto")
	}, { // New
		coords: [[197.203125, 225.640625]],
		label: $.t("v:signpost.label.arns"),
		popup: $.t("v:signpost.desc.arns")
	}, {
		coords: [[254, 153.3125]],
		label: $.t("v:signpost.label.bowdon"),
		popup: $.t("v:signpost.desc.bowdon")
	}, {
		coords: [[243.34375, 197.46875]],
		label: $.t("v:signpost.label.brun"),
		popup: $.t("v:signpost.desc.brun")
	}, {
		coords: [[240.75, 69.75]],
		label: $.t("v:signpost.label.crane"),
		popup: $.t("v:signpost.desc.crane")
	}, {
		coords: [[217.5625, 184.625]],
		label: $.t("v:signpost.label.draken"),
		popup: $.t("v:signpost.desc.draken")
	}, {
		coords: [[203.28125, 207.4375]],
		label: $.t("v:signpost.label.erde"),
		popup: $.t("v:signpost.desc.erde")
	}, {
		coords: [[240.9375, 175.625]],
		label: $.t("v:signpost.label.garin"),
		popup: $.t("v:signpost.desc.garin")
	}, {
		coords: [[176.34375, 209.875]],
		label: $.t("v:signpost.label.heddel"),
		popup: $.t("v:signpost.desc.heddel")
	}, {
		coords: [[258.03125, 128.6875]],
		label: $.t("v:signpost.label.hunter"),
		popup: $.t("v:signpost.desc.hunter")
	}, {
		coords: [[213.625, 221.8125]],
		label: $.t("v:signpost.label.kilker"),
		popup: $.t("v:signpost.desc.kilker")
	}, {
		coords: [[239.3125, 211.5625]],
		label: $.t("v:signpost.label.mill"),
		popup: $.t("v:signpost.desc.mill")
	}, {
		coords: [[195.875, 192.125]],
		label: $.t("v:signpost.label.vikk"),
		popup: $.t("v:signpost.desc.vikk")
	}, {
		coords: [[228.21875, 197.5]],
		label: $.t("v:signpost.label.voneverec"),
		popup: $.t("v:signpost.desc.voneverec")
	}, {
		coords: [[221, 217.96875]],
		label: $.t("v:signpost.label.zuetzer"),
		popup: $.t("v:signpost.desc.zuetzer")
	}],

	// Smugglers' Cache
	smugglers: [{
		coords: [
			// Novigrad
			[193.547, 103.891],
			[201.000, 121.516],
			// S Novigrad
			[183.547, 68.297],
			// NW Velen
			[75.844, 15.000]
		],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}],

	// Spoils of War
	spoils: [{ // NE Velen
		coords: [[153.609, 79.109]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: ''})
	}, { // NW Velen
		coords: [[111.500, 105.250]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>)'})
	}, { // SW Velen
		coords: [[46.078, 24.953]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 10<span> ' + $.t("v:monsters.drowners") + '</span>)'})
	}],
	
	// Treasure
	treasure: [{ //Surface Treause
		coords: [
			[101.094, 25.344],
			[97.656, 26.375],
			[97.375, 28.438],
			[89.938, 25.438],
			[91.625, 36.906],
			[90.563, 66.953],
			[103.781, 73.484],
			[103.172, 74.625],
			[103.766, 76.516],
			[107.828, 92.938],
			[119.453, 68.688],
			[128.875, 50.578],
			[139.953, 59.344],
			[143.422, 52.844],
			[52.219, 61.594],
			[53.375, 67.188],
			[54.656, 77.969],
			[55.094, 79.250],
			[51.188, 77.813],
			[50.469, 80.094],
			[72.500, 113.469],
			[99.438, 108.906],
			[100.500, 117.313],
			[84.344, 150.063],
			[68.281, 143.719],
			[59.844, 143.438],
			[56.594, 145.375],
			[50.781, 175.438],
			[86.750, 168.531],
			[128.094, 161.031],
			[130.344, 116.188],
			[129.703, 119.688],
			[136.656, 125.422],
			[153.391, 135.344],
			[151.344, 142.000],
			[173.656, 78.063],
			[193.531, 66.188],
			[191.250, 194.969],
			[213.563, 111.094],
			[30.344, 47.063],
			[28.906, 50.469],
			[39.531, 48.438],
			[39.094, 48.250],
			[44.656, 40.125],
			[51.875, 51.563],
			[52.625, 50.500],
			[47.844, 77.094],
			[86.094, 25.625],
			[71.938, 60.281],
			[37.969, 125.688],
			[52.219, 129.844],
			[33.844, 146.594],
			[44.438, 156.594],
			[94.813, 183.438],
			[109.125, 173.906],
			[127.719, 166.406],
			[124.594, 147.406],
			[143.719, 118.500],
			[148.281, 119.875],
			[168.094, 98.125],
			[220.188, 105.844],
			[249.594, 144.531],
			[227.281, 216.844],
			[199.750, 186.969],
			[186.719, 166.750],
			[146.281, 180.063],
			[144.625, 193.813],
			[157.375, 128.344]
		],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desk")
	}, { //Underwater Treause
		coords: [
			[97.531, 18.719],
			[98.313, 17.094],
			[153.500, 69.266],
			[83.188, 95.531],
			[67.750, 99.719],
			[50.344, 99.531],
			[38.531, 81.875],
			[39.344, 72.625],
			[43.125, 106.063],
			[43.563, 110.719],
			[40.781, 111.594],
			[39.875, 72.188],
			[38.781, 72.250],
			[113.063, 153.750],
			[115.125, 154.750],
			[117.469, 151.844],
			[114.625, 136.594],
			[158.063, 94.750],
			[220.625, 99.563],
			[203.000, 98.375],
			[38.063, 124.500],
			[208.031, 120.156]
		],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desk")
	}]
};
