import * as Babel from '@babel/core';
import { codegenJS, readInstructions } from "./Transform";

const SmallCompilerVisitor = {
    FunctionDeclaration(babelFunc: Babel.NodePath<Babel.types.FunctionDeclaration>) {
        const instrs = readInstructions(babelFunc);

        console.log('INSTRUCTIONS', instrs);
        const body = codegenJS(instrs);

        console.log('BODY', body);
        babelFunc.get("body").replaceWith(
            Babel.types.blockStatement([])
        )
    }
};

module.exports = () => ({
    visitor: SmallCompilerVisitor
} as Babel.PluginObj);
