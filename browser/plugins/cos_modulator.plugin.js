E2.p = E2.plugins["cos_modulator"] = function(core, node)
{
	this.desc = 'Cos(x).';
	
	this.input_slots = [ 
		{ name: 'value', dt: core.datatypes.FLOAT, desc: 'Input value.', def: 0 }
	];
	
	this.output_slots = [
		{ name: 'result', dt: core.datatypes.FLOAT, desc: 'cos(<b>value</b>).', def: 0 }
	];
};

E2.p.prototype.reset = function()
{
	this.value = 0.0;
};

E2.p.prototype.update_input = function(slot, data)
{
	if(slot.index === 0)
		this.value = Math.cos(data);
};	

E2.p.prototype.update_output = function(slot)
{
	return this.value;
};
