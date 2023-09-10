// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

import { configureContext, deconfigureContext } from './common';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "vscode-theavonian-uuid-generator" is now active!');

	configureContext( context );
}

export function deactivate() {
	// Do nothing - called when the extension is deactivated
	deconfigureContext();
}
