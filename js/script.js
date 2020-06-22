window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('../src/js/modules/tabs'),
          modal = require('../src/js/modules/modal'),
          timer = require('../src/js/modules/timer'),
          cards = require('../src/js/modules/cards'),
          calc = require('../src/js/modules/calc'),
          forms = require('../src/js/modules/forms'),
          slider = require('../src/js/modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});