import React, { Component, createContext } from "react";
import { Subject, interval, EMPTY } from "rxjs";
import { THEMES } from "./data";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { startWith } from "rxjs/internal/operators/startWith";
const themeChangeTimer$ = new Subject();
const Context = createContext();

class ThemeProvider extends Component {
  state = { ...THEMES.react, type: "react" };
  subscription = null;

  componentDidMount() {
    this.setThemeColors(THEMES.react);
    this.subscription = themeChangeTimer$
      .pipe(
        startWith(true),
        switchMap((val) => (val ? interval(10 * 1000) : EMPTY))
      )
      .subscribe(() => {
        const themesKeys = Object.keys(THEMES);
        let randomKey =
          themesKeys[Math.floor(Math.random() * themesKeys.length)];
        while (randomKey === this.state.type) {
          randomKey = themesKeys[Math.floor(Math.random() * themesKeys.length)];
        }
        this.changeTheme(randomKey);
      });
  }
  changeTheme = (type) => {
    if (THEMES[type]) {
      this.setState((state) => {
        this.setThemeColors(THEMES[type]);
        if (state.type !== type) {
          return {
            ...THEMES[type],
            animate: true,
            type,
          };
        }
        return state;
      });
    }
  };

  stopThemeChangeTimer = () => {
    themeChangeTimer$.next(false);
  };
  startThemeChangeTimer = () => {
    themeChangeTimer$.next(true);
  };
  setThemeColors(theme) {
    document.documentElement.style.setProperty(
      `--primary-color`,
      theme.primaryColor
    );
    document.documentElement.style.setProperty(
      `--secondary-color`,
      theme.secondaryColor
    );
  }
  render() {
    return (
      // Provide the context value
      <Context.Provider
        value={{
          ...this.state,
          changeTheme: this.changeTheme,
          stopThemeChangeTimer: this.stopThemeChangeTimer,
          startThemeChangeTimer: this.startThemeChangeTimer,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
const ThemeConsumer = Context.Consumer;
// Exporting the Provider and Consumer from the context
export { ThemeProvider, ThemeConsumer, Context as ThemeContext };
