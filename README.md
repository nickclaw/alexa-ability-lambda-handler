# alexa-ability-lambda-handler

### Example

```js
import { Ability, events } from 'alexa-ability';
import handle from 'alexa-ability-lambda-handler';

const ability = new Ability();

ability.on(events.LAUNCH, function(req) {
    req.say("Testing testing one two three.").end();
});

export const handler = handle(ability);
```
