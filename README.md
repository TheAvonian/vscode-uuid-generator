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
The currently generated UUID is uppercase (i.e. for the hex digits A-F) and not surrounded by any kind of bracket or other decoration.

The plan is to introduce some settings to allow the configuration of a preferred format for the generated UUID

## Requirements

* Any generated UUIDs shall conform to the standard
* A function will exist to place a newly generated UUID directly into the file currently being edited
* A function will exist to place a newly generated UUID onto the clipboard
    * When a UUID is placed on the clipboard, the user shall be notified
* It shall be possible to determine the output format of UUID to contain uppercase or lowercase hex digits 
* It shall be possible to determine whether the generated UUIDs are automatically surrounded with brackets for some typical uses
* It may be possible to configure a default format for UUID for ease of access when used regularly
* It may be possible to generate a version 1 UUID (This is a low priority requirement)

## Extension Settings

TBD

## Known Limitations and Issues

* Currently the generated UUIDs are uppercase with no surrounding brackets

## Release Notes

This extension is in development, but each release should be usable, Details are listed below:

### 0.0.1

Initial release of the UUID Generator (vscode-uuid-generator). This offers a couple of simple functions only:
* Copy new UUID to clipboard
* Insert new UUID into the currently active text editor
