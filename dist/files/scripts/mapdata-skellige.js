window.map_path   = 'skellige';
window.map_sWest  = L.latLng(-85.05, -180);
window.map_nEast  = L.latLng(79.30, 135);
window.map_center = [-30, -23];
window.map_minZoom  = 2;
window.map_mZoom  = 6;
window.map_Zoom  = 2;
window.mapdata_skellige = {
// Abandoned Site
	abandoned: [{ // Hindarsfjall
		coords: [[-32.916, 85.562]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 15<span> ' + $.t("s:monsters.wolves") + '</span>)'
	}, {
		coords: [[-35.996, 92.439]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 13<span> ' + $.t("s:monsters.harpies") + '</span>)'
	}, { // Ard Skellig
		coords: [[-23.745, -19.841]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'
	}, {
		coords: [[-45.522, -49.570]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[-59.0405546167585, -2.79052734375]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	// Alchemy Supplies
	alchemy: [{
		coords: [[-20.468, 93.318]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}, {
		coords: [[-28.208, -26.147]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}, {
		coords: [[-19.705, 17.314]],
		label: $.t("s:alchemy.gremist.label"),
		popup: $.t("s:alchemy.gremist.desc")
	}],

	// Armourer
	armourer: [{ // Hindarsfjall
		coords: [[-29.037, 98.569]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}, { // An Skellig
		coords: [[49.253, 39.243]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}, { // Ard Skellig
		coords: [[-62.492, -37.705]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[2.965, -40.210]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}],

	// Armourer's Table
	armourerstable: [{
		coords: [
			// Hindarsfjall
			[-28.159, 101.851],
			[-28.825, 98.062],
			[-32.806, 84.771],
			// An Skellig
			[50.247, 39.529],
			// Spikeroog
			[33.560, -111.445],
			// Ard Skellig
			[-62.127, -37.375],
			[-39.455, -63.127],
			[2.826, -40.997],
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	// Bandit Camp
	banditcamp: [{
		coords: [
			// Sea
			[20.797, 38.848],
		],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}, { // Spikeroog
		coords: [[21.861, -121.047]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, { // Ard Skellig
		coords: [[-29.459, -17.886]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 15<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[-61.260, -50.669]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[-14.562, 27.861]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[5.616, 15.557]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}],

	// Barber
	barber: [{
		coords: [
			// Spikeroog
			[31.072, -111.973],
			[-3.601, -34.277],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

	// Blacksmith
	blacksmith: [{ // Faroe
		coords: [[-77.390, 50.142]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Hindarsfjall
		coords: [[-28.613, 102.458]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // An Skellig
		coords: [[50.641, 38.013]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Spikeroog
		coords: [[33.101, -111.709]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Ard Skellig
		coords: [[-62.007, -37.903]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[-39.504, -63.647]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[-37.265, -32.014]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/-33.724/-39.990">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[-56.945, -15.513]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[3.141, -40.649]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}],

	// Boat
	boat: [{
		coords: [
			[-43.54854811, -137.9882813],
			[-51.26191485, -108.984375],
			[-77.06895357, 51.50390625],
			[-78.64731965, 69.609375],
			[-3.864254616, 82.04589844],
			[-31.09057409495418, 81.0791015625],
			[-26.27371402, 99.00878906],
			[36.17335694, -16.69921875],
			[47.75409798, 28.56445313],
			[48.3124279, 37.30957031],
			[48.45835188, 38.49609375],
			[-8.428904093, -94.04296875],
			[40.48038143, -112.9833984],
			[-64.77412531, -49.41650391],
			[-64.04336281, -50.09765625],
			[-36.01356059, -61.41357422],
			[-22.69512018, -75.43212891],
			[-57.13623932, -13.62304688],
			[-59.50087955, -2.504882813],
			[-45.53713668, 26.14746094],
			[-12.44730485, 26.08154297],
			[-29.5925654, -28.91601563],
			[10.6822006, -22.74169922],
			[-0.922811663, -37.22167969],
			[-6.555474602201876, -40.8251953125],
			[-7.01366792756663, -40.78125],
			[-30.939924331023455, 28.125],
			[12.85464890558895, 11.865234375],
			[-15.199386048559994, 85.517578125]
		],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	}],

	// Brothel
	brothel: [],

	// Contracts
	contracts: [{
		coords: [[-55.46639936, -14.98535156]],
		label: $.t("s:contracts.label.dragon"),
		popup: $.t("s:contracts.desc.dragon")
	}, {
		coords: [[32.00807596, -110.9619141]],
		label: $.t("s:contracts.label.groom"),
		popup: $.t("s:contracts.desc.groom")
	}, {
		coords: [[-30.4676141, -1.58203125]],
		label: $.t("s:contracts.label.miners"),
		popup: $.t("s:contracts.desc.miners")
	}, {
		coords: [[-29.03696065, -26.43310547]],
		label: $.t("s:contracts.label.missing"),
		popup: $.t("s:contracts.desc.missing")
	}, {
		coords: [[-6.511814706, -37.04589844]],
		label: $.t("s:contracts.label.muire"),
		popup: $.t("s:contracts.desc.muire")
	}, {
		coords: [[-55.91227293, -14.74365234]],
		label: $.t("s:contracts.label.wanted"),
		popup: $.t("s:contracts.desc.wanted")
	}, {
		coords: [[-29.43959757, 98.19580078]],
		label: $.t("s:contracts.label.beast"),
		popup: $.t("s:contracts.desc.beast")
	}, {
		coords: [[-42.85985982, -62.64404297]],
		label: $.t("s:contracts.label.eldberg"),
		popup: $.t("s:contracts.desc.eldberg")
	}, {
		coords: [[-38.94232098, -31.92626953]],
		label: $.t("s:contracts.label.heart"),
		popup: $.t("s:contracts.desc.heart")
	}],

	// Entrance
	// todo, entrance to what?
	entrance: [{ // Faroe
		coords: [[-78.469, 43.484]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-77.250, 44.187]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Hindarsfjall
		coords: [[-17.036, 91.230]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-18.750, 88.022]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-18.813, 108.677]],
		label: $.t("entranceunderwatercave.label"),
		popup: $.t("entranceunderwatercave.desc")
	}, {
		coords: [[-25.205, 92.769]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-28.033, 89.912]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-29.955, 94.131]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // An Skellig
		coords: [[50.317, 33.289]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Spikeroog
		coords: [[17.225, -123.640]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Eastern Islands
		coords: [[-15.623, -139.043]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Undvik
		coords: [[-51.727, -134.517]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-60.791, -127.375]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-61.470, -122.278]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-56.933, -124.343]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-59.108, -111.313]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Ard Skellig
		coords: [[-71.124, -8.525]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-69.756, -8.503]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-69.938, -23.906]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-52.389, -42.473]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-45.722, -30.256]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-23.322, -67.983]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-18.396, -38.804]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-56.801, 23.379]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-54.581, 12.964]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-47.145, 17.468]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-44.072, 6.350]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-12.897, -13.667]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-13.240, -27.598]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-20.056, 17.446]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-1.801, -1.099]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[9.926, -22.168]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	// Events
	event: [{
		coords: [[-43.83452678, -59.67773438]],
		label: $.t("s:event.label.wild"),
		popup: $.t("s:event.desc.wild")
	}, {
		coords: [[-57.06463027, -49.41650391]],
		label: $.t("s:event.label.farting"),
		popup: $.t("s:event.desc.farting")
	}, {
		coords: [[-43.37311218, -54.60205078]],
		label: $.t("s:event.label.children"),
		popup: $.t("s:event.desc.children")
	}, {
		coords: [[-39.55488306, -53.02001953]],
		label: $.t("s:event.label.siren"),
		popup: $.t("s:event.desc.siren")
	}, {
		coords: [[-76.49117927, 63.78662109]],
		label: $.t("s:event.label.hemdall"),
		popup: $.t("s:event.desc.hemdall")
	}, {
		coords: [[-46.67959447, -6.899414063]],
		label: $.t("s:event.label.woe"),
		popup: $.t("s:event.desc.woe")
	}, {
		coords: [[-2.262595301, -0.461425781]],
		label: $.t("s:event.label.yustianna"),
		popup: $.t("s:event.desc.yustianna")
	}],

	// Grindstone
	grindstone: [{
		coords: [
			// Faroe
			[-77.355, 50.647],
			// Hindarsfjall
			[-28.420, 102.119],
			[-28.929, 97.754],
			[-32.990, 84.902],
			// An Skellig
			[50.499, 39.836],
			// Spikeroog
			[33.340, -111.357],
			// Ard Skellig
			[-62.390, -37.156],
			[-39.317, -62.996],
			[-23.564, -20.522],
			[2.526, -40.957],
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	// Guarded Treasure
	guarded: [{
		coords: [
			// Sea
			[-73.788, 20.347],
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}, { // Undvik
		coords: [[-46.134, -120.586]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-69.877, -160.225]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, { // Faroe
		coords: [[-75.958, 43.835]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, { // Hindarsfjall
		coords: [[-22.472, 85.386]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.wraiths.wraith") + '</span>)'})
	}, { // Ard Skellig
		coords: [[-46.815, -37.639]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 19<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[5.791, -17.754]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.gargoyles") + '</span> and lvl 30<span> ' + $.t("s:monsters.elemental.ice") + '</span>)'})
	}, {
		coords: [[-21.678, -32.717]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 14<span> ' + $.t("s:monsters.wyvern") + '</span>)'})
	}, {
		coords: [[-23.765, 23.291]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 27<span> ' + $.t("s:monsters.elemental.earth") + '</span>)'})
	}, {
		coords: [[-53.278, -63.413]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, {
		coords: [[-13.625, -43.506]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 7<span> ' + $.t("s:monsters.wraiths.wraiths") + '</span>)'})
	}, {
		coords: [[-70.873, -5.625]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 19<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-66.531, -15.908]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-26.392, -5.142]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 23<span> ' + $.t("s:monsters.wraiths.wraiths") + '</span>)'})
	}, { // Sea
		coords: [[53.801, -64.336]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[55.826, -30.674]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[59.623, -26.279]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[61.058, -17.754]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[57.845, -1.670]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 32<span> ' + $.t("s:monsters.basilisk") + '</span>)'})
	}, {
		coords: [[28.111, 91.406]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.bear") + '</span>)'})
	}, {
		coords: [[55.279, -40.869]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[-70.215, 35.552]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}],

	// Gwent Player
	gwent: [{ // Faroe
		coords: [[-77.455, 49.227]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-77.350, 50.242]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, { // Hindarsfjall
		coords: [[-29.206, 99.662]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-28.985, 100.993]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-28.513, 102.658]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-28.937, 98.769]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, { // An Skellig
		coords: [[50.701, 38.203]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[50.669, 40.630]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[49.313, 39.443]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, { // Spikeroog
		coords: [[33.201, -111.909]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[31.360, -110.856]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[31.361, -112.799]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, { // Ard Skellig
		coords: [[-62.442, -37.585]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-61.917, -37.753]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-64.003, -47.744]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-42.031, -61.873]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-39.404, -63.487]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-37.165, -31.814]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player") + ' ' + $.t("pid.rescue") + ' <a href="#6/-33.724/-39.990">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[-37.584, -29.837]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-56.435, -13.731]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-56.845, -15.313]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[3.085, -40.010]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[3.241, -40.449]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-30.576, -2.481]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-5.997, -34.407]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.herbalist"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-3.194, -35.967]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-19.555, 17.514]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.gremist"),
		popup: $.t("s:gwent.desc.player")
	}],

	// Harbor
	harbor: [{
		coords: [
			[-6.075, -40.496],
			[11.265, -23.005],
			[-28.498, -28.696],
			[-38.514, -65.544],
			[-23.403, -75.388],
			[-50.972, -106.721],
			[-43.628, -116.301],
			[-64.053, -52.207],
			[-76.496, 53.394],
			[-58.101, -12.349],
			[-59.955, -2.944],
			[-57.065, 25.796],
			[-25.681, 100.767],
			[-31.915, 26.938],
			[47.725, 38.628],
			[32.769, -107.974],
			[-14.477, -141.064],
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	// Herbalist
	herbalist: [{
		coords: [
			// Ard Skellig
			[-32.473, 14.722],
			[-6.097, -34.607],
		],
		label: $.t("herbalist.label"),
		popup: $.t("alchemy.desc")
	}, { // New
		coords: [[-39.096, -6.965]],
		label: $.t("herbalist.label"),
		popup: $.t("alchemy.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/-39.062/-6.086">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Hidden Treasure
	hidden: [{
		coords: [
			// An Skellig
			[46.905, 46.582],
			// Undvik
			[-46.073, -133.835],
			[-56.317, -150.073],
			// Ard Skellig
			[-40.028, -18.083],
			[-38.857, -26.543],
			[2.021, -21.709],
			// Sea
			[38.788, -21.533],
			[-65.658, 41.396],
			[-78.044, -41.968],
			[63.666, -88.154],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}, { // Spikeroog
		coords: [[26.274, -104.238]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[27.020, -95.977]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, { // Undvik
		coords: [[-55.937, -121.223]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, { // Eastern Islands
		coords: [[-12.039, -98.701]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 12-14<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, { // Faroe
		coords: [[-78.469, 42.957]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 9<span> ' + $.t("s:monsters.endrega") + '</span>)'})
	}, { // Ard Skellig
		coords: [[-36.315, 0.264]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[-58.825, -3.735]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-32.287, -50.757]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 19<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-72.262, 5.317]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-21.739, 30.498]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 30<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, {
		coords: [[-24.127, -69.829]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, { // Sea
		coords: [[4.083, -78.223]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[31.541, -65.566]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[50.373, -7.515]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}],

	// Innkeep
	innkeep: [{ // Faroe
		coords: [[-77.485, 49.007]],
		label: $.t("s:innkeep.inns.harvikenInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, { // Hindarsfjall
		coords: [[-29.075, 100.723]],
		label: $.t("s:innkeep.inns.houseOfWarriors"),
		popupTitle: $.t("s:innkeep.popup"),
		popup: $.t("s:innkeep.desc.foodAndDrink")
	}, { // An Skellig
		coords: [[50.569, 40.430]],
		label: $.t("s:innkeep.inns.uriallaHarbourInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, { // Spikeroog
		coords: [[31.241, -113.049]],
		label: $.t("s:innkeep.inns.svorlagInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, { // Ard Skellig
		coords: [[-42.131, -62.073]],
		label: $.t("s:innkeep.inns.arinbjornInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[-3.294, -36.167]],
		label: $.t("s:innkeep.inns.theNewPort"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}],

	// Monster Den
	monsterden: [{
		coords: [
			// Faroe
			[-78.587, 68.071],
			[-77.133, 56.646],
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	}, { // Ard Skellig
		coords: [[-2.416, -21.841]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 31<span> ' + $.t("s:monsters.ghost") + '</span>)'})
	}, {
		coords: [[-50.078, -33.245]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 8<span> ' + $.t("s:monsters.nekkers") + '</span> and lvl 12<span> ' + $.t("s:monsters.nekkerWarrior") + '</span>)'})
	}, { // An Skellig
		coords: [[-10.401, 1.758]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 29<span> ' + $.t("s:monsters.wraiths.wraiths") + '</span>)'})
	}, {
		coords: [[-5.922, 8.262]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.alghouls") + '</span>)'})
	}],

	// Monster Nest
	monsternest: [{ // An Skellig
		coords: [[50.458, 26.521]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.harpies") + '</span>)'})
	}, {
		coords: [[-23.544, -37.551]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 19<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[-59.074, -24.521]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.harpies") + '</span>)'})
	}, {
		coords: [[-24.827, -29.070]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, { // Ard Skellig
		coords: [[-59.120, -4.131]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span> and lvl 19<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}],

	// Notice Board
	notice: [{
		coords: [
			// Hindarsfjall
			[-28.343, 100.239],
			// Spikeroog
			[31.996, -111.313],
			// Ard Skellig
			[-63.095, -43.594],
			[-42.844, -62.996],
			[-27.547, -25.005],
			[-55.454, -15.337],
			[-30.468, -1.890],
			[-6.905, -35.178],
		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [{ // Ard Skellig
		coords: [[-33.633, -40.298]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/-37.265/-31.707">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[-38.994, -6.372]],
		label:  $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'}) + ' ' + $.t("pid.afterrescue") + ' <a href="#6/-39.096/-6.965">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Place of Power
	pop: [{ // Faroe
		coords: [[-76.851, 40.891]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}, { // An Skellig
		coords: [[54.496, 35.903]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}, { // Spikeroog
		coords: [[34.343, -120.564]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, { // Ard Skellig
		coords: [[-57.350, -48.604]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-24.667, -36.497]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-32.194, 15.710]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[4.784, -42.451]],
		label: $.t("pop.label*"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("s:pop.desc.kingsGambit")
	}, {
		coords: [[-21.576, 29.795]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[4.390, -25.708]],
		label: $.t("pop.label*"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("s:pop.desc.sunstone")
	}],

	// Point of Interest
	poi: [{ // Faroe
		coords: [[-76.985, 57.788]],
		label: $.t("s:poi.label.juttaAnDimun"),
		popup: $.t("s:poi.desc.juttaAnDimun")
	}, {
		coords: [[-62.8, -39]],
		label: $.t("s:poi.label.jarlMadmanLugos"),
		popupTitle:  $.t("s:poi.popupTitle.jarlMadmanLugos"),
		popup: $.t("s:poi.desc.jarlMadmanLugos")
	}],

	// Scavengers
	scavenger: [{
		coords: [[-77.147, 58.162]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	}, {
		coords: [[-12.297, 0.769]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	}, {
		coords: [[-50, -34.5]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	}, {
		coords: [[-70.5, -8.6]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	}, {
		coords: [[-40.112, -14.546]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	}, {
		coords: [[54.5, 32]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	}, {
		coords: [[-56.55948248, 23.18115234]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	}, {
		coords: [[-57.404, -49.349]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	}, {
		coords: [[17.8, -123.5]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.cross") + $.t("scavenger.level.1")
	}, {
		coords: [[-1.274, -11.931]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	}, {
		coords: [[5.5, -17]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	}, {
		coords: [[-6.053161296, 7.580566406]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	}, {
		coords: [[-58.344, -2.549]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	}, {
		coords: [[-11.5015569, -100.1293945]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	}, {
		coords: [[-45.93587062, -102.65625]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	}, {
		coords: [[-59.221, -23.73]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.3")
	}, {
		coords: [[-58.043, -107.886]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	}, {
		coords: [[-37.44, -21.907]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4")
	}, {
		coords: [[-46.119, -57.437]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	}, {
		coords: [[-27.722, 73.894]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	}, {
		coords: [[22.634, -120.85]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.4")
	}, {
		coords: [[-78.039, 68.049]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	}, {
		coords: [[-22, 31]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	}, {
		coords: [[8.559, 13.733]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	}, {
		coords: [[53.8, 38.5]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	}],

	// Shopkeeper
	shopkeeper: [{ // Hindarsfjall
		coords: [[-29.306, 99.492]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	}, { // Spikeroog
		coords: [[31.260, -111.006]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	}, { // Ard Skellig
		coords: [[-64.063, -47.944]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFishAndSaddles")
	}, {
		coords: [[-60.555, -51.416]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-42.747, -58.535]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-43.229, -49.175]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-32.045, -17.996]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-24.107, -22.632]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-37.684, -30.037]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-56.535, -13.931]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	}, {
		coords: [[-22.837, -20.522]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:misc.liberated") + $.t("s:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[-30.676, -2.681]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFoodAndDrink")
	}, {
		coords: [[-14.541, -32.080]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-7.559, -40.408]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-3.401, -34.077]],
		label: $.t("s:shopkeeper.label.tailor"),
		popup: $.t("s:shopkeeper.desc.clothesAndCraftingSupplies") + $.t("s:shopkeeper.desc.barber")
	}, {
		coords: [[-8.581, -34.321]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}],

	// Sidequests
	sidequests: [{
		coords: [[-43.54854811, 8.459472656]],
		label: $.t("s:sidequests.label.beloved"),
		popup: $.t("s:sidequests.desc.beloved")
	}, {
		coords: [[-25.62171596, -67.06054688]],
		label: $.t("s:sidequests.label.horn"),
		popup: $.t("s:sidequests.desc.horn")
	}, {
		coords: [[-28.43971382, 101.5576172]],
		label: $.t("s:sidequests.label.passenger"),
		popup: $.t("s:sidequests.desc.passenger")
	}, {
		coords: [[-24.50714328, 8.393554688]],
		label: $.t("s:sidequests.label.sawmill"),
		popup: $.t("s:sidequests.desc.sawmill")
	}, {
		coords: [[-3.272145635, -35.57373047]],
		label: $.t("s:sidequests.label.unpaid"),
		popup: $.t("s:sidequests.desc.unpaid")
	}, {
		coords: [[-32.93492867, -19.90722656]],
		label: $.t("s:sidequests.label.assault"),
		popup: $.t("s:sidequests.desc.assault")
	}, {
		coords: [[-46.22545288, -24.01611328]],
		label: $.t("s:sidequests.label.brave"),
		popup: $.t("s:sidequests.desc.brave")
	}, {
		coords: [[1.406108835, -40.97900391]],
		label: $.t("s:sidequests.label.coronation"),
		popup: $.t("s:sidequests.desc.coronation")
	}, {
		coords: [[12.85464891, -15.42480469]],
		label: $.t("s:sidequests.label.punishment1"),
		popup: $.t("s:sidequests.desc.punishment1")
	}, {
		coords: [[-5.681583683, -19.42382813]],
		label: $.t("s:sidequests.label.punishment2"),
		popup: $.t("s:sidequests.desc.punishment2")
	}, {
		coords: [[12.49021366, 12.65625]],
		label: $.t("s:sidequests.label.keepers"),
		popup: $.t("s:sidequests.desc.keepers")
	}, {
		coords: [[30.9964459, -99.75585938]],
		label: $.t("s:sidequests.label.fistsc"),
		popup: $.t("s:sidequests.desc.fistsc")
	}, {
		coords: [[-6.882800242, -34.78271484]],
		label: $.t("s:sidequests.label.fistss"),
		popup: $.t("s:sidequests.desc.fistss")
	}, {
		coords: [[-77.24477981, 71.47705078]],
		label: $.t("s:sidequests.label.flesh"),
		popup: $.t("s:sidequests.desc.flesh")
	}, {
		coords: [[-29.40131951, 94.17480469]],
		label: $.t("s:sidequests.label.glory"),
		popup: $.t("s:sidequests.desc.glory")
	}, {
		coords: [[34.93998515, -20.52246094]],
		label: $.t("s:sidequests.label.spirit"),
		popup: $.t("s:sidequests.desc.spirit")
	}, {
		coords: [[-33.22949814, 43.19824219]],
		label: $.t("s:sidequests.label.fromfar"),
		popup: $.t("s:sidequests.desc.fromfar")
	}, {
		coords: [[-6.882800242, -34.40917969]],
		label: $.t("s:sidequests.label.gwents"),
		popup: $.t("s:sidequests.desc.gwents")
	}, {
		coords: [[-22.18740499, -8.525390625]],
		label: $.t("s:sidequests.label.hardtimes"),
		popup: $.t("s:sidequests.desc.hardtimes")
	}, {
		coords: [[-28.343064904825475, 100.52490234375]],
		label: $.t("s:sidequests.label.clothing"),
		popup: $.t("s:sidequests.desc.clothing")
	}, {
		coords: [[-77.07386965, 57.48046875]],
		label: $.t("s:sidequests.label.maiden"),
		popup: $.t("s:sidequests.desc.maiden")
	}, {
		coords: [[2.174770572, -41.52832031]],
		label: $.t("s:sidequests.label.gambit"),
		popup: $.t("s:sidequests.desc.gambit")
	}, {
		coords: [[31.01527898, -100.0634766]],
		label: $.t("s:sidequests.label.arena"),
		popup: $.t("s:sidequests.desc.arena")
	}, {
		coords: [[-13.75272466, -27.50976563]],
		label: $.t("s:sidequests.label.disturbed"),
		popup: $.t("s:sidequests.desc.disturbed")
	}, {
		coords: [[28.94086177, -112.565918]],
		label: $.t("s:sidequests.label.possession"),
		popup: $.t("s:sidequests.desc.possession")
	}, {
		coords: [[-19.78738018, 16.94091797]],
		label: $.t("s:sidequests.label.practicum"),
		popup: $.t("s:sidequests.desc.practicum")
	}, {
		coords: [[-21.75949973, 15.42480469]],
		label: $.t("s:sidequests.label.therapy"),
		popup: $.t("s:sidequests.desc.therapy")
	}, {
		coords: [[-61.10078883, -37.77099609]],
		label: $.t("s:sidequests.label.stranger"),
		popup: $.t("s:sidequests.desc.stranger")
	}, {
		coords: [[-45.32125436, 24.91699219]],
		label: $.t("s:sidequests.label.taken1"),
		popup: $.t("s:sidequests.desc.taken1")
	}, {
		coords: [[-20.20034601, 92.83447266]],
		label: $.t("s:sidequests.label.taken2"),
		popup: $.t("s:sidequests.desc.taken2")
	}, {
		coords: [[-69.82447077, -22.67578125]],
		label: $.t("s:sidequests.label.dreams"),
		popup: $.t("s:sidequests.desc.dreams")
	}, {
		coords: [[-19.37334071, -12.21679688]],
		label: $.t("s:sidequests.label.blade"),
		popup: $.t("s:sidequests.desc.blade")
	}, {
		coords: [[-29.01774802, 100.1953125]],
		label: $.t("s:sidequests.label.last"),
		popup: $.t("s:sidequests.desc.last")
	}, {
		coords: [[-56.36525013685607, -111.9726563]],
		label: $.t("s:sidequests.label.undvik"),
		popup: $.t("s:sidequests.desc.undvik")
	}, {
		coords: [[-32.24997446, -22.5]],
		label: $.t("s:sidequests.label.nithing"),
		popup: $.t("s:sidequests.desc.nithing")
	}, {
		coords: [[50.48547355, 38.91357422]],
		label: $.t("s:sidequests.label.warriors"),
		popup: $.t("s:sidequests.desc.warriors")
	}, {
		coords: [[-76.93055467, 50.18554688]],
		label: $.t("s:sidequests.label.price"),
		popup: $.t("s:sidequests.desc.price")
	}, {
		coords: [[-30.6757154, -4.636230469]],
		label: $.t("s:sidequests.label.grossbart"),
		popup: $.t("s:sidequests.desc.grossbart")
	}, {
		coords: [[50.40151532, 38.43017578]],
		label: $.t("s:sidequests.label.nowheres"),
		popup: $.t("s:sidequests.desc.nowheres")
	}, {
		coords: [[-7.31888173, -39.24316406]],
		label: $.t("s:sidequests.label.worthy1"),
		popup: $.t("s:sidequests.desc.worthy1")
	}, {
		coords: [[-14.8598504, -32.62939453]],
		label: $.t("s:sidequests.label.worthy2"),
		popup: $.t("s:sidequests.desc.worthy2")
	}, {
		coords: [[-32.58384933, -27.44384766]],
		label: $.t("s:sidequests.label.pursuitsfa"),
		popup: $.t("s:sidequests.desc.pursuitsfa")
	}, {
		coords: [[-28.76765911, 96.81152344]],
		label: $.t("s:sidequests.label.pursuitsg"),
		popup: $.t("s:sidequests.desc.pursuitsg")
	}, {
		coords: [[-40.94671367, -4.130859375]],
		label: $.t("s:sidequests.label.pursuitsfy"),
		popup: $.t("s:sidequests.desc.pursuitsfy")
	}, {
		coords: [[-27.68352808, -25.75195313]],
		label: $.t("s:sidequests.label.pursuitsk"),
		popup: $.t("s:sidequests.desc.pursuitsk")
	}, {
		coords: [[-58.79097841, -4.020996094]],
		label: $.t("s:sidequests.label.trfortune"),
		popup: $.t("s:sidequests.desc.trfortune")
	}, {
		coords: [[-36.29741819, 0.593261719]],
		label: $.t("s:sidequests.label.trpraised"),
		popup: $.t("s:sidequests.desc.trpraised")
	}, {
		coords: [[-78.46421682, 42.64892578]],
		label: $.t("s:sidequests.label.trdepths"),
		popup: $.t("s:sidequests.desc.trdepths")
	}, {
		coords: [[-40.02761444, -18.39111328]],
		label: $.t("s:sidequests.label.trinheritance"),
		popup: $.t("s:sidequests.desc.trinheritance")
	}, {
		coords: [[-65.6401549, 41.06689453]],
		label: $.t("s:sidequests.label.trironsides"),
		popup: $.t("s:sidequests.desc.trironsides")
	}, {
		coords: [[46.95026224, 46.91162109]],
		label: $.t("s:sidequests.label.trnilf"),
		popup: $.t("s:sidequests.desc.trnilf")
	}, {
		coords: [[26.31311264, -103.9746094]],
		label: $.t("s:sidequests.label.trdare"),
		popup: $.t("s:sidequests.desc.trdare")
	}, {
		coords: [[-24.12670196, -70.44433594]],
		label: $.t("s:sidequests.label.trpearls"),
		popup: $.t("s:sidequests.desc.trpearls")
	}, {
		coords: [[-46.02748185, -133.4838867]],
		label: $.t("s:sidequests.label.trprecious"),
		popup: $.t("s:sidequests.desc.trprecious")
	}, {
		coords: [[-56.20670398, -112.7416992]],
		label: $.t("s:sidequests.label.trruins"),
		popup: $.t("s:sidequests.desc.trruins")
	}, {
		coords: [[-55.88763545, -120.9594727]],
		label: $.t("s:sidequests.label.trshortcut"),
		popup: $.t("s:sidequests.desc.trshortcut")
	}, {
		coords: [[38.83970761, -21.15966797]],
		label: $.t("s:sidequests.label.trunlucky"),
		popup: $.t("s:sidequests.desc.trunlucky")
	}, {
		coords: [[-37.54457732, 2.746582031]],
		label: $.t("s:sidequests.label.trmarks"),
		popup: $.t("s:sidequests.desc.trmarks")
	}],

	// Sign Post
	signpost: [{ // Faroe
		coords: [[-77.490, 69.829]],
		label: $.t("s:signpost.label.trottheim"),
		popup: $.t("s:signpost.desc.trottheim")
	}, {
		coords: [[-77.206, 49.526]],
		label: $.t("s:signpost.label.harviken"),
		popup: $.t("s:signpost.desc.harviken")
	}, { // Hindarsfjall
		coords: [[-30.031, 99.272]],
		label: $.t("s:signpost.label.larvik"),
		popup: $.t("s:signpost.desc.larvik")
	}, {
		coords: [[-20.838, 86.177]],
		label: $.t("s:signpost.label.freyasGarden"),
		popup: $.t("s:signpost.desc.freyasGarden")
	}, {
		coords: [[-25.463, 81.563]],
		label: $.t("s:signpost.label.lofoten"),
		popup: $.t("s:signpost.desc.lofoten")
	}, {
		coords: [[-29.764, 82.375]],
		label: $.t("s:signpost.label.lofotenCemetery"),
		popup: $.t("s:signpost.desc.lofotenCemetery")
	}, {
		coords: [[-33.505, 85.144]],
		label: $.t("s:signpost.label.isolatedHut"),
		popup: $.t("s:signpost.desc.isolatedHut")
	}, {
		coords: [[-36.668, 91.604]],
		label: $.t("s:signpost.label.lurthen"),
		popup: $.t("s:signpost.desc.lurthen")
	}, { // An Skellig
		coords: [[52.882, 46.230]],
		label: $.t("s:signpost.label.trailToYngvarsFang"),
		popup: $.t("s:signpost.desc.trailToYngvarsFang")
	}, {
		coords: [[54.623, 35.376]],
		label: $.t("s:signpost.label.yngvarsFang"),
		popup: $.t("s:signpost.desc.yngvarsFang")
	}, {
		coords: [[50.092, 38.364]],
		label: $.t("s:signpost.label.uriallaHarbor"),
		popup: $.t("s:signpost.desc.uriallaHarbor")
	}, {
		coords: [[48.444, 27.510]],
		label: $.t("s:signpost.label.bayOfWinds"),
		popup: $.t("s:signpost.desc.bayOfWinds")
	}, { // Spikeroog
		coords: [[33.229, -99.470]],
		label: $.t("s:signpost.label.hov"),
		popup: $.t("s:signpost.desc.hov")
	}, {
		coords: [[32.380, -113.005]],
		label: $.t("s:signpost.label.svorlag"),
		popup: $.t("s:signpost.desc.svorlag")
	}, {
		coords: [[22.289, -121.509]],
		label: $.t("s:signpost.label.oldWatchtower"),
		popup: $.t("s:signpost.desc.oldWatchtower")
	}, { // Eastern Islands
		coords: [[-16.046, -139.482]],
		label: $.t("s:signpost.label.thePaliGapCoast"),
		popup: $.t("s:signpost.desc.thePaliGapCoast")
	}, {
		coords: [[-8.538, -94.922]],
		label: $.t("s:signpost.label.kaerAlmhult"),
		popup: $.t("s:signpost.desc.kaerAlmhult")
	}, { // Undvik
		coords: [[-52.456, -110.391]],
		label: $.t("s:signpost.label.marlinCoast"),
		popup: $.t("s:signpost.desc.marlinCoast")
	}, {
		coords: [[-58.984, -98.899]],
		label: $.t("s:signpost.label.gullPoint"),
		popup: $.t("s:signpost.desc.gullPoint")
	}, {
		coords: [[-56.377, -113.533]],
		label: $.t("s:signpost.label.dorveRuins"),
		popup: $.t("s:signpost.desc.dorveRuins")
	}, {
		coords: [[-61.365, -121.553]],
		label: $.t("s:signpost.label.clanTordarrochForge"),
		popup: $.t("s:signpost.desc.clanTordarrochForge")
	}, {
		coords: [[-58.367, -127.529]],
		label: $.t("s:signpost.label.urskar"),
		popup: $.t("s:signpost.desc.urskar")
	}, {
		coords: [[-54.801, -135.176]],
		label: $.t("s:signpost.label.abandonedVillage"),
		popup: $.t("s:signpost.desc.abandonedVillage")
	}, {
		coords: [[-43.133, -139.219]],
		label: $.t("s:signpost.label.torGvalchca"),
		popup: $.t("s:signpost.desc.torGvalchca")
	}, { // Ard Skellig
		coords: [[-70.707, -6.064]],
		label: $.t("s:signpost.label.elverumLighthouse"),
		popup: $.t("s:signpost.desc.elverumLighthouse")
	}, {
		coords: [[-58.939, -3.252]],
		label: $.t("s:signpost.label.ruinedInn"),
		popup: $.t("s:signpost.desc.ruinedInn")
	}, {
		coords: [[-55.004, -15.029]],
		label: $.t("s:signpost.label.fyresdal"),
		popup: $.t("s:signpost.desc.fyresdal")
	}, {
		coords: [[-63.085, -38.496]],
		label: $.t("s:signpost.label.kaerMuire"),
		popup: $.t("s:signpost.desc.kaerMuire")
	}, {
		coords: [[-64.539, -47.329]],
		label: $.t("s:signpost.label.holmsteinsPort"),
		popup: $.t("s:signpost.desc.holmsteinsPort")
	}, {
		coords: [[-54.098, -60.754]],
		label: $.t("s:signpost.label.wildShore"),
		popup: $.t("s:signpost.desc.wildShore")
	}, {
		coords: [[-50.958, -42.935]],
		label: $.t("s:signpost.label.fornhala"),
		popup: $.t("s:signpost.desc.fornhala")
	}, {
		coords: [[-54.763, 12.964]],
		label: $.t("s:signpost.label.distillery"),
		popup: $.t("s:signpost.desc.distillery")
	}, {
		coords: [[-56.837, 23.071]],
		label: $.t("s:signpost.label.grotto"),
		popup: $.t("s:signpost.desc.grotto")
	}, {
		coords: [[-47.145, -6.812]],
		label: $.t("s:signpost.label.palisade"),
		popup: $.t("s:signpost.desc.palisade")
	}, {
		coords: [[-43.165, -63.677]],
		label: $.t("s:signpost.label.arinbjorn"),
		popup: $.t("s:signpost.desc.arinbjorn")
	}, {
		coords: [[-40.212, -47.900]],
		label: $.t("s:signpost.label.sund"),
		popup: $.t("s:signpost.desc.sund")
	}, {
		coords: [[-36.351, -31.311]],
		label: $.t("s:signpost.label.fayrlund"),
		popup: $.t("s:signpost.desc.fayrlund")
	}, {
		coords: [[-41.311, -17.886]],
		label: $.t("s:signpost.label.boxholm"),
		popup: $.t("s:signpost.desc.boxholm")
	}, {
		coords: [[-29.306, -25.928]],
		label: $.t("s:signpost.label.rannvaig"),
		popup: $.t("s:signpost.desc.rannvaig")
	}, {
		coords: [[-30.827, -4.219]],
		label: $.t("s:signpost.label.blandare"),
		popup: $.t("s:signpost.desc.blandare")
	}, {
		coords: [[-32.064, 14.458]],
		label: $.t("s:signpost.label.druidsCamp"),
		popup: $.t("s:signpost.desc.druidsCamp")
	}, {
		coords: [[-30.940, 25.356]],
		label: $.t("s:signpost.label.redgill"),
		popup: $.t("s:signpost.desc.redgill")
	}, {
		coords: [[-25.642, 7.031]],
		label: $.t("s:signpost.label.abandonedSawmill"),
		popup: $.t("s:signpost.desc.abandonedSawmill")
	}, {
		coords: [[-21.882, 18.215]],
		label: $.t("s:signpost.label.gedyneith"),
		popup: $.t("s:signpost.desc.gedyneith")
	}, {
		coords: [[-13.475, 24.390]],
		label: $.t("s:signpost.label.whaleGraveyard"),
		popup: $.t("s:signpost.desc.whaleGraveyard")
	}, {
		coords: [[-21.002, -30.059]],
		label: $.t("s:signpost.label.crossroads"),
		popup: $.t("s:signpost.desc.crossroads")
	}, {
		coords: [[-16.341, -9.404]],
		label: $.t("s:signpost.label.minersCamp"),
		popup: $.t("s:signpost.desc.minersCamp")
	}, {
		coords: [[-14.520, -70.928]],
		label: $.t("s:signpost.label.eldbergLighthouse"),
		popup: $.t("s:signpost.desc.eldbergLighthouse")
	}, {
		coords: [[-12.512, 1.626]],
		label: $.t("s:signpost.label.kaerGelen"),
		popup: $.t("s:signpost.desc.kaerGelen")
	}, {
		coords: [[-7.067, -37.617]],
		label: $.t("s:signpost.label.KaerTroldeHarbor"),
		popup: $.t("s:signpost.desc.KaerTroldeHarbor")
	}, {
		coords: [[2.636, -38.650]],
		label: $.t("s:signpost.label.bridgeToKaerTrolde"),
		popup: $.t("s:signpost.desc.bridgeToKaerTrolde")
	}, {
		coords: [[-8.494, -18.171]],
		label: $.t("s:signpost.label.rogne"),
		popup: $.t("s:signpost.desc.rogne")
	}, {
		coords: [[-1.384, -1.956]],
		label: $.t("s:signpost.label.yustiannasGrotto"),
		popup: $.t("s:signpost.desc.yustiannasGrotto")
	}, {
		coords: [[2.724, 15.029]],
		label: $.t("s:signpost.label.giantsToes"),
		popup: $.t("s:signpost.desc.giantsToes")
	}, {
		coords: [[9.947, -22.039]],
		label: $.t("s:signpost.label.ancientCrypt"),
		popup: $.t("s:signpost.desc.ancientCrypt")
	}],

	// Smugglers' Cache
	smugglers: [{
		coords: [
			[-27.722, -50.098],
			[-23.080, -57.832],
			[-18.146, -48.955],
			[-10.185, -52.163],
			[-3.996, -61.304],
			[4.215, -57.173],
			[12.340, -56.865],
			[7.885, -68.423],
			[0.527, -91.846],
			[-18.355, -82.266],
			[-24.327, -80.771],
			[-21.576, -105.469],
			[-16.594, -121.992],
			[1.099, -119.971],
			[12.426, -101.250],
			[21.943, -72.949],
			[36.809, -30.366],
			[29.075, -33.706],
			[16.720, -35.288],
			[17.811, -24.829],
			[24.767, -10.942],
			[15.538, -3.560],
			[32.027, 8.833],
			[37.788, 47.813],
			[36.527, 43.154],
			[37.719, 33.926],
			[21.617, 48.691],
			[-7.362, 28.389],
			[2.328, 27.686],
			[-6.446, 38.848],
			[2.153, 37.793],
			[-10.617, 47.417],
			[-11.092, 59.985],
			[-11.092, 70.884],
			[-26.195, 60.029],
			[-56.705, 79.805],
			[-60.759, 40.430],
			[-62.042, 25.269],
			[-66.496, 3.120],
			[-68.544, 8.657],
			[-77.332, 13.623],
			[-76.321, -22.148],
			[-77.351, -47.065],
			[-78.853, -121.729],
			[-74.068, -79.365],
			[-70.613, -55.986],
			[-66.896, -83.145],
			[-57.374, -78.311],
			[-41.079, -76.421],
			[-41.673, -92.505],
			[-37.125, -97.383],
			[-36.510, -82.046],
			[53.8525266004495, 17.05078125]
		],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}, {
		coords: [[53.697, -55.371]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 19<span> " + $.t("s:monsters.echidna") + "</span> and lvl 13<span> " + $.t("s:monsters.sirens") + "</span>)"
	}, {
		coords: [[36.809, -62.007]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 13<span> " + $.t("s:monsters.sirens") + "</span>)"
	}, {
		coords: [[25.919, 84.463]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 13<span> " + $.t("s:monsters.sirens") + "</span>)"
	}, {
		coords: [[61.186, -90.264]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 16<span> " + $.t("s:monsters.echidna") + "</span>)"
	}, {
		coords: [[52.107, -22.500]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 18<span> " + $.t("s:monsters.drowners") + "</span>)"
	}, {
		coords: [[56.023, -8.877]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 16<span> " + $.t("s:monsters.echidna") + "</span>)"
	}],


	// Spoils of War
	spoils: [{
		coords: [

			[-77.466, -63.193],
			[-16.426, -144.009],
			[-20.879, -158.467],
		],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc")
	}, {
		coords: [[29.650, -63.896]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[21.412, -47.285]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[57.891, -28.564]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[-69.396, 25.356]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-50.709, 43.550]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}],

	// Treasure
	treasure: [{ //Surface Treause
		coords: [
			[-76.761, 40.627],
			[54.699, 36.563],
			[-77.245, 35.728],
			[-77.851, 69.434],
			[-47.754, -137.373],
			[-25.006, -33.618],
			[-23.524, -36.475],
			[-12.211, -44.341],
			[-19.601, -11.733],
			[-7.144, 98.218],
			[-6.359, 97.690],
			[-18.605, 109.424],
			[-71.815, 1.033],
			[-56.146, 21.533]
		],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desk")
	}, { //Underwater Treause
		coords: [
			[-57.136, -122.212]
		],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desk")
	}]
};
