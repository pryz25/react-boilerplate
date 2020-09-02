/*
 * FeaturePage
 *
 * List all the features
 */
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import request from 'utils/request';
import H1 from 'components/H1';
import { makeSelectString } from './selectors';
import { changeString } from './actions';
import Section from './Section';
import Form from './Form';
import Input from './Input';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

const key = 'feature';

export function FeaturePage({ newString, onStringChange }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const url = `http://localhost:3000/api/strings`;

  function onSubmitForm(event) {
    if (event) event.preventDefault();
    console.log(newString);
    return request(url, {
      method: 'POST',
      body: newString,
    }).then(response => response);
  }

  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Section>
        <Form onSubmit={onSubmitForm}>
          <label htmlFor="newString">
            <span>Enter a new string for the list here:</span>
            <Input
              id="newString"
              type="text"
              value={newString}
              onChange={onStringChange}
            />
          </label>
        </Form>
      </Section>
    </div>
  );
}

FeaturePage.propTypes = {
  newString: PropTypes.string,
  onStringChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onStringChange: event => dispatch(changeString(event.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FeaturePage);
