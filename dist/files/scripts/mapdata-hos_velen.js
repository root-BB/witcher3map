window.map_path  = 'hos_velen';
window.map_sWest = L.latLng(0,0);
window.map_nEast = L.latLng(265,240);
window.map_center = [126.000,115.000];
window.map_minZoom = 1;
window.map_mZoom = 6;
window.map_Zoom = 2;
window.mapdata_hos_velen = {

	//------------------------------------------------Abandoned Site------------------------------------------------
	abandoned: [{
		coords: [[82.797,87.984]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[106.219,31.016]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[86.703,27.938]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[75.875,26.844]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[177.969,211.656]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[185.750,209.531]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[238.156,201.687]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[250.250,143.500]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[241.125,155.875]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[239.750,69.937]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[115.828,133.875]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[138.031,160.625]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[122.281,179.266]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[29.984,48.000]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[33.969,99.250]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	},{
		coords: [[99.938,130.172]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	//------------------------------------------------Alchemy Supplies------------------------------------------------
	alchemy: [{
		coords: [[218.984,116.516]],
		label: $.t("alchemy.label"),
		popup: $.t("v:alchemy.desc*")
	},{
		coords: [[226.328,92.500]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	},{
		coords: [[114.813,49.547]],
		label: $.t("alchemy.label"),
		popupTitle: $.t("v:alchemy.pellar"),
		popup: $.t("alchemy.desc")
	}],

	//------------------------------------------------Armourer------------------------------------------------
	armourer: [{
		coords: [[208.672,100.828]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[158.047,166.344]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[129.688,118.719]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/115.500/107.875">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[104.734,77.531]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	},{
		coords: [[82.266,40.422]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	},{
		coords: [[104.906,77.063]],
		label: $.t("armourer.labelMaster"),
		popupTitle: $.t("v:armourer.yoana"),
		popup: $.t("v:armourer.yoanaQuest") + $.t("armourer.desc")
	}],

	//------------------------------------------------Armourer's Table------------------------------------------------
	armourerstable: [{
		coords: [[211.531,97.141]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[210.750,99.016]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[160.922,164.297]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[129.844,119.094]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[106.609,51.953]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[105.375,76.094]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[68.625,74.219]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[82.313,40.984]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[75.859,25.828]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[101.047,166.734]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[102.688,109.234]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	},{
		coords: [[164.796,185.468]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	//------------------------------------------------Bandit Camp------------------------------------------------
	banditcamp: [{
		coords: [[136.625,89.219]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[110.625,60.016]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[94.344,37.016]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[88.375,34.984]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[85.125,33.172]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[96.938,31.047]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[72.953,24.188]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[77.656,17.750]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[67.531,23.656]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[66.703,26.719]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[106.188,115.703]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[177.750,195.750]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[204.500,197.968]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[214.656,223.281]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[225.812,218.781]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[257.468,208.500]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[260.625,178.468]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[260.937,165.437]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[252.875,113.687]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	},{
		coords: [[175.547,83.125]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[209.156,162.734]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 7)'
	},{
		coords: [[128.469,151.563]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[134.406,129.094]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[38.828,153.984]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 10)'
	},{
		coords: [[80.125,166.000]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[108.234,145.344]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[97.828,124.594]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 7-9)'
	},{
		coords: [[137.688,187.797]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[47.000,123.172]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 9)'
	},{
		coords: [[57.922,26.797]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	//------------------------------------------------Barber------------------------------------------------
	barber: [{
		coords: [[215.016,104.297]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[214.484,113.281]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[153.734,164.906]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	},{
		coords: [[81.891,69.703]],
		label: $.t("barber.label"),
		popup: $.t("barber.desc") + $.t("v:barber.free") + $.t("pid.rescue") + ' <a href="#6/102.391/34.109">' + $.t("pid.rescueLocation") + '</a>'
	}],

	//------------------------------------------------Blacksmith------------------------------------------------
	blacksmith: [{
		coords: [[197.094,98.766]],
		label: $.t("blacksmith.labelMaster"),
		popupTitle: $.t("v:blacksmith.hattori"),
		popup: $.t("v:blacksmith.hattoriQuest") + $.t("blacksmith.desc")
	},{
		coords: [[205.875,100.891]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[211.188,97.266]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[152.125,170.453]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[106.328,52.313]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[67.844,74.031]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[103.156,108.813]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	},{
		coords: [[30.437,123.562]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}],

	//------------------------------------------------Boat------------------------------------------------
	boat: [{
		coords: [[49.656,26.250]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[52.531,75.187]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[38.781,99.031]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[59.062,124.968]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[57.437,103.312]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[66.437,81.562]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[68.062,39.187]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[83.171,49.453]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[84.250,103.125]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[108.937,104.875]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[63.000,201.750]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[77.250,190.062]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[114.094,133.031]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[123.625,173.875]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[127.312,176.500]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[157.187,83.250]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[166.250,86.531]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[151.843,85.218]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[155.062,108.031]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[175.968,124.250]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[170.656,135.656]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[157.562,156.093]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[165.250,163.343]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[149.718,162.781]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[145.406,167.000]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[137.843,167.500]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[139.531,176.562]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[150.000,172.093]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[154.031,171.187]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[155.250,176.093]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[239.687,202.562]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[240.281,210.656]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[171.437,76.312]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[193.562,77.000]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[199.250,87.125]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[198.687,91.375]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[199.437,95.125]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[207.562,88.750]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[206.687,90.250]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[215.750,91.625]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[216.250,94.125]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[220.000,95.875]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[198.375,118.062]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[204.937,120.062]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[208.187,118.750]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[233.937,104.000]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[239.187,89.437]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[48.281,53.593]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	},{
		coords: [[65.563,69.594]],
		label: $.t("boat.label"),
		popup: $.t("boat.desc")
	}],

	//------------------------------------------------Brothel------------------------------------------------
	brothel: [{
		coords: [[201.547,98.188]],
		label: $.t("v:brothel.label.crippledKate"),
		popupTitle: $.t("v:brothel.popup.crippledKate"),
		popup: $.t("v:brothel.desc")
	},{
		coords: [[221.109,104.109]],
		label: $.t("v:brothel.label.passiflora"),
		popupTitle: $.t("v:brothel.popup.passiflora"),
		popup: $.t("v:brothel.desc")
	}],

	//------------------------------------------------Contracts------------------------------------------------
	contracts: [{
		coords: [[209.062,104.390]],
		label: $.t("v:contracts.label.elusive"),
		popup: $.t("v:contracts.desc.elusive")
	},{
		coords: [[205.625,97.281]],
		label: $.t("v:contracts.label.deadly"),
		popup: $.t("v:contracts.desc.deadly")
	},{
		coords: [[208.828,103.593]],
		label: $.t("v:contracts.label.doors"),
		popup: $.t("v:contracts.desc.doors")
	},{
		coords: [[82.062,42.531]],
		label: $.t("v:contracts.label.jenny"),
		popup: $.t("v:contracts.desc.jenny")
	},{
		coords: [[185.515,116.218]],
		label: $.t("v:contracts.label.lord"),
		popup: $.t("v:contracts.desc.lord")
	},{
		coords: [[128.953,95.468]],
		label: $.t("v:contracts.label.missing"),
		popup: $.t("v:contracts.desc.missing")
	},{
		coords: [[100.625,109.906]],
		label: $.t("v:contracts.label.tracks"),
		popup: $.t("v:contracts.desc.tracks")
	},{
		coords: [[33.656,206.687]],
		label: $.t("v:contracts.label.patrol"),
		popup: $.t("v:contracts.desc.patrol")
	},{
		coords: [[86.281,177.343]],
		label: $.t("v:contracts.label.phantom"),
		popup: $.t("v:contracts.desc.phantom")
	},{
		coords: [[104.562,79.781]],
		label: $.t("v:contracts.label.shrieker"),
		popup: $.t("v:contracts.desc.shrieker")
	},{
		coords: [[77.250,148.218]],
		label: $.t("v:contracts.label.swamp"),
		popup: $.t("v:contracts.desc.swamp")
	},{
		coords: [[237.156,130.546]],
		label: $.t("v:contracts.label.apirian"),
		popup: $.t("v:contracts.desc.apirian")
	},{
		coords: [[104.531,80.312]],
		label: $.t("v:contracts.label.beast"),
		popup: $.t("v:contracts.desc.beast")
	},{
		coords: [[158.171,165.328]],
		label: $.t("v:contracts.label.creature"),
		popup: $.t("v:contracts.desc.creature")
	},{
		coords: [[104.468,80.750]],
		label: $.t("v:contracts.label.griffin"),
		popup: $.t("v:contracts.desc.griffin")
	},{
		coords: [[100.625,110.312]],
		label: $.t("v:contracts.label.merry"),
		popup: $.t("v:contracts.desc.merry")
	},{
		coords: [[69.218,75.843]],
		label: $.t("v:contracts.label.mystery"),
		popup: $.t("v:contracts.desc.mystery")
	},{
		coords: [[158.156,165.593]],
		label: $.t("v:contracts.label.drunk"),
		popup: $.t("v:contracts.desc.drunk")
	},{
		coords: [[188.562,101.156]],
		label: $.t("v:contracts.label.white"),
		popup: $.t("v:contracts.desc.white")
	},{
		coords: [[153.765,113.046]],
		label: $.t("v:contracts.label.wood"),
		popup: $.t("v:contracts.desc.wood")
	}],

	//------------------------------------------------Entrance------------------------------------------------
	entrance: [{
		coords: [[229.984,88.844]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[237.406,151.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[179.438,175.406]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[183.219,191.281]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[156.031,209.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[173.750,77.156]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[148.141,107.047]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[130.313,41.109]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[108.234,82.484]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[106.703,72.578]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[152.172,48.781]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[44.531,39.563]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[41.688,46.266]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[53.891,126.719]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[56.984,155.984]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[88.688,107.078]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[111.266,179.234]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[79.094,185.234]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[93.344,155.813]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[101.266,177.547]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[98.906,177.766]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[30.172,129.672]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[83.766,149.953]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[43.094,163.641]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[115.812,45.906]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[151.156,164.593]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[251.812,134.875]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[226.875,151.562]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	},{
		coords: [[99.750,120.625]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	//------------------------------------------------Events------------------------------------------------
	event: [{
		coords: [[143.468,101.875]],
		label: $.t("v:event.label.friend"),
		popup: $.t("v:event.desc.friend")
	},{
		coords: [[190.625,144.312]],
		label: $.t("v:event.label.weolcome"),
		popup: $.t("v:event.desc.weolcome")
	},{
		coords: [[128.187,102.781]],
		label: $.t("v:event.label.mercy1"),
		popup: $.t("v:event.desc.mercy1")
	},{
		coords: [[170.953,87.453]],
		label: $.t("v:event.label.mercy2"),
		popup: $.t("v:event.desc.mercy2")
	},{
		coords: [[120.250,142.281]],
		label: $.t("v:event.label.caravan"),
		popup: $.t("v:event.desc.caravan") + $.t("pid.afterrescue") + ' <a href="#6/100.531/76.344">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[101.343,80.187]],
		label: $.t("v:event.label.crow"),
		popup: $.t("v:event.desc.crow")
	},{
		coords: [[89.859,62.218]],
		label: $.t("v:event.label.crossing1"),
		popup: $.t("v:event.desc.crossing1")
	},{
		coords: [[111.562,110.968]],
		label: $.t("v:event.label.crossing2"),
		popup: $.t("v:event.desc.crossing2")
	},{
		coords: [[78.531,128.468]],
		label: $.t("v:event.label.crossing3"),
		popup: $.t("v:event.desc.crossing3")
	},{
		coords: [[83.140,94.953]],
		label: $.t("v:event.label.crossing4"),
		popup: $.t("v:event.desc.crossing4")
	},{
		coords: [[205.875,95.843]],
		label: $.t("v:event.label.drunken"),
		popup: $.t("v:event.desc.drunken")
	},{
		coords: [[93.625,76.937]],
		label: $.t("v:event.label.dare1"),
		popup: $.t("v:event.desc.dare1")
	},{
		coords: [[199.125,117.375]],
		label: $.t("v:event.label.dare2"),
		popup: $.t("v:event.desc.dare2")
	},{
		coords: [[209.656,93.875]],
		label: $.t("v:event.label.dare3"),
		popup: $.t("v:event.desc.dare3")
	},{
		coords: [[144.062,71.921]],
		label: $.t("v:event.label.troll"),
		popup: $.t("v:event.desc.troll")
	},{
		coords: [[88.000,81.812]],
		label: $.t("v:event.label.robbery"),
		popup: $.t("v:event.desc.robbery")
	},{
		coords: [[204.718,115.343]],
		label: $.t("v:event.label.karmic"),
		popup: $.t("v:event.desc.karmic")
	},{
		coords: [[126.656,73.437]],
		label: $.t("v:event.label.looters1"),
		popup: $.t("v:event.desc.looters1")
	},{
		coords: [[145.437,136.500]],
		label: $.t("v:event.label.looters2"),
		popup: $.t("v:event.desc.looters2")
	},{
		coords: [[99.843,166.562]],
		label: $.t("v:event.label.looters3"),
		popup: $.t("v:event.desc.looters3")
	},{
		coords: [[210.578,109.750]],
		label: $.t("v:event.label.children"),
		popup: $.t("v:event.desc.children")
	},{
		coords: [[195.406,96.890]],
		label: $.t("v:event.label.racist1"),
		popup: $.t("v:event.desc.racist1")
	},{
		coords: [[203.875,114.875]],
		label: $.t("v:event.label.racist2"),
		popup: $.t("v:event.desc.racist2")
	},{
		coords: [[194.734,102.656]],
		label: $.t("v:event.label.pyre"),
		popup: $.t("v:event.desc.pyre")
	},{
		coords: [[185.750,145.312]],
		label: $.t("v:event.label.strangers"),
		popup: $.t("v:event.desc.strangers")
	},{
		coords: [[195.343,88.265]],
		label: $.t("v:event.label.strumpet"),
		popup: $.t("v:event.desc.strumpet")
	},{
		coords: [[200.781,108.046]],
		label: $.t("v:event.label.suspicious"),
		popup: $.t("v:event.desc.suspicious")
	},{
		coords: [[206.406,106.468]],
		label: $.t("v:event.label.flame"),
		popup: $.t("v:event.desc.flame")
	},{
		coords: [[163.687,177.656]],
		label: $.t("v:event.label.basilisk"),
		popup: $.t("v:event.desc.basilisk")
	},{
		coords: [[157.593,163.812]],
		label: $.t("v:event.label.passage1"),
		popup: $.t("v:event.desc.passage1")
	},{
		coords: [[157.531,169.500]],
		label: $.t("v:event.label.passage2"),
		popup: $.t("v:event.desc.passage2")
	},{
		coords: [[160.437,178.968]],
		label: $.t("v:event.label.passage3"),
		popup: $.t("v:event.desc.passage3")
	},{
		coords: [[189.500,98.640]],
		label: $.t("v:event.label.raids"),
		popup: $.t("v:event.desc.raids")
	},{
		coords: [[215.328,105.031]],
		label: $.t("v:event.label.raids2"),
		popup: $.t("v:event.desc.raids2")
	},{
		coords: [[209.656,88.375]],
		label: $.t("v:event.label.vivienne"),
		popup: $.t("v:event.desc.vivienne")
	},{
		coords: [[102.094,78.188]],
		label: $.t("v:event.label.daughter"),
		popup: $.t("v:event.desc.daughter")
	}],

	//------------------------------------------------Grindstone------------------------------------------------
	grindstone: [{
		coords: [[211.547,97.453]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[210.641,99.266]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[168.094,91.391]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[160.734,164.500]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[129.922,118.313]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[153.016,46.609]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[106.594,52.625]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[105.156,76.313]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[82.734,70.828]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[68.234,74.516]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[82.328,40.094]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[75.875,25.531]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[100.703,167.141]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[102.531,108.906]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[23.984,150.546]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[164.296,185.546]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[189.812,97.062]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	},{
		coords: [[196.250,99.750]],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	//------------------------------------------------Guarded Treasure------------------------------------------------
	guarded: [{
		coords: [[107.281,42.953]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[98.313,40.141]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[98.578,21.844]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[49.641,150.531]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[84.875,123.281]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[181.156,220.687]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[246.250,182.812]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[258.843,129.187]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[248.437,162.687]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[215.016,126.328]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[229.563,124.656]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[239.594,104.219]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[164.563,198.594]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[171.500,119.516]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[184.609,58.609]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[121.781,136.625]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[122.484,167.156]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[144.641,87.578]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[70.859,44.063]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[93.516,99.344]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[91.563,19.516]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[147.047,57.047]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[37.094,55.438]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[23.172,78.391]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[18.750,78.531]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[34.438,93.125]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[56.953,200.891]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[43.328,149.781]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[28.078,148.406]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[24.063,150.188]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[69.406,162.688]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	},{
		coords: [[132.000,69.516]],
		label: $.t("guarded.label"),
		popup: $.t("v:guarded.desc.cyclops")
	}],

	//------------------------------------------------Gwent Player------------------------------------------------
	gwent: [{
		coords: [[205.438,99.578]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[209.703,102.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.bookMerchant"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[200.859,98.078]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.crippledKate"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[220.813,103.844]],
		label: $.t("v:gwent.label.tournament"),
		popupTitle: $.t("v:gwent.popup.tournament"),
		popup: $.t("v:gwent.desc.tournament")
	},{
		coords: [[204.547,109.125]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[199.141,101.578]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[201.953,102.656]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.herbalist"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[199.188,126.813]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[198.813,113.438]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.merchant"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[199.109,107.094]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[206.406,96.734]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[214.328,110.844]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[206.063,101.203]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[207.625,101.047]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.banker"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[209.453,94.750]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.fishmonger"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[211.859,97.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[212.156,96.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[216.281,104.438]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[210.859,113.031]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[211.969,114.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.loanShark"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[226.516,92.531]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.alchemist"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[219.125,116.844]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.alchemist"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[209.516,104.938]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.warn") + $.t("v:gwent.desc.player")
	},{
		coords: [[185.375,117.734]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[170.047,179.250]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.herbalist"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[156.094,165.297]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[158.281,166.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[159.344,164.703]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[152.344,170.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[129.922,118.688]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player") + $.t("pid.rescue") + ' <a href="#6/115.500/107.875">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[107.641,54.969]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[106.688,52.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[101.750,76.297]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[104.297,76.969]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.quartermaster"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[104.813,77.609]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[107.078,74.234]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.bloodyBaron"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[84.000,70.125]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player") + $.t("pid.rescue") + ' <a href="#6/72.375/104.625">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[70.688,73.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[81.969,41.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[82.453,40.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[105.125,77.000]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.yoana"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[99.984,110.703]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[103.469,108.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[33.672,204.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.quartermaster"),
		popup: $.t("v:gwent.desc.player")
	},{
		coords: [[78.219,147.219]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.player"),
		popup: $.t("v:gwent.desc.quest") + $.t("v:gwent.desc.player")
	},{
		coords: [[187.375,151.938]],
		label: $.t("v:gwent.popup.shopkeeper"),
		popupTitle: $.t("v:gwent.popup.player"),
		popup: $.t("v:gwent.desc.player")
	}],
	
	//------------------------------------------------Hanse Base------------------------------------------------
	hansebase: [],

	//------------------------------------------------Harbor------------------------------------------------
	harbor: [{
		coords: [[199.828,86.109]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[157.563,161.406]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[123.422,172.734]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[114.156,134.563]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[114.813,104.563]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[82.125,89.125]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[95.344,26.344]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[107.375,41.438]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[53.266,75.359]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[28.094,46.609]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	},{
		coords: [[33.641,119.953]],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	//------------------------------------------------Herbalist------------------------------------------------
	herbalist: [{
		coords: [[207.172,103.047]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[201.656,102.625]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[184.547,118.500]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[169.859,179.094]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[178.593,216.218]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	},{
		coords: [[86.609,29.156]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[107.125,31.641]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[34.578,98.656]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[99.828,129.547]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	},{
		coords: [[199.563,187.438]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc") + $.t(" ") + $.t("pid.rescue") + ' <a href="#6/198.344/187.281">' + $.t("pid.rescueLocation") + '</a>'
	}],

	//------------------------------------------------Hidden Treasure------------------------------------------------
	hidden: [{
		coords: [[153.063,45.953]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[107.531,36.859]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[104.422,26.078]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[94.859,28.031]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[54.469,51.313]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[105.625,148.141]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[190.937,195.125]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[186.312,211.250]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[197.593,226.125]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[245.562,212.562]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[252.625,133.625]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[239.812,155.937]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[241.750,94.062]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{
		coords: [[154.313,96.734]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[168.563,78.875]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[115.891,134.969]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[130.344,173.906]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[164.563,146.844]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[125.625,143.594]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[171.813,139.453]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[166.922,155.281]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[86.016,17.078]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[50.922,182.641]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[99.469,197.203]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[112.969,162.563]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[56.438,20.781]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[51.297,34.500]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[55.031,49.828]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	},{
		coords: [[39.859,70.531]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded")
	}],

	//------------------------------------------------Innkeep------------------------------------------------
	innkeep: [{
		coords: [[206.000,96.547]],
		label: $.t("v:innkeep.inns.theGoldenSturgen"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[220.609,104.172]],
		label: $.t("v:innkeep.inns.passiflora"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[214.000,110.672]],
		label: $.t("v:innkeep.inns.theNowhere"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	},{
		coords: [[198.859,106.875]],
		label: $.t("v:innkeep.inns.rosemaryAndThyme"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	},{
		coords: [[198.875,126.656]],
		label: $.t("v:innkeep.inns.sevenCatsInn"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[209.328,104.719]],
		label: $.t("v:innkeep.inns.theKingfisher"),
		popup: $.t("v:misc.disappearingTrader") + $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[185.125,118.047]],
		label: $.t("v:innkeep.inns.cunnyOfTheGoose"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[156.063,165.172]],
		label: $.t("v:innkeep.inns.theAlchemy"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	},{
		coords: [[128.141,95.516]],
		label: $.t("v:innkeep.inns.innAtTheCrossroads"),
		popup: $.t("v:innkeep.desc.gwentAndDrink")
	}],

	//------------------------------------------------Knight in Distress------------------------------------------------
	kid: [],

	//------------------------------------------------Monster Den------------------------------------------------
	monsterden: [{
		coords: [[142.984,118.125]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[81.656,136.359]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[237.641,105.016]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	},{
		coords: [[165.891,99.375]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	}],

	//------------------------------------------------Monster Nest------------------------------------------------
	monsternest: [{
		coords: [[153.734,135.203]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[160.500,127.328]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[110.656,88.094]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[100.078,66.047]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[82.969,86.828]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[44.984,40.906]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[45.984,41.656]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[60.047,126.375]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[204.843,186.437]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[238.812,199.906]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[235.656,201.531]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[240.562,171.500]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[255.125,119.750]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[218.687,183.875]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[154.141,85.000]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[169.094,95.281]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[170.313,98.000]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[170.266,112.969]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[133.422,162.531]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[133.750,161.688]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[125.938,147.391]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[160.750,137.891]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[43.578,108.563]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[86.891,168.969]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[91.297,165.547]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[88.094,161.422]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[87.891,158.172]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[96.875,185.094]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	},{
		coords: [[95.656,185.125]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],

	//------------------------------------------------Notice Board------------------------------------------------
	notice: [{
		coords: [[209.078,103.609]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[205.641,97.031]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[215.844,105.000]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[188.594,100.641]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[237.172,130.297]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[198.047,126.578]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[205.750,157.922]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[185.500,116.000]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[158.156,165.109]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[131.547,119.453]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[128.953,95.047]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[153.344,112.781]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[82.078,42.078]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[104.547,78.828]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[69.234,75.438]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[77.266,147.797]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[100.641,109.469]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[33.688,206.219]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	},{
		coords: [[99.500,137.218]],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	//------------------------------------------------Person in Distress------------------------------------------------
	pid: [{
		coords: [[147.578,119.578]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/151.281/115.438">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[102.500,33.828]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/81.625/69.906">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[198.687,186.906]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/199.563/187.438">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[142.984,199.375]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/130.125/198.188">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[115.391,107.094]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/129.438/118.906">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[72.656,103.797]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/83.688/70.125">' + $.t("pid.rescueLocation") + '</a>'
	}],

	//------------------------------------------------Place of Power------------------------------------------------
	pop: [{
		coords: [[230.391,98.688]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[200.813,162.688]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[152.688,47.781]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[15.063,76.140]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[53.313,52.578]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("v:misc.wanderingInTheDark") + $.t("pop.desc")
	},{
		coords: [[35.688,133.594]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup",{sign: $.t("signs.quen")}),
		popup: $.t("v:misc.baldMountain") + $.t("pop.desc")
	},{
		coords: [[55.922,154.672]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[80.219,141.359]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup",{sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

	//------------------------------------------------Point of Interest------------------------------------------------
	poi: [{
		coords: [[210.156,109.453]],
		label: $.t("v:poi.label.triss"),
		popup: $.t("v:poi.desc.triss")
	},{
		coords: [[199.000,107.484]],
		label: $.t("v:poi.label.dandelionAndZoltan"),
		popup: $.t("v:poi.desc.dandelionAndZoltan")
	},{
		coords: [[217.453,110.297]],
		label: $.t("v:poi.label.vilmeriusHospital"),
		popup: $.t("v:poi.desc.vilmeriusHospital")
	},{
		coords: [[89.828,48.344]],
		label: $.t("v:poi.label.keira"),
		popup: $.t("v:poi.desc.keira")
	},{
		coords: [[239.500,214.687]],
		label: $.t("v:poi.label.rune"),
		popup: $.t("v:poi.desc.rune")
	},{
		coords: [[153.500,163.718]],
		label: $.t("v:poi.label.shani"),
		popup: $.t("v:poi.desc.shani")
	},{
		coords: [[209.687,102.625]],
		label: $.t("v:poi.label.statue"),
		popup: $.t("v:poi.desc.statue")
	},{
		coords: [[47.125,78.172]],
		label: $.t("v:poi.label.spirits"),
		popup: $.t("v:poi.desc.spirits")
	},{
		coords: [[49.391,78.813]],
		label: $.t("v:poi.label.spirits"),
		popup: $.t("v:poi.desc.spirits")
	},{
		coords: [[53.469,80.234]],
		label: $.t("v:poi.label.spirits"),
		popup: $.t("v:poi.desc.spirits")
	},{
		coords: [[122.656,148.281]],
		label: $.t("poi.label.lootableBattlefield"),
		popup: $.t("poi.desc.lootableBattlefield")
	}],

	//------------------------------------------------Scavengers------------------------------------------------
	scavenger: [{
		coords: [[156.031,208.844]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	},{
		coords: [[100.671,177.343]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	},{
		coords: [[184.469,62.484]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.cross") + $.t("scavenger.level.1")
	},{
		coords: [[144.234,134.609]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[182.563,191.609]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	},{
		coords: [[212.688,113.969]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	},{
		coords: [[166.359,99.516]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	},{
		coords: [[178.547,106.328]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[92.859,155.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.2")
	},{
		coords: [[237.984,105.422]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[151.093,170.312]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[156.047,152.828]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	},{
		coords: [[149.938,75.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	},{
		coords: [[23.656,78.094]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.2")
	},{
		coords: [[153.094,46.281]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.1")
	},{
		coords: [[41.312,164.437]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	},{
		coords: [[160.063,127.094]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[78.516,16.875]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.1")
	},{
		coords: [[107.375,84.438]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.2")
	},{
		coords: [[43.828,107.953]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	},{
		coords: [[53.000,130.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.3")
	},{
		coords: [[116.344,45.563]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[68.297,154.859]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.3")
	},{
		coords: [[39.219,71.719]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.2")
	},{
		coords: [[36.688,53.203]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.4")
	},{
		coords: [[110.813,179.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.2")
	},{
		coords: [[106.703,72.750]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.2"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.2")
	},{
		coords: [[50.953,182.453]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.4")
	},{
		coords: [[46.797,24.547]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.4")
	},{
		coords: [[229.718,89.125]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	},{
		coords: [[73.047,121.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	},{
		coords: [[81.594,136.344]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.1"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.1") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.1")
	},{
		coords: [[24.984,150.359]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.4"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.4") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.4")
	},{
		coords: [[142.922,117.656]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.3"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.3") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.3")
	}],

	//------------------------------------------------Shopkeeper------------------------------------------------
	shopkeeper: [{
		coords: [[208.734,102.859]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	},{
		coords: [[209.594,102.828]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	},{
		coords: [[205.109,99.563]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	},{
		coords: [[207.375,100.969]],
		label: $.t("v:shopkeeper.label.banker"),
		popup: $.t("v:shopkeeper.desc.banker")
	},{
		coords: [[198.516,113.328]],
		label: $.t("v:shopkeeper.label.clothingMerchant"),
		popup: $.t("v:shopkeeper.desc.clothingMerchant")
	},{
		coords: [[198.891,101.484]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.kingfOfBeggarsMerchant")
	},{
		coords: [[216.016,104.219]],
		label: $.t("v:shopkeeper.label.gildorf"),
		popup: $.t("v:shopkeeper.desc.aeramasTrinketMerchant")
	},{
		coords: [[211.797,96.109]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	},{
		coords: [[209.234,94.563]],
		label: $.t("v:shopkeeper.label.fishmonger"),
		popup: $.t("v:shopkeeper.desc.fishmonger")
	},{
		coords: [[215.203,92.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.emptyBottlesMerchant")
	},{
		coords: [[213.813,93.063]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	},{
		coords: [[210.578,113.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[204.500,109.047]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gemDustWeaponsFoodAndDrink")
	},{
		coords: [[211.516,114.313]],
		label: $.t("v:shopkeeper.label.loanShark"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[212.547,110.969]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSupplies")
	},{
		coords: [[200.828,98.297]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.foodAndDrink")
	},{
		coords: [[231.297,163.828]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	},{
		coords: [[130.578,196.953]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("pid.rescue") + ' <a href="#6/142.563/200.250">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[179.969,88.781]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popup: $.t("v:shopkeeper.desc.windmillMerchant")
	},{
		coords: [[186.656,82.938]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSuppliesFoodAndWeapons")
	},{
		coords: [[167.844,90.969]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[179.188,119.516]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	},{
		coords: [[159.141,164.516]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.paintMerchant")
	},{
		coords: [[147.313,149.422]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	},{
		coords: [[151.781,115.188]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyAndFood") + ' ' + $.t("pid.rescue") + ' <a href="#6/147.719/119.938">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[123.156,179.266]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	},{
		coords: [[137.406,160.781]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	},{
		coords: [[107.469,54.906]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[101.547,76.094]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks")
	},{
		coords: [[81.797,41.406]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndJewellery")
	},{
		coords: [[90.109,47.906]],
		label: $.t("v:shopkeeper.label.keira"),
		popup: $.t("v:shopkeeper.desc.alchemyRecipesAndClearance")
	},{
		coords: [[104.031,76.875]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.gwentFoodAndDrink")
	},{
		coords: [[100.531,76.344]],
		label: $.t("v:shopkeeper.label.anselm"),
		popup: $.t("v:shopkeeper.desc.blindersMerchant") + '. ' + $.t("pid.rescue") + ' <a href="#6/120.25/142.28125">' + $.t("v:event.label.caravan") + '</a>'
	},{
		coords: [[70.563,73.188]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.drinksAndSaddlebags")
	},{
		coords: [[83.766,69.922]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks") + $.t("pid.rescue") + ' <a href="#6/72.375/104.625">' + $.t("pid.rescueLocation") + '</a>'
	},{
		coords: [[83.531,87.641]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	},{
		coords: [[92.156,29.109]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[76.797,26.313]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[30.359,46.734]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	},{
		coords: [[100.578,130.578]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.alchemyAndFood")
	},{
		coords: [[99.844,110.594]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndCrafting")
	},{
		coords: [[99.000,109.281]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	},{
		coords: [[33.453,204.859]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	},{
		coords: [[78.078,147.141]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.disappearingDrinksMerchant")
	},{
		coords: [[42.156,204.500]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	},{
		coords: [[42.844,206.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	},{
		coords: [[44.063,206.734]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	},{
		coords: [[130.062,126.031]],
		label: $.t("v:shopkeeper.label.mulbrydale"),
		popup: $.t("shopkeeper.desc")
	},{
		coords: [[35.406,124.250]],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	},{
		coords: [[28.500,123.875]],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	},{
		coords: [[212.640,91.093]],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	},{
		coords: [[208.687,107.390]],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	},{
		coords: [[187.797,152.172]],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	}],

	//------------------------------------------------Sidequests------------------------------------------------
	sidequests: [{
		coords: [[182.593,155.875]],
		label: $.t("v:sidequests.label.barnful"),
		popup: $.t("v:sidequests.desc.barnful")
	},{
		coords: [[199.343,106.343]],
		label: $.t("v:sidequests.label.dangerous"),
		popup: $.t("v:sidequests.desc.dangerous")
	},{
		coords: [[66.687,91.125]],
		label: $.t("v:sidequests.label.dog"),
		popup: $.t("v:sidequests.desc.dog")
	},{
		coords: [[89.843,48.609]],
		label: $.t("v:sidequests.label.favor"),
		popup: $.t("v:sidequests.desc.favor")
	},{
		coords: [[200.375,105.203]],
		label: $.t("v:sidequests.label.feast"),
		popup: $.t("v:sidequests.desc.feast")
	},{
		coords: [[72.437,59.625]],
		label: $.t("v:sidequests.label.greedy"),
		popup: $.t("v:sidequests.desc.greedy")
	},{
		coords: [[205.515,107.984]],
		label: $.t("v:sidequests.label.entombed"),
		popup: $.t("v:sidequests.desc.entombed")
	},{
		coords: [[197.609,93.546]],
		label: $.t("v:sidequests.label.waterfront"),
		popup: $.t("v:sidequests.desc.waterfront")
	},{
		coords: [[180.000,176.125]],
		label: $.t("v:sidequests.label.eyeforeye"),
		popup: $.t("v:sidequests.desc.eyeforeye")
	},{
		coords: [[89.843,48.875]],
		label: $.t("v:sidequests.label.invitation"),
		popup: $.t("v:sidequests.desc.invitation")
	},{
		coords: [[160.421,166.437]],
		label: $.t("v:sidequests.label.avid"),
		popup: $.t("v:sidequests.desc.avid")
	},{
		coords: [[148.156,114.093]],
		label: $.t("v:sidequests.label.bitter"),
		popup: $.t("v:sidequests.desc.bitter")
	},{
		coords: [[207.203,97.140]],
		label: $.t("v:sidequests.label.pearl"),
		popup: $.t("v:sidequests.desc.pearl")
	},{
		coords: [[42.718,204.250]],
		label: $.t("v:sidequests.label.blood"),
		popup: $.t("v:sidequests.desc.blood")
	},{
		coords: [[198.968,107.734]],
		label: $.t("v:sidequests.label.cabaret"),
		popup: $.t("v:sidequests.desc.cabaret")
	},{
		coords: [[198.968,108.000]],
		label: $.t("v:sidequests.label.sins"),
		popup: $.t("v:sidequests.desc.sins")
	},{
		coords: [[106.968,74.875]],
		label: $.t("v:sidequests.label.ciri"),
		popup: $.t("v:sidequests.desc.ciri")
	},{
		coords: [[149.562,129.187]],
		label: $.t("v:sidequests.label.deathfire"),
		popup: $.t("v:sidequests.desc.deathfire")
	},{
		coords: [[105.031,59.843]],
		label: $.t("v:sidequests.label.defender"),
		popup: $.t("v:sidequests.desc.defender")
	},{
		coords: [[212.781,145.468]],
		label: $.t("v:sidequests.label.empty"),
		popup: $.t("v:sidequests.desc.empty")
	},{
		coords: [[152.500,115.343]],
		label: $.t("v:sidequests.label.fake"),
		popup: $.t("v:sidequests.desc.fake")
	},{
		coords: [[218.000,106.109]],
		label: $.t("v:sidequests.label.fencing"),
		popup: $.t("v:sidequests.desc.fencing")
	},{
		coords: [[209.109,103.250]],
		label: $.t("v:sidequests.label.thread"),
		popup: $.t("v:sidequests.desc.thread")
	},{
		coords: [[101.781,137.718]],
		label: $.t("v:sidequests.label.fools"),
		popup: $.t("v:sidequests.desc.fools")
	},{
		coords: [[104.391,76.938]],
		label: $.t("v:sidequests.label.forefathers"),
		popup: $.t("v:sidequests.desc.forefathers")
	},{
		coords: [[89.062,47.875]],
		label: $.t("v:sidequests.label.forefathers"),
		popup: $.t("v:sidequests.desc.forefathers")
	},{
		coords: [[164.218,89.750]],
		label: $.t("v:sidequests.label.fromfar"),
		popup: $.t("v:sidequests.desc.fromfar")
	},{
		coords: [[129.687,111.093]],
		label: $.t("v:sidequests.label.funeral"),
		popup: $.t("v:sidequests.desc.funeral")
	},{
		coords: [[86.343,148.468]],
		label: $.t("v:sidequests.label.ghosts"),
		popup: $.t("v:sidequests.desc.ghosts")
	},{
		coords: [[209.078,104.125]],
		label: $.t("v:sidequests.label.haunted"),
		popup: $.t("v:sidequests.desc.haunted")
	},{
		coords: [[104.562,129.296]],
		label: $.t("v:sidequests.label.hazardous1"),
		popup: $.t("v:sidequests.desc.hazardous1")
	},{
		coords: [[87.203,164.265]],
		label: $.t("v:sidequests.label.hazardous2"),
		popup: $.t("v:sidequests.desc.hazardous2")
	},{
		coords: [[213.187,94.671]],
		label: $.t("v:sidequests.label.stuff"),
		popup: $.t("v:sidequests.desc.stuff")
	},{
		coords: [[210.468,107.234]],
		label: $.t("v:sidequests.label.messages"),
		popup: $.t("v:sidequests.desc.messages")
	},{
		coords: [[221.109,104.375]],
		label: $.t("v:sidequests.label.stakes"),
		popup: $.t("v:sidequests.desc.stakes")
	},{
		coords: [[198.390,104.546]],
		label: $.t("v:sidequests.label.honor"),
		popup: $.t("v:sidequests.desc.honor")
	},{
		coords: [[111.843,54.500]],
		label: $.t("v:sidequests.label.rites"),
		popup: $.t("v:sidequests.desc.rites")
	},{
		coords: [[237.718,129.500]],
		label: $.t("v:sidequests.label.red"),
		popup: $.t("v:sidequests.desc.red")
	},{
		coords: [[76.156,28.031]],
		label: $.t("v:sidequests.label.snares"),
		popup: $.t("v:sidequests.desc.snares")
	},{
		coords: [[103.843,39.812]],
		label: $.t("v:sidequests.label.mob"),
		popup: $.t("v:sidequests.desc.mob")
	},{
		coords: [[89.828,49.125]],
		label: $.t("v:sidequests.label.magiclamp"),
		popup: $.t("v:sidequests.desc.magiclamp")
	},{
		coords: [[89.828,49.375]],
		label: $.t("v:sidequests.label.towerful"),
		popup: $.t("v:sidequests.desc.towerful")
	},{
		coords: [[104.843,77.312]],
		label: $.t("v:sidequests.label.masterarmor"),
		popup: $.t("v:sidequests.desc.masterarmor")
	},{
		coords: [[209.515,102.640]],
		label: $.t("v:sidequests.label.oldfriend"),
		popup: $.t("v:sidequests.desc.oldfriend")
	},{
		coords: [[240.937,124.375]],
		label: $.t("v:sidequests.label.hospitality"),
		popup: $.t("v:sidequests.desc.hospitality")
	},{
		coords: [[210.562,95.609]],
		label: $.t("v:sidequests.label.city1"),
		popup: $.t("v:sidequests.desc.city1")
	},{
		coords: [[221.812,98.968]],
		label: $.t("v:sidequests.label.city2"),
		popup: $.t("v:sidequests.desc.city2")
	},{
		coords: [[155.093,208.531]],
		label: $.t("v:sidequests.label.darkness"),
		popup: $.t("v:sidequests.desc.darkness")
	},{
		coords: [[197.062,99.031]],
		label: $.t("v:sidequests.label.dumplings"),
		popup: $.t("v:sidequests.desc.dumplings")
	},{
		coords: [[201.578,98.515]],
		label: $.t("v:sidequests.label.arse"),
		popup: $.t("v:sidequests.desc.arse")
	},{
		coords: [[107.078,73.765]],
		label: $.t("v:sidequests.label.crookback"),
		popup: $.t("v:sidequests.desc.crookback")
	},{
		coords: [[247.500,174.343]],
		label: $.t("v:sidequests.label.rose"),
		popup: $.t("v:sidequests.desc.rose")
	},{
		coords: [[153.531,163.250]],
		label: $.t("v:sidequests.label.neighborhood1"),
		popup: $.t("v:sidequests.desc.neighborhood1")
	},{
		coords: [[149.312,166.500]],
		label: $.t("v:sidequests.label.neighborhood2"),
		popup: $.t("v:sidequests.desc.neighborhood2")
	},{
		coords: [[149.281,183.343]],
		label: $.t("v:sidequests.label.spooked"),
		popup: $.t("v:sidequests.desc.spooked")
	},{
		coords: [[95.156,47.718]],
		label: $.t("v:sidequests.label.takewant"),
		popup: $.t("v:sidequests.desc.takewant")
	},{
		coords: [[202.250,118.687]],
		label: $.t("v:sidequests.label.dwarven"),
		popup: $.t("v:sidequests.desc.dwarven")
	},{
		coords: [[98.781,110.562]],
		label: $.t("v:sidequests.label.reardon"),
		popup: $.t("v:sidequests.desc.reardon")
	},{
		coords: [[159.375,167.218]],
		label: $.t("v:sidequests.label.taxman"),
		popup: $.t("v:sidequests.desc.taxman")
	},{
		coords: [[84.406,175.437]],
		label: $.t("v:sidequests.label.stars"),
		popup: $.t("v:sidequests.desc.stars")
	},{
		coords: [[155.937,153.281]],
		label: $.t("v:sidequests.label.volunteer"),
		popup: $.t("v:sidequests.desc.volunteer")
	},{
		coords: [[76.687,148.281]],
		label: $.t("v:sidequests.label.hillock"),
		popup: $.t("v:sidequests.desc.hillock")
	},{
		coords: [[154.968,110.718]],
		label: $.t("v:sidequests.label.pass"),
		popup: $.t("v:sidequests.desc.pass")
	},{
		coords: [[197.031,82.625]],
		label: $.t("v:sidequests.label.woe"),
		popup: $.t("v:sidequests.desc.woe")
	},{
		coords: [[128.953,95.250]],
		label: $.t("v:sidequests.label.heart"),
		popup: $.t("v:sidequests.desc.heart")
	},{
		coords: [[99.656,109.718]],
		label: $.t("v:sidequests.label.wannabe"),
		popup: $.t("v:sidequests.desc.wannabe")
	},{
		coords: [[242.906,198.562]],
		label: $.t("v:sidequests.label.trace"),
		popup: $.t("v:sidequests.desc.trace")
	},{
		coords: [[207.875,103.062]],
		label: $.t("sidequests.races") +$.t(": ") +$.t("v:sidequests.label.rc_derby"),
		popup: $.t("v:sidequests.desc.rc_derby")
	},{
		coords: [[104.562,79.312]],
		label: $.t("sidequests.races") +$.t(": ") +$.t("v:sidequests.label.rc_perch"),
		popup: $.t("v:sidequests.desc.rc_perch")
	},{
		coords: [[239.468,213.281]],
		label: $.t("sidequests.races") +$.t(": ") +$.t("v:sidequests.label.rc_western"),
		popup: $.t("v:sidequests.desc.rc_western")
	},{
		coords: [[156.046,165.546]],
		label: $.t("sidequests.gwent") +$.t(": ") +$.t("v:sidequests.label.gw_inn"),
		popup: $.t("v:sidequests.desc.gw_inn")
	},{
		coords: [[107.093,74.000]],
		label: $.t("sidequests.gwent") +$.t(": ") +$.t("v:sidequests.label.gw_velen"),
		popup: $.t("v:sidequests.desc.gw_velen")
	},{
		coords: [[209.062,103.859]],
		label:$.t("sidequests.fist") +$.t(": ") +$.t("v:sidequests.label.ff_n"),
		popup: $.t("v:sidequests.desc.ff_n")
	},{
		coords: [[99.328,110.015]],
		label: $.t("sidequests.fist") +$.t(": ") +$.t("v:sidequests.label.ff_v"),
		popup: $.t("v:sidequests.desc.ff_v")
	},{
		coords: [[239.281,214.390]],
		label: $.t("sidequests.enchanting") +$.t(": ") +$.t("v:sidequests.label.en_q"),
		popup: $.t("v:sidequests.desc.en_q")
	},{
		coords: [[239.296,214.187]],
		label: $.t("sidequests.enchanting") +$.t(": ") +$.t("v:sidequests.label.en_s"),
		popup: $.t("v:sidequests.desc.en_s")
	},{
		coords: [[104.531,26.500]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_mistake"),
		popup: $.t("v:sidequests.desc.tr_mistake")
	},{
		coords: [[160.437,166.187]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_legacy"),
		popup: $.t("v:sidequests.desc.tr_legacy")
	},{
		coords: [[56.484,20.984]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_ignored"),
		popup: $.t("v:sidequests.desc.tr_ignored")
	},{
		coords: [[207.312,209.812]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_inheritance"),
		popup: $.t("v:sidequests.desc.tr_inheritance")
	},{
		coords: [[115.937,135.203]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_events"),
		popup: $.t("v:sidequests.desc.tr_events")
	},{
		coords: [[171.875,139.718]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_battlefield"),
		popup: $.t("v:sidequests.desc.tr_battlefield")
	},{
		coords: [[164.609,147.062]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_bloodgold"),
		popup: $.t("v:sidequests.desc.tr_bloodgold")
	},{
		coords: [[168.656,79.281]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_wrecks"),
		popup: $.t("v:sidequests.desc.tr_wrecks")
	},{
		coords: [[55.125,50.250]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_gods"),
		popup: $.t("v:sidequests.desc.tr_gods")
	},{
		coords: [[166.968,155.781]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_dowry"),
		popup: $.t("v:sidequests.desc.tr_dowry")
	},{
		coords: [[239.468,213.515]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_shores"),
		popup: $.t("v:sidequests.desc.tr_shores")
	},{
		coords: [[113.031,163.031]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_world"),
		popup: $.t("v:sidequests.desc.tr_world")
	},{
		coords: [[130.500,174.406]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_goods"),
		popup: $.t("v:sidequests.desc.tr_goods")
	},{
		coords: [[105.593,148.562]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_fire"),
		popup: $.t("v:sidequests.desc.tr_fire")
	},{
		coords: [[94.906,28.562]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_zuleyka"),
		popup: $.t("v:sidequests.desc.tr_zuleyka")
	},{
		coords: [[39.906,71.000]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_sunkenc"),
		popup: $.t("v:sidequests.desc.tr_sunkenc")
	},{
		coords: [[107.578,37.125]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_sunkent"),
		popup: $.t("v:sidequests.desc.tr_sunkent")
	},{
		coords: [[245.859,211.937]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_cursed"),
		popup: $.t("v:sidequests.desc.tr_cursed")
	},{
		coords: [[51.375,35.031]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_defense"),
		popup: $.t("v:sidequests.desc.tr_defense")
	},{
		coords: [[254.250,134.437]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_redemption"),
		popup: $.t("v:sidequests.desc.tr_redemption")
	},{
		coords: [[191.125,195.187]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_force"),
		popup: $.t("v:sidequests.desc.tr_force")
	},{
		coords: [[197.609,226.515]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_romilly"),
		popup: $.t("v:sidequests.desc.tr_romilly")
	},{
		coords: [[241.328,94.578]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_perfidy"),
		popup: $.t("v:sidequests.desc.tr_perfidy")
	},{
		coords: [[154.406,97.187]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_forcoin"),
		popup: $.t("v:sidequests.desc.tr_forcoin")
	},{
		coords: [[238.031,157.062]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_tinker"),
		popup: $.t("v:sidequests.desc.tr_tinker")
	},{
		coords: [[125.718,144.093]],
		label: $.t("treasure.label") +$.t(": ") +$.t("v:sidequests.label.tr_luck"),
		popup: $.t("v:sidequests.desc.tr_luck")
	}],

	//------------------------------------------------Sign Post------------------------------------------------
	signpost: [{
		coords: [[207.375,103.750]],
		label: $.t("v:signpost.label.hierarchSquare"),
		popup: $.t("v:signpost.desc.hierarchSquare")
	},{
		coords: [[208.766,116.672]],
		label: $.t("v:signpost.label.southernGate"),
		popup: $.t("v:signpost.desc.southernGate")
	},{
		coords: [[214.813,116.297]],
		label: $.t("v:signpost.label.oxenfurtGate"),
		popup: $.t("v:signpost.desc.oxenfurtGate")
	},{
		coords: [[218.563,102.031]],
		label: $.t("v:signpost.label.stGregorysBridge"),
		popup: $.t("v:signpost.desc.stGregorysBridge")
	},{
		coords: [[226.313,91.547]],
		label: $.t("v:signpost.label.electorsSquare"),
		popup: $.t("v:signpost.desc.electorsSquare")
	},{
		coords: [[201.391,111.484]],
		label: $.t("v:signpost.label.tretogorGate"),
		popup: $.t("v:signpost.desc.tretogorGate")
	},{
		coords: [[196.563,108.094]],
		label: $.t("v:signpost.label.gateOfTheHierarch"),
		popup: $.t("v:signpost.desc.gateOfTheHierarch")
	},{
		coords: [[191.688,102.781]],
		label: $.t("v:signpost.label.gloryGate"),
		popup: $.t("v:signpost.desc.gloryGate")
	},{
		coords: [[191.250,96.672]],
		label: $.t("v:signpost.label.portsideGate"),
		popup: $.t("v:signpost.desc.portsideGate")
	},{
		coords: [[197.969,88.609]],
		label: $.t("v:signpost.label.novigradDocks"),
		popup: $.t("v:signpost.desc.novigradDocks")
	},{
		coords: [[211.828,121.703]],
		label: $.t("v:signpost.label.arette"),
		popup: $.t("v:signpost.desc.arette")
	},{
		coords: [[198.016,125.922]],
		label: $.t("v:signpost.label.sevenCatsInn"),
		popup: $.t("v:signpost.desc.sevenCatsInn")
	},{
		coords: [[245.109,121.094]],
		label: $.t("v:signpost.label.sarrasinGrange"),
		popup: $.t("v:signpost.desc.sarrasinGrange")
	},{
		coords: [[236.125,130.438]],
		label: $.t("v:signpost.label.yantra"),
		popup: $.t("v:signpost.desc.yantra")
	},{
		coords: [[237.031,149.219]],
		label: $.t("v:signpost.label.isolatedHut"),
		popup: $.t("v:signpost.desc.isolatedHut")
	},{
		coords: [[214.219,140.781]],
		label: $.t("v:signpost.label.honeyfillMeadworks"),
		popup: $.t("v:signpost.desc.honeyfillMeadworks")
	},{
		coords: [[223.516,174.375]],
		label: $.t("v:signpost.label.martinFeuillesFarmstead"),
		popup: $.t("v:signpost.desc.martinFeuillesFarmstead")
	},{
		coords: [[231.734,162.984]],
		label: $.t("v:signpost.label.winespringGrange"),
		popup: $.t("v:signpost.desc.winespringGrange")
	},{
		coords: [[225.672,149.938]],
		label: $.t("v:signpost.label.moldavieResidence"),
		popup: $.t("v:signpost.desc.moldavieResidence")
	},{
		coords: [[234.469,105.234]],
		label: $.t("v:signpost.label.cavern"),
		popup: $.t("v:signpost.desc.cavern")
	},{
		coords: [[205.438,157.313]],
		label: $.t("v:signpost.label.alness"),
		popup: $.t("v:signpost.desc.alness")
	},{
		coords: [[194.000,149.969]],
		label: $.t("v:signpost.label.wheatFields"),
		popup: $.t("v:signpost.desc.wheatFields")
	},{
		coords: [[189.813,161.063]],
		label: $.t("v:signpost.label.vegelbudResidence"),
		popup: $.t("v:signpost.desc.vegelbudResidence")
	},{
		coords: [[184.719,155.609]],
		label: $.t("v:signpost.label.carsten"),
		popup: $.t("v:signpost.desc.carsten")
	},{
		coords: [[179.703,174.922]],
		label: $.t("v:signpost.label.temerianPartisanHideout"),
		popup: $.t("v:signpost.desc.temerianPartisanHideout")
	},{
		coords: [[181.391,189.266]],
		label: $.t("v:signpost.label.estTayiar"),
		popup: $.t("v:signpost.desc.estTayiar")
	},{
		coords: [[168.672,178.078]],
		label: $.t("v:signpost.label.herbalistsHut"),
		popup: $.t("v:signpost.desc.herbalistsHut")
	},{
		coords: [[155.203,206.688]],
		label: $.t("v:signpost.label.aeramasAbandonedManor"),
		popup: $.t("v:signpost.desc.aeramasAbandonedManor")
	},{
		coords: [[142.641,186.875]],
		label: $.t("v:signpost.label.crossroads"),
		popup: $.t("v:signpost.desc.crossroads")
	},{
		coords: [[168.969,165.375]],
		label: $.t("v:signpost.label.gustfieldsFarm"),
		popup: $.t("v:signpost.desc.gustfieldsFarm")
	},{
		coords: [[215.406,154.203]],
		label: $.t("v:signpost.label.dancingWindmill"),
		popup: $.t("v:signpost.desc.dancingWindmill")
	},{
		coords: [[193.328,81.500]],
		label: $.t("v:signpost.label.loggersHut"),
		popup: $.t("v:signpost.desc.loggersHut")
	},{
		coords: [[192.875,67.359]],
		label: $.t("v:signpost.label.lighthouse"),
		popup: $.t("v:signpost.desc.lighthouse")
	},{
		coords: [[184.484,117.922]],
		label: $.t("v:signpost.label.cunnyOfTheGoose"),
		popup: $.t("v:signpost.desc.cunnyOfTheGoose")
	},{
		coords: [[179.016,106.938]],
		label: $.t("v:signpost.label.drahimCastle"),
		popup: $.t("v:signpost.desc.drahimCastle")
	},{
		coords: [[173.828,76.719]],
		label: $.t("v:signpost.label.widowsGrotto"),
		popup: $.t("v:signpost.desc.widowsGrotto")
	},{
		coords: [[165.188,91.438]],
		label: $.t("v:signpost.label.ursten"),
		popup: $.t("v:signpost.desc.ursten")
	},{
		coords: [[182.469,88.563]],
		label: $.t("v:signpost.label.luciansWindmill"),
		popup: $.t("v:signpost.desc.luciansWindmill")
	},{
		coords: [[185.109,136.172]],
		label: $.t("v:signpost.label.eternalFireChapel"),
		popup: $.t("v:signpost.desc.eternalFireChapel")
	},{
		coords: [[156.516,108.625]],
		label: $.t("v:signpost.label.borderPost"),
		popup: $.t("v:signpost.desc.borderPost")
	},{
		coords: [[157.484,172.031]],
		label: $.t("v:signpost.label.novigradGate"),
		popup: $.t("v:signpost.desc.novigradGate")
	},{
		coords: [[149.547,165.094]],
		label: $.t("v:signpost.label.westernGate"),
		popup: $.t("v:signpost.desc.westernGate")
	},{
		coords: [[156.859,162.375]],
		label: $.t("v:signpost.label.oxenfurtHarbor"),
		popup: $.t("v:signpost.desc.oxenfurtHarbor")
	},{
		coords: [[139.359,146.203]],
		label: $.t("v:signpost.label.stonecuttersSettlement"),
		popup: $.t("v:signpost.desc.stonecuttersSettlement")
	},{
		coords: [[155.391,152.375]],
		label: $.t("v:signpost.label.whiteEagleFort"),
		popup: $.t("v:signpost.desc.whiteEagleFort")
	},{
		coords: [[148.453,136.422]],
		label: $.t("v:signpost.label.codgersQuarry"),
		popup: $.t("v:signpost.desc.codgersQuarry")
	},{
		coords: [[158.813,126.328]],
		label: $.t("v:signpost.label.hindhold"),
		popup: $.t("v:signpost.desc.hindhold")
	},{
		coords: [[125.281,173.141]],
		label: $.t("v:signpost.label.ferryStation"),
		popup: $.t("v:signpost.desc.ferryStation")
	},{
		coords: [[137.906,121.516]],
		label: $.t("v:signpost.label.hangedMansTree"),
		popup: $.t("v:signpost.desc.hangedMansTree")
	},{
		coords: [[131.859,131.781]],
		label: $.t("v:signpost.label.devilsPit"),
		popup: $.t("v:signpost.desc.devilsPit")
	},{
		coords: [[129.016,116.984]],
		label: $.t("v:signpost.label.mulbrydale"),
		popup: $.t("v:signpost.desc.mulbrydale")
	},{
		coords: [[128.797,94.375]],
		label: $.t("v:signpost.label.innAtTheCrossroads"),
		popup: $.t("v:signpost.desc.innAtTheCrossroads")
	},{
		coords: [[143.859,52.156]],
		label: $.t("v:signpost.label.harpyFeedingGround"),
		popup: $.t("v:signpost.desc.harpyFeedingGround")
	},{
		coords: [[150.906,46.625]],
		label: $.t("v:signpost.label.lornruk"),
		popup: $.t("v:signpost.desc.lornruk")
	},{
		coords: [[126.828,57.891]],
		label: $.t("v:signpost.label.heatherton"),
		popup: $.t("v:signpost.desc.heatherton")
	},{
		coords: [[128.688,49.313]],
		label: $.t("v:signpost.label.abandonedTower"),
		popup: $.t("v:signpost.desc.abandonedTower")
	},{
		coords: [[129.781,40.859]],
		label: $.t("v:signpost.label.isolatedShack"),
		popup: $.t("v:signpost.desc.isolatedShack")
	},{
		coords: [[107.016,54.078]],
		label: $.t("v:signpost.label.blackbough"),
		popup: $.t("v:signpost.desc.blackbough")
	},{
		coords: [[103.656,40.563]],
		label: $.t("v:signpost.label.hangmansAlley"),
		popup: $.t("v:signpost.desc.hangmansAlley")
	},{
		coords: [[97.219,74.875]],
		label: $.t("v:signpost.label.crowsPerch"),
		popup: $.t("v:signpost.desc.crowsPerch")
	},{
		coords: [[83.781,88.406]],
		label: $.t("v:signpost.label.boatmakersHut"),
		popup: $.t("v:signpost.desc.boatmakersHut")
	},{
		coords: [[86.516,27.609]],
		label: $.t("v:signpost.label.refugeesCamp"),
		popup: $.t("v:signpost.desc.refugeesCamp")
	},{
		coords: [[92.203,28.359]],
		label: $.t("v:signpost.label.coastOfWrecks"),
		popup: $.t("v:signpost.desc.coastOfWrecks")
	},{
		coords: [[82.688,42.859]],
		label: $.t("v:signpost.label.midcopse"),
		popup: $.t("v:signpost.desc.midcopse")
	},{
		coords: [[78.109,57.844]],
		label: $.t("v:signpost.label.wastrelManor"),
		popup: $.t("v:signpost.desc.wastrelManor")
	},{
		coords: [[71.516,103.234]],
		label: $.t("v:signpost.label.banditsCamp"),
		popup: $.t("v:signpost.desc.banditsCamp")
	},{
		coords: [[69.109,75.000]],
		label: $.t("v:signpost.label.oreton"),
		popup: $.t("v:signpost.desc.oreton")
	},{
		coords: [[91.438,37.625]],
		label: $.t("v:signpost.label.forestHut"),
		popup: $.t("v:signpost.desc.forestHut")
	},{
		coords: [[118.281,68.047]],
		label: $.t("v:signpost.label.wolvenGlade"),
		popup: $.t("v:signpost.desc.wolvenGlade")
	},{
		coords: [[106.688,84.781]],
		label: $.t("v:signpost.label.burnedRuins"),
		popup: $.t("v:signpost.desc.burnedRuins")
	},{
		coords: [[89.984,61.938]],
		label: $.t("v:signpost.label.trollBridge"),
		popup: $.t("v:signpost.desc.trollBridge")
	},{
		coords: [[82.281,70.359]],
		label: $.t("v:signpost.label.claywich"),
		popup: $.t("v:signpost.desc.claywich")
	},{
		coords: [[58.672,99.766]],
		label: $.t("v:signpost.label.drudge"),
		popup: $.t("v:signpost.desc.drudge")
	},{
		coords: [[68.141,22.922]],
		label: $.t("v:signpost.label.condyle"),
		popup: $.t("v:signpost.desc.condyle")
	},{
		coords: [[65.422,36.578]],
		label: $.t("v:signpost.label.duenHen"),
		popup: $.t("v:signpost.desc.duenHen")
	},{
		coords: [[49.875,78.141]],
		label: $.t("v:signpost.label.fykeIsle"),
		popup: $.t("v:signpost.desc.fykeIsle")
	},{
		coords: [[39.219,47.703]],
		label: $.t("v:signpost.label.byways"),
		popup: $.t("v:signpost.desc.byways")
	},{
		coords: [[25.406,78.266]],
		label: $.t("v:signpost.label.frischlow"),
		popup: $.t("v:signpost.desc.frischlow")
	},{
		coords: [[33.813,98.703]],
		label: $.t("v:signpost.label.olenasGrove"),
		popup: $.t("v:signpost.desc.olenasGrove")
	},{
		coords: [[32.125,120.547]],
		label: $.t("v:signpost.label.roadToBaldMountain"),
		popup: $.t("v:signpost.desc.roadToBaldMountain")
	},{
		coords: [[25.000,149.563]],
		label: $.t("v:signpost.label.destroyedBastion"),
		popup: $.t("v:signpost.desc.destroyedBastion")
	},{
		coords: [[41.250,157.594]],
		label: $.t("v:signpost.label.crossroadsVillage"),
		popup: $.t("v:signpost.desc.crossroadsVillage")
	},{
		coords: [[37.828,206.734]],
		label: $.t("v:signpost.label.nilfgaardianArmyGroupCenterCamp"),
		popup: $.t("v:signpost.desc.nilfgaardianArmyGroupCenterCamp")
	},{
		coords: [[46.219,198.172]],
		label: $.t("v:signpost.label.houseOfRespite"),
		popup: $.t("v:signpost.desc.houseOfRespite")
	},{
		coords: [[59.203,186.266]],
		label: $.t("v:signpost.label.kimboltWay"),
		popup: $.t("v:signpost.desc.kimboltWay")
	},{
		coords: [[62.953,143.797]],
		label: $.t("v:signpost.label.theOrphansOfCrookbackBog"),
		popup: $.t("v:signpost.desc.theOrphansOfCrookbackBog")
	},{
		coords: [[66.625,154.531]],
		label: $.t("v:signpost.label.ruinedTower"),
		popup: $.t("v:signpost.desc.ruinedTower")
	},{
		coords: [[55.734,159.281]],
		label: $.t("v:signpost.label.ancientOak"),
		popup: $.t("v:signpost.desc.ancientOak")
	},{
		coords: [[76.219,149.703]],
		label: $.t("v:signpost.label.downwarren"),
		popup: $.t("v:signpost.desc.downwarren")
	},{
		coords: [[82.016,135.516]],
		label: $.t("v:signpost.label.dragonslayersGrotto"),
		popup: $.t("v:signpost.desc.dragonslayersGrotto")
	},{
		coords: [[88.328,149.813]],
		label: $.t("v:signpost.label.reardonManor"),
		popup: $.t("v:signpost.desc.reardonManor")
	},{
		coords: [[86.313,175.969]],
		label: $.t("v:signpost.label.benek"),
		popup: $.t("v:signpost.desc.benek")
	},{
		coords: [[100.563,164.641]],
		label: $.t("v:signpost.label.toderas"),
		popup: $.t("v:signpost.desc.toderas")
	},{
		coords: [[101.938,136.266]],
		label: $.t("v:signpost.label.lurtch"),
		popup: $.t("v:signpost.desc.lurtch")
	},{
		coords: [[99.906,109.500]],
		label: $.t("v:signpost.label.lindenvale"),
		popup: $.t("v:signpost.desc.lindenvale")
	},{
		coords: [[115.656,156.328]],
		label: $.t("v:signpost.label.maraudersBridge"),
		popup: $.t("v:signpost.desc.maraudersBridge")
	},{
		coords: [[111.234,178.766]],
		label: $.t("v:signpost.label.grotto"),
		popup: $.t("v:signpost.desc.grotto")
	},{
		coords: [[197.203,225.640]],
		label: $.t("v:signpost.label.arns"),
		popup: $.t("v:signpost.desc.arns")
	},{
		coords: [[254.000,153.312]],
		label: $.t("v:signpost.label.bowdon"),
		popup: $.t("v:signpost.desc.bowdon")
	},{
		coords: [[243.343,197.468]],
		label: $.t("v:signpost.label.brun"),
		popup: $.t("v:signpost.desc.brun")
	},{
		coords: [[240.750,69.750]],
		label: $.t("v:signpost.label.crane"),
		popup: $.t("v:signpost.desc.crane")
	},{
		coords: [[217.562,184.625]],
		label: $.t("v:signpost.label.draken"),
		popup: $.t("v:signpost.desc.draken")
	},{
		coords: [[203.281,207.437]],
		label: $.t("v:signpost.label.erde"),
		popup: $.t("v:signpost.desc.erde")
	},{
		coords: [[240.937,175.625]],
		label: $.t("v:signpost.label.garin"),
		popup: $.t("v:signpost.desc.garin")
	},{
		coords: [[176.343,209.875]],
		label: $.t("v:signpost.label.heddel"),
		popup: $.t("v:signpost.desc.heddel")
	},{
		coords: [[258.031,128.687]],
		label: $.t("v:signpost.label.hunter"),
		popup: $.t("v:signpost.desc.hunter")
	},{
		coords: [[213.625,221.812]],
		label: $.t("v:signpost.label.kilker"),
		popup: $.t("v:signpost.desc.kilker")
	},{
		coords: [[239.312,211.562]],
		label: $.t("v:signpost.label.mill"),
		popup: $.t("v:signpost.desc.mill")
	},{
		coords: [[195.875,192.125]],
		label: $.t("v:signpost.label.vikk"),
		popup: $.t("v:signpost.desc.vikk")
	},{
		coords: [[228.218,197.500]],
		label: $.t("v:signpost.label.voneverec"),
		popup: $.t("v:signpost.desc.voneverec")
	},{
		coords: [[221.000,217.968]],
		label: $.t("v:signpost.label.zuetzer"),
		popup: $.t("v:signpost.desc.zuetzer")
	}],

	//------------------------------------------------Signal Fire------------------------------------------------
	signalfire: [],

	//------------------------------------------------Smugglers' Cache------------------------------------------------
	smugglers: [{
		coords: [[193.547,103.891]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[201.000,121.516]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[183.547,68.297]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	},{
		coords: [[75.844,15.000]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}],

	//------------------------------------------------Spoils of War------------------------------------------------
	spoils: [{
		coords: [[153.609,79.109]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc")
	},{
		coords: [[111.500,105.250]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc")
	},{
		coords: [[46.078,24.953]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc")
	}],
	
	//------------------------------------------------Treasure------------------------------------------------
	treasure: [
	//Surface Treause
	{
		coords: [[101.094,25.344]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.656,26.375]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[97.375,28.438]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[89.938,25.438]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[91.625,36.906]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[90.563,66.953]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.781,73.484]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.172,74.625]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[103.766,76.516]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[107.828,92.938]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[119.453,68.688]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[128.875,50.578]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[139.953,59.344]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[143.422,52.844]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.219,61.594]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[53.375,67.188]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[54.656,77.969]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[55.094,79.250]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.188,77.813]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.469,80.094]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[72.500,113.469]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[99.438,108.906]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[100.500,117.313]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[84.344,150.063]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[68.281,143.719]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[59.844,143.438]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[56.594,145.375]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.781,175.438]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.750,168.531]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[130.344,116.188]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[129.703,119.688]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[136.656,125.422]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[153.391,135.344]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[151.344,142.000]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[173.656,78.063]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[193.531,66.188]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[191.250,194.969]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[213.563,111.094]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[30.344,47.063]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[28.906,50.469]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.531,48.438]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.094,48.250]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[44.656,40.125]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[51.875,51.563]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.625,50.500]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[47.844,77.094]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[86.094,25.625]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[71.938,60.281]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[37.969,125.688]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[52.219,129.844]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[33.844,146.594]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[44.438,156.594]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[94.813,183.438]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[109.125,173.906]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[127.719,166.406]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[124.594,147.406]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[143.719,118.500]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[148.281,119.875]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[168.094,98.125]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[220.188,105.844]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[249.594,144.531]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[227.281,216.844]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[199.750,186.969]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[186.719,166.750]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[146.281,180.063]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[144.625,193.813]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[157.375,128.344]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[119.125,133.563]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[139.313,152.813]],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desc")
	},
	//Underwater Treause
	{
		coords: [[97.531,18.719]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[98.313,17.094]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[153.500,69.266]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[83.188,95.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[67.750,99.719]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[50.344,99.531]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.531,81.875]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.344,72.625]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[43.125,106.063]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[43.563,110.719]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[40.781,111.594]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[39.875,72.188]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.781,72.250]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[113.063,153.750]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[115.125,154.750]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[114.625,136.594]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[158.063,94.750]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[220.625,99.563]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[203.000,98.375]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[38.063,124.500]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	},{
		coords: [[208.031,120.156]],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desc")
	}],
	
	//------------------------------------------------Vineyard Infestation------------------------------------------------
	vineyardinfestation: []
};
