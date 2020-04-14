import manifest from './manifest';
import {Top, Left} from './components';
import {addStyle, removeStyle} from './css';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/

        registry.registerRootComponent(Top);
        registry.registerRootComponent(Left);

        addStyle('customized-css', `
          .sidebar--left {
            left: 150px;
            top: 100px;
            height: calc(100% - 100px);
          }

          .sidebar--right {
            top: 163px;
            height: calc(100% - 100px);
          }

          .app__content {
            left: 150px;
            top: 100px;
            height: calc(100% - 100px);
            width: calc(100% - 220px - 150px);
          }
        `);
    }

    uninitialize() {
        removeStyle('customized-css');
    }
}

window.registerPlugin(manifest.id, new Plugin());
