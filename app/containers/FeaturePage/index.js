/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Section from './Section';
import Form from './Form';
import Input from './Input';
import messages from './messages';

export default function FeaturePage() {
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
            <span>Enter a new string for the list here</span>
            <Input
              id="newString"
              type="text"
              placeholder="mxstbr"
              value={newString}
              onChange={onChangeString}
            />
          </label>
        </Form>
      </Section>
    </div>
  );
}
