import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Tag from './Tag.vue';

describe('Paragraph', () => {
  it('sou', () => {
    const wrapper = mount(Tag);

    expect(wrapper.text()).toContain('Test');
  });
});
