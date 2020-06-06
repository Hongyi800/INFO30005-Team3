var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const comments = require('../../models/comment');

// This section of simulate a test when your application IS RUNNING, we are testing by DECLARING ROUTES, and see if it returns the correct data
describe('integration test', function() {
    describe('getAllComments', function(){
        context('check if we can get all comments', function(){
            this.timeout(6000);
            it('get all comments', function(done){
                setTimeout(done, 4000);
                supertest(app)
                .get('/comment')
                .send({})
                .then(() => function(err, res) {
                    // if you don't understand or unsure where does res.body or res.statusCode come form, read more regarding HTTP response
                    // or even better read the whole Hypertext Transfer Protocol (HTTP) request-respond protocol
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal(comments);
                    res.body.forEach(element=>{
                        expect(element).to.have.property('username');
                        expect(element).to.have.keys(['username', 'content']);
                    })
                    done();
                }).catch(done);
            })
        })
    });

    describe('addComment', function(){
        context('check if we can add a comment', function(){
            it('post an comment', async function(){
                let newComment = {username:'YZhao000', content:'Check...'};
                const res = await supertest(app)
                    .post('/comment')
                    .send(newComment);

                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('text/html');
            })
        })
    })
})