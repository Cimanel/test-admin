## Notes about React Admin doc

### Filter panel aside

I tried to set a filter panel aside and I used the code from the doc, I expected to have the same result as the demo in the example, with the aside at the same height of the main list.
My result is that the aside is not align with the main list

### Doc on mobile

at the end of the page, no previous/next page buttons, no top page button

### Typo

https://marmelab.com/react-admin/doc/4.0/List.html
resource
By default, <List> operates on the current ResourceContext (defined at the routing level), so under the /posts path, the resource prop will be posts. You may want to force a different resource for a list. In this case, pass a custom resource prop, and it will override the ResourceContext value.

export const UsersList = () => (
<List sresource="users">
...
</List>
);
