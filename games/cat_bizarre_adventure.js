/*
@title: cat_bizarre_adventure
@author: alex_b
*/

/* LORE!!!
In an alternate universe where cats are as big as trees and catnip grows aplenty from the soil
unplagued by mankind, felines dominate the world. Our protagonist, Lilac the Calico, and her
rodent friend are lost. Navigate through a field of apple trees!
*/

// Press K to grab items. Press I to use certain items to interact with objects in the world.

const sitcat = "s";
const cat = "c";
const yarn = "y";
const axe = "a";
const tree = "t";
const catnip = "n"; // don't do drugs
const numnip = "m";
const background = "b";
const hotbar = "e";
const goal = "o";
const song = tune`
166.66666666666666: d4~166.66666666666666,
166.66666666666666: e4~166.66666666666666,
166.66666666666666,
166.66666666666666: e4~166.66666666666666,
166.66666666666666,
166.66666666666666: e4~166.66666666666666,
166.66666666666666: d4~166.66666666666666,
166.66666666666666: f4~166.66666666666666,
166.66666666666666: g4~166.66666666666666,
166.66666666666666: g4~166.66666666666666,
166.66666666666666,
166.66666666666666: g4~166.66666666666666,
166.66666666666666: g4~166.66666666666666,
166.66666666666666: f4~166.66666666666666,
166.66666666666666: e4~166.66666666666666,
166.66666666666666,
166.66666666666666: e4~166.66666666666666,
166.66666666666666: e4~166.66666666666666,
166.66666666666666: g4~166.66666666666666,
166.66666666666666,
166.66666666666666: b4~166.66666666666666,
166.66666666666666,
166.66666666666666: b4~166.66666666666666,
166.66666666666666,
166.66666666666666: b4~166.66666666666666,
166.66666666666666,
166.66666666666666: b4~166.66666666666666,
333.3333333333333,
166.66666666666666: g4~166.66666666666666,
166.66666666666666: f4~166.66666666666666,
166.66666666666666: e4~166.66666666666666`;

let num = 0

setLegend(
  [ sitcat, bitmap`
................
...00.....00....
..02200000990...
..01122299110...
..01822299810...
..02222229990...
..02202220220...
..0127222D210...
...012282210....
..01222222910...
..02222222990...
.0122222222910..
.01L22L2L22L1.L.
.01L29L2L12L1.L.
..01L9L1L1L1.0..
...0000000000...`],
  [ cat, bitmap`
................
..00..00...90...
.01L..L90..990..
.082LL980...92L.
0222229990...2L.
02022202111..2L.
027222D220...90.
01228222111.L0..
.0122222099LL0..
..012229999920..
..0122229922220.
..0122222222220.
...091122222220.
...09LL12LLLL20.
...0L..LL....L0.
....0..0.....0..`],
  [ yarn, bitmap`
................
................
................
................
................
................
......LL000.....
.....111110.....
....1011111L....
....L111111L....
.....0L.LLL88...
............88..
................
................
................
................`],
  [ axe, bitmap`
................
................
................
...........00...
..........0LL0..
.........LL11L..
........LLLLLL..
........01LLLL..
.......F0LLLL0..
......F0..LL00..
.....FF.........
....F0..........
...00...........
..00............
................
................`],
  [ tree, bitmap`
................
....CCCCCCCC....
...CCCCCCCCCC...
..CCC23CCCCCC0..
..CCC33CCC23C0..
..CCCCCCCC33C0..
..CCCCCCCCCCC0..
...CCCCCCCCC0...
....CCCCCC00....
......FFF0......
......FFF0......
......FFF0......
......FFF0......
....FFFFFFFF....
...FF0..FFFF0...
..F00....0000...`],
  [ catnip, bitmap`
................
................
................
................
................
.....F..........
....CF..........
................
................
..........99....
...........FF...
................
................
...F............
................
................`],
  [ background, bitmap`
DDDDDDDDDDDDDDDD
D44DD44DD44DD44D
D44444444444444D
DD444444444444DD
DD444444444444DD
D44444444444444D
D44444444444444D
DD444444444444DD
DD444444444444DD
D44444444444444D
D44444444444444D
DD444444444444DD
DD444444444444DD
D44444444444444D
D44DD44DD44DD44D
DDDDDDDDDDDDDDDD`],
  [ hotbar, bitmap`
LLLLLLLLLLLLLLLL
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111211
1111111111122211
1111111111111111
1111111111111111`],
  [ numnip, bitmap`
5555555555555555
7777777777777777
777F777777777777
77CF777777777777
7777799777777777
777777FF77777777
7777777777777777
77F7777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`]
);

setSolids(
  [ cat, yarn, tree, hotbar, numnip ]
);

setPushables({
  [ cat ]: [ yarn ]
});

let level = 0;
const levels = [
  map`
.tn.n..
.......
tt....n
..nsyt.
n....tt
n....at
..n....
eeeeeem`
];

setBackground(background);

setMap(levels[level]);

// wasd default; k to pick up items; i to interact
onInput("w", () => {
  if (getFirst(cat)) {
    getFirst(cat).y -= 1
  }
});
onInput("a", () => {
  if (getFirst(cat)) {
    getFirst(cat).x -= 1
  }
});
onInput("s", () => {
  if (getFirst(cat)) {
    getFirst(cat).y += 1
  }
});
onInput("d", () => {
  if (getFirst(cat)) {
    getFirst(cat).x += 1
  }
});

onInput("i", () => { // func
  if (getFirst(axe).y == 7) {
    if (getTree.y == getFirst(cat).y-1 && getTree.x == getFirst(cat).x) {
      getTree.remove();
    }
  }
});

onInput("k", () => {
// pick up items :3
  if (getFirst(cat) && getFirst(axe)) {
    if (getFirst(axe).x == getFirst(cat).x && getFirst(axe).y == getFirst(cat).y) {
      getFirst(axe).remove();
      addSprite(0, 7, axe);
    }
  }
  if (getFirst(cat) && getFirst(catnip)) { // only works top-left to bottom-right help :(
    if (getFirst(catnip).x == getFirst(cat).x && getFirst(catnip).y == getFirst(cat).y) {
      num += 1;
      getFirst(catnip).remove();
    }
  }
});

afterInput(() => {
  if (getFirst(sitcat)) {
    getFirst(sitcat).remove();
    addSprite(3, 3, cat);
  }

  if (getFirst(cat)) {
    addText(num.toString(), { x: 16, y: 15, color: color`2`});
  }
});
