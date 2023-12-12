import {makeObservable, observable, action} from 'mobx';

class UiStore {
  mode = localStorage.getItem('mode') || 'dark';
  currentPage;

  constructor() {
    makeObservable(this, {
      mode: observable,
      currentPage: observable,

      setMode: action,
      setCurrentPage: action
    });

    this.setCurrentPage(window.location.pathname);
  }

  setMode = (mode) => {
    this.mode = mode;

    this.saveMode(mode);
  };

  setCurrentPage = (location) => {
    this.currentPage = location;
  };

  toggleMode = () => {
    const {mode} = this;

    if (mode === 'dark') {
      return this.setMode('light');
    }

    this.setMode('dark');
  };

  saveMode = (mode) => {
    if (mode !== localStorage.getItem('mode')) {
      localStorage.removeItem('mode');
      localStorage.setItem('mode', mode);
    }
  };
}

export default UiStore;