# Angular Component Seed [![Analytics](https://ga-beacon.appspot.com/UA-2694988-7/ng-component-seed/readme?pixel)](https://github.com/yaru22/ng-component-seed)
This repo contains all you need to kickstart implementing your own Angular component (directive, filter, service, etc.). Just track this repo, implement your component and share with other AngularJS enthusiasts!


## How to See Sample in Action
```
$ git clone https://github.com/yaru22/ng-component-seed.git
$ cd ng-component-seed
$ npm install
$ bower install
$ grunt
```


## How to Use Seed Properly
Install `git-track`.
```
$ npm install -g git-track
```

Create a new repo.
```
$ mkdir sample
$ cd sample
$ touch README.md
$ git init .
$ git add README.md
$ git commit -m "First commit."
```

Track this `ng-component-seed` repo.
```
$ git remote add track https://github.com/yaru22/ng-component-seed.git
$ git track track/master
```

Initialize the seed.
```
$ npm install
$ bower install
```

Do the necessary work
- create your component
- change bower.json and package.json
- change README.md and LICENSE
- etc.

Sync with this `ng-component-seed` repo time to time to get updates.
```
$ git track
<resolve conflicts and updating done>
```


## License
This seed is released under permissive MIT License.
