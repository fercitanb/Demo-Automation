describe("Testing components in angular 8",()=>{

it ("Validate if the color of the default standard color can be changed in Color Picker", ()=>{
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8'),
    cy.get(':nth-child(9) > div').click(),
    cy.get('#cxoneStandardColorPicker > .cxone-color-picker > .content-wrapper > .input-box > .ng-untouched').clear(),
    cy.get('#cxoneStandardColorPicker > .cxone-color-picker > .content-wrapper > .input-box > .ng-untouched').type('#009D71')
})

it ("Validate if the Standard Modal Demo can be resized in Modals", ()=>{
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8'),
    cy.get(':nth-child(18) > div').click(),
    cy.get('#btn-modal').click(),
    cy.get('.btn-secondary > .ng-star-inserted').click(),
    cy.get('#modal-width > .numeric-selector > .numeric-selector-value').clear().type('350'),
    cy.get('#modal-height > .numeric-selector > .numeric-selector-value').clear().type('350'),
    cy.get('#btn-modal').click(),
    cy.get('.btn-primary > .ng-star-inserted').click()
})

it ("Validate if Big slide toggle with inner labels can be turned on in Slide Toggle", ()=>{
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8'),
    cy.get(':nth-child(28) > div').click(),
    cy.get(':nth-child(1) > .ng-untouched > .cxone-slide-toggle > label > .slider').click({ force: true })
})

it ("Validate if Standard Date Range Dropdown can be changed from today to the last 7 days in Date Range Dropdown", ()=>{
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8'),
    cy.get(':nth-child(15) > div').click(),
    cy.get('#e2e-date-range-dropdown > .cxone-date-range-dropdown > .b-dropdown > #button-single > .icon-carat > #icon-arrow-down').click(),
    cy.get('#dropdown-split > :nth-child(3)').contains('Last 7 days').click({ force: true })
})

}) 