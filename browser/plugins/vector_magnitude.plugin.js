E2.p = E2.plugins["vector_magnitude"] = function(core, node)
{
	this.desc = 'Emits the magnitude (length) of the supplied vector.';
	
	this.input_slots = [
		{ name: 'vector', dt: core.datatypes.VECTOR, desc: 'Input vector to compute the length of.', def: '0, 0, 0' }
	];
	
	this.output_slots = [
		{ name: 'mag', dt: core.datatypes.FLOAT, desc: 'Emits the magnitude of the input vector.', def: 0 }
	];
};

E2.p.prototype.update_input = function(slot, data)
{
	if(slot.index === 0)
		this.vector = data;
};	

E2.p.prototype.update_state = function()
{
	var x = this.vector[0], y = this.vector[1], z = this.vector[2];

	this.mag = Math.sqrt(x*x + y*y + z*z); 
};

E2.p.prototype.update_output = function(slot)
{
	return this.mag;
};	

E2.p.prototype.state_changed = function(ui)
{
	if(!ui)
	{
		this.vector = [0, 0, 0];
		this.mag = 0.0;
	}
};
