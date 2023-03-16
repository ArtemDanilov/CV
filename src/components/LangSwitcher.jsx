import React from 'react';
import i18n from 'i18next'

const LangSwitcher = () => {
  const lngs = {
    pl: { nativeName: 'PL' },
    en: { nativeName: 'EN' }
  };

  return (
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            type="submit"
            className={ `rounded-link ${ i18n.resolvedLanguage === lng && '!hidden' }` }
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
  )
}

export default LangSwitcher;