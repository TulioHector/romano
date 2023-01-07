import {Component, createContext} from 'react';

export const LocaleContext = createContext();

class LocaleContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localeSettings: {},
            setLocaleSettings: (locale) => {
                this.setState({localeSettings: locale});
            },
            currentLocale: ''
        }
    }

    async componentDidMount() {
        const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
        const response = await fetch(`/locales/${language}.json`);
        const jsonFile = await response.json();
        console.log("json locale->", this.state.currentLocale);
        console.log("windows locale->", window.navigator.userLanguage || window.navigator.language || navigator.language);
        this.state.setLocaleSettings(jsonFile);
    }

    render() {
        const locale = {
            localeSettings: this.state.localeSettings,
            setLocaleSettings: this.state.setLocaleSettings,
        };
        return (
            <LocaleContext.Provider value={{locale}}>
                {this.props.children}
            </LocaleContext.Provider>
        )
    }    
}

export default LocaleContextProvider;