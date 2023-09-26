import React from 'react';
import type {ComponentMeta} from '@storybook/react';
import {BlockStack, Divider, Text} from '@shopify/polaris';

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>;

export function Default() {
  return <Divider />;
}

export function WithBorderStyles() {
  return (
    <BlockStack gap="500">
      <Text as="h1" variant="headingXs">
        Default
      </Text>
      <Divider />
      <Text as="h1" variant="headingXs">
        Border
      </Text>
      <Divider borderColor="border" />
      <Text as="h1" variant="headingXs">
        Border inverse
      </Text>
      <Divider borderColor="border-inverse" />
      <Text as="h1" variant="headingXs">
        Transparent
      </Text>
      <Divider borderColor="transparent" />
    </BlockStack>
  );
}
