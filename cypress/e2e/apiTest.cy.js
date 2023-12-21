const dataTestPath = `cypress/fixtures/example.json`

describe('api booking', () => {
    it('create booking', () => {
        cy.readFile(dataTestPath).then((data) => {
            data.payload.firstname = "Aaron"
            data.payload.lastname = "Ramsey"
            data.payload.totalprice = 150
            data.payload.depositpaid = true
            data.payload.bookingdates.checkin = "2023-08-01"
            data.payload.bookingdates.checkout = "2023-08-02"
            data.payload.additionalneeds = "Queen Bed"
            cy.writeFile(dataTestPath, data)
        })

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
                data.bookingId = response.body.bookingid
                cy.writeFile(dataTestPath,data)
            });
        })
    });

    it('get booking', () => {
        // using commands
        cy.readFile(dataTestPath).then((data) => {
            let bookingId = data.bookingId
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