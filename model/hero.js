var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema for adding to databade
var heroSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: {type: String, enum: ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity']}
}); // end Schema

var Heroes = mongoose.model('heroes', heroSchema);

module.exports = Heroes;
