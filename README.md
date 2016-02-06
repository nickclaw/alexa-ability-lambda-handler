# alexa-ability-lambda-handler [![Build Status](https://travis-ci.org/nickclaw/alexa-ability-lambda-handler.svg?branch=master)](https://travis-ci.org/nickclaw/alexa-ability-lambda-handler)

### Example

```js
import { Ability, events } from 'alexa-ability';
import { handleAbility } from 'alexa-ability-lambda-handler';

const ability = new Ability();

ability.on(events.launch, function(req) {
    req.say("Testing testing one two three.").end();
});

export const handler = handleAbility(ability);
```
