# React-avallone-test
How would you display a node that has more than one parent? e.g. `Wayne Corp` is
owned by `Acme Inc` but it is also owned by `Globex Corp`.

There two ways to handle this. The first is to display the node twice, once for each 
parent. The second is to display the node once, but show both parents.

How would you handle cycles in the input? e.g. Acme owns Wayne, and Wayne owns
Acme

I'll check for cycles in the input and display an error message if there is a cycle.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
