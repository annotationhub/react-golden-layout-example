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

function ComponentC() {
  return <h2>C</h2>;
}

export default function GoldenTest() {
  return (
    <div>
      <GoldenLayoutComponent
        htmlAttrs={{ style: { height: "100vh", width: "100vw" } }}
        config={{
          content: [{
            type: 'row',
            content:[{
              type:'react-component',
              component: 'ComponentA',
              title: 'A Component',
              props: { label: 'A' }
            }, {
              type: 'column',
              content:[{
                  type:'react-component',
                  component: 'ComponentB',
                  title: 'B Component',
                  props: { label: 'B' }
              },{
                  type:'react-component',
                  component: 'ComponentC',
                  title: 'C Component',
                  props: { label: 'C' }
              }]
            }]
          }]
        }}
        registerComponents={glLayout => {
          glLayout.registerComponent('ComponentA', ComponentA);
          glLayout.registerComponent('ComponentB', ComponentB)
          glLayout.registerComponent('ComponentC', ComponentC)
        }}
      />
    </div>
  );
}