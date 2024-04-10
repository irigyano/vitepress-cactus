---
title: tmux Key Bindings
date: 2024-03-25
---

## Pane

L-% : split the window into two panes horizontally

L-" : split the window into two panes vertically

L-x : close pane

L-Arrow : navigation

L(Hold) : resizing

## Window

L-c : create a new window

L-[n/p] : move to the next or previous window

L-[0-9] : move to a specific window by number

L-: : command mode

L + &: Delete current window.

## Session

L-d: detach from the current session

```zsh
tmux ls
tmux a -t <session-name>
```

## Reference

[A beginner's guide to tmux](https://www.redhat.com/sysadmin/introduction-tmux-linux)
