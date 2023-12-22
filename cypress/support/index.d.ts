declare namespace Cypress {
    interface Chainable {
        login(username: any, password: any): Chainable<Response>

        logout(): Chainable<Response>
        
        getBooking(bookingId: any): Chainable<Response>
    }
}
