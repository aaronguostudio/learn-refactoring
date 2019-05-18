# Principles
- When you have to add a feature to a program but the code is not structured in a convenient way, first refactor the program to make it easy to add the feature, then add the feature.

- The first step in refactoring
  1. A solid set of tests (input and output)
  2. Decompsing the code
    - extract function and run test immediately after its done (every refactoring)
  3. Commit each refactoring to git and squash them when push to remote repository
  4. Renaming
    - let result, return result // use result as var name for the turn of a function
    - more clear var name: aPerformance, players, ...
  5. Replace temp with query // use computed instead of pass in scoped var
  6. Most of the time you should ignore it. If your refactoring introduces performance slow-downs, finish refactoring first and do performance tuning afterwards.