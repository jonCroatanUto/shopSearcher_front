# Shop Searcher

This web app it shows the most near places around your approximate position.
The user can choose about multiple types of places: restaurants, pharmacy, aquarius, gym ...
The user can choose the search radius.
The user is allowed to have a profile, and save the favorite places, and order it in folders.

**NOTE**: This repository content just the front side of the aplication. [Backend repository](https://github.com/jonCroatanUto/shopSeracher_back.git), the server side it's already deployed, as the data base, so you don't need to run it.
This front side it's deployed, but have some issues not solved yet..

### Features

- This app work with mongo db database deployed in Atlas mongoDB
- The front side point to a not deployed node server
- The server is also contained in a docker container
- The front side it's developed with a combination of React, typescript and Redux
- All the global variable are located in the `.env` file, in the cliend and in the server
- This app show the closer places using Google Apis data .

# Index

- [Shop Searcher](#shop-searcher)
  - [Features](#features)
- [Index](#index)
  - [ð To start](#-to-start)
- [ðĶī Project Structure](#-project-structure)
  - [Folder structure ð](#folder-structure-)
- [ð§­ App navigation](#-app-navigation)
  - [HOME ðš](#home-)
  - [List component](#list-component)
- [âĻ Wishlist and decisions made](#-wishlist-and-decisions-made)
- [ðĩïļââïļ Resources](#ïļïļ-resources)
- [ðïļ Contributing](#ïļ-contributing)

## ð To start

To start executing this application you should:

- Choose a folder in your local machine and open the terminal
- Run the comand:

```
git clone https://github.com/jonCroatanUto/shopSeracher_front.git
```

- Go inside the folder `shopSeracher_front` and run:

```
npm install
```

- run the client side app with the comand :

```
npm start
```

- For this project you should use [movieDB API](https://developers.themoviedb.org/3)
- Create an `.env` file in the root folder adding the following variables:

```
REACT_APP_NODE_SERVER_LOCATION=http://localhost:4000/
```

###

# ðĶī Project Structure

## Folder structure ð

<pre>
ââââpublic
ââââsrc
    ââââapiCalls  <i>//Calls to node server </i>
    |	   ââââ apiCalls
    |      ââââ placesNodeServerCalls
    |      ââââ UserNodeServerCalls 
    ââââcomponents
    |      ââââ inputText
    |      ââââ List
    |      ââââ NavBar
    |      ââââ ShopListSelector
    ââââredux
    |      ââââ modalReducer
    |      ââââ shopReducer
    |      ââââ userReducer 
    ââââpages
           ââââ Home
           ââââ ListShops
           ââââ Login
           ââââ Profile
           ââââ Register 
   

</pre>

# ð§­ App navigation

## HOME ðš

You have the change of go in this page without login or register. In this cas you are allowed to search the closer places but not to save it.
From Home you can go to login or register , thet send you to those pages `Login` or `Register`. When one of that is done you will be redirected to Home again , and now the `add to favorites` button is allowed to ejecute the funcionality, as well as, go to the `Pofile` page or `Logout`

## List component

This component it's one of most reused components , it render the element list of the `Places Api` response from google, as well as, the display of the saved favorites places.
In order to did this I Had to adapt my model database shop collection format to match with google api response

# âĻ Wishlist and decisions made

- Search bar: Allow to the user to search in the the his favorites places saves.
- Precision locating: I'm sure there is a way to locate the exactly position of the user. I wish to investigate this deeply
- Token: create a token when a specific user is singUp , and develop a system to refresh that each time.
- Display folder content: do a doubleClick to and call to the Favorites places saved in that specific folder.
- Improve the CRUDs: develop a Delete/Update for the favorites places and for the folders
- Authentication security: Use the userReducer to redirect if you access to profile without identify (now you can acces by de url)
- Authentication security: Create a hoc to wrap the pages that only can have access an identify user. For example profile page.
- Save activity: use cookies or localStorage to save the information provided by google APIs
-

# ðĩïļââïļ Resources

- [axios](https://www.npmjs.com/package/axios)
- [React](https://es.reactjs.org/)
- [React Router](https://github.com/remix-run/react-router)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Redux thunk](https://github.com/reduxjs/redux-thunk)
- [React select](https://react-select.com/home)
- [Redux](https://redux.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React Testing library](https://testing-library.com/docs/react-testing-library/intro/)

# ðïļ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.
