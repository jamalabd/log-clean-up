const vscode = require('vscode');



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('log-clean-up.helloWorld', function () {
		const editor = vscode.window.activeTextEditor;
		if(editor){
			const document = editor.document;
			const selection = editor.selection;
			// returns text from specific line
			// next time work on iteration
			console.log(document.lineCount);
			const word = document.getText(selection);
			const reversed = word.split('').reverse().join('');
			editor.edit(editBuilder => {
				editBuilder.delete(selection)
				})
			// for(let i = 0; document.lineCount >= i; i++){
			// 	console.log(document.lineAt(i).text);
			// 	if(document.lineAt(i).includes('console.log')){
			// 		vscode.window.editor.edit	editBuilder => {
			// 			editBuilder.delete(0, document.lineAt(i))
			// 		})
			// 	}
			// }
			

		}else{
			console.log('editor not present')
		}
     
		// Display a message box to the user
		vscode.window.showInformationMessage('log Clean up Started');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
