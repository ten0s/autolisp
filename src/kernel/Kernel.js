exports.initContext = (context) => {
    [
        require('./Application.js'),
        require('./Arithmetic.js'),
        require('./Const.js'),
        require('./DCL.js'),
        require('./Equality.js'),
        require('./Function.js'),
        require('./IO.js'),
        require('./List.js'),
        require('./Math.js'),
        require('./String.js'),
        require('./Symbol.js'),
        require('./System.js'),
        require('./VE-Filename.js'),
        require('./VE-FileSystem.js'),
        require('./VL-Filename.js'),
        require('./VL-FileSystem.js'),
        require('./VL-List.js'),
        require('./VL-String.js'),
        require('./VL-Symbol.js'),
    ].forEach(
        module => module.initContext(context)
    )
}
