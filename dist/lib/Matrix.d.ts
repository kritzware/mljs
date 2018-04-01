export interface Shape {
    rows: number;
    cols: number;
}
export declare type RawMatrix = number[][];
export declare type Ops = 'add' | 'subtract';
export declare class Matrix {
    private values;
    shape: Shape;
    constructor(values: number[][]);
    transpose(): Matrix;
    basicOp(m: Matrix | RawMatrix | number, op: Ops): Matrix;
    add(m: Matrix | RawMatrix | number): Matrix;
    subtract(m: Matrix | RawMatrix | number): Matrix;
    static checkDimensions(x: Matrix, y: Matrix): void;
    static isMatrix(m: any): boolean;
    static isRawMatrix(m: any): boolean;
    static isScalar(n: any): boolean;
    elements(): number[][];
    print(): void;
}
