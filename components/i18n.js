import { PureComponent, createContext } from 'react';
import { withRouter } from 'next/router';

export const LocaleContext = createContext();

export const LoadLocaleAsync = async (locale) => {
    let jsonFile = {};

    await fetch(`/locales/${locale}.json`)
        .then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(data => jsonFile = data)
        .catch(err => {
            console.log("error de loaded", err)
            jsonFile = { error: err }
        });
    return jsonFile;
}

export const LoadLocaleSync = (locale) => {
    let jsonFile = loadJSON(`/locales/${locale}.json`);
    console.log("i18n sync json->", jsonFile);
    return jsonFile;
}

// Load JSON text from server hosted file and return JSON parsed object
const loadJSON = (filePath) => {
    // Load json file;
    var json = loadTextFileAjaxSync(filePath, "application/json");
    // Parse json
    return JSON.parse(json);
}

// Load text with Ajax synchronously: takes path to file and optional MIME type
const loadTextFileAjaxSync = (filePath, mimeType) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    if (mimeType != null) {
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType(mimeType);
        }
    }
    xmlhttp.send();
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
        return xmlhttp.responseText;
    }
    else {
        // TODO Throw exception
        return null;
    }
}

class LocaleContextProvider extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            localeSettings: {},
            setLocaleSettings: (locale) => {
                this.setState({ localeSettings: locale });
            },
            currentLocale: '',
            hasMounted: false,
        }
    }

    async componentDidMount() {
        this.setState({ hasMounted: true, });
        const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
        const jsonFile = await LoadLocaleAsync(language);
        this.state.setLocaleSettings(jsonFile);
    }

    render() {
        const locale = {
            localeSettings: this.state.localeSettings,
            setLocaleSettings: this.state.setLocaleSettings,
        };
        return this.state.hasMounted && (
            <>
                <LocaleContext.Provider value={{ locale }}>
                    {this.props.children}
                </LocaleContext.Provider>
            </>
        )
    }
}

export default withRouter(LocaleContextProvider);