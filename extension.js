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

			for (let index = 0; index <= document.lineCount; index++) {

				if(document.lineAt(index).text.includes('console.log(')){
					const start = document.lineAt(index)._line;
					const end = document.lineAt(index)._line + 1; 
					console.log( document.lineAt(index)._line)
					editor.edit(editBuilder => {
					console.log(index, new vscode.Range(start,0,end,0))
						editBuilder.delete(new vscode.Range(start,0,end,0))
						})
				}
				
			}
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
