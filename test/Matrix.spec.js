const { expect } = require('chai')
const { Matrix } = require('../dist/lib/Matrix')

describe('Matrix', () => {

    describe('constructor', () => {
        it('should create a new n x n matrix', () => {
            const x = new Matrix([
                [1, 2],
                [3, 4]
            ])
            const y = new Matrix([
                [1, 2, 3, 4],
                [5, 6, 7, 8]
            ])

            expect(x.shape).to.deep.equal({ rows: 2, cols: 2 })
            expect(y.shape).to.deep.equal({ rows: 2, cols: 4 })
        })
    })

    describe('transpose', () => {
        it('should return a new tranposed matrix', () => {
            const x = new Matrix([
                [1, 2, 3],
                [4, 5, 6]
            ])
            const y = x.transpose()

            expect(y.shape).to.deep.equal({ rows: 3, cols: 2 })
            expect(y.elements()).to.deep.equal([
                [1, 4],
                [2, 5],
                [3, 6]
            ])
        })
    })

    describe('add', () => {
        it('should return the sum of n matrices', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = new Matrix([[5, 6], [7, 8]])
            const z = x.add(y)
            
            expect(z.shape).to.deep.equal({ rows: 2, cols: 2})
            expect(z.elements()).to.deep.equal([[6, 8], [10, 12]])
        })

        it('should add raw matrix values to an existing matrix', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = x.add([[5, 6], [7, 8]])
            
            expect(y.shape).to.deep.equal({ rows: 2, cols: 2})
            expect(y.elements()).to.deep.equal([[6, 8], [10, 12]])
        })

        it('should add a scalar to an existing matrix', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = x.add(2)
            
            expect(y.shape).to.deep.equal({ rows: 2, cols: 2})
            expect(y.elements()).to.deep.equal([[3, 4], [5, 6]])
        })
    })

    describe('subtract', () => {
        it('should return the subtraction of n matrices', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = new Matrix([[5, 6], [7, 8]])
            const z = x.subtract(y)
            
            expect(z.shape).to.deep.equal({ rows: 2, cols: 2})
            expect(z.elements()).to.deep.equal([[-4, -4], [-4, -4]])
        })

        it('should add subtract matrix values from an existing matrix', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = x.subtract([[5, 6], [7, 8]])
            
            expect(y.shape).to.deep.equal({ rows: 2, cols: 2})
            expect(y.elements()).to.deep.equal([[-4, -4], [-4, -4]])
        })

        it('should subtract a scalar from an existing matrix', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = x.subtract(4)
            
            expect(y.shape).to.deep.equal({ rows: 2, cols: 2})
            expect(y.elements()).to.deep.equal([[-3, -2], [-1, 0]])
        })
    })

    describe('checkDimensions', () => {
        it('should throw an error if there is a dimension mismatch', () => {
            const x = new Matrix([[1, 2], [3, 4]])
            const y = new Matrix([[5, 6], [7, 8], [9, 10]])
            try {
                Matrix.checkDimensions(x, y)
            } catch(err) {
                expect(err)
            }
        })
    })

})