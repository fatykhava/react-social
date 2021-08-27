import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
  test('Status from props should be in local state', () => {
    const component = create(<ProfileStatus status='test'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('test');
  });
  test('After creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status='test'/>);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).toBeTruthy();
  });
  test('After creation <input> should not be displayed', () => {
    const component = create(<ProfileStatus status='test'/>);
    const root = component.root;

    expect(() => {
      const input = root.findByType('input');
    }).toThrow();
  });
  test('After creation <span> should contains right status', () => {
    const component = create(<ProfileStatus status='test'/>);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('test');
  });
  test('After doubleClick on <span>, <input> should be displayed', () => {
    const component = create(<ProfileStatus status='test'/>);
    const root = component.root;
    const span = root.findByType('span');
    span.props.onDoubleClick();
    const input = root.findByType('input');
    expect(input).toBeTruthy();
  });
  test('After doubleClick on <span>, <span> should not be displayed', () => {
    const component = create(<ProfileStatus status='test'/>);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    expect(() => {
      span = root.findByType('span');
    }).toThrow();
  });
  test('Callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status='test' updateProfileStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivationEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
})
