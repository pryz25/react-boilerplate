import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectStrings', () => {
  const reposSelector = makeSelectStrings();
  it('should select the repos', () => {
    const repositories = [];
    const mockedState = {
      global: {
        strings: repositories,
      },
    };
    expect(reposSelector(mockedState)).toEqual(repositories);
  });
});
