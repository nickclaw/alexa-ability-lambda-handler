

export default function createAbilityHandler(ability) {

    return function(event, context) {

        ability.handle(event).then(
            req => {
                console.log(req.toJSON()),
                context.succeed(req.toJSON())
            },
            err => context.fail(err)
        );
    }
}
