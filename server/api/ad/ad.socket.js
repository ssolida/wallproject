/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ad = require('./ad.model');

exports.register = function(socket) {
  Ad.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Ad.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
	Ad.populate(doc, {path:'author', select: 'name'}, function(err, comment) {
  		socket.emit('ad:save', doc);
  	});
}

function onRemove(socket, doc, cb) {
  socket.emit('ad:remove', doc);
}