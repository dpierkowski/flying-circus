define(['ko'], function(ko) {

	return function (planeState) {
		var that = {};

		that.altitude = ko.observable(planeState ? planeState.altitude : 0);
		that.airspeed = ko.observable(planeState ? planeState.airspeed : 0);
		that.fuel = ko.observable(planeState ? planeState.fuel : 0);
		that.dropoff = ko.observable(planeState ? planeState.dropoff : 0);
		that.visibility = ko.observable(planeState ? planeState.visibility : 0);
		that.energy_loss = ko.observable(planeState ? planeState.energy_loss : 0);
		that.turn_bleed = ko.observable(planeState ? planeState.turn_bleed : 0);
		that.stability = ko.observable(planeState ? planeState.stability : 0);
		that.stress = ko.observable(planeState ? planeState.stress : 0);
		that.plane_escape = ko.observable(planeState ? planeState.plane_escape : 0); //'escape' is a javascript reserved word, so we can't call this just 'escape'
		that.crash = ko.observable(planeState ? planeState.crash : 0);
		that.max_toughness = ko.observable(planeState ? planeState.max_toughness : 0);
		that.current_toughness = ko.observable(planeState ? planeState.current_toughness : 0);
		that.max_strain = ko.observable(planeState ? planeState.max_strain : 0);
		that.current_strain = ko.observable(planeState ? planeState.current_strain : 0);
		that.g_force = ko.observable(planeState ? planeState.g_force : 0);
		that.kills = ko.observable(planeState ? planeState.kills : 0);

		that.full_load_boost = ko.observable(planeState ? planeState.full_load_boost : 0);
		that.full_load_handling = ko.observable(planeState ? planeState.full_load_handling : 0);
		that.full_load_climb = ko.observable(planeState ? planeState.full_load_climb : 0);
		that.full_load_stall = ko.observable(planeState ? planeState.full_load_stall : 0);
		that.full_load_speed = ko.observable(planeState ? planeState.full_load_speed : 0);

		that.half_fuel_bombs_boost = ko.observable(planeState ? planeState.half_fuel_bombs_boost : 0);
		that.half_fuel_bombs_handling = ko.observable(planeState ? planeState.half_fuel_bombs_handling : 0);
		that.half_fuel_bombs_climb = ko.observable(planeState ? planeState.half_fuel_bombs_climb : 0);
		that.half_fuel_bombs_stall = ko.observable(planeState ? planeState.half_fuel_bombs_stall : 0);
		that.half_fuel_bombs_speed = ko.observable(planeState ? planeState.half_fuel_bombs_speed : 0);

		that.full_fuel_no_bombs_boost = ko.observable(planeState ? planeState.full_fuel_no_bombs_boost : 0);
		that.full_fuel_no_bombs_handling = ko.observable(planeState ? planeState.full_fuel_no_bombs_handling : 0);
		that.full_fuel_no_bombs_climb = ko.observable(planeState ? planeState.full_fuel_no_bombs_climb : 0);
		that.full_fuel_no_bombs_stall = ko.observable(planeState ? planeState.full_fuel_no_bombs_stall : 0);
		that.full_fuel_no_bombs_speed = ko.observable(planeState ? planeState.full_fuel_no_bombs_speed : 0);

		that.half_fuel_no_bombs_boost = ko.observable(planeState ? planeState.half_fuel_no_bombs_boost : 0);
		that.half_fuel_no_bombs_handling = ko.observable(planeState ? planeState.half_fuel_no_bombs_handling : 0);
		that.half_fuel_no_bombs_climb = ko.observable(planeState ? planeState.half_fuel_no_bombs_climb : 0);
		that.half_fuel_no_bombs_stall = ko.observable(planeState ? planeState.half_fuel_no_bombs_stall : 0);
		that.half_fuel_no_bombs_speed = ko.observable(planeState ? planeState.half_fuel_no_bombs_speed : 0);

		that.empty_boost = ko.observable(planeState ? planeState.empty_boost : 0);
		that.empty_handling = ko.observable(planeState ? planeState.empty_handling : 0);
		that.empty_climb = ko.observable(planeState ? planeState.empty_climb : 0);
		that.empty_stall = ko.observable(planeState ? planeState.empty_stall : 0);
		that.empty_speed = ko.observable(planeState ? planeState.empty_speed : 0);

		that.vital_part_1 = ko.observable(planeState ? planeState.vital_part_1 : 0);
		that.vital_part_2 = ko.observable(planeState ? planeState.vital_part_2 : 0);
		that.vital_part_3 = ko.observable(planeState ? planeState.vital_part_3 : 0);
		that.vital_part_4 = ko.observable(planeState ? planeState.vital_part_4 : 0);
		that.vital_part_5 = ko.observable(planeState ? planeState.vital_part_5 : 0);
		that.vital_part_6 = ko.observable(planeState ? planeState.vital_part_6 : 0);
		that.vital_part_7 = ko.observable(planeState ? planeState.vital_part_7 : 0);
		that.vital_part_8 = ko.observable(planeState ? planeState.vital_part_8 : 0);
		that.vital_part_9 = ko.observable(planeState ? planeState.vital_part_9 : 0);
		that.vital_part_10 = ko.observable(planeState ? planeState.vital_part_10 : 0);

		that.armor = ko.observable(planeState ? planeState.armor : 0);
		that.max_bomb_load = ko.observable(planeState ? planeState.max_bomb_load : 0);

		that.ordinance_1 = ko.observable(planeState ? planeState.ordinance_1 : 0);
		that.ordinance_2 = ko.observable(planeState ? planeState.ordinance_2 : 0);
		that.ordinance_3 = ko.observable(planeState ? planeState.ordinance_3 : 0);
		that.ordinance_4 = ko.observable(planeState ? planeState.ordinance_4 : 0);

		that.notes = ko.observable(planeState ? planeState.notes : 0);

		// tracks what load level is currently selected
		that.full_load_selected = ko.observable(planeState ? planeState.full_load_selected : false);
		that.half_fuel_bombs_selected =  ko.observable(planeState ? planeState.half_fuel_bombs_selected : false);
		that.full_fuel_no_bombs_selected =  ko.observable(planeState ? planeState.full_fuel_no_bombs_selected : true);
		that.half_fuel_no_bombs_selected =  ko.observable(planeState ? planeState.half_fuel_no_bombs_selected : false);
		that.empty_selected =  ko.observable(planeState ? planeState.empty_selected : false);

		// engine info
		that.rpm = ko.observable(planeState &&  planeState.rpm  ? planeState.rpm : 0);
		that.wear = ko.observable(planeState &&  planeState.wear  ? planeState.wear : 0);
		that.reliability = ko.observable(planeState &&  planeState.reliability  ? planeState.reliability : 0);
		that.ideal_altitide = ko.observable(planeState &&  planeState.ideal_altitide  ? planeState.ideal_altitide : 0);
		that.overspeed = ko.observable(planeState &&  planeState.overspeed ? planeState.overspeed : 0);
		that.engine_notes = ko.observable(planeState &&  planeState.engine_notes  ? planeState.engine_notes : "");

		// weapon into
		that.weapon_type = ko.observable(planeState &&  planeState.weapon_type  ? planeState.weapon_type : "");
		that.ammo = ko.observable(planeState &&  planeState.ammo  ? planeState.ammo : 0);
		that.ap = ko.observable(planeState &&  planeState.ap  ? planeState.ap : 0);
		that.jam = ko.observable(planeState &&  planeState.jam  ? planeState.jam : "");
		that.knife_hits = ko.observable(planeState &&  planeState.knife_hits  ? planeState.knife_hits : 0);
		that.close_hits = ko.observable(planeState &&  planeState.close_hits  ? planeState.close_hits : 0);
		that.long_hits = ko.observable(planeState &&  planeState.long_hits  ? planeState.long_hits : 0);
		that.extreme_hits = ko.observable(planeState &&  planeState.extreme_hits  ? planeState.extreme_hits : 0);
		that.knife_damage = ko.observable(planeState &&  planeState.knife_damage  ? planeState.knife_damage : 0);
		that.close_damage = ko.observable(planeState &&  planeState.close_damage  ? planeState.close_damage : 0);
		that.long_damage = ko.observable(planeState &&  planeState.long_damage  ? planeState.long_damage : 0);
		that.extreme_damage = ko.observable(planeState &&  planeState.extreme_damage  ? planeState.extreme_damage : 0);
		that.weapon_tags = ko.observable(planeState &&  planeState.weapon_tags  ? planeState.weapon_tags : "");

		const plane_loads = [that.full_load_selected, that.half_fuel_bombs_selected, that.full_fuel_no_bombs_selected, that.half_fuel_no_bombs_selected, that.empty_selected];

		var toJSON = function() {

			var planeState = {
				"altitude": that.altitude(),
				"airspeed": that.airspeed(),
				"fuel": that.fuel(),
				"dropoff": that.dropoff(),
				"visibility": that.visibility(),
				"energy_loss": that.energy_loss(),
				"turn_bleed": that.turn_bleed(),
				"stability": that.stability(),
				"stress": that.stress(),
				"plane_escape": that.plane_escape(),
				"crash": that.crash(),
				"max_toughness": that.max_toughness(),
				"current_toughness": that.current_toughness(),
				"max_strain": that.max_strain(),
				"current_strain": that.current_strain(),
				"g_force": that.g_force(),
				"kills": that.kills(),
				"full_load_boost": that.full_load_boost(),
				"full_load_handling": that.full_load_handling(),
				"full_load_climb": that.full_load_climb(),
				"full_load_stall": that.full_load_stall(),
				"full_load_speed": that.full_load_speed(),
				"half_fuel_bombs_boost": that.half_fuel_bombs_boost(),
				"half_fuel_bombs_handling": that.half_fuel_bombs_handling(),
				"half_fuel_bombs_climb": that.half_fuel_bombs_climb(),
				"half_fuel_bombs_stall": that.half_fuel_bombs_stall(),
				"half_fuel_bombs_speed": that.half_fuel_bombs_speed(),
				"full_fuel_no_bombs_boost": that.full_fuel_no_bombs_boost(),
				"full_fuel_no_bombs_handling": that.full_fuel_no_bombs_handling(),
				"full_fuel_no_bombs_climb": that.full_fuel_no_bombs_climb(),
				"full_fuel_no_bombs_stall": that.full_fuel_no_bombs_stall(),
				"full_fuel_no_bombs_speed": that.full_fuel_no_bombs_speed(),
				"half_fuel_no_bombs_boost": that.half_fuel_no_bombs_boost(),
				"half_fuel_no_bombs_handling": that.half_fuel_no_bombs_handling(),
				"half_fuel_no_bombs_climb": that.half_fuel_no_bombs_climb(),
				"half_fuel_no_bombs_stall": that.half_fuel_no_bombs_stall(),
				"half_fuel_no_bombs_speed": that.half_fuel_no_bombs_speed(),
				"empty_boost": that.empty_boost(),
				"empty_handling": that.empty_handling(),
				"empty_climb": that.empty_climb(),
				"empty_stall": that.empty_stall(),
				"empty_speed": that.empty_speed(),
				"vital_part_1": that.vital_part_1(),
				"vital_part_2": that.vital_part_2(),
				"vital_part_3": that.vital_part_3(),
				"vital_part_4": that.vital_part_4(),
				"vital_part_5": that.vital_part_5(),
				"vital_part_6": that.vital_part_6(),
				"vital_part_7": that.vital_part_7(),
				"vital_part_8": that.vital_part_8(),
				"vital_part_9": that.vital_part_9(),
				"vital_part_10": that.vital_part_10(),
				"armor": that.armor(),
				"max_bomb_load": that.max_bomb_load(),
				"ordinance_1": that.ordinance_1(),
				"ordinance_2": that.ordinance_2(),
				"ordinance_3": that.ordinance_3(),
				"ordinance_4": that.ordinance_4(),
				"notes": that.notes(),
				"full_load_selected": that.full_load_selected(),
				"half_fuel_bombs_selected": that.half_fuel_bombs_selected(),
				"full_fuel_no_bombs_selected": that.full_fuel_no_bombs_selected(),
				"half_fuel_no_bombs_selected": that.half_fuel_no_bombs_selected(),
				"empty_selected": that.empty_selected(),
				"rpm": that.rpm(),
				"wear": that.wear(),
				"reliability": that.reliability(),
				"ideal_altitide": that.ideal_altitide(),
				"overspeed": that.overspeed(),
				"engine_notes": that.engine_notes(),
				"weapon_type": that.weapon_type(),
				"ammo": that.ammo(),
				"ap": that.ap(),
				"jam": that.jam(),
				"knife_hits": that.knife_hits(),
				"close_hits": that.close_hits(),
				"long_hits": that.long_hits(),
				"extreme_hits": that.extreme_hits(),
				"knife_damage": that.knife_damage(),
				"close_damage": that.close_damage(),
				"long_damage": that.long_damage(),
				"extreme_damage": that.extreme_damage(),
				"weapon_tags": that.weapon_tags()
			};

			return JSON.stringify(planeState);
		};

		that.persistState = function() {
			window.localStorage.setItem("planeState", toJSON());
			return true; //tells knockout to continue processing this event
		};

		/* Event handler for when the user clicks on a plane load level */
		that.selectLoad = function(load) {
			plane_loads.forEach((item) => {item(false)}); // clear the previously selected load
			that[load + '_selected'](true);
			that.persistState();
		}

		return that;
	};
});