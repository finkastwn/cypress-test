// # Resource: https://apichallenges.herokuapp.com/gui/challenges
const baseUrl = 'https://apichallenges.herokuapp.com/';
let challengeCode: string;

describe('Create Challenger', () => {
    it('/post/challenger', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/challenger`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive'
            }
        }).then((response: any) => {
            expect(response.status).to.eq(201);
            challengeCode = response.headers['x-challenger'];
            cy.log(challengeCode)
        })
    });
});