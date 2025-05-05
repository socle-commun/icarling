# 📘 Icarling – Technical Documentation

## Overview

"Icarling" is a whimsical, myth-inspired 2D platformer game built using the [Phaser](https://phaser.io/) framework for the web. The game draws from the myth of Icarus, placing the player in the role of Icarling, a playful sun-child with melting wax wings.

## Tech Stack

- **Game Engine**: Phaser 3
- **Language**: JavaScript / TypeScript
- **Build Tooling**: Vite or Webpack (TBD)
- **Deployment Target**: Web (Desktop and Mobile Browsers)
- **Assets**: Hand-drawn PNGs, Spritesheets, SVGs
- **Audio**: Web Audio API-compatible formats (OGG, MP3)

## Project Structure

```text
/icarling
├── /public              # Static assets
├── /src
│   ├── /scenes          # Game scenes (Boot, Menu, Level1, etc)
│   ├── /sprites         # Player, enemies, effects
│   ├── /ui              # HUD and menus
│   ├── /audio           # Background music, SFX
│   ├── /systems         # Wax mechanic, collisions, etc
│   ├── /utils           # Common helpers
│   └── main.ts          # Game entry point
├── /docs                # Game design docs, concept art
├── index.html
├── vite.config.ts
└── readme.md
```

## Core Systems

### Wax Wing Mechanic

- **waxMeter**: drains while gliding, recharges while grounded or in shade
- **thresholds**: triggers visual/audio warnings when critical
- **gameplay impact**: disables glide when empty, triggers fall sequence

### Wind & Heat System

- Wind zones apply directional force to player
- Heat zones increase wax melt rate

### Scene Manager

Handles transitions between:

- Boot Scene → Menu Scene → Game Scene → Cutscene → Victory / Retry

### Physics

- Arcade physics with custom gravity zones
- Collision with platforms, ruins, hazards
