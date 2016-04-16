# learnyouelectron
Learn Electron

## Dev Flow

1. Run `node learnyouelectron.js` to run
2. Each lesson needs it's own directory under `/exercises`
3. Place the solution in `/exercises/<exercise_name>/solution/solution.js`
4. Put exercise-running code in `/exercises/<exercise_name>/exercise.js`. You can mostly copy this from [https://github.com/linclark/demo-workshopper/blob/master/exercises/test_exercise/exercise.js](https://github.com/linclark/demo-workshopper/blob/master/exercises/test_exercise/exercise.js) to get started. You'll need to check out the notes about addSetup and addProcessor methods in the [Lin Clark post](http://lin-clark.com/blog/2014/07/01/authoring-nodejs-workshopper-lessons/).
5. Write the problem description narrative in `/exercises/<exercise_name>/problem.md`

## Additional tools

Use `npm run electron` to run the electron-prebuilt binary from the dev-dependencies.
