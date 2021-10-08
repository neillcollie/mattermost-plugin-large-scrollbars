import manifest from './manifest';
import {addStyle, removeStyle} from './css';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/

        addStyle('customized-css', `
	  #channelHeaderFilesButton {display: none;}
	  .search-hint__search-type-selector {display: none;}
        `);
    }

    uninitialize() {
        removeStyle('customized-css');
    }
}

window.registerPlugin(manifest.id, new Plugin());
