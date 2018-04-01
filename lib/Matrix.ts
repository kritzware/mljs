export interface Shape {
    rows : number,
    cols : number
}

export type RawMatrix = number[][]
export type Ops = 'add' | 'subtract'

function newMatrixShape(rows: number=0, cols: number=0) : Shape {
    return { rows, cols }
}

export class Matrix {
    private values: number[][]
    public shape: Shape

    constructor(values: number[][]) {
        this.values = values
        this.shape = newMatrixShape(this.values.length, this.values[0].length)
    }

    public transpose() : Matrix {
        const rows : number[][] = [[]]

        for(let i : number = 0; i < this.shape.cols; i++) {
            for(let j : number = 0; j < this.shape.rows; j++) {
                if(!rows[i]) rows[i] = []
                rows[i][j] = this.values[j][i]
            }
        }
        return new Matrix(rows)
    }

    public basicOp(m: Matrix | RawMatrix | number, op: Ops) : Matrix {
        if(!(m instanceof Matrix) && typeof m !== 'number') {
            m = new Matrix(m)
        }
        const summedValues : number[][] = [[]]
        if(typeof m !== 'number') Matrix.checkDimensions(this, m)

        for(let i : number = 0; i < this.shape.rows; i++) {
            for(let j : number = 0; j < this.shape.cols; j++) {
                if(!summedValues[i]) summedValues[i] = []
                const valueToAdd = typeof m !== 'number' ? m.values[i][j] : m
                if(op === 'add') summedValues[i][j] = this.values[i][j] + valueToAdd
                if(op === 'subtract') summedValues[i][j] = this.values[i][j] - valueToAdd
            }
        }
        return new Matrix(summedValues)        
    }

    public add(m: Matrix | RawMatrix | number) : Matrix {
        return this.basicOp(m, 'add')
    }

    public subtract(m: Matrix | RawMatrix | number) : Matrix {
        return this.basicOp(m, 'subtract')
    }

    public static checkDimensions(x: Matrix, y: Matrix) : void {
        if(x.shape.rows !== y.shape.rows) {
            throw new Error(
                `Matrix dimensions with shape (${x.shape.rows},${x.shape.cols}) and (${y.shape.rows},${y.shape.cols}) must match:
                ${x.shape.rows} (rows) does not equal ${y.shape.rows} (rows)`
            )
        }
        if(x.shape.cols !== y.shape.cols) {
            throw new Error(
                `Matrix dimensions with shape (${x.shape.rows},${x.shape.cols}) and (${y.shape.rows},${y.shape.cols}) must match:
                ${x.shape.rows} (cols) does not equal ${y.shape.rows} (cols)`
            )
        }
    }

    static isMatrix(m: any) : boolean {
        return m instanceof Matrix
    }

    static isRawMatrix(m: any) : boolean {
        return !Matrix.isMatrix(m) && typeof m !== 'number'
    }

    static isScalar(n: any) : boolean {
        return typeof n === 'number'
    }

    public elements() : number[][] {
        return this.values
    }
    
    /**
     * @example
     * ```javascript
     * 
     * const matrix = new Matrix([
     *  [1, 2, 3],
     *  [4, 5, 6]
     * ])
     * 
     * matrix.print()
     * ```
     */
    public print() : void {
        console.log(this.values)
    }
}