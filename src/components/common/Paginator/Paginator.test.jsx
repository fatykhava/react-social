import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from "./Paginator";

describe('Paginator component', () => {
  test('PageCount is 11 but we should have only 10 span', () => {
    const component = create(<Paginator currentPage='1' pageSize='10' totalItemCount='11'/>);
    const root = component.root;
    const span = root.findAllByType('span');
    expect(span.length).toBe(10);
  });
  test('If pageCount is more than 10, the Next button should be displayed', () => {
    const component = create(<Paginator currentPage='1' pageSize='10' totalItemCount='11'/>);
    const root = component.root;
    const button = root.findByType('button');
    expect(button.children[0]).toBe('Next');
  });
 })
