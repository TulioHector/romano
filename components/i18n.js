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