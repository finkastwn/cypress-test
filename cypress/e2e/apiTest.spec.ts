const dataTestPath = `cypress/fixtures/example.json`

describe('api booking', () => {
    let bookingId: number;

    it('create booking', () => {
        cy.readFile(dataTestPath).then((data) => {
            let payload = data.payload
            cy.request({
                method: 'POST',
                url: `https://restful-booker.herokuapp.com/booking`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Connection': 'keep-alive'
                },
                body: payload
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.booking.firstname).to.eq(data.payload.firstname)
                expect(response.body.booking.lastname).to.eq(data.payload.lastname)
                expect(response.body.booking.totalprice).to.eq(data.payload.totalprice)
                expect(response.body.booking.depositpaid).to.eq(data.payload.depositpaid)
                expect(response.body.booking.bookingdates.checkin).to.eq(data.payload.bookingdates.checkin)
                expect(response.body.booking.bookingdates.checkout).to.eq(data.payload.bookingdates.checkout)
                expect(response.body.booking.additionalneeds).to.eq(data.payload.additionalneeds)
                bookingId = response.body.bookingid
            });
        })
    });

    it('get booking', () => {
        // using commands
        cy.readFile(dataTestPath).then((data) => {
            cy.getBooking(bookingId).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.body.firstname).to.eq(data.payload.firstname)
                expect(response.body.lastname).to.eq(data.payload.lastname)
                expect(response.body.totalprice).to.eq(data.payload.totalprice)
                expect(response.body.depositpaid).to.eq(data.payload.depositpaid)
                expect(response.body.bookingdates.checkin).to.eq(data.payload.bookingdates.checkin)
                expect(response.body.bookingdates.checkout).to.eq(data.payload.bookingdates.checkout)
                expect(response.body.additionalneeds).to.eq(data.payload.additionalneeds)
            })
        })
    })
});