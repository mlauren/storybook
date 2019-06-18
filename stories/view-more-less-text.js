import React from 'react';
import { storiesOf } from '@storybook/react';
import ViewMoreLess from '../src/components/ViewMoreLess';

storiesOf('View More View Less Text', module)
  .add('Default Functionality: 2 lines/5 lines', () => 
    <ViewMoreLess 
      dataMore="View more"
      dataLess="View less"
      dataDescription="Information regarding lorem ipsum">
      Lorem ipsum dolor sit amet, <a href="#">inner link example</a> elit. In ac enim mi. 
      <span class="-dolphin -medium">Sed accumsan</span>, ipsum id varius molestie, 
      <em>erat nisi congue</em> odio, in sollicitudin lorem velit a erat. In molestie 
      aliquam varius. Integer elit dui, eleifend eget erat sit amet, placerat blandit velit. 
      Nullam orci justo, tincidunt eget ultrices ut, pretium a felis. Duis quis vulputate leo. 
      In vulputate, nibh a fermentum dapibus, urna nisi convallis eros, eget gravida lorem est vel sem. 
      Proin aliquet a leo ut lacinia. Proin nisi diam, ultricies vel sem eget, accumsan consequat elit. 
      Sed <a href="#">inner link example</a> ornare. Aenean ultricies, enim in auctor dignissim, 
      sem orci pellentesque nisi, vel rhoncus justo lorem at ligula. Pellentesque quis fermentum velit. 
      Aenean non eros iaculis, sodales lectus nec, volutpat tellus. Proin ultricies eros et dui posuere 
      malesuada. Aliquam id mi non tellus imperdiet finibus. Aliquam eu ligula dolor.
    </ViewMoreLess>
  )
  .add('4 lines/6 lines', () =>
  <ViewMoreLess 
    dataMore="View more"
    dataLess="View less"
    dataMax="4"
    dataMaxMobile="6"
    dataDescription="Information regarding lorem ipsum">
    Lorem ipsum dolor sit amet, <a href="#">inner link example</a> elit. In ac enim mi. 
    <span class="-dolphin -medium">Sed accumsan</span>, ipsum id varius molestie, 
    <em>erat nisi congue</em> odio, in sollicitudin lorem velit a erat. In molestie 
    aliquam varius. Integer elit dui, eleifend eget erat sit amet, placerat blandit velit. 
    Nullam orci justo, tincidunt eget ultrices ut, pretium a felis. Duis quis vulputate leo. 
    In vulputate, nibh a fermentum dapibus, urna nisi convallis eros, eget gravida lorem est vel sem. 
    Proin aliquet a leo ut lacinia. Proin nisi diam, ultricies vel sem eget, accumsan consequat elit. 
    Sed <a href="#">inner link example</a> ornare. Aenean ultricies, enim in auctor dignissim, 
    sem orci pellentesque nisi, vel rhoncus justo lorem at ligula. Pellentesque quis fermentum velit. 
    Aenean non eros iaculis, sodales lectus nec, volutpat tellus. Proin ultricies eros et dui posuere 
    malesuada. Aliquam id mi non tellus imperdiet finibus. Aliquam eu ligula dolor.
  </ViewMoreLess>
  );