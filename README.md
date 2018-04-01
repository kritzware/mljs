# mljs [![CircleCI](https://circleci.com/gh/kritzware/mljs.svg?style=svg)](https://circleci.com/gh/kritzware/mljs)
Machine Learning library based on Tensorflow and Keras, implemented in Typescript

### Example
```javascript
import { Matrix } from 'mljs'

const x = new Matrix([
    [1, 2],
    [3, 4]
])

const y = new Matrix([[1, 1], [2, 2]])

const t = x.transpose()
t.print()
/**
 * [[1, 3],
 *  [2, 4]]
**/

console.log(x.shape)
/**
 * { rows: 2, cols: 2 }
**/

const z = x.add(y)
const a = x.add(2)

const b = y.subtract([[1, 0], [1, 0]])
```
