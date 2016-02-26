import debug from 'debug';

const log = debug('alexa-ability-lambda-handler:handleAbility');

export function handleAbility(ability) {
    log('creating handler');

    return function abilityHandler(event, context) {
        log('handling event %o', event);

        ability.handle(event, (err, req) => {
            if (err) {
                log('request failed: %s', err);
                context.fail(err);
            } else {
                const response = req.toJSON();
                log('request succeeded, sending %o', response);
                context.succeed(response);
            }
        });
    };
}
