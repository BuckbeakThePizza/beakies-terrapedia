Welcome to Meh Terrapedia
=================

I am Beakie, I am Riffin, Terra Monsters good. If you have any questions, ask me somehow...

Files and Stuff
------------

### ← README.md

That's this file.

### ← index.html

My HTML code. 

### ← app.css

My CSS code.

### ← app.js

My JavaScript code.

### ← assets

Various pictures not on the wikis.

### ← elements/

Information for elements retreived from these files.

`.txt` file skeleton:

*Anything in ~~ is a description of what should be there.*
```
{"damage_relations": {
  "double_damage_from": [
    {"name": "~first element~"},
    {"name": "~second element~"} ],
  "double_damage_to": [
    {"name": "~first element~"},
    {"name": "~second element~"} ],
  "half_damage_from": [
    {"name": "~first element~"},
    {"name": "~second element~"} ], 
  "half_damage_to": [
    {"name": "~first element~"},
    {"name": "~second element~"} ]}, 
"image": "~image url~", 
"name": "~element name~"}
```

### ← terrapedia/

Information for Terra Monsters retreived from these files.

`.txt` file skeleton:

*Anything in ~~ is a description of what should be there.*


```
{"name": "~terra monster name~",
"types": [
  {"slot": 1, 
  "type": {"name": "~first element~"}},
  {"slot": 2,
  "type": {"name": "~second element~"}}], 
"tm1id": ~terra monsters 1 number~, 
"tm2id": ~terra monsters 2 number~, 
"tm3id": ~terra monsters 3 number~, 
"tmwgid": ~terra monsters "global" number~, 
"evolves": {
  "level": ~evolution level~, 
  "name": "~terra monster that it evolves to~"}, 
"stats": {
  "HP": ~HP stat~, 
  "MEA": ~melee attack stat~, 
  "MED": ~melee defense stat~, 
  "RAA": ~ranged attack stat~, 
  "RAD": ~ranged defense stat~, 
  "SPE": ~speed stat~, 
  "ENE": ~energy stat~, 
  "ACC": ~accuracy stat~, 
  "AGI": ~agility stat~, 
  "RES": ~resistance stat~}, 
"image": "~image url~", 
"notes": "~notes about stats~", 
"trivia": {
  "image": "~old design url~", 
  "name": "~old terra monster name~", 
  "other": "~note about past games~"} }
```

### ← tmonline/

Information for Terra Monsters that were discontinued (mostly) in the mobile series from these files.

`.txt` file skeleton:

*Anything in ~~ is a description of what should be there.*

```
{"name": "~terra monster name~", 
"types": [
  {"slot": 1, 
  "type": {"name": "~first element name~"}},
  {"slot": 2,
  "type": {"name": "~second element name~"}}], 
"tmwgid": ~terra monsters "global" number~, 
"evolves": {
  "level": ~evolution level~, 
  "name": "~terra monster it evolves to"}, 
"stats": {
  "HP": ~HP stat~, 
  "ATT": ~attack stat~, 
  "DEF": ~defense stat~, 
  "RAA": ~ranged attack stat~, 
  "SPE": ~speed stat~, 
  "AGI": ~agility stat~}, 
"image": "~image url~", 
"notes": "~notes about stats~" }
```
## Notes about .txt files:

* the `{"slot": 2, "type": {"name": "~second element name~"}}` section is removed if it is a single-element terra monster
* with the terra monsters numbers, if it has none the value will be "none"
* if the terra monster does not evolve, the `"level": ~evolution level~` will be set to "none", and the `"name": "~terra monster it evolves to"` will be set to "does not evolve further"
* if a stat is not present, the value will be []
* old terra monsters names in `"name": "~old terra monster name~"` will have to end in " / "

Made using [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
