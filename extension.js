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
			console.log(document.lineAt(1).text);

			vscode.window.activeTextEditor.edit(editBuider => {

			})

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
