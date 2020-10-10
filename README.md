# UUID Generator

This extension can generate Universal Unique Identifiers (UUID) and either add them to the file you are editing, or place them on the clipboard.

## Features

This extension supports the following functions:
* Generate a UUID and insert it into the document currently being edited
* Generate a UUID and copy it to the clipboard

Use by opening the command palette and selecting one of the following:
* Insert new UUID
* Copy new UUID to the clipboard

### UUID type
The generated UUIDs are type 4, variation 1, which means unique based on random numbers. This means the UUIDs are statistically likely to be unique, but it is not impossibe for there to be duplication. The random numbers generated are modified by a timestamp to reduce the reliance on the random number generation itself to provide a non-repeatable sequence.
 
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

## Known Issues

* Currently the generated UUIDs are uppercase with no surrounding brackets

## Release Notes

This extension is in development, but each release should be usable, Details are listed below:

### 0.0.1

Initial release of the UUID Generator (vscode-uuid-generator). This offers a couple of simple functions only:
* Copy new UUID to clipboard
* Insert new UUID into the currently active text editor
