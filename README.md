# Skills Mapping

A simple tool to help you visualise capabilities within a team.

There are two important files.
- `src/data/capabilities.json`
- `src/data/team-members/json`

## How to use

### Step 1: Install
```
npm install
```

### Step 2: Edit capabilities
Edit: `src/data/capabilities.json`

Once you've edited this and entered your capabilities, you need to run build mode.

### Step 3: Build mode
```
npm run build
```

Will compile all the static files to the `dist` folder. But, most importantly, will clean up the `team-members.json` file to add or remove any changes to the capabilities.

### Step 4: Dev mode
```
npm run dev
```

Will run the build but then also spin up a server on `localhost:8080` so you can edit and see the updates live without having to run the build every time.

It should auto update when you're editing scores. If you update the capabilities, you may need to restart the server.

## To do
- [ ] Accessibility