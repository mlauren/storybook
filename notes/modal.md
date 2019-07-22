##Overview
Modal dialogs are useful constructs for grabbing the user's attention for important alerts or errors, requesting additional information to complete a process, or breaking a long process into smaller more manageable steps.

Careful consideration should be applied when determining if a modal is an appropriate component to use in any given situation. Examples of situations where a modal are NOT recommended are:

To present information that is unrelated to the current flow
Present a task requiring a high cognitive load. This can cause the user to lose track of what they were doing prior to triggering the dialog.
To interrupt a high stakes process (for example, paying a bill).
Using multiple modals in succession to complete a task.
Nesting many complex components within a modal (ex: pop-ups, accordions, carousels, etc).
Information on how to implement an accessible modal dialog along with helpful resources can be found in the following documentation.

###Triggering Element
When button elements are used to spawn modal dialogs, no additional ARIA markup or off-screen text is needed on the control. However, when a link element is used to spawn a modal dialog, an indication of this fact must be included in the name or description of the link so that non-visual users, who may expect the link to navigate to a new page by default, accurately recognize the behavior of the link.

Note: Additional ARIA markup such as aria-haspopup and aria-expanded are NOT needed for a control that triggers a modal dialog.

The most robust method is to include the text "Opens a Dialog" in the link's label either using off-screen text or the aria-label attribute. Note: The aria-label attribute supersedes any text between the opening and closing tag of the link. The title attribute may also serve this function but is less preferred because the content of the title attribute is not announced when screen reader users navigate through content using arrow keys.

##Code Examples
                      
```
<a href="#" aria-label="More Information – opens a dialog">More Information</a><br>
<a href="#">More Information <span class="screenreader-only">opens a dialog</span></a><br>
<a href="#" title="opens a dialog">More Information</a>
```
                      