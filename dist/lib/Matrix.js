"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newMatrixShape(rows, cols) {
    if (rows === void 0) { rows = 0; }
    if (cols === void 0) { cols = 0; }
    return { rows: rows, cols: cols };
}
var Matrix = (function () {
    function Matrix(values) {
        this.values = values;
        this.shape = newMatrixShape(this.values.length, this.values[0].length);
    }
    Matrix.prototype.transpose = function () {
        var rows = [[]];
        for (var i = 0; i < this.shape.cols; i++) {
            for (var j = 0; j < this.shape.rows; j++) {
                if (!rows[i])
                    rows[i] = [];
                rows[i][j] = this.values[j][i];
            }
        }
        return new Matrix(rows);
    };
    Matrix.prototype.basicOp = function (m, op) {
        if (!(m instanceof Matrix) && typeof m !== 'number') {
            m = new Matrix(m);
        }
        var summedValues = [[]];
        if (typeof m !== 'number')
            Matrix.checkDimensions(this, m);
        for (var i = 0; i < this.shape.rows; i++) {
            for (var j = 0; j < this.shape.cols; j++) {
                if (!summedValues[i])
                    summedValues[i] = [];
                var valueToAdd = typeof m !== 'number' ? m.values[i][j] : m;
                if (op === 'add')
                    summedValues[i][j] = this.values[i][j] + valueToAdd;
                if (op === 'subtract')
                    summedValues[i][j] = this.values[i][j] - valueToAdd;
            }
        }
        return new Matrix(summedValues);
    };
    Matrix.prototype.add = function (m) {
        return this.basicOp(m, 'add');
    };
    Matrix.prototype.subtract = function (m) {
        return this.basicOp(m, 'subtract');
    };
    Matrix.checkDimensions = function (x, y) {
        if (x.shape.rows !== y.shape.rows) {
            throw new Error("Matrix dimensions with shape (" + x.shape.rows + "," + x.shape.cols + ") and (" + y.shape.rows + "," + y.shape.cols + ") must match:\n                " + x.shape.rows + " (rows) does not equal " + y.shape.rows + " (rows)");
        }
        if (x.shape.cols !== y.shape.cols) {
            throw new Error("Matrix dimensions with shape (" + x.shape.rows + "," + x.shape.cols + ") and (" + y.shape.rows + "," + y.shape.cols + ") must match:\n                " + x.shape.rows + " (cols) does not equal " + y.shape.rows + " (cols)");
        }
    };
    Matrix.isMatrix = function (m) {
        return m instanceof Matrix;
    };
    Matrix.isRawMatrix = function (m) {
        return !Matrix.isMatrix(m) && typeof m !== 'number';
    };
    Matrix.isScalar = function (n) {
        return typeof n === 'number';
    };
    Matrix.prototype.elements = function () {
        return this.values;
    };
    Matrix.prototype.print = function () {
        console.log(this.values);
    };
    return Matrix;
}());
exports.Matrix = Matrix;
