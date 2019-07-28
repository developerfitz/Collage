import React from "react";
import Button from "./Button";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("atoms/Button", module);

stories.addDecorator(withKnobs)

const variantOptions = {
  none: '',
  primary: 'primary',
  secondary: 'secondary'
}

// Every story represents a state for our Button component
stories
  .add("default", () => 
    <Button 
      onClick={action('clicked!')}
      variant={select('variant', variantOptions, '')}
      disabled={boolean('disabled', false)}
    >Button</Button>
  );

stories.add("default disabled", () => <Button disabled onClick={action('clicked!')}>Button</Button>);

stories.add("primary", () => <Button variant="primary" onClick={action('clicked!')}>Button</Button>);

// Passing a prop without a value is basically the same as passing `true`
stories.add("primary disabled", () => (
  <Button variant="primary" disabled onClick={action('clicked!')}>
    Button
  </Button>
));

stories.add("secondary", () => <Button variant="secondary" onClick={action('clicked!')}>Button</Button>);

stories.add("secondary disabled", () => (
  <Button variant="secondary" disabled onClick={action('clicked!')}>
    Button
  </Button>
));
