// Import lit-html functions
import {html, render} from 'lit-html';

const items = [['A', 'Aceyalone', 'Aesop Rock', 'Angel Haze', 'Atmosphere'],['B','Babbletron','Blackalicious','Bike For Three','Black Sheep','Blueprint'],['C','Cecil Otter','Chali 2na','Chance The Rapper','Common Market','Cool Calm Pete'],['D','Danger Doom','Darc Mind','Dem Atlas','Dessa']]


const myTemplateOld = ()=> html`
  <div class="sticky-slide">
  <dl>
         <dt>A</dt>
         <dd>Aceyalone</dd>
         <dd>Aesop Rock</dd>
         <dd>Angel Haze</dd>
         <dd>Atmosphere</dd>
         <dt>B</dt>
         <dd>Babbletron</dd>
         <dd>Blackalicious</dd>
         <dd>Bike For Three</dd>
         <dd>Black Sheep</dd>
         <dd>Blueprint</dd>
         <dt>C</dt>
         <dd>Cecil Otter</dd>
         <dd>Chali 2na</dd>
         <dd>Chance The Rapper</dd>
         <dd>Common Market</dd>
         <dd>Cool Calm Pete</dd>
         <dt>D</dt>
         <dd>Danger Doom</dd>
         <dd>Darc Mind</dd>
         <dd>Dem Atlas</dd>
         <dd>Dessa</dd>
  </dl>
</div>
`;

const myTemplate = ()=> html`
  <div class="sticky-slide">
  <dl>
    ${items.map((item) => html `
        ${item.map((index) => html `
          ${index.length == 1
            ? html `<dt>${index}</dt>`
            : html `<dd>${index}</dd>`
          }

        `)};
    `)};
  </dl>
</div>
`;


render(myTemplate(), document.body.querySelector('section')
);

