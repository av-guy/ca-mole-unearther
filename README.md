# Mole Unearther

## Overview

This game is a challenge exercise from the CodeAcademy Phaser.JS game development
course. It is a simple game based on the classic whack-a-mole arcade game. Most of
the exercise is really just involves following along with the instructions and
adding functions as necessary.

## Issues

There was an issue with the mole replacement after you successfully hit it. There
is a glitch where, during the post-hit animation, you can just keep pressing the button and
scoring points. This was resolved by adding a conditional statement that ensures the post-hit
animation is complete before the user is able to press the same button again.

## Improvements

Per the challenge, I added another mole location and allowed the player to press the `I` button
to register hits to the target. I also added a feature that reduces the amount of time a mole
is allowed to wait before returning to its hole. This isn't intended to be a difficult game, but
the addition of the timer at least creates a little bit of a difficult curve. It should be noted
that this is not a production ready game or anything, so if you score too high the moles will just
start appearing and disappearing rapidly.