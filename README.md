# How to repro the issue of multiple Lists saved state

1. run project
2. There are two custom pages which just exposes the Posts list
3. notice that `Post` list is on 3 pages now, `Posts 1`, `Posts 2` and `Posts` (default list view for keystone)
4. apply Filter, select column, search or even sort on ANY one of the page
5. Navigate to other two pages and the state is persisted there
    * reason is that all this is being saved in localStorage with list name as key

PR https://github.com/keystonejs/keystone/pull/2441 fixes this as such I can use a `listView` option on the List component which will save the setting as different key. by default it is '' and does not affect the existing functionality.

Ideally the url state should also have a key or list name + a key to make is usable in custom pages. Having url state include list name + key will open scenario of multiple Lists on same custom page

# Demo Project: Blog

This is the Blog, a Demo Project for Keystone. Compared to the todo list, it is more complex and contains more features that really showcase the power of Keystone - one of which is 'relationships'. The Blog contains four lists - Posts, Post Categories, Users and Comments. Users can create Comments that relate to a certain Post, and Admins can create Posts that can relate to one or more Post Categories.

The Blog is a great example and boilerplate for more complex, real-world implementations of Keystone.

## Running the Project.

To run this project, open your terminal and run `yarn` within the Keystone project root to install all required packages, then run `yarn start blog` to begin running Keystone.

The Keystone Admin UI is reachable from `localhost:3000/admin`. To log in, use the following credentials:

Username: `admin@keystonejs.com`
Password: `password`

To see an example Next.js app using KeystoneJS' GraphQl APIs, head to `localhost:3000`.

You can change the port that this demo runs on by setting the `PORT` environment variable.

```sh
PORT=5000 yarn start blog
```

## TODO: Permissions and Authorisation

Although the "Password" auth strategy is enabled for the Admin UI on this project, we haven't implemented any restrictions on the GraphQL API yet. So unauthenticated users are able to create and destroy admin users (!)

See the [Access Control](https://keystonejs.com/guides/access-control) documentation for information on how to do this.
