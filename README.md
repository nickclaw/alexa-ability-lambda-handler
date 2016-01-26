# alexa-ability-lambda-handler

### Example

```js
import { Ability, intent } from 'alexa-ability';
import handle from 'alexa-ability-lambda-handler';

const ability = new Ability();

ability.on(intent.LAUNCH, function(req) {
    req.say("Testing testing one two three.").send();
});

export const handler = handle(ability);
```
