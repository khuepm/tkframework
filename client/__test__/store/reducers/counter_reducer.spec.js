import test from 'tape'

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from 'store/reducers/counter'

test('incrementAsync Saga test', (assert) => {

  var opt1 = {header:{method:'post'}}
  var opt = {key:12,header:{value:14}}
  opt = {
    ...opt1,
    header:{
      ...opt.header,
      ...opt1.header
    }
  }

 

  console.log(opt)

  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
})