import extension from 'extensionizer';

import { t } from './shared/helpers/translate';

import { StoreKey } from './shared/enums/StoreKey';
import { Tab } from './shared/enums/Tab';

interface Info {
  readonly menuItemId: string;
  readonly selectionText: string;
}

const CONTEXT_MENU_ID = 'share-as-qr-code';

extension.runtime.onStartup.addListener(() => {
  extension.storage.local.clear();
});

extension.contextMenus.create({
  title: t('contextMenuTitle'),
  id: CONTEXT_MENU_ID,
  contexts: ['selection'],
});

extension.contextMenus.onClicked.addListener((info: Info) => {
  if (info.menuItemId === CONTEXT_MENU_ID) {
    extension.storage.local.set({
      [StoreKey.SelectedText]: info.selectionText,
      [StoreKey.CurrentTab]: Tab.Text,
    });

    const openPopup = extension.browserAction.openPopup;

    // this check is needed because Firefox and Chromium based browsers implement openPopup differently
    if (openPopup.length === 0) {
      openPopup(() => null);
    } else {
      openPopup();
    }
  }
});
