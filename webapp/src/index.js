import manifest from './manifest';
import {addStyle, removeStyle} from './css';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/

        addStyle('customized-css', `
          .post-list__dynamic::-webkit-scrollbar {
            width: 16px !important;
          }

          #sidebar-left .scrollbar--view ~ div {
            width: 16px !important;
          }

          #sidebar-right .scrollbar--view ~ div {
            width: 16px !important;
            opacity: 1 !important;
          }
        `);
    }

    uninitialize() {
        removeStyle('customized-css');
    }
}

window.registerPlugin(manifest.id, new Plugin());
