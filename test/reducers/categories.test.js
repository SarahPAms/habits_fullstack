import categories from '../../client/recipes'

describe('categories reducer', () => {
    const reducer = categories
    const initialState = []

    it('returns an empty array for the initial state', () => {
        expect(reducer()).toEqual(initialState)
    })
})