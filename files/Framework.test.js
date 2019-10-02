import Framework from './Framework.js'

const input = {
  template: '#header-template',
  data: {
    title: 'Antidote'
  },
  clearTitle: function(e) {
    document.querySelector('input').value = ''
    document.querySelector('h1').innerHTML = ''
  },
  titleChanged: function(e) {
    document.querySelector('h1').innerHTML = e.target.value
  }
}

test('if given an some input, Framework object is created with defaults', () => {
  expect(
    Framework({
      data: {
        title: 'Antidote'
      }
    })
  ).toMatchSnapshot()
})

test('if given no input, Framework init returns null', () => {
  expect(Framework()).toMatchSnapshot()
})

test('if given correct input, Framework object is created', () => {
  expect(Framework(input)).toMatchSnapshot()
})
