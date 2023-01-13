# statblkexp -- Statblock Exporter for DnD5e in Foundry

This is intended primarily for exporting all the details of DnD5e characters to record them for posterity or check them for accuracy. The character sheet in Foundry has so many sections that it can be daunting to check each item.

*Note:* you must be accessing Foundry with a browser that allows you create tabs. The Foundry VTT app itself does not allow this, so you'll need to access the world from a separate browser.

**How It Works:** A tab is created in the browser and the text of the character's abilities, skills, features, etc., are written to it in HTML format.You can switch to the tab and use the browser's print functionality to print the text to a printer or save to a PDF file. You can also select all the text in the tab and copy it, then paste it to an editor, but the success of this technique is highly dependent on the editor you're pasting the text into.

There are two ways to export characters:

- Right-click a character in the Actors tab of the right sidebar and select the Export Statblock item from the popup menu.
- Select one or more tokens on the canvas (click and drag with the selection rectangle), then click the Export Statblock button at the bottom of the Actors tab in the right sidebar. The character are displayed in alphabetical order by name.

The following configuration settings are available:

## Show Item Details

Show the long descriptions for items. If unchecked, only the details of the item are shown. The exact details shown vary by type of item (equipment, weapons, class, etc.). Items that are equipped are indicated by a preceding bullet.

Note that the details for some items (classes, races) can be quite lengthy, so you may wish to omit all that boilerpalte.

## Full Spell Book

Show the full details all spells. If unchecked, only the names of the spells are displayed at each level. Prepared spells are indicated by a preceding bullet.

## Image Width

Width in pixels of the character image, if there is one. To omit the image, enter 0.
