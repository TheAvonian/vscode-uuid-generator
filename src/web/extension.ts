// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
require('vscode');
import * as vscode from 'vscode';

import { configureContext, deconfigureContext } from '../common';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "vscode-theavonian-uuid-generator" for the web is now active!');

	configureContext( context );
}

// this method is called when your extension is deactivated
export function deactivate() {
	deconfigureContext();
}
