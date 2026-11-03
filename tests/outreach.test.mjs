import test from 'node:test'
import assert from 'node:assert/strict'
import { buildDraft, createOutreachState, outreachReducer, canCopy } from '../src/bgs/outreachModel.ts'

test('recipient, language and tone produce distinct concrete invitations', () => {
  const variants = ['delegate', 'sponsor', 'partner'].map(role => buildDraft('en', role, 'business'))
  assert.equal(new Set(variants).size, 3)
  for (const draft of variants) {
    assert.match(draft, /Northline Process Systems/)
    assert.match(draft, /AUTOMA/)
    assert.doesNotMatch(draft, /guaranteed|already registered|уже зарегистрирован/i)
  }
  assert.match(buildDraft('ru', 'delegate', 'business'), /Здравствуйте/)
  assert.ok(buildDraft('en', 'delegate', 'concise').length < variants[0].length)
})

test('changing preferences and language preserves manual edits until explicit update', () => {
  let s = createOutreachState('en')
  s = outreachReducer(s, { type: 'edit', text: 'My carefully edited draft' })
  for (const action of [{ type: 'recipient', value: 'sponsor' }, { type: 'tone', value: 'concise' }, { type: 'locale', value: 'ru' }]) {
    s = outreachReducer(s, action)
    assert.equal(s.draft, 'My carefully edited draft')
    assert.equal(canCopy(s), false)
  }
  s = outreachReducer(s, { type: 'regenerate' })
  assert.match(s.draft, /спонсор/)
  assert.notEqual(s.draft, 'My carefully edited draft')
  assert.equal(s.stale, false)
})

test('copy is gated by all checks and editing invalidates an approved draft', () => {
  let s = createOutreachState('en')
  assert.equal(canCopy(s), false)
  for (let index = 0; index < 3; index++) s = outreachReducer(s, { type: 'check', index, value: true })
  assert.equal(canCopy(s), true)
  s = outreachReducer(s, { type: 'edit', text: s.draft + '\nReviewed by a manager.' })
  assert.equal(canCopy(s), false)
  assert.deepEqual(s.checks, [false, false, false])
})

test('regeneration resets approval and blank text cannot be approved for copying', () => {
  let s = createOutreachState('ru')
  for (let index = 0; index < 3; index++) s = outreachReducer(s, { type: 'check', index, value: true })
  s = outreachReducer(s, { type: 'regenerate' })
  assert.equal(canCopy(s), false)
  s = outreachReducer(s, { type: 'edit', text: '   ' })
  for (let index = 0; index < 3; index++) s = outreachReducer(s, { type: 'check', index, value: true })
  assert.equal(canCopy(s), false)
})

test('reset keeps active language and resets recipient, step, draft and review', () => {
  let s = createOutreachState('en')
  s = outreachReducer(s, { type: 'locale', value: 'ru' })
  s = outreachReducer(s, { type: 'recipient', value: 'partner' })
  s = outreachReducer(s, { type: 'step', value: 6 })
  s = outreachReducer(s, { type: 'reset' })
  assert.equal(s.locale, 'ru')
  assert.equal(s.step, 0)
  assert.equal(s.recipient, 'delegate')
  assert.match(s.draft, /Здравствуйте/)
  assert.equal(canCopy(s), false)
})
