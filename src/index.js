
export function handleAbility(ability) {

    return function abilityHandler(event, context) {

        ability.handle(event, function(err, req) {
            if (err) {
                context.fail(err);
            } else {
                context.succeed(req.toJSON());
            }
        });
    }
}
