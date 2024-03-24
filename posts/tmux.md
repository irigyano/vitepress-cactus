---
title: tmux Key Bindings
date: 2024-03-25
---

Leader Key: Ctrl + Space

## Pane

L + % - Split the window into two panes horizontally.

L + " - Split the window into two panes vertically.

L + x - Close pane.

L + Arrow - Navigation.

## Window

L + c - Create a new window.

L + [np] - Move to the next or previous window.

L + [0-9] - Move to a specific window by number.

L + : - Enter the command line to type commands. Tab completion is available.

L + &: Delete current window.

## Session

L + d: Detach from the current session.

```zsh
tmux ls
tmux a -t <session-name>
```

## Reference

[A beginner's guide to tmux](https://www.redhat.com/sysadmin/introduction-tmux-linux)
