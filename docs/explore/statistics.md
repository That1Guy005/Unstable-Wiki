---
title: Statistics
description: Charts of episodes, POVs, characters, places and mechanics.
---

# Statistics

Charts built from the notes. Hover over a bar or point for exact numbers.

## Episodes per season

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 260,
 "data": {
  "values": [
   {
    "season": "Season 1",
    "pov": "ParrotX2",
    "episodes": 11
   },
   {
    "season": "Season 1",
    "pov": "Wemmbu",
    "episodes": 10
   },
   {
    "season": "Season 1",
    "pov": "SpokeIsHere",
    "episodes": 6
   },
   {
    "season": "Season 1",
    "pov": "FlameFrags",
    "episodes": 0
   },
   {
    "season": "Season 2",
    "pov": "ParrotX2",
    "episodes": 17
   },
   {
    "season": "Season 2",
    "pov": "Wemmbu",
    "episodes": 30
   },
   {
    "season": "Season 2",
    "pov": "SpokeIsHere",
    "episodes": 15
   },
   {
    "season": "Season 2",
    "pov": "FlameFrags",
    "episodes": 26
   },
   {
    "season": "Season 2+",
    "pov": "ParrotX2",
    "episodes": 11
   },
   {
    "season": "Season 2+",
    "pov": "Wemmbu",
    "episodes": 9
   },
   {
    "season": "Season 2+",
    "pov": "SpokeIsHere",
    "episodes": 12
   },
   {
    "season": "Season 2+",
    "pov": "FlameFrags",
    "episodes": 14
   }
  ]
 },
 "mark": {
  "type": "bar",
  "tooltip": true
 },
 "encoding": {
  "x": {
   "field": "season",
   "type": "nominal",
   "sort": [
    "Season 1",
    "Season 2",
    "Season 2+"
   ],
   "title": null,
   "axis": {
    "labelAngle": 0
   }
  },
  "y": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes"
  },
  "color": {
   "field": "pov",
   "type": "nominal",
   "title": "POV",
   "scale": {
    "domain": [
     "ParrotX2",
     "Wemmbu",
     "SpokeIsHere",
     "FlameFrags"
    ],
    "range": [
     "#2e7d32",
     "#1565c0",
     "#6a1b9a",
     "#e65100"
    ]
   }
  },
  "xOffset": {
   "field": "pov",
   "sort": [
    "ParrotX2",
    "Wemmbu",
    "SpokeIsHere",
    "FlameFrags"
   ]
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Uploads per month

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 260,
 "data": {
  "values": [
   {
    "month": "2024-04-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-04-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2024-05-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-05-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2024-05-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2024-06-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2024-06-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2024-07-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-07-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2024-07-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2024-08-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-08-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2024-09-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-09-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2024-10-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-10-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2024-10-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2024-11-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-11-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2024-12-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2024-12-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2025-01-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2025-01-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-01-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2025-02-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2025-02-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2025-03-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2025-03-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-03-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2025-04-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2025-04-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2025-05-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2025-05-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2025-05-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-05-01",
    "pov": "Wemmbu",
    "episodes": 3
   },
   {
    "month": "2025-06-01",
    "pov": "FlameFrags",
    "episodes": 3
   },
   {
    "month": "2025-06-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2025-06-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2025-07-01",
    "pov": "FlameFrags",
    "episodes": 4
   },
   {
    "month": "2025-07-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-07-01",
    "pov": "Wemmbu",
    "episodes": 3
   },
   {
    "month": "2025-08-01",
    "pov": "FlameFrags",
    "episodes": 3
   },
   {
    "month": "2025-08-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2025-08-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-08-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2025-09-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2025-09-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2025-09-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-09-01",
    "pov": "Wemmbu",
    "episodes": 3
   },
   {
    "month": "2025-10-01",
    "pov": "FlameFrags",
    "episodes": 3
   },
   {
    "month": "2025-10-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2025-10-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2025-10-01",
    "pov": "Wemmbu",
    "episodes": 3
   },
   {
    "month": "2025-11-01",
    "pov": "FlameFrags",
    "episodes": 3
   },
   {
    "month": "2025-11-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2025-11-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2025-11-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2025-12-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2025-12-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2025-12-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2025-12-01",
    "pov": "Wemmbu",
    "episodes": 4
   },
   {
    "month": "2026-01-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2026-01-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2026-01-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2026-01-01",
    "pov": "Wemmbu",
    "episodes": 2
   },
   {
    "month": "2026-02-01",
    "pov": "FlameFrags",
    "episodes": 3
   },
   {
    "month": "2026-02-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2026-02-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2026-02-01",
    "pov": "Wemmbu",
    "episodes": 3
   },
   {
    "month": "2026-03-01",
    "pov": "FlameFrags",
    "episodes": 1
   },
   {
    "month": "2026-03-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2026-03-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2026-03-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2026-04-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2026-04-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2026-04-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2026-05-01",
    "pov": "FlameFrags",
    "episodes": 1
   },
   {
    "month": "2026-05-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2026-05-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2026-05-01",
    "pov": "Wemmbu",
    "episodes": 4
   },
   {
    "month": "2026-06-01",
    "pov": "FlameFrags",
    "episodes": 3
   },
   {
    "month": "2026-06-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2026-06-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2026-06-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2026-07-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2026-07-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2026-08-01",
    "pov": "FlameFrags",
    "episodes": 1
   },
   {
    "month": "2026-08-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2026-08-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2026-08-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2026-09-01",
    "pov": "FlameFrags",
    "episodes": 1
   },
   {
    "month": "2026-09-01",
    "pov": "ParrotX2",
    "episodes": 2
   },
   {
    "month": "2026-09-01",
    "pov": "SpokeIsHere",
    "episodes": 2
   },
   {
    "month": "2026-09-01",
    "pov": "Wemmbu",
    "episodes": 1
   },
   {
    "month": "2026-10-01",
    "pov": "FlameFrags",
    "episodes": 2
   },
   {
    "month": "2026-10-01",
    "pov": "ParrotX2",
    "episodes": 1
   },
   {
    "month": "2026-10-01",
    "pov": "SpokeIsHere",
    "episodes": 1
   },
   {
    "month": "2026-11-01",
    "pov": "ParrotX2",
    "episodes": 1
   }
  ]
 },
 "mark": {
  "type": "bar",
  "tooltip": true
 },
 "encoding": {
  "x": {
   "field": "month",
   "type": "temporal",
   "timeUnit": "yearmonth",
   "title": null
  },
  "y": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes",
   "stack": true
  },
  "color": {
   "field": "pov",
   "type": "nominal",
   "title": "POV",
   "scale": {
    "domain": [
     "ParrotX2",
     "Wemmbu",
     "SpokeIsHere",
     "FlameFrags"
    ],
    "range": [
     "#2e7d32",
     "#1565c0",
     "#6a1b9a",
     "#e65100"
    ]
   }
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Episodes over time

Running total of POV episodes for each creator.

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 280,
 "data": {
  "values": [
   {
    "date": "2024-04-21",
    "pov": "SpokeIsHere",
    "episodes": 1,
    "title": "How to Destroy the Unstable SMP",
    "ep": 1
   },
   {
    "date": "2024-04-27",
    "pov": "ParrotX2",
    "episodes": 1,
    "title": "This Button Destroys the World",
    "ep": 2
   },
   {
    "date": "2024-05-04",
    "pov": "Wemmbu",
    "episodes": 1,
    "title": "Breaking Into Minecraft's Most Illegal Vault",
    "ep": 3
   },
   {
    "date": "2024-05-13",
    "pov": "SpokeIsHere",
    "episodes": 2,
    "title": "How I Stole 10,356,000 Duped Items",
    "ep": 4
   },
   {
    "date": "2024-05-17",
    "pov": "ParrotX2",
    "episodes": 2,
    "title": "I Uncovered Minecraft's Greatest Secret",
    "ep": 5
   },
   {
    "date": "2024-05-25",
    "pov": "Wemmbu",
    "episodes": 2,
    "title": "It's Impossible to Catch this Player",
    "ep": 6
   },
   {
    "date": "2024-06-09",
    "pov": "ParrotX2",
    "episodes": 3,
    "title": "I Broke into Minecraft's Most Secure Prison",
    "ep": 7
   },
   {
    "date": "2024-06-15",
    "pov": "Wemmbu",
    "episodes": 3,
    "title": "I Created Minecraft's Greatest Civilization",
    "ep": 8
   },
   {
    "date": "2024-06-30",
    "pov": "ParrotX2",
    "episodes": 4,
    "title": "I Got Hunted by Minecraft's Deadliest Players",
    "ep": 9
   },
   {
    "date": "2024-07-08",
    "pov": "Wemmbu",
    "episodes": 4,
    "title": "Why I Destroyed the Unstable SMP",
    "ep": 10
   },
   {
    "date": "2024-07-19",
    "pov": "SpokeIsHere",
    "episodes": 3,
    "title": "I Bankrupted Minecraft's Richest Civilization",
    "ep": 11
   },
   {
    "date": "2024-07-22",
    "pov": "ParrotX2",
    "episodes": 5,
    "title": "It's Impossible to Find this Player",
    "ep": 12
   },
   {
    "date": "2024-07-29",
    "pov": "Wemmbu",
    "episodes": 5,
    "title": "Unstable SMP: The PrinceZam Empire War",
    "ep": 13
   },
   {
    "date": "2024-08-17",
    "pov": "Wemmbu",
    "episodes": 6,
    "title": "How I Escaped Minecraft's Largest Prison",
    "ep": 14
   },
   {
    "date": "2024-08-31",
    "pov": "ParrotX2",
    "episodes": 6,
    "title": "Escaping Proton: Minecraft's Most Secure Prison",
    "ep": 15
   },
   {
    "date": "2024-09-09",
    "pov": "ParrotX2",
    "episodes": 7,
    "title": "I Built Minecraft's Safest Civilization",
    "ep": 16
   },
   {
    "date": "2024-09-27",
    "pov": "Wemmbu",
    "episodes": 7,
    "title": "How I Solved Minecraft's Largest Escape Room",
    "ep": 17
   },
   {
    "date": "2024-10-02",
    "pov": "ParrotX2",
    "episodes": 8,
    "title": "I Survived Minecraft's Most Corrupt City",
    "ep": 18
   },
   {
    "date": "2024-10-05",
    "pov": "SpokeIsHere",
    "episodes": 4,
    "title": "I Got Hunted by the Minecraft Mafia",
    "ep": 19
   },
   {
    "date": "2024-10-30",
    "pov": "Wemmbu",
    "episodes": 8,
    "title": "I Discovered a Minecraft Sky Civilization",
    "ep": 20
   },
   {
    "date": "2024-11-04",
    "pov": "ParrotX2",
    "episodes": 9,
    "title": "The Search for Minecraft's Far Lands",
    "ep": 21
   },
   {
    "date": "2024-11-18",
    "pov": "SpokeIsHere",
    "episodes": 5,
    "title": "I Infiltrated The Minecraft Mafia",
    "ep": 22
   },
   {
    "date": "2024-12-04",
    "pov": "Wemmbu",
    "episodes": 9,
    "title": "I Mastered Minecraft Combat",
    "ep": 23
   },
   {
    "date": "2024-12-07",
    "pov": "ParrotX2",
    "episodes": 10,
    "title": "Unstable SMP: The First War",
    "ep": 24
   },
   {
    "date": "2025-01-21",
    "pov": "ParrotX2",
    "episodes": 11,
    "title": "Unstable SMP: Doomsday",
    "ep": 25
   },
   {
    "date": "2025-01-21",
    "pov": "Wemmbu",
    "episodes": 10,
    "title": "Unstable SMP: The Mafia",
    "ep": 26
   },
   {
    "date": "2025-01-30",
    "pov": "SpokeIsHere",
    "episodes": 6,
    "title": "The End of the Minecraft Mafia",
    "ep": 27
   },
   {
    "date": "2025-02-02",
    "pov": "Wemmbu",
    "episodes": 11,
    "title": "Unstable SMP: After The Mafia",
    "ep": 28
   },
   {
    "date": "2025-02-17",
    "pov": "ParrotX2",
    "episodes": 12,
    "title": "I Got Hunted by the World's Best Minecraft Player",
    "ep": 29
   },
   {
    "date": "2025-02-27",
    "pov": "Wemmbu",
    "episodes": 12,
    "title": "Unstable SMP: The Eggchan Empire",
    "ep": 30
   },
   {
    "date": "2025-03-09",
    "pov": "ParrotX2",
    "episodes": 13,
    "title": "I Got Hunted by a Minecraft Redstone Genius",
    "ep": 31
   },
   {
    "date": "2025-03-12",
    "pov": "SpokeIsHere",
    "episodes": 7,
    "title": "I Spent 100 Days Hidden in a Secret Minecraft Base...",
    "ep": 32
   },
   {
    "date": "2025-03-14",
    "pov": "Wemmbu",
    "episodes": 13,
    "title": "I Explored a Deserted Minecraft Civilization",
    "ep": 33
   },
   {
    "date": "2025-03-29",
    "pov": "ParrotX2",
    "episodes": 14,
    "title": "I Got Hunted by Minecraft Bounty Hunters",
    "ep": 34
   },
   {
    "date": "2025-04-08",
    "pov": "SpokeIsHere",
    "episodes": 8,
    "title": "I Survived 100 Days Inside a Hidden Minecraft Base",
    "ep": 35
   },
   {
    "date": "2025-04-21",
    "pov": "Wemmbu",
    "episodes": 14,
    "title": "I Explored an Abandoned Minecraft Civilization",
    "ep": 36
   },
   {
    "date": "2025-04-26",
    "pov": "SpokeIsHere",
    "episodes": 9,
    "title": "100 Days Hidden in a Minecraft Chunk Base",
    "ep": 37
   },
   {
    "date": "2025-05-03",
    "pov": "Wemmbu",
    "episodes": 15,
    "title": "How I SURVIVED the Unstable SMP",
    "ep": 38
   },
   {
    "date": "2025-05-03",
    "pov": "FlameFrags",
    "episodes": 1,
    "title": "I Became Immortal on a Hardcore Minecraft SMP",
    "ep": 39
   },
   {
    "date": "2025-05-04",
    "pov": "ParrotX2",
    "episodes": 15,
    "title": "I Got Hunted by a Minecraft Hacker",
    "ep": 40
   },
   {
    "date": "2025-05-17",
    "pov": "FlameFrags",
    "episodes": 2,
    "title": "SOLO Player VS Toxic Minecraft Team",
    "ep": 41
   },
   {
    "date": "2025-05-20",
    "pov": "Wemmbu",
    "episodes": 16,
    "title": "How I HUNTED the Unstable SMP",
    "ep": 42
   },
   {
    "date": "2025-05-28",
    "pov": "Wemmbu",
    "episodes": 17,
    "title": "How I DESTROYED the Unstable SMP",
    "ep": 43
   },
   {
    "date": "2025-05-28",
    "pov": "SpokeIsHere",
    "episodes": 10,
    "title": "I Spent 100 Days Trapped in a Minecraft Void Base...",
    "ep": 44
   },
   {
    "date": "2025-05-31",
    "pov": "ParrotX2",
    "episodes": 16,
    "title": "Hunting a Minecraft Player Who Doesn't Exist",
    "ep": 45
   },
   {
    "date": "2025-06-01",
    "pov": "FlameFrags",
    "episodes": 3,
    "title": "SOLO Player VS Toxic Minecraft Clan",
    "ep": 46
   },
   {
    "date": "2025-06-06",
    "pov": "Wemmbu",
    "episodes": 18,
    "title": "How I SAVED the Unstable SMP",
    "ep": 47
   },
   {
    "date": "2025-06-12",
    "pov": "FlameFrags",
    "episodes": 4,
    "title": "SOLO Player VS Toxic Minecraft Civilization",
    "ep": 48
   },
   {
    "date": "2025-06-25",
    "pov": "Wemmbu",
    "episodes": 19,
    "title": "How I SURVIVED a Hardcore Minecraft Tournament",
    "ep": 49
   },
   {
    "date": "2025-06-28",
    "pov": "FlameFrags",
    "episodes": 5,
    "title": "Dominating Minecraft's Deadliest PVP Tournament",
    "ep": 50
   },
   {
    "date": "2025-06-28",
    "pov": "ParrotX2",
    "episodes": 17,
    "title": "Escaping Paragon: The Perfect Minecraft Prison",
    "ep": 51
   },
   {
    "date": "2025-07-04",
    "pov": "FlameFrags",
    "episodes": 6,
    "title": "SOLO Player VS Minecraft Bounty Hunters",
    "ep": 52
   },
   {
    "date": "2025-07-08",
    "pov": "Wemmbu",
    "episodes": 20,
    "title": "I Explored Beyond the Minecraft Farlands",
    "ep": 53
   },
   {
    "date": "2025-07-15",
    "pov": "Wemmbu",
    "episodes": 21,
    "title": "I Explored Beyond the Minecraft Fartherlands",
    "ep": 54
   },
   {
    "date": "2025-07-16",
    "pov": "FlameFrags",
    "episodes": 7,
    "title": "I Got REVENGE on the Unstable SMP",
    "ep": 55
   },
   {
    "date": "2025-07-22",
    "pov": "SpokeIsHere",
    "episodes": 11,
    "title": "I Manipulated 1000 Players on the Unstable SMP",
    "ep": 56
   },
   {
    "date": "2025-07-23",
    "pov": "FlameFrags",
    "episodes": 8,
    "title": "I Almost DIED on a Hardcore Minecraft SMP",
    "ep": 57
   },
   {
    "date": "2025-07-26",
    "pov": "Wemmbu",
    "episodes": 22,
    "title": "I Explored to the END of the Minecraft Farlands",
    "ep": 58
   },
   {
    "date": "2025-07-31",
    "pov": "FlameFrags",
    "episodes": 9,
    "title": "Minecraft Combat Master VS Mace Pro",
    "ep": 59
   },
   {
    "date": "2025-08-07",
    "pov": "Wemmbu",
    "episodes": 23,
    "title": "I Explored Beyond the Minecraft Void",
    "ep": 60
   },
   {
    "date": "2025-08-12",
    "pov": "FlameFrags",
    "episodes": 10,
    "title": "Unstable SMP: The Great Farm War",
    "ep": 61
   },
   {
    "date": "2025-08-14",
    "pov": "ParrotX2",
    "episodes": 18,
    "title": "I Joined the World's Largest Minecraft Server",
    "ep": 62
   },
   {
    "date": "2025-08-17",
    "pov": "SpokeIsHere",
    "episodes": 12,
    "title": "I Got Betrayed by my 1000 Player Army...",
    "ep": 63
   },
   {
    "date": "2025-08-20",
    "pov": "Wemmbu",
    "episodes": 24,
    "title": "Orbital Strike Cannon vs Unstable SMP",
    "ep": 64
   },
   {
    "date": "2025-08-21",
    "pov": "FlameFrags",
    "episodes": 11,
    "title": "Minecraft Pro VS Orbital Strike Cannon",
    "ep": 65
   },
   {
    "date": "2025-08-30",
    "pov": "FlameFrags",
    "episodes": 12,
    "title": "I Became Powerful on a Hardcore Minecraft Server",
    "ep": 66
   },
   {
    "date": "2025-09-05",
    "pov": "ParrotX2",
    "episodes": 19,
    "title": "The Search for Minecraft's Lost Kingdom",
    "ep": 67
   },
   {
    "date": "2025-09-09",
    "pov": "FlameFrags",
    "episodes": 13,
    "title": "Hunting a Minecraft Player Who Went Missing",
    "ep": 68
   },
   {
    "date": "2025-09-12",
    "pov": "SpokeIsHere",
    "episodes": 13,
    "title": "I Became a Bounty Hunter on the Unstable SMP",
    "ep": 69
   },
   {
    "date": "2025-09-13",
    "pov": "Wemmbu",
    "episodes": 25,
    "title": "I Faked My Death on a Hardcore Minecraft SMP",
    "ep": 70
   },
   {
    "date": "2025-09-20",
    "pov": "Wemmbu",
    "episodes": 26,
    "title": "I Secretly Joined My Enemy's Minecraft Team",
    "ep": 71
   },
   {
    "date": "2025-09-22",
    "pov": "ParrotX2",
    "episodes": 20,
    "title": "The Search for Minecraft's Sunken Empire",
    "ep": 72
   },
   {
    "date": "2025-09-24",
    "pov": "Wemmbu",
    "episodes": 27,
    "title": "How I \"DIED\" on a Hardcore Minecraft SMP",
    "ep": 73
   },
   {
    "date": "2025-09-27",
    "pov": "FlameFrags",
    "episodes": 14,
    "title": "Hunting a Player Who Faked His Death",
    "ep": 74
   },
   {
    "date": "2025-10-06",
    "pov": "Wemmbu",
    "episodes": 28,
    "title": "I Escaped Minecraft's Forgotten Dimension",
    "ep": 75
   },
   {
    "date": "2025-10-07",
    "pov": "FlameFrags",
    "episodes": 15,
    "title": "I Infiltrated Minecraft's Deadliest Faction",
    "ep": 76
   },
   {
    "date": "2025-10-09",
    "pov": "ParrotX2",
    "episodes": 21,
    "title": "The Hunt for Minecraft's Deadliest Vault",
    "ep": 77
   },
   {
    "date": "2025-10-12",
    "pov": "SpokeIsHere",
    "episodes": 14,
    "title": "100% Invisibility Exploit VS Hardcore SMP",
    "ep": 78
   },
   {
    "date": "2025-10-14",
    "pov": "Wemmbu",
    "episodes": 29,
    "title": "This Player Stole My Identity",
    "ep": 79
   },
   {
    "date": "2025-10-18",
    "pov": "FlameFrags",
    "episodes": 16,
    "title": "100 Players VS Minecraft Combat Master",
    "ep": 80
   },
   {
    "date": "2025-10-22",
    "pov": "ParrotX2",
    "episodes": 22,
    "title": "The Search for Wemmbu",
    "ep": 81
   },
   {
    "date": "2025-10-26",
    "pov": "Wemmbu",
    "episodes": 30,
    "title": "I Got Hunted by Minecraft's Smartest Player",
    "ep": 82
   },
   {
    "date": "2025-10-27",
    "pov": "FlameFrags",
    "episodes": 17,
    "title": "Exposing a Player Who Faked His Death",
    "ep": 83
   },
   {
    "date": "2025-10-27",
    "pov": "SpokeIsHere",
    "episodes": 15,
    "title": "I Trapped Secret Bases on the Unstable SMP...",
    "ep": 84
   },
   {
    "date": "2025-11-01",
    "pov": "FlameFrags",
    "episodes": 18,
    "title": "2 VS 1000 Player Minecraft War",
    "ep": 85
   },
   {
    "date": "2025-11-08",
    "pov": "Wemmbu",
    "episodes": 31,
    "title": "2 Minecraft Pros VS 1000 Players",
    "ep": 86
   },
   {
    "date": "2025-11-15",
    "pov": "ParrotX2",
    "episodes": 23,
    "title": "Finding the Tomb of the Minecraft Mafia",
    "ep": 87
   },
   {
    "date": "2025-11-18",
    "pov": "SpokeIsHere",
    "episodes": 16,
    "title": "I Got Hunted by Minecraft's Deadliest Stalkers...",
    "ep": 88
   },
   {
    "date": "2025-11-22",
    "pov": "FlameFrags",
    "episodes": 19,
    "title": "I Got Banished from a Hardcore Minecraft Server",
    "ep": 89
   },
   {
    "date": "2025-11-22",
    "pov": "Wemmbu",
    "episodes": 32,
    "title": "I Became a Prisoner on the Unstable SMP",
    "ep": 90
   },
   {
    "date": "2025-11-28",
    "pov": "ParrotX2",
    "episodes": 24,
    "title": "Unstable SMP: The First King",
    "ep": 91
   },
   {
    "date": "2025-11-29",
    "pov": "FlameFrags",
    "episodes": 20,
    "title": "I Got Hunted on the World's Largest Minecraft Server",
    "ep": 92
   },
   {
    "date": "2025-12-06",
    "pov": "Wemmbu",
    "episodes": 33,
    "title": "Escaping Prison on the Unstable SMP",
    "ep": 93
   },
   {
    "date": "2025-12-08",
    "pov": "SpokeIsHere",
    "episodes": 17,
    "title": "I Almost Got BANNED from the Unstable SMP...",
    "ep": 94
   },
   {
    "date": "2025-12-09",
    "pov": "Wemmbu",
    "episodes": 34,
    "title": "I Got Hunted By the Minecraft LAW",
    "ep": 95
   },
   {
    "date": "2025-12-12",
    "pov": "FlameFrags",
    "episodes": 21,
    "title": "I Secretly Got Trained By My Minecraft Killer",
    "ep": 96
   },
   {
    "date": "2025-12-14",
    "pov": "Wemmbu",
    "episodes": 35,
    "title": "I Joined a PIRATE CIVILIZATION in Minecraft",
    "ep": 97
   },
   {
    "date": "2025-12-19",
    "pov": "SpokeIsHere",
    "episodes": 18,
    "title": "My Best Friend Died on the Unstable SMP",
    "ep": 98
   },
   {
    "date": "2025-12-24",
    "pov": "ParrotX2",
    "episodes": 25,
    "title": "I Ran for King on the Unstable SMP",
    "ep": 99
   },
   {
    "date": "2025-12-26",
    "pov": "FlameFrags",
    "episodes": 22,
    "title": "I Secretly Teamed With My Minecraft Killer",
    "ep": 100
   },
   {
    "date": "2025-12-28",
    "pov": "Wemmbu",
    "episodes": 36,
    "title": "Unstable SMP: The Battle for The Great Sea",
    "ep": 101
   },
   {
    "date": "2026-01-08",
    "pov": "FlameFrags",
    "episodes": 23,
    "title": "I Got Trained By a Minecraft Spear Master",
    "ep": 102
   },
   {
    "date": "2026-01-15",
    "pov": "ParrotX2",
    "episodes": 26,
    "title": "I Survived the Unstable SMP Purge",
    "ep": 103
   },
   {
    "date": "2026-01-20",
    "pov": "FlameFrags",
    "episodes": 24,
    "title": "I Got Trained By the World's Best Minecraft Player",
    "ep": 104
   },
   {
    "date": "2026-01-21",
    "pov": "SpokeIsHere",
    "episodes": 19,
    "title": "Breaking Hardcore Minecraft to Get Revenge",
    "ep": 105
   },
   {
    "date": "2026-01-24",
    "pov": "ParrotX2",
    "episodes": 27,
    "title": "2 Minecraft Pros VS 1000 Hunters",
    "ep": 106
   },
   {
    "date": "2026-01-25",
    "pov": "Wemmbu",
    "episodes": 37,
    "title": "I Became a Minecraft Killer",
    "ep": 107
   },
   {
    "date": "2026-01-31",
    "pov": "Wemmbu",
    "episodes": 38,
    "title": "I Explored the Minecraft Farlands",
    "ep": 108
   },
   {
    "date": "2026-02-02",
    "pov": "FlameFrags",
    "episodes": 25,
    "title": "I Got Trained By a Minecraft TNT Master",
    "ep": 109
   },
   {
    "date": "2026-02-05",
    "pov": "SpokeIsHere",
    "episodes": 20,
    "title": "Minecraft Trapper VS 1000 Players",
    "ep": 110
   },
   {
    "date": "2026-02-07",
    "pov": "Wemmbu",
    "episodes": 39,
    "title": "Minecraft Pro VS 1000 Players",
    "ep": 111
   },
   {
    "date": "2026-02-10",
    "pov": "ParrotX2",
    "episodes": 28,
    "title": "I Became King of the Unstable SMP",
    "ep": 112
   },
   {
    "date": "2026-02-12",
    "pov": "SpokeIsHere",
    "episodes": 21,
    "title": "4 Minecraft Pros VS 2500 Players",
    "ep": 113
   },
   {
    "date": "2026-02-14",
    "pov": "Wemmbu",
    "episodes": 40,
    "title": "Unstable SMP: The LAW",
    "ep": 114
   },
   {
    "date": "2026-02-16",
    "pov": "FlameFrags",
    "episodes": 26,
    "title": "2500 Players VS Minecraft Combat Master",
    "ep": 115
   },
   {
    "date": "2026-02-21",
    "pov": "Wemmbu",
    "episodes": 41,
    "title": "I Joined a 100,000 Player Minecraft Server",
    "ep": 116
   },
   {
    "date": "2026-02-27",
    "pov": "FlameFrags",
    "episodes": 27,
    "title": "I Became a Minecraft Combat Master",
    "ep": 117
   },
   {
    "date": "2026-02-28",
    "pov": "ParrotX2",
    "episodes": 29,
    "title": "100 Days as King of the Unstable SMP",
    "ep": 118
   },
   {
    "date": "2026-03-10",
    "pov": "SpokeIsHere",
    "episodes": 22,
    "title": "Minecraft Trapper VS Elite Bounty Hunters",
    "ep": 119
   },
   {
    "date": "2026-03-14",
    "pov": "FlameFrags",
    "episodes": 28,
    "title": "I Joined the Minecraft LAW",
    "ep": 120
   },
   {
    "date": "2026-03-15",
    "pov": "Wemmbu",
    "episodes": 42,
    "title": "Minecraft Pro VS 1000 Player Civilization",
    "ep": 121
   },
   {
    "date": "2026-03-19",
    "pov": "ParrotX2",
    "episodes": 30,
    "title": "I Exposed a Corrupt Minecraft Civilization",
    "ep": 122
   },
   {
    "date": "2026-03-25",
    "pov": "SpokeIsHere",
    "episodes": 23,
    "title": "Searching for 100 Players Who Went Missing",
    "ep": 123
   },
   {
    "date": "2026-04-08",
    "pov": "FlameFrags",
    "episodes": 29,
    "title": "I Explored the Minecraft Mist",
    "ep": 124
   },
   {
    "date": "2026-04-14",
    "pov": "ParrotX2",
    "episodes": 31,
    "title": "Searching for a Civilization that Doesn't Exist",
    "ep": 125
   },
   {
    "date": "2026-04-28",
    "pov": "SpokeIsHere",
    "episodes": 24,
    "title": "Searching For 1000 Players Who Went Missing",
    "ep": 126
   },
   {
    "date": "2026-04-30",
    "pov": "FlameFrags",
    "episodes": 30,
    "title": "1000 Players Simulate MIST War in Minecraft",
    "ep": 127
   },
   {
    "date": "2026-05-02",
    "pov": "Wemmbu",
    "episodes": 43,
    "title": "I Got Hunted by the World's Deadliest Assassin",
    "ep": 128
   },
   {
    "date": "2026-05-04",
    "pov": "ParrotX2",
    "episodes": 32,
    "title": "I Created the World's Largest Minecraft Army",
    "ep": 129
   },
   {
    "date": "2026-05-08",
    "pov": "SpokeIsHere",
    "episodes": 25,
    "title": "Finding 1000 Players Who Went Missing",
    "ep": 130
   },
   {
    "date": "2026-05-09",
    "pov": "Wemmbu",
    "episodes": 44,
    "title": "Searching For My Friend Who Went Missing",
    "ep": 131
   },
   {
    "date": "2026-05-15",
    "pov": "FlameFrags",
    "episodes": 31,
    "title": "I Joined a 10,000 Player Minecraft Army",
    "ep": 132
   },
   {
    "date": "2026-05-16",
    "pov": "ParrotX2",
    "episodes": 33,
    "title": "Unstable SMP: Civil War",
    "ep": 133
   },
   {
    "date": "2026-05-21",
    "pov": "Wemmbu",
    "episodes": 45,
    "title": "1000 Players Simulate UNDERGROUND Civilization in Minecraft",
    "ep": 134
   },
   {
    "date": "2026-05-25",
    "pov": "SpokeIsHere",
    "episodes": 26,
    "title": "1000 Players Simulate PRISON in Hardcore Minecraft",
    "ep": 135
   },
   {
    "date": "2026-05-30",
    "pov": "Wemmbu",
    "episodes": 46,
    "title": "I Went to WAR on a Hardcore Minecraft SMP",
    "ep": 136
   },
   {
    "date": "2026-06-01",
    "pov": "FlameFrags",
    "episodes": 32,
    "title": "1000 VS 1000 Player Minecraft Civil War",
    "ep": 137
   },
   {
    "date": "2026-06-03",
    "pov": "ParrotX2",
    "episodes": 34,
    "title": "Unstable SMP: Civil War FINALE",
    "ep": 138
   },
   {
    "date": "2026-06-06",
    "pov": "Wemmbu",
    "episodes": 47,
    "title": "1000 Players Simulate THE PURGE in Minecraft",
    "ep": 139
   },
   {
    "date": "2026-06-09",
    "pov": "FlameFrags",
    "episodes": 33,
    "title": "I Became the Strongest on the Unstable SMP",
    "ep": 140
   },
   {
    "date": "2026-06-16",
    "pov": "SpokeIsHere",
    "episodes": 27,
    "title": "1000 Players Simulate HUNGER GAMES in Hardcore Minecraft",
    "ep": 141
   },
   {
    "date": "2026-06-19",
    "pov": "FlameFrags",
    "episodes": 34,
    "title": "I Got Hunted By the World's Deadliest Minecraft Player",
    "ep": 142
   },
   {
    "date": "2026-06-23",
    "pov": "SpokeIsHere",
    "episodes": 28,
    "title": "Unstable SMP: Purgatory",
    "ep": 143
   },
   {
    "date": "2026-07-03",
    "pov": "FlameFrags",
    "episodes": 35,
    "title": "I Got Trained By a Minecraft Combat Master",
    "ep": 144
   },
   {
    "date": "2026-07-21",
    "pov": "FlameFrags",
    "episodes": 36,
    "title": "Minecraft's Best Players Simulate PVP Tournament",
    "ep": 145
   },
   {
    "date": "2026-07-26",
    "pov": "SpokeIsHere",
    "episodes": 29,
    "title": "1000 Players Build END Civilization in Hardcore Minecraft",
    "ep": 146
   },
   {
    "date": "2026-08-12",
    "pov": "ParrotX2",
    "episodes": 35,
    "title": "I Built Minecraft's Most Advanced Civilization",
    "ep": 147
   },
   {
    "date": "2026-08-13",
    "pov": "SpokeIsHere",
    "episodes": 30,
    "title": "I Created Minecraft's Greatest Military",
    "ep": 148
   },
   {
    "date": "2026-08-14",
    "pov": "FlameFrags",
    "episodes": 37,
    "title": "I Exposed Minecraft's \"Strongest\" Player",
    "ep": 149
   },
   {
    "date": "2026-08-22",
    "pov": "Wemmbu",
    "episodes": 48,
    "title": "How I Destroyed an Entire Minecraft Civilization",
    "ep": 150
   },
   {
    "date": "2026-09-06",
    "pov": "ParrotX2",
    "episodes": 36,
    "title": "1000 Players Simulate Mining Prison in Minecraft",
    "ep": 151
   },
   {
    "date": "2026-09-07",
    "pov": "SpokeIsHere",
    "episodes": 31,
    "title": "Exploring Minecraft's Forgotten Dimension",
    "ep": 152
   },
   {
    "date": "2026-09-11",
    "pov": "FlameFrags",
    "episodes": 38,
    "title": "Searching for a Vault that Doesn't Exist",
    "ep": 153
   },
   {
    "date": "2026-09-19",
    "pov": "Wemmbu",
    "episodes": 49,
    "title": "How I Saved the World's Largest Minecraft Server",
    "ep": 154
   },
   {
    "date": "2026-09-20",
    "pov": "SpokeIsHere",
    "episodes": 32,
    "title": "I Created Minecraft's Greatest Empire",
    "ep": 155
   },
   {
    "date": "2026-09-22",
    "pov": "ParrotX2",
    "episodes": 37,
    "title": "Escaping the Minecraft Underworld",
    "ep": 156
   },
   {
    "date": "2026-10-06",
    "pov": "FlameFrags",
    "episodes": 39,
    "title": "Escaping Terminus: The Deadliest Minecraft Prison",
    "ep": 157
   },
   {
    "date": "2026-10-15",
    "pov": "ParrotX2",
    "episodes": 38,
    "title": "1000 Players Simulate End Prison in Minecraft",
    "ep": 158
   },
   {
    "date": "2026-10-23",
    "pov": "SpokeIsHere",
    "episodes": 33,
    "title": "10,000 Players Simulate COLD WAR in Minecraft",
    "ep": 159
   },
   {
    "date": "2026-10-31",
    "pov": "FlameFrags",
    "episodes": 40,
    "title": "10,000 VS 10,000 Player Minecraft War",
    "ep": 160
   },
   {
    "date": "2026-11-02",
    "pov": "ParrotX2",
    "episodes": 39,
    "title": "10,000 Player Minecraft War: Nether VS Overworld",
    "ep": 161
   }
  ]
 },
 "mark": {
  "type": "line",
  "interpolate": "step-after",
  "point": true
 },
 "encoding": {
  "x": {
   "field": "date",
   "type": "temporal",
   "title": null
  },
  "y": {
   "field": "episodes",
   "type": "quantitative",
   "title": "POV episodes so far"
  },
  "color": {
   "field": "pov",
   "type": "nominal",
   "title": "POV",
   "scale": {
    "domain": [
     "ParrotX2",
     "Wemmbu",
     "SpokeIsHere",
     "FlameFrags"
    ],
    "range": [
     "#2e7d32",
     "#1565c0",
     "#6a1b9a",
     "#e65100"
    ]
   }
  },
  "tooltip": [
   {
    "field": "ep",
    "title": "Ep."
   },
   {
    "field": "title",
    "title": "Episode"
   },
   {
    "field": "date",
    "type": "temporal"
   },
   {
    "field": "episodes",
    "title": "Total"
   }
  ]
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Most-seen characters

Number of story episodes each character appears in.

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 450,
 "data": {
  "values": [
   {
    "name": "LettuceK",
    "episodes": 55
   },
   {
    "name": "Eggchan",
    "episodes": 43
   },
   {
    "name": "TheobaldTheBird",
    "episodes": 42
   },
   {
    "name": "JumperWho",
    "episodes": 38
   },
   {
    "name": "Jaden_MAN",
    "episodes": 37
   },
   {
    "name": "FlameFrags",
    "episodes": 36
   },
   {
    "name": "Wemmbu",
    "episodes": 36
   },
   {
    "name": "ParrotX2",
    "episodes": 33
   },
   {
    "name": "Mapicc",
    "episodes": 32
   },
   {
    "name": "Loppezz",
    "episodes": 30
   },
   {
    "name": "Leow0ok",
    "episodes": 28
   },
   {
    "name": "Horace Altman",
    "episodes": 28
   },
   {
    "name": "Lomedy",
    "episodes": 24
   },
   {
    "name": "PrinceZam",
    "episodes": 21
   },
   {
    "name": "SpokeIsHere",
    "episodes": 20
   },
   {
    "name": "Spongs",
    "episodes": 19
   },
   {
    "name": "ClownPierce",
    "episodes": 19
   },
   {
    "name": "Wifies",
    "episodes": 19
   },
   {
    "name": "Boosfer",
    "episodes": 19
   },
   {
    "name": "Derapchu",
    "episodes": 18
   },
   {
    "name": "Wato1876",
    "episodes": 17
   },
   {
    "name": "Yungyx",
    "episodes": 17
   },
   {
    "name": "MinuteTech",
    "episodes": 17
   },
   {
    "name": "Falconu",
    "episodes": 15
   },
   {
    "name": "Fymada",
    "episodes": 15
   }
  ]
 },
 "mark": {
  "type": "bar",
  "tooltip": true,
  "color": "#7e57c2"
 },
 "encoding": {
  "y": {
   "field": "name",
   "type": "nominal",
   "sort": "-x",
   "title": null
  },
  "x": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes"
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Most-visited places

Number of story episodes each place appears in.

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 360,
 "data": {
  "values": [
   {
    "name": "Capital City",
    "episodes": 19
   },
   {
    "name": "Spawn",
    "episodes": 18
   },
   {
    "name": "FlameFrags' Base",
    "episodes": 15
   },
   {
    "name": "BAT Headquarters",
    "episodes": 13
   },
   {
    "name": "Far Lands",
    "episodes": 11
   },
   {
    "name": "Northern Council",
    "episodes": 10
   },
   {
    "name": "Merchant City",
    "episodes": 7
   },
   {
    "name": "Zam Empire",
    "episodes": 7
   },
   {
    "name": "The Great Sea",
    "episodes": 7
   },
   {
    "name": "End Empire",
    "episodes": 7
   },
   {
    "name": "The Amplified",
    "episodes": 6
   },
   {
    "name": "The Underworld",
    "episodes": 5
   },
   {
    "name": "Redstone Town",
    "episodes": 5
   },
   {
    "name": "LAW City",
    "episodes": 4
   },
   {
    "name": "Lomedy's Farm",
    "episodes": 4
   },
   {
    "name": "Proton",
    "episodes": 3
   },
   {
    "name": "The Wheat Kingdom",
    "episodes": 3
   },
   {
    "name": "Wemmbu's Civilization",
    "episodes": 3
   },
   {
    "name": "Purgatory",
    "episodes": 3
   },
   {
    "name": "Far Lands Civilization",
    "episodes": 3
   }
  ]
 },
 "mark": {
  "type": "bar",
  "tooltip": true,
  "color": "#7e57c2"
 },
 "encoding": {
  "y": {
   "field": "name",
   "type": "nominal",
   "sort": "-x",
   "title": null
  },
  "x": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes"
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Factions by episodes

Number of story episodes each faction appears in.

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 324,
 "data": {
  "values": [
   {
    "name": "LAW",
    "episodes": 41
   },
   {
    "name": "Bounty Assassin Team",
    "episodes": 18
   },
   {
    "name": "NULL",
    "episodes": 15
   },
   {
    "name": "The Invisible Mafia",
    "episodes": 13
   },
   {
    "name": "Cindercrest",
    "episodes": 12
   },
   {
    "name": "Pirates",
    "episodes": 10
   },
   {
    "name": "Kingdom of the Caves",
    "episodes": 9
   },
   {
    "name": "Nether Kingdom",
    "episodes": 7
   },
   {
    "name": "JumperWho's Spies",
    "episodes": 5
   },
   {
    "name": "Vanguard",
    "episodes": 4
   },
   {
    "name": "District 13",
    "episodes": 4
   },
   {
    "name": "The Warriors",
    "episodes": 4
   },
   {
    "name": "Wraiths",
    "episodes": 3
   },
   {
    "name": "Spoke Galactic Empire",
    "episodes": 2
   },
   {
    "name": "Soul Keepers",
    "episodes": 2
   },
   {
    "name": "The Avengers",
    "episodes": 2
   },
   {
    "name": "Treasure Hunters",
    "episodes": 1
   },
   {
    "name": "Capitol City Police Force",
    "episodes": 1
   }
  ]
 },
 "mark": {
  "type": "bar",
  "tooltip": true,
  "color": "#7e57c2"
 },
 "encoding": {
  "y": {
   "field": "name",
   "type": "nominal",
   "sort": "-x",
   "title": null
  },
  "x": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes"
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Items and mechanics by episodes

Number of story episodes each mechanic appears in.

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 450,
 "data": {
  "values": [
   {
    "name": "Mace",
    "episodes": 68
   },
   {
    "name": "TNT Minecart",
    "episodes": 54
   },
   {
    "name": "Ender Pearl Stasis Chamber",
    "episodes": 54
   },
   {
    "name": "Invisibility",
    "episodes": 45
   },
   {
    "name": "Orbital Strike Cannon",
    "episodes": 41
   },
   {
    "name": "Totem of Undying",
    "episodes": 24
   },
   {
    "name": "Elytra",
    "episodes": 24
   },
   {
    "name": "Happy Ghast",
    "episodes": 22
   },
   {
    "name": "Trident",
    "episodes": 21
   },
   {
    "name": "Wind Charge",
    "episodes": 21
   },
   {
    "name": "Pearl Cannon",
    "episodes": 20
   },
   {
    "name": "Arrow Cannon",
    "episodes": 19
   },
   {
    "name": "Wolf Summoning Machine",
    "episodes": 16
   },
   {
    "name": "Armour Trims",
    "episodes": 11
   },
   {
    "name": "Exploits",
    "episodes": 11
   },
   {
    "name": "Chunk Ban",
    "episodes": 9
   },
   {
    "name": "Spear",
    "episodes": 9
   },
   {
    "name": "Bomber Plane",
    "episodes": 6
   },
   {
    "name": "Blimp",
    "episodes": 5
   },
   {
    "name": "Fishing Rod Trigger",
    "episodes": 5
   },
   {
    "name": "Orbital Wither Cannon",
    "episodes": 4
   },
   {
    "name": "Orbital Mob Cannon",
    "episodes": 2
   },
   {
    "name": "Wither Bore",
    "episodes": 1
   },
   {
    "name": "Orbital Automatic Pearl Launching Contraption",
    "episodes": 1
   },
   {
    "name": "Windscourge",
    "episodes": 1
   }
  ]
 },
 "mark": {
  "type": "bar",
  "tooltip": true,
  "color": "#7e57c2"
 },
 "encoding": {
  "y": {
   "field": "name",
   "type": "nominal",
   "sort": "-x",
   "title": null
  },
  "x": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes"
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## Who appears when

Episodes per season for the 20 most-seen characters.

```vegalite
{
 "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
 "width": "container",
 "height": 360,
 "data": {
  "values": [
   {
    "name": "LettuceK",
    "season": "Season 1",
    "episodes": 6
   },
   {
    "name": "LettuceK",
    "season": "Season 2",
    "episodes": 37
   },
   {
    "name": "LettuceK",
    "season": "Season 2+",
    "episodes": 12
   },
   {
    "name": "Eggchan",
    "season": "Season 1",
    "episodes": 12
   },
   {
    "name": "Eggchan",
    "season": "Season 2",
    "episodes": 21
   },
   {
    "name": "Eggchan",
    "season": "Season 2+",
    "episodes": 10
   },
   {
    "name": "TheobaldTheBird",
    "season": "Season 1",
    "episodes": 5
   },
   {
    "name": "TheobaldTheBird",
    "season": "Season 2",
    "episodes": 26
   },
   {
    "name": "TheobaldTheBird",
    "season": "Season 2+",
    "episodes": 11
   },
   {
    "name": "JumperWho",
    "season": "Season 1",
    "episodes": 12
   },
   {
    "name": "JumperWho",
    "season": "Season 2",
    "episodes": 17
   },
   {
    "name": "JumperWho",
    "season": "Season 2+",
    "episodes": 9
   },
   {
    "name": "Jaden_MAN",
    "season": "Season 1",
    "episodes": 3
   },
   {
    "name": "Jaden_MAN",
    "season": "Season 2",
    "episodes": 22
   },
   {
    "name": "Jaden_MAN",
    "season": "Season 2+",
    "episodes": 12
   },
   {
    "name": "FlameFrags",
    "season": "Season 1",
    "episodes": 13
   },
   {
    "name": "FlameFrags",
    "season": "Season 2",
    "episodes": 16
   },
   {
    "name": "FlameFrags",
    "season": "Season 2+",
    "episodes": 7
   },
   {
    "name": "Wemmbu",
    "season": "Season 1",
    "episodes": 10
   },
   {
    "name": "Wemmbu",
    "season": "Season 2",
    "episodes": 18
   },
   {
    "name": "Wemmbu",
    "season": "Season 2+",
    "episodes": 8
   },
   {
    "name": "ParrotX2",
    "season": "Season 1",
    "episodes": 10
   },
   {
    "name": "ParrotX2",
    "season": "Season 2",
    "episodes": 17
   },
   {
    "name": "ParrotX2",
    "season": "Season 2+",
    "episodes": 6
   },
   {
    "name": "Mapicc",
    "season": "Season 1",
    "episodes": 9
   },
   {
    "name": "Mapicc",
    "season": "Season 2",
    "episodes": 15
   },
   {
    "name": "Mapicc",
    "season": "Season 2+",
    "episodes": 8
   },
   {
    "name": "Loppezz",
    "season": "Season 1",
    "episodes": 9
   },
   {
    "name": "Loppezz",
    "season": "Season 2",
    "episodes": 21
   },
   {
    "name": "Loppezz",
    "season": "Season 2+",
    "episodes": 0
   },
   {
    "name": "Leow0ok",
    "season": "Season 1",
    "episodes": 7
   },
   {
    "name": "Leow0ok",
    "season": "Season 2",
    "episodes": 21
   },
   {
    "name": "Leow0ok",
    "season": "Season 2+",
    "episodes": 0
   },
   {
    "name": "Horace Altman",
    "season": "Season 1",
    "episodes": 9
   },
   {
    "name": "Horace Altman",
    "season": "Season 2",
    "episodes": 15
   },
   {
    "name": "Horace Altman",
    "season": "Season 2+",
    "episodes": 4
   },
   {
    "name": "Lomedy",
    "season": "Season 1",
    "episodes": 0
   },
   {
    "name": "Lomedy",
    "season": "Season 2",
    "episodes": 14
   },
   {
    "name": "Lomedy",
    "season": "Season 2+",
    "episodes": 10
   },
   {
    "name": "PrinceZam",
    "season": "Season 1",
    "episodes": 10
   },
   {
    "name": "PrinceZam",
    "season": "Season 2",
    "episodes": 11
   },
   {
    "name": "PrinceZam",
    "season": "Season 2+",
    "episodes": 0
   },
   {
    "name": "SpokeIsHere",
    "season": "Season 1",
    "episodes": 7
   },
   {
    "name": "SpokeIsHere",
    "season": "Season 2",
    "episodes": 11
   },
   {
    "name": "SpokeIsHere",
    "season": "Season 2+",
    "episodes": 2
   },
   {
    "name": "Spongs",
    "season": "Season 1",
    "episodes": 5
   },
   {
    "name": "Spongs",
    "season": "Season 2",
    "episodes": 7
   },
   {
    "name": "Spongs",
    "season": "Season 2+",
    "episodes": 7
   },
   {
    "name": "ClownPierce",
    "season": "Season 1",
    "episodes": 10
   },
   {
    "name": "ClownPierce",
    "season": "Season 2",
    "episodes": 4
   },
   {
    "name": "ClownPierce",
    "season": "Season 2+",
    "episodes": 5
   },
   {
    "name": "Wifies",
    "season": "Season 1",
    "episodes": 16
   },
   {
    "name": "Wifies",
    "season": "Season 2",
    "episodes": 3
   },
   {
    "name": "Wifies",
    "season": "Season 2+",
    "episodes": 0
   },
   {
    "name": "Boosfer",
    "season": "Season 1",
    "episodes": 3
   },
   {
    "name": "Boosfer",
    "season": "Season 2",
    "episodes": 16
   },
   {
    "name": "Boosfer",
    "season": "Season 2+",
    "episodes": 0
   },
   {
    "name": "Derapchu",
    "season": "Season 1",
    "episodes": 10
   },
   {
    "name": "Derapchu",
    "season": "Season 2",
    "episodes": 8
   },
   {
    "name": "Derapchu",
    "season": "Season 2+",
    "episodes": 0
   }
  ]
 },
 "mark": {
  "type": "rect",
  "tooltip": true
 },
 "encoding": {
  "y": {
   "field": "name",
   "type": "nominal",
   "sort": [
    "LettuceK",
    "Eggchan",
    "TheobaldTheBird",
    "JumperWho",
    "Jaden_MAN",
    "FlameFrags",
    "Wemmbu",
    "ParrotX2",
    "Mapicc",
    "Loppezz",
    "Leow0ok",
    "Horace Altman",
    "Lomedy",
    "PrinceZam",
    "SpokeIsHere",
    "Spongs",
    "ClownPierce",
    "Wifies",
    "Boosfer",
    "Derapchu"
   ],
   "title": null
  },
  "x": {
   "field": "season",
   "type": "nominal",
   "sort": [
    "Season 1",
    "Season 2",
    "Season 2+"
   ],
   "title": null,
   "axis": {
    "labelAngle": 0,
    "orient": "top"
   }
  },
  "color": {
   "field": "episodes",
   "type": "quantitative",
   "title": "Episodes",
   "scale": {
    "scheme": "purples"
   }
  }
 },
 "config": {
  "font": "Roboto, Helvetica, Arial, sans-serif",
  "axis": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "titleFontWeight": 600
  },
  "legend": {
   "labelFontSize": 13,
   "titleFontSize": 14,
   "symbolSize": 140
  },
  "title": {
   "fontSize": 17,
   "fontWeight": 600
  },
  "text": {
   "fontSize": 13
  }
 }
}
```

## POV totals

| POV | Episodes | Season 1 | Season 2 | Season 2+ | First | Latest |
|---|---|---|---|---|---|---|
| [ParrotX2](../characters/parrotx2.md) | 39 | 11 | 17 | 11 | [Ep. 2](../episodes/season-1/002-this-button-destroys-the-world.md) | [Ep. 161](../episodes/season-2-plus/161-10-000-player-minecraft-war-nether-vs-overworld.md) |
| [Wemmbu](../characters/wemmbu.md) | 49 | 10 | 30 | 9 | [Ep. 3](../episodes/season-1/003-breaking-into-minecrafts-most-illegal-vault.md) | [Ep. 154](../episodes/season-2-plus/154-how-i-saved-the-worlds-largest-minecraft-server.md) |
| [SpokeIsHere](../characters/spokeishere.md) | 33 | 6 | 15 | 12 | [Ep. 1](../episodes/season-1/001-how-to-destroy-the-unstable-smp.md) | [Ep. 159](../episodes/season-2-plus/159-10-000-players-simulate-cold-war-in-minecraft.md) |
| [FlameFrags](../characters/flamefrags.md) | 40 | 0 | 26 | 14 | [Ep. 39](../episodes/season-2/039-i-became-immortal-on-a-hardcore-minecraft-smp.md) | [Ep. 160](../episodes/season-2-plus/160-10-000-vs-10-000-player-minecraft-war.md) |
