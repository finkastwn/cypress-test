import { assertUrl } from '../support/helper'

describe('launch primaku', () => {
    it('launch primaku', () => {
        cy.visit('https://primaku.com')
        assertUrl("home")
        cy.get('title').should('have.text','PrimaKu - Pelopor Aplikasi Tumbuh Kembang Anak di Indonesia')
        
        // cy.get('.hidden > :nth-child(3) > a > .font-medium').click()
        cy.get('a').contains("Tentang Kami").click()
        assertUrl("about")
        cy.get('title').should('have.text','PrimaKu - Pelopor Aplikasi Tumbuh Kembang Anak di Indonesia')

        let textP1 = "PT Cipta Medika Informasi (PrimaKu), sebuah aplikasi yang memantau kesehatan anak, bekerja sama eksklusif dengan Ikatan Dokter Anak Indonesia (IDAI). Melalui aplikasi ini, orangtua bisa mendapatkan informasi tentang tumbuh kembang dan kesehatan anak dengan mudah dan cepat."
        let textP2 = "PrimaKu juga membantu dokter anak untuk memberikan pelayanan terbaik dengan melibatkan dokter anak dalam memantau tumbuh kembang dan kesehatan anak."
        let textP3 = "Dr. Piprim Basarah Yanuarso, ketua IDAI, mengapresiasi inisiatif PrimaKu dan komitmen IDAI untuk terus mendukung tumbuh kembang dan kesehatan anak sejak lahir. Kehadiran teknologi ini akan mempercepat dan memperluas akses layanan kesehatan anak bagi masyarakat."
        let textP4 = "Ini adalah langkah konkret IDAI untuk meningkatkan kualitas kesehatan anak sejak lahir di seluruh Indonesia."
        const textArr = [textP1,textP2,textP3,textP4]
        for (let index = 0; index < textArr.length; index++) {
            let ind = index+1
            cy.get(`.mt-2 > .mt-4 > :nth-child(${ind})`).should('contain.text',`${textArr[index]}`)
        }
        cy.go('back')
        cy.url().should('not.include','primaku.com/about')
        assertUrl("home")
    });
})