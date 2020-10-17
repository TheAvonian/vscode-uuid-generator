# UUID Generator

This extension can generate Universal Unique Identifier (UUID) values and either insert them into the file you are editing, or place them on the clipboard.

One useful case for this extension is to create UUIDs for configuring new profiles for [Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/).

## Features

This extension supports creating a new version 4 UUID and then either adding it to the current location in the active editor, or placing it on the clipboard.

The easiest way to run the commands is from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac), typing `UUID` and selecting the desired function.
* Insert new UUID
* Insert a new 'nil' UUID (where all the digits are 0)
* Copy new UUID to the clipboard

### UUID type
The generated UUIDs are type 4, variation 1, which means unique based on random numbers. This means the UUIDs are statistically likely to be unique, but it is not impossibe for there to be duplication. The random numbers generated are modified by a timestamp to reduce the reliance on the random number generation itself to provide a non-repeatable sequence.

See section 4.4 of [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) for details about UUID type 4.

## Requirements

* Requires VS Code v1.50+. This will be reviewed

## Extension Settings

| Namme | Description | Default |
|--|--|--|
| `uppercaseDigits` | Whether the hex digits are forced to uppercase (`true`) or lowercase (`false`) | `false` |
| `textSelection`   | When the UUID is inserted into the text, this setting controls whether the pasted value is marked as selected (`true`) or whether the selection is cleared (`false`) | `false` |
| `decorationStyle` | Whether the generated UUID is wrapped with quotes or braces by default. Possible values: `none`, `surroundSingleQuotes`, `surroundDoubleQuotes`, `surroundCurlyBraces`, `surroundRoundedBraces`, `surroundSquareBraces` | `none` |

## Known Limitations and Issues

TBD

## Release Notes

This extension is in development, but each release should be usable, Details are listed below:

### 0.1.0

Some fundamental improvements to the usabilty of the component through configuration settings:
* Configuration items for UUID formatting - lower/uppercase and whether the UUID value should be surrounded by quotes or braces
* Configuraiton item for whether the UUID value, when inserted into the active editor, should be marked as selected
* Added a function to insert a nil UUID (where all the digits are zero)

### 0.0.1

Initial release of the UUID Generator (vscode-uuid-generator). This offers a couple of simple functions only:
* Copy new UUID to clipboard
* Insert new UUID into the currently active text editor
