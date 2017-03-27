var assert = require('chai').assert
let frame = require('../src/prototype_room_utils');

function mockRoom() {

}

describe("room.isStorage", function() {

  const tests = [
    {
      name: "undefined",
      input: new Room storage: undefined),
      want: undefined,
    },
    {
      name: "",
      input: undefined,
      want: undefined,
    },
  ];

  for (let t in tests) {
    it(`${t.name}: given ${t.input}, room.isStorage should return ${}`, function () {
      let room = t.input;
      let got = room.isStorage();
      assert.equal(got, t.want);
    });
  }
});