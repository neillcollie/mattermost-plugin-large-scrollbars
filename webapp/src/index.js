import manifest from './manifest';
import {addStyle, removeStyle} from './css';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/

        addStyle('customized-css', `
	  #channelHeaderFilesButton {display: none;}
	  #icon icon-file-document-outline {display: none;}
	  #searchbar-help-popup > div.popover-content > div > div.button-container > button:nth-child(2) {display: none;}
	  #sbr-searchbar-help-popup {display: none;}
	  #sbr-searchbar-help-popup > div.popover-content > div > div.button-container {display: none;}
	  #searchContainer > div.MessagesOrFilesSelector {display: none;}
	  #searchContainer > div.MessagesOrFilesSelector > div.buttons-container {display: none;}
	  #searchbar-help-popup > div.popover-content > div {display: none;}
        `);
    }

    uninitialize() {
        removeStyle('customized-css');
    }
}

window.registerPlugin(manifest.id, new Plugin());
