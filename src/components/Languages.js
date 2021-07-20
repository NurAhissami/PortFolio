import React from "react";
import PropTypes from "prop-types";

// Translation Higher Order Component
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from "react-switch-lang";
import en from "../lang/en.json";
import es from "../lang/es.json";

// Do this two lines only when setting up the application
setTranslations({ en, es });
setDefaultLanguage("en");

// If you want to remember selected language
setLanguageCookie();

class Languages extends React.Component {
  handleSetLanguage = (key) => () => {
    setLanguage(key);
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        {t("home.title")}
        {t("fallback")}

        <button type="button" onClick={this.handleSetLanguage("es")}>
          Spanish{" "}
        </button>
        <button type="button" onClick={this.handleSetLanguage("en")}>
          English{" "}
        </button>
      </div>
    );
  }
}

Languages.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Languages);
