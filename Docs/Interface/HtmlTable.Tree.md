Class: HtmlTable.Tree {#HtmlTable.Tree}
=============================

Turns a tree into a set of nested, expandable/collapsable rows.

### Refactors

* [HtmlTable][]

### Syntax

	new HtmlTable([table, options]);

### Arguments

1. table - (*mixed*; optional) - a Table DOM element or it's id; if you do not specify one, one will be created.
1. options - (*object*; optional) a key/value set of options.

### Options

* all options defined by [HtmlTable][], plus:
* injectExpandLinks - (*boolean*) if *true*, the default, link tags will be inserted into the first TD of each TR that is a parent. This option is ignored if the *noBuild* option is *true*.
* expandClass - (*string*) the classname of the elements that, when clicked, expand a section; defaults to 'expand'.
* addFolderClasses - (*boolean*) if *true*, the default, all TR elements that are parents will have the CSS class *table-folder* added. This option is ignored if the *noBuild* option is *true*.
* baseIndentPadding - (*number*) the padding applied to the left of root nodes; defaults to 10 (px). This option is ignored if the *writeTreeCSS* option is *false*.
* indentPadding - (*number*) the padding applied to the left of each child node times its depth plus the base indent padding. E.g. if the base padding is 10, and the indent padding is 15 (the defaults), then the first children are 25 pixels in, the second order children are 40 pixels in and so on. This option is ignored if the *writeTreeCSS* option is *false*.
* writeTreeCSS - (*boolean*) if *true*, the default, HtmlTable will write a CSS *style* tag with 40 indentation rules based on the indentPadding and the baseIndentPadding options.
* noBuild - (*boolean*) if *true* (the default is *false*), the table is not parsed on startup, the *table-folder* class is not added to rows that are parents, and the expand links are not injected. This assumes that the HTML is already in a state where these classes are present and the non-root nodes are hidden already. This greatly improves the startup costs and is useful when dealing with large tables or when you want to avoid the table being entirely visible on startup and then collapsing when the instance is finished parsing it.


### Events

* onAddRowToTree - function executed when a row is added to the tree. Passed the row.
* onRemoveRowToTree - function executed when a row is removed from the tree. Passed the row.
* onHideRow - function executed when when a row is hidden. Passed the row.
* onShowRow - function executed when when a row is shown. Passed the row.
* onExpandSection - function executed when a row is expanded, meaning that all its children are now visible. Passed the row.
* onCloseSection - function executed when a row is collapsed, meaning that all its children are now hidden. Passed the row.

HtmlTable Method: attach {#HtmlTable:attach}
----------------------------------------

Attaches the click behaviors to the expand links (defaults to elements with the css class 'expand'; see the *expandClass* option).

### Syntax

	myHtmlTable.attach();

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: dettach {#HtmlTable:dettach}
----------------------------------------

Detaches the click behaviors to the expand links.

### Syntax

	myHtmlTable.detach();

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: injectChild {#HtmlTable:injectChild}
----------------------------------------

Injects a row into the table as a child of another row.

### Syntax

	myHtmlTable.injectChild(row, rowProperties, parent, injectAfter);

### Arguments

1. row - (*array* or *element*) the data for the row or *TR* element.
2. rowProperties - (*object*) the properties for the row (class, id, styles, etc)
3. parent - (*element*) the TR that will be the parent of the new row. This row must already be in the table.
4. injectAfter - (*element*; optional) used for specifying where to put the row, which is injected after it. If not specified, the new row is added after the parent, putting it at the top of the section.

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: addRowToTree {#HtmlTable:addRowToTree}
----------------------------------------

Identifies a row to be the child of a parent. Does not move the location of the row in the DOM in any way.

### Syntax

	myHtmlTable.addRowToTree(row, parent);

### Arguments

1. row - (*element*) the TR that is the child.
2. parent - (*element*) the TR that is the parent.

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: removeRowFromTree {#HtmlTable:removeRowFromTree}
----------------------------------------

Removes a row from the tree. Does not alter it's location in the DOM in any way.

### Syntax

	myHtmlTable.removeRowFromTree(row);

### Arguments

1. row - (*element*) the TR element to remove from the tree.

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: toggleExpand {#HtmlTable:toggleExpand}
----------------------------------------

Toggles the expanded state of a row, displaying or hiding it's children.

### Syntax

	myHtmlTable.toggleExpand(row);

### Arguments

1. row - (*element*) the TR element to toggle.

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: expandSection {#HtmlTable:expandSection}
----------------------------------------

Expands a row, displaying its children.

### Syntax

	myHtmlTable.expandSection(row);

### Arguments

1. row - (*element*) the TR element to expand.

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: closeSection {#HtmlTable:closeSection}
----------------------------------------

Closes a row, hiding its children.

### Syntax

	myHtmlTable.closeSection(row);

### Arguments

1. row - (*element*) the TR element to close.

### Returns

* (*object*) This instance of HtmlTable.

HtmlTable Method: isExpanded {#HtmlTable:isExpanded}
----------------------------------------

Returns *true* if the row is in its expanded state.

### Syntax

	myHtmlTable.isExpanded(row);

### Arguments

1. row - (*element*) the TR element to check.

### Returns

* (*object*) This instance of HtmlTable.

[HtmlTable]: /more/Interface/HtmlTable
