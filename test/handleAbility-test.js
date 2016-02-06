import { handleAbility } from '../src/handleAbility';

describe('handleAbility', function() {

    it('should return a lambda handler', function() {
        const middleware = handleAbility({});
        expect(middleware).to.be.instanceOf(Function);
        expect(middleware.length).to.equal(2);
    });

    describe('lambda handler', function() {

        it('should call "context.succeed" on success', function() {
            const data = {};
            const request = { toJSON: () => data };
            const handler = handleAbility({ handle: sinon.spy((e, fn) => fn(null, request)) })
            const event = { };
            const context = { succeed: sinon.spy() };

            handler(request, context);
            expect(context.succeed).to.be.calledWith(data);
        });

        it('should call "context.fail" on error', function() {
            const err = new Error('foobar');
            const handler = handleAbility({ handle: sinon.spy((e, fn) => fn(err)) })
            const event = { };
            const context = { fail: sinon.spy() };
            handler(event, context);
            expect(context.fail).to.be.calledWith(err);
        });
    });
});
