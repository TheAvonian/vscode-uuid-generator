# UUID Generator

This extension can generate Universal Unique Identifier (UUID) values and either insert them into the file you are editing, or place them on the clipboard.

One useful case for this extension is to create UUIDs for configuring new profiles for [Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/).

## Features

This extension supports creating a new version 4 UUID and then either adding it to the current location in the active editor, or placing it on the clipboard.

The easiest way to run the commands is from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac), typing `UUID` and selecting the desired function.
* Insert new UUID
* Copy new UUID to the clipboard

### UUID type
The generated UUIDs are type 4, variation 1, which means unique based on random numbers. This means the UUIDs are statistically likely to be unique, but it is not impossibe for there to be duplication. The random numbers generated are modified by a timestamp to reduce the reliance on the random number generation itself to provide a non-repeatable sequence.

See section 4.4 of [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) for details about UUID type 4.

### Intentions
The currently generated UUID is lowercase (i.e. for the hex digits A-F) and not surrounded by any kind of bracket or other decoration.

The plan is to introduce some settings to allow the configuration of a preferred format for the generated UUID

## Requirements

* Requires VS Code v1.50+. This will be reviewed

## Extension Settings

TBD

## Known Limitations and Issues

* Currently the generated UUIDs are lowercase with no surrounding brackets

## Release Notes

This extension is in development, but each release should be usable, Details are listed below:

### 0.0.1

Initial release of the UUID Generator (vscode-uuid-generator). This offers a couple of simple functions only:
* Copy new UUID to clipboard
* Insert new UUID into the currently active text editor
