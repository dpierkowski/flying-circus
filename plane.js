define(['ko'], function(ko) {

	return function () {
		var that = {};

		var altitude = ko.observable(0);
		var airspeed = ko.observable(0);
		var fuel = ko.observable(0);
		var dropoff = ko.observable(0);
		var visibility = ko.observable(0);
		var energy_loss = ko.observable(0);
		var turn_bleed = ko.observable(0);
		var stability = ko.observable(0);
		var stress = ko.observable(0);
		var plane_escape = ko.observable(0); //'escape' is a javascript reserved word, so we can't call this just 'escape'
		var crash = ko.observable(0);
		var max_toughness = ko.observable(0);
		var current_toughness = ko.observable(0);
		var max_strain = ko.observable(0);
		var current_strain = ko.observable(0);
		var g_force = ko.observable(0);
		var kills = ko.observable("kills");

		var full_load_boost = ko.observable(0);
		var full_load_handling = ko.observable(0);
		var full_load_climb = ko.observable(0);
		var full_load_stall = ko.observable(0);
		var full_load_speed = ko.observable(0);

		var half_fuel_bombs_boost = ko.observable(0);
		var half_fuel_bombs_handling = ko.observable(0);
		var half_fuel_bombs_climb = ko.observable(0);
		var half_fuel_bombs_stall = ko.observable(0);
		var half_fuel_bombs_speed = ko.observable(0);

		var full_fuel_no_bombs_boost = ko.observable(0);
		var full_fuel_no_bombs_handling = ko.observable(0);
		var full_fuel_no_bombs_climb = ko.observable(0);
		var full_fuel_no_bombs_stall = ko.observable(0);
		var full_fuel_no_bombs_speed = ko.observable(0);

		var half_fuel_no_bombs_boost = ko.observable(0);
		var half_fuel_no_bombs_handling = ko.observable(0);
		var half_fuel_no_bombs_climb = ko.observable(0);
		var half_fuel_no_bombs_stall = ko.observable(0);
		var half_fuel_no_bombs_speed = ko.observable(0);

		var empty_boost = ko.observable(0);
		var empty_handling = ko.observable(0);
		var empty_climb = ko.observable(0);
		var empty_stall = ko.observable(0);
		var empty_speed = ko.observable(0);

		var vital_part_1 = ko.observable("part 1");
		var vital_part_2 = ko.observable("part 2");
		var vital_part_3 = ko.observable("part 3");
		var vital_part_4 = ko.observable("part 4");
		var vital_part_5 = ko.observable("part 5");
		var vital_part_6 = ko.observable("part 6");
		var vital_part_7 = ko.observable("part 7");
		var vital_part_8 = ko.observable("part 8");
		var vital_part_9 = ko.observable("part 9");
		var vital_part_10 = ko.observable("part 10");

		var armor = ko.observable("armor");
		var max_bomb_load = ko.observable("max bombs");

		var ordinance_1 = ko.observable("ordinance 1");
		var ordinance_2 = ko.observable("ordinance 2");
		var ordinance_3 = ko.observable("ordinance 3");
		var ordinance_4 = ko.observable("ordinance 4");

		var notes = ko.observable("the notes");


		that.altitude = altitude;
		that.airspeed = airspeed;
		that.fuel = fuel;
		that.dropoff = dropoff;
		that.visibility = visibility;
		that.energy_loss = energy_loss;
		that.turn_bleed = turn_bleed;
		that.stability = stability;
		that.stress = stress;
		that.plane_escape = plane_escape;
		that.crash = crash;
		that.max_toughness = max_toughness;
		that.current_toughness = current_toughness;
		that.max_strain = max_strain;
		that.current_strain = current_strain;
		that.g_force = g_force;
		that.kills = kills;

		that.full_load_boost = full_load_boost;
		that.full_load_handling = full_load_handling;
		that.full_load_climb = full_load_climb;
		that.full_load_stall = full_load_stall;
		that.full_load_speed = full_load_speed;

		that.half_fuel_bombs_boost = half_fuel_bombs_boost;
		that.half_fuel_bombs_handling = half_fuel_bombs_handling;
		that.half_fuel_bombs_climb = half_fuel_bombs_climb;
		that.half_fuel_bombs_stall = half_fuel_bombs_stall;
		that.half_fuel_bombs_speed = half_fuel_bombs_speed;

		that.full_fuel_no_bombs_boost = full_fuel_no_bombs_boost;
		that.full_fuel_no_bombs_handling = full_fuel_no_bombs_handling;
		that.full_fuel_no_bombs_climb = full_fuel_no_bombs_climb;
		that.full_fuel_no_bombs_stall = full_fuel_no_bombs_stall;
		that.full_fuel_no_bombs_speed = full_fuel_no_bombs_speed;

		that.half_fuel_no_bombs_boost = half_fuel_no_bombs_boost;
		that.half_fuel_no_bombs_handling = half_fuel_no_bombs_handling;
		that.half_fuel_no_bombs_climb = half_fuel_no_bombs_climb;
		that.half_fuel_no_bombs_stall = half_fuel_no_bombs_stall;
		that.half_fuel_no_bombs_speed = half_fuel_no_bombs_speed;

		that.empty_boost = empty_boost;
		that.empty_handling = empty_handling;
		that.empty_climb = empty_climb;
		that.empty_stall = empty_stall;
		that.empty_speed = empty_speed;

		that.vital_part_1 = vital_part_1;
		that.vital_part_2 = vital_part_2;
		that.vital_part_3 = vital_part_3;
		that.vital_part_4 = vital_part_4;
		that.vital_part_5 = vital_part_5;
		that.vital_part_6 = vital_part_6;
		that.vital_part_7 = vital_part_7;
		that.vital_part_8 = vital_part_8;
		that.vital_part_9 = vital_part_9;
		that.vital_part_10 = vital_part_10;

		that.armor = armor;
		that.max_bomb_load = max_bomb_load;

		that.ordinance_1 = ordinance_1;
		that.ordinance_2 = ordinance_2;
		that.ordinance_3 = ordinance_3;
		that.ordinance_4 = ordinance_4;

		that.notes = notes;

		// var calculate = function() {
		// };
		// that.calculate = calculate;

		return that;
	};
});