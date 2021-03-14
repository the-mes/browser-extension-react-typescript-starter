import React from 'react';

import { t } from '../shared/helpers/translate';

import './popup.scss';

export const Popup = () => {
  return (
    <div className="popup">
      <h1 className="popup__title">{t("message")}</h1>
    </div>
  );
};
