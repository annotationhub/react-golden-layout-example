import React from 'react';
import '@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css';
import '@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import { GoldenLayoutComponent } from '@annotationhub/react-golden-layout';

function ComponentA() {
  return <h2>A</h2>;
}

function ComponentB() {
  return <h2>B</h2>;
}

function ComponentC(props: any) {
  return <h2>{props.content}</h2>;
}

export default function GoldenTest() {
  return (
    <div>
      <GoldenLayoutComponent
        htmlAttrs={{ style: { width: '100vw', height: '100vh' }}}
        config={{
          content: [{
            type: 'row',
            content:[{
              component: ComponentA,
              title: 'A Component'
            }, {
              type: 'column',
              content:[{
                  component: ComponentB,
                  title: 'B Component'
              },{
                  component: () => <ComponentC content="Component with Props" />,
                  title: 'C Component'
              }]
            }]
          }]
        }}
      />
    </div>
  );
}