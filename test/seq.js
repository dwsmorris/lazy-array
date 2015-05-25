// Functions that satisfy the Clojure sequence interface.
// http://clojure.org/sequences

'use strict';

var assert = require('assert');
var larr = require('..');

describe('seq', function () {
    var seq;

    beforeEach(function () {
        seq = ['foo', 'bar', 'baz'];
    });

    describe('first', function () {
        it('should return the first item', function () {
            assert.equal(larr.first(seq), 'foo');
        });

        it('should return null when given an empty array or null', function () {
            assert.equal(larr.first([]), null);
            assert.equal(larr.first(null), null);
        });
    });

    describe('rest', function () {
        it('should return the rest of the items', function () {
            assert.deepEqual(larr.rest(seq), ['bar', 'baz']);
        });

        it('should retun an empty array when given an empty array or null', function () {
            assert.deepEqual(larr.rest([]), []);
            assert.deepEqual(larr.rest(null), []);
        });

        it('should return an empty array if given a array of length 1', function () {
            assert.deepEqual(larr.rest(['foo']), []);
        });
    });

    describe('cons', function () {
        it('should return an array with the value prepended', function () {
            assert.deepEqual(larr.cons('pre', seq), ['pre'].concat(seq));
        });

        it('should still return an array when the tail is null', function () {
            assert.deepEqual(larr.cons('pre', null), ['pre']);
        });
    });
});