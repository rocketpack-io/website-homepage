import { TextScramble } from '../plugins/TextScramble';

export default {
    bind: function(el, binding, vnode) {
        var config = Object.assign({
            phrases: [],
            delay: 5000
        }, vnode.context[binding.expression]);

        const getRndInteger = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) ) + min;
        };
        const uniqTimeoutHandlerId = 'textscramble_timeout_' + String(getRndInteger(1000, 9999));
        el.setAttribute('data-textscramble_timeout_id', uniqTimeoutHandlerId);

        const fx = new TextScramble(el);
        let counter = 0;
        const next = () => {
          fx.setText(config.phrases[counter]).then(() => {
            window[uniqTimeoutHandlerId] = setTimeout(next, config.delay);
          });
          counter = (counter + 1) % config.phrases.length;
        };
        next();
    },
    unbind: function(el) {
      const uniqTimeoutHandlerId = el.getAttribute('data-textscramble_timeout_id');
      clearTimeout(window[uniqTimeoutHandlerId]);
    }
  };