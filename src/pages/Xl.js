import React, { memo } from 'react';

function Xl(props) {
  const { t } = props;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (<>
    <p>{t('title')}</p></>
  );
}
export default Xl;