// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-uuid-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let insertDefault = vscode.commands.registerCommand('vscode-uuid-generator.insertDefault', () => {
		// Generate the UUID and add insert it at the current edit point
		let editor = vscode.window.activeTextEditor;
        if (editor) {
			editor.edit(edit => {
				if (editor) {
					editor.selections.forEach(v => edit.replace(v, makeGuid()))
				}
			} );
		}
	});

	context.subscriptions.push(insertDefault);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let copyDefault = vscode.commands.registerCommand('vscode-uuid-generator.copyDefault', () => {
		// Generate UUID and add it to the clipboard
		vscode.env.clipboard.writeText( makeGuid() );

		// Display a message box to the user
		vscode.window.showInformationMessage('UUID copied to clipboard');
	});

	context.subscriptions.push(copyDefault);
}

export function deactivate() {
	// Do nothing - called when the extension is deactivated
}

function makeGuid() {
	var result: string;
	var i: string;
	var j: number;
	var n: number;
	
    // 32-digit hex number in the style:
    // 	xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
    // Where:
    //  M shall be 4 to indicate this as a Version 4 (random) UUID
    //  N shall be 10 (binary) to indicate this as a Variant 1
    
    // See https://en.wikipedia.org/wiki/Universally_unique_identifier
    // See https://www.ietf.org/rfc/rfc4122.txt, section 4.4

    // We're going to use a random number generator, but then introduce a time
    // influence to make sure we don't get caught up in some duplication issue
    // related to the pseudo-random number generator
	var dt = new Date().getTime();

	// Build this up over the course of this method
	result = "";

	// Generate each digit individually
	for (j = 0; j < 32; j++) {
		// Create the next 4 bit number for the overall string.
		// 4 bits = decimal 0-15, hex digit 0-F, binary 0000-1111

		if( j === 12 ) {
			// Set 'M' to version 4 (0100 binary)
			// This occupies all 4 bits, so we replace the whole value
			n = 0x04;
		}
		else {
            // Work out the next hex digit (random number + some ad-hoc part of a timestamp modulo 16)
            n = Math.floor(dt + Math.random() * 16) % 16;

            // Work through the timestamp value by modifying it until it is exhausted
            dt = Math.floor(dt/16);
			
			if( j === 16 ) {
				// Set 'N' to variant 1 (10xx binary)
				// This occupies the top 2 bits only, so mask and replace them 
				n &= 0x03;
				n |= 0x08;
			}
		}

		// Format the string with hyphens for legibility
		if (j === 8 || j === 12 || j === 16 || j === 20) {
			result = result + '-';
		}

		// Add the hex digit to the result
		i = n.toString(16);
		result = result + i;
	}

	// Return the result as lowercase
	return result.toLowerCase();
}
